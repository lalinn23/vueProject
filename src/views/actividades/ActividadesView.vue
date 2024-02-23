<script setup>
    import { onMounted, ref, computed } from 'vue';
    import RouterLink from '../../components/UI/RouterLink.vue';
    import Heading from '../../components/UI/HedingTe.vue';
    import ClienteService from '../../services/ActividadService.js'
    import Actividad from '../../components/Actividad.vue';
    import ActividadService from '../../services/ActividadService.js';

    const actividades = ref([])
    
    
    onMounted(() => {
       ClienteService.obtenerActividad()
        .then(({data}) => actividades.value = data)
        .catch(error => console.log ('ubo un error'))


})

/* validamos si existen actividades  */
    const existeActividades = computed(() => {
        return actividades.value.length > 0

    })

    /* para eliminar un registro */
    const eliminarActividad = id =>{
        console.log(id)
         ActividadService.eliminarActividad(id)
            .then(() => {
                actividades.value = actividades.value.filter(actividades => actividades.id !== id)
            })
            .catch(error => console.log(error)) 
    }
</script>


<template>
    <div>
        <div class="flex justify-end">
            <Router-link to="crear-actividad">
                crear actividad

            </Router-link>
        </div>
            <Heading>lista de atividades</Heading>
       
        <div v-if="existeActividades" class="flow-root mx-auto  mt-10 p-5 bg-white shadow">
            <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="min-w-full py-2 align-middle sm:px-6 lg:px-8">
                    <table class="min-w-full divide-y divide-gray-300">
                        <thead>
                        <tr>
                            <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">Lider</th>
                            <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">Consultor</th>
                            <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">Fecha</th>
                            <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">Proyecto</th>
                            <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">Actividad</th>
                            <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">Fase</th>
                            <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">Etapa</th>
                            <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">Descripcion</th>
                            <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">Horas</th>
                            <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">Acciones</th>

                        </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-200 bg-white">

                            <!-- aqui llenara el cuerpo de la tabla -->
                            <Actividad 
                                v-for="actividad in actividades"
                                :key="actividad.id"
                                :actividadA="actividad"
                                @eliminar-actividad="eliminarActividad"
                            />
                                
                        </tbody>
                            
                    </table>
                </div>
            </div>
        </div>

        
        <p v-else class="text-center mt-10"> No ahi clientes</p>

        
    </div>
  
</template>
