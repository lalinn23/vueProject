
<script setup>
    import { onMounted, ref, computed } from 'vue'; 
    import EtapaService from '../../services/EtapaService'
    import RouterLink from '../../components/UI/RouterLink.vue';
    import Heading from '../../components/UI/HedingTe.vue';
    import Etapas from '../../components/Etapas.vue';

    const etapas = ref([])

    onMounted(() => {
        EtapaService.obtenerEtapas()
            .then(({data}) => etapas.value = data)
            .catch(error => console.log('ubo un error'))

    })

    const existenEtapas = computed(() => {
        return etapas.value.length > 0
    })

    /* eliminar  */

    const eliminarEtapa = id =>{
        EtapaService.eliminarEtapa(id)
            .then(() => {
                etapas.value = etapas.value.filter(etapa => etapa.id !== id)
            })
            .catch(error => console.log(error))
    }

</script>
 
<template>
    <div>
        <div class="flex justify-end">
            <RouterLink to="crear-etapas">
                Agregar Etapa
            </RouterLink>
        </div>
        <Heading>Lista de Etapas</Heading>
        <!-- <Heading>{{ titulo }}</Heading> -->

      
        <div v-if="existenEtapas" class="flow-root mx-auto  mt-10 p-5 bg-white shadow">
            <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="min-w-full py-2 align-middle sm:px-6 lg:px-8">
                    <table class="min-w-full divide-y divide-gray-300">
                        <thead>
                        <tr>
                            <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">Nombre</th>
                            <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">Fecha</th>
                            <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">Acciones</th>
                        </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-200 bg-white">
                            <Etapas 
                                v-for="etapa in etapas"
                                :key="etapa.id"
                                :etapa="etapa"
                                @eliminar-etapa ="eliminarEtapa"
                            />
                               
                        </tbody>
                            
                    </table>
                </div>
            </div>
        </div>

        
        <p v-else class="text-center mt-10"> No ahi Etapas</p>

        
    </div>
  
</template>
 
