<script setup>
import { onMounted, reactive } from 'vue'
import { FormKit } from '@formkit/vue';
import { useRouter, useRoute } from 'vue-router'
import Heading from '../../components/UI/HedingTe.vue';
import RouterLink from '../../components/UI/RouterLink.vue';
import EtapaService from '../../services/EtapaService';

const router = useRouter()
const route = useRoute()

const { id } = route.params

const FormData = reactive ({

})

onMounted(() => {
    EtapaService.obtenerEt(id)
        .then(({data}) => {
            Object.assign(FormData, data)
        })
        .catch(error => console.log(error))

})

//actualizar
const handleSunmit = (data) => {
    EtapaService.actualizarEtapa(id, data)
        .then(() => router.push({name: 'lista-etapas'}))
        .catch(error => console.log(error))

    }


</script>


<template>
    <div>
        <div class="flex justify-end">
            <RouterLink to="lista-etapas">
                Volver
            </RouterLink>
        </div>
    </div>
    <div>
        <Heading> Editar Etapas</Heading>
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
                    label="Nombre de la etapa" 
                    name="nombre"
                    placeholder="Escribe El Nombre De La Etapa"   
                    validation="required"
                    :validation-messages="{required:'El nombre de la Etapa es Obligatorio'}"
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