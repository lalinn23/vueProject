
<script setup>
    import { onMounted, ref, computed } from 'vue'; 
    import FaseService from '../../services/FaseService'
    import RouterLink from '../../components/UI/RouterLink.vue';
    import Heading from '../../components/UI/HedingTe.vue';
    import Fas from '../../components/Fas.vue'
    

    const fases = ref([])

    onMounted(() => {
        FaseService.obtenerFases()
            .then(({data}) => fases.value = data)
            .catch(error => console.log('ubo un error'))
    })
  
    const existenFases = computed(() => {
        return fases.value.length > 0
    })

    /* eliminar  */

    const eliminarFase = id =>{
        FaseService.eliminarFase(id)
            .then(() => {
                fases.value = fases.value.filter(fase => fase.id !== id)
            })
            .catch(error => console.log(error))
    }

</script>
 
<template>
    <div>
        <div class="flex justify-end">
            <RouterLink to="crear-fases">
                Agregar Fase
            </RouterLink>
        </div>
        <Heading>Lista de Fases</Heading>
        <!-- <Heading>{{ titulo }}</Heading> -->

      
        <div v-if="existenFases" class="flow-root mx-auto  mt-10 p-5 bg-white shadow">
            <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="min-w-full py-2 align-middle sm:px-6 lg:px-8">
                    <table class="min-w-full divide-y divide-gray-300">
                        <thead>
                        <tr>
                            <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">Nombre</th>
                            <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">Acciones</th>
                        </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-200 bg-white">
                            <Fas 
                                v-for="fase in fases"
                                :key="fase.id"
                                :fase="fase"
                                @eliminar-fase ="eliminarFase"
                            />
                               
                        </tbody>
                            
                    </table>
                </div>
            </div>
        </div>

        
        <p v-else class="text-center mt-10"> No ahi Fases</p>

        
    </div>
  
</template>
 
