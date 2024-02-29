<script setup>
import { FormKit } from '@formkit/vue';
import { useRouter } from 'vue-router'
import Heading from '../../components/UI/HedingTe.vue';
import RouterLink from '../../components/UI/RouterLink.vue';
import FaseService  from '../../services/FaseService';

const router = useRouter()


const handleSunmit = (data) => {
    FaseService.agregarFase(data)
        .then(respuesta => {
            console.log(respuesta)
            router.push({ name: 'lista-fases' })

        })
        .catch(error => console.log(error))

    }
</script>


<template>
    <div>
        <div class="flex justify-end">
            <RouterLink to="lista-fases">
                Volver
            </RouterLink>
        </div>
    </div>
    <div>
        <Heading> Agregar Fases</Heading>
    </div>

    <div class="mx-auto mt-10 bg-white shadow">
        <div class="mx-auto md:w-2/3 py-20 px-6">
            <FormKit 
                type="form"
                submit-label="Agregar Fases"
                incomplete-message="Error al enviar, campos incompletos"
                @submit="handleSunmit"
                
            >
                <FormKit
                    type="text"
                    label="Nombre de la Fase" 
                    name="nombre"
                    placeholder="Escribe El Nombre De La Fase"   
                    validation="required"
                    :validation-messages="{required:'El nombre de la Fase es Obligatorio'}"
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