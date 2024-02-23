<script setup>
    import { onMounted, reactive } from 'vue';
    import {FormKit} from '@formkit/vue';
    import { useRouter, useRoute } from 'vue-router';
    import RouterLink from '../../components/UI/RouterLink.vue';
    import Heading from '../../components/UI/HedingTe.vue';
    import ActividadService from '../../services/ActividadService.js'


    const router = useRouter()
    const route = useRoute()

    const { id } = route.params
    console.log(id)

    const formData = reactive({
        Nombre: '',
        Apellido:'',
        Email:'',
        Telefono:'',
        Empresa:'',
        Puesto:'',

    }) 
    onMounted(() => {
        ActividadService.obtenerActividades(id)
        .then(({data}) => {
            Object.assign(formData, data)
           /*  
           //////forma una
           formData.Nombre = data.Nombre,
            formData.Apellido = data.Apellido
            formData.Email = data.Email
            formData.Telefono = data.Telefono
            formData.Empresa = data.Empresa
            formData.Puesto = data.Puesto */
            //console.log(data)
        })
            .catch(error => console.log('hubo un error'))
    }) 
    const handleSunmit = (data) => {
        ActividadService.actualizarActividad(id, data)
            .then(() => router.push({name: 'detalle-actividades'}))
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
                submit-label="Guardar Cambios"
                incomplete-message="Error al enviar, campos incompletos"
                @submit="handleSunmit"
                :value="formData"
            >
                

                <FormKit
                    type="select"
                    name="nombreLider"
                    label="Nombre del lider"
                    placeholder="Nombre del lider"
                    :options="['Daniel Velasco', 'Jessica', 'Fernando Martinez']"
                    validation="required"
                    :validation-messages="{required:'El nombre del lider es Obligatorio'}"
                    v-model="formData.nombreLider"
                    />
                <FormKit
                    type="text"
                    label="Nombre del consultor" 
                    name="nombreConsultor"
                    placeholder="Nombre del consultor"   
                    validation="required"
                    :validation-messages="{required:'El Nombre del consultor es Obligatorio'}"
                    v-model="formData.nombreConsultor"
                    />
                <FormKit
                    type="date"
                    value="2024-01-01"
                    name="fecha"
                    label="Fecha"
                    validation="required"
                    validation-visibility="live"
                    v-model="formData.fecha"
                    />
                <FormKit
                    type="select"
                    name="proyecto"
                    label="Nombre del proyecto"
                    placeholder="Selecciona el proyecto"
                    :options="['IO4585', 'IO58779', 'IO789']"
                    validation="required"
                    :validation-messages="{required:'El nombre del proyecto es Obligatorio'}"
                    v-model="formData.proyecto"
                    />
                

                <FormKit
                    type="text"
                    label="nombre de la actividad" 
                    name="actividad"
                    placeholder="Escribe el nombre de la actividad"   
                    validation="required"
                    :validation-messages="{required:'El nombre de la actividad es obligatorio'}"
                    v-model="formData.actividad"
                    />

                <FormKit
                    type="select"
                    name="fases"
                    label="Fase"
                    placeholder="Selecciona la fase del proyecto"
                    :options="['Analisis', 'Desarrollo', 'QA','Liberacion' ]"
                    validation="required"
                    :validation-messages="{required:'El nombre de la es Obligatorio'}"
                    v-model="formData.fases"
                />

                <FormKit
                    type="select"
                    name="etapa"
                    label="Etapa"
                    placeholder="Selecciona la Etapa del proyecto"
                    :options="['LEVANTAMIENTO DE REQUERIMIENTO', 'DESARROLLO DE CODIGO NUEVO o MEJORA', 'AMBIENTACION','PRUEBAS TECNICAS' ]"
                    validation="required"
                    :validation-messages="{required:'El nombre de la es Obligatorio'}"
                    v-model="formData.etapa"
                />

                <FormKit
                    name="descripcion"
                    type="textarea"
                    label="Descripcion de la actividad"
                    validation="required|length:15,500"
                    v-model="formData.descripcion"
                    />

                <FormKit
                    type="number"
                    help="I will always parse as a float"
                    label="Horas dedicadas a la actividad"
                    number
                    name="sugar_float"
                    value="0"
                    v-model="formData.sugar_float"
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