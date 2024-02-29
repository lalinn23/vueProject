<script setup>
    import { onMounted, ref, computed } from 'vue'; 
    import ExternosService from '../../services/ExternosService'
    import RouterLink from '../../components/UI/RouterLink.vue';
    import Heading from '../../components/UI/HedingTe.vue';
    import Externos from '../../components/Externos.vue';

    const externos = ref([])

    onMounted(() => {
        ExternosService.obtenerExternos()
            .then(({data}) => externos.value = data)
            .catch(error => console.log('ubo un error'))

    })

    const existenExternos = computed(() => {
        return externos.value.length > 0
    })

    /* eliminar  */

    const eliminarExterno = id =>{
        ExternosService.eliminarExterno(id)
            .then(() => {
                externos.value = externos.value.filter(externo => externo.id !== id)
            })
            .catch(error => console.log(error))
    }

</script>
 
<template>
    <div>
        <div class="flex justify-end">
            <RouterLink to="crear-clientes">
                Agregar Cliente
            </RouterLink>
        </div>
        <Heading>Lista de Clientes</Heading>
        <!-- <Heading>{{ titulo }}</Heading> -->

      
        <div v-if="existenExternos" class="flow-root mx-auto  mt-10 p-5 bg-white shadow">
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
                            <Externos 
                                v-for="externo in externos"
                                :key="externo.id"
                                :externo="externo"
                                @eliminar-externo ="eliminarExterno"
                            />
                               
                        </tbody>
                            
                    </table>
                </div>
            </div>
        </div>

        
        <p v-else class="text-center mt-10"> No ahi clientes</p>

        
    </div>
  
</template>
 
