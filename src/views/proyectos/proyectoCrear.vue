<script setup>
import { FormKit } from '@formkit/vue';
import { useRouter } from 'vue-router'
import Heading from '../../components/UI/HedingTe.vue';
import RouterLink from '../../components/UI/RouterLink.vue';
import ProjectoService from '../../services/ProyectoService.js'

const router = useRouter()


const handleSunmit = (data) => {
  ProjectoService.agregarProyecto(data)
    .then(respuesta => {
      console.log(respuesta)
      router.push({ name: 'lista-proyectos'})
    })
    .catch(error => console.log(error))
}

</script>

<template>
  <div>
      <div class="flex justify-end">
          <RouterLink to="lista-proyectos">
              Volver
          </RouterLink>
      </div>
  </div>
  <div>
      <Heading> Agregar Proyecto</Heading>
  </div>

  <div class="mx-auto mt-10 bg-white shadow">
      <div class="mx-auto md:w-2/3 py-20 px-6">
          <FormKit 
              type="form"
              submit-label="Agregar proyecto"
              incomplete-message="Error al enviar, campos incompletos"
              @submit="handleSunmit"
              
          >
              <FormKit
                  type="text"
                  label="Nombre del proyecto" 
                  name="nombreP"
                  placeholder="Escribe el Nombre del Proyecto"   
                  validation="required"
                  :validation-messages="{required:'El nombre de proyecto es Obligatorio'}"
              />

              <FormKit
                  type="date"
                  value="2024-01-01"
                  name="date"
                  validation="required"
                  />

              <FormKit
                  type="text"
                  label="Nombre del cliente" 
                  name="nombreC"
                  placeholder="Escribe tu Nombre del Cliente"   
                  validation="required"
                  :validation-messages="{required:'El nombre de cliente es Obligatorio'}"
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