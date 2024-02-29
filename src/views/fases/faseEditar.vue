<script setup>
import { onMounted, reactive } from 'vue'
import { FormKit } from '@formkit/vue';
import { useRouter, useRoute } from 'vue-router'
import Heading from '../../components/UI/HedingTe.vue';
import RouterLink from '../../components/UI/RouterLink.vue';
import FaseService from '../../services/FaseService';

const router = useRouter()
const route = useRoute()

const { id } = route.params

const FormData = reactive ({

})

onMounted(() => {
    FaseService.obtenerFa(id)
        .then(({data}) => {
            Object.assign(FormData, data)
        })
        .catch(error => console.log(error))

})

//actualizar
const handleSunmit = (data) => {
    FaseService.actualizarFase(id, data)
        .then(() => router.push({name: 'lista-fases'}))
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
        <Heading> Editar Fases</Heading>
    </div>

    <div class="mx-auto mt-10 bg-white shadow">
        <div class="mx-auto md:w-2/3 py-20 px-6">
          <FormKit 
              type="form"
              submit-label="Agregar Fase"
              incomplete-message="Error al enviar, campos incompletos"
              @submit="handleSunmit"
              :value="FormData"
              
          >
              <FormKit
                  type="text"
                  label="Nombre de la fase" 
                  name="nombre"
                  placeholder="Escribe el Nombre de la fase"   
                  validation="required"
                  :validation-messages="{required:'El nombre de proyecto es Obligatorio'}"
                  v-model="FormData.nombre"
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