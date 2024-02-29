<script setup>

import { FormKit } from '@formkit/vue';
import { useRouter } from 'vue-router'
import Heading from '../../components/UI/HedingTe.vue';
import RouterLink from '../../components/UI/RouterLink.vue';
import EtapaService  from '../../services/EtapaService.js';

const router = useRouter()


const handleSunmit = (data) => {
    EtapaService.agregarEtapa(data)
        .then(respuesta => {
            console.log(respuesta)
            router.push({ name: 'lista-etapas' })

        })
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
        <Heading> Agregar Etapa</Heading>
    </div>

    <div class="mx-auto mt-10 bg-white shadow">
        <div class="mx-auto md:w-2/3 py-20 px-6">
            <FormKit 
                type="form"
                submit-label="Agregar Etapa"
                incomplete-message="Error al enviar, campos incompletos"
                @submit="handleSunmit"
                
            >
                <FormKit
                    type="text"
                    label="Nombre de la etapa" 
                    name="nombre"
                    placeholder="Escribe El Nombre De La Etapa"   
                    validation="required"
                    :validation-messages="{required:'El nombre de la Etapa es Obligatorio'}"
                />

                <FormKit
                    type="date"
                    value="2024-01-01"
                    name="date"
                    validation="required"
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