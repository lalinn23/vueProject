<script setup>
    import {FormKit} from '@formkit/vue';
    import { useRouter } from 'vue-router';
    import RouterLink from '../../components/UI/RouterLink.vue';
    import Heading from '../../components/UI/HedingTe.vue';
    import ActividadService from '../../services/ActividadService.js'

    const router = useRouter()


    const handleSunmit = (data) => {
        ActividadService.agregarActividad(data)
            .then(respuesta => {
                console.log(respuesta)

                router.push({ name: 'detalle-actividades' })
            })
            .catch(error => console.log(error))
    }

</script>

<template>
    <div>
        <div class="flex justify-end">
            <Router-link to="detalle-actividades">
                Regresar

            </Router-link>
        </div>
            <Heading>DETALLE DE LA ACTIVIDAD</Heading>
    </div>

    <div class="mx-auto mt-10 bg-white shadow">
        <div class="mx-auto md:w-2/3 py-20 px-6">
            <FormKit 
                type="form"
                submit-label="Agregar"
                incomplete-message="Error al enviar, campos incompletos"
                @submit="handleSunmit"
            >
                

                <FormKit
                    type="select"
                    name="nombreLider"
                    label="Nombre del lider"
                    placeholder="Nombre del lider"
                    :options="['Daniel Velasco', 'Jessica', 'Fernando Martinez']"
                    validation="required"
                    :validation-messages="{required:'El nombre del lider es Obligatorio'}"
                />
                <FormKit
                    type="text"
                    label="Nombre del consultor" 
                    name="nombreConsultor"
                    placeholder="Nombre del consultor"   
                    validation="required"
                    :validation-messages="{required:'El Nombre del consultor es Obligatorio'}"
                />
                <FormKit
                    type="date"
                    value="2024-01-01"
                    name="fecha"
                    label="Fecha"
                    validation="required"
                    validation-visibility="live"
                />
                <FormKit
                    type="select"
                    name="proyecto"
                    label="Nombre del proyecto"
                    placeholder="Selecciona el proyecto"
                    :options="['IO4585', 'IO58779', 'IO789']"
                    validation="required"
                    :validation-messages="{required:'El nombre del proyecto es Obligatorio'}"
                />
                

                <FormKit
                    type="text"
                    label="nombre de la actividad" 
                    name="actividad"
                    placeholder="Escribe el nombre de la actividad"   
                    validation="required"
                    :validation-messages="{required:'El nombre de la actividad es obligatorio'}"
                />

                <FormKit
                    type="select"
                    name="fases"
                    label="Fase"
                    placeholder="Selecciona la fase del proyecto"
                    :options="['Analisis', 'Desarrollo', 'QA','Liberacion' ]"
                    validation="required"
                    :validation-messages="{required:'El nombre de la es Obligatorio'}"
                />

                <FormKit
                    type="select"
                    name="etapa"
                    label="Etapa"
                    placeholder="Selecciona la Etapa del proyecto"
                    :options="['LEVANTAMIENTO DE REQUERIMIENTO', 'DESARROLLO DE CODIGO NUEVO o MEJORA', 'AMBIENTACION','PRUEBAS TECNICAS' ]"
                    validation="required"
                    :validation-messages="{required:'El nombre de la es Obligatorio'}"
                />

                <FormKit
                    name="descripcion"
                    type="textarea"
                    label="Descripcion de la actividad"
                    validation="required|length:15,500"
                    />

                <FormKit
                    type="number"
                    help="I will always parse as a float"
                    label="Horas dedicadas a la actividad"
                    number
                    name="sugar_float"
                    value="0"
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