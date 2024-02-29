<script setup>
import { onMounted, reactive } from 'vue'
import { FormKit } from '@formkit/vue';
import { useRouter, useRoute } from 'vue-router'
import Heading from '../../components/UI/HedingTe.vue';
import RouterLink from '../../components/UI/RouterLink.vue';
import ExternosService from '@/services/ExternosService';

const router = useRouter()
const route = useRoute()

const { id } = route.params

const FormData = reactive ({

})

onMounted(() => {
    ExternosService.obtenerExterno(id)
        .then(({data}) => {
            Object.assign(FormData, data)
        })
        .catch(error => console.log(error))

})

//actualizar
const handleSunmit = (data) => {
    ExternosService.actualizarExterno(id, data)
        .then(() => router.push({name: 'lista-clientes'}))
        .catch(error => console.log(error))

    }


</script>


<template>
    <div>
        <div class="flex justify-end">
            <RouterLink to="lista-clientes">
                Volver
            </RouterLink>
        </div>
    </div>
    <div>
        <Heading> Editar Cliente</Heading>
    </div>

    <div class="mx-auto mt-10 bg-white shadow">
        <div class="mx-auto md:w-2/3 py-20 px-6">
            <FormKit 
                type="form"
                submit-label="Guardar Cambios"
                incomplete-message="Error al enviar, campos incompletos"
                @submit="handleSunmit"
                :value="FormData"
                
            >
                <FormKit
                    type="text"
                    label="Nombre del Cliente" 
                    name="nombre"
                    placeholder="Escribe tu Nombre del Cliente"   
                    validation="required"
                    :validation-messages="{required:'El nombre de cliente es Obligatorio'}"
                    v-model="FormData.nombre"
                />

                <FormKit
                    type="date"
                    value="2024-01-01"
                    name="date"
                    validation="required"
                    v-model="FormData.date"
                    />

                

            </FormKit>
        </div>
    </div>
  
</template>

<style>
    .formkit-wrapper {
        max-width: 100%;
    }
</style>