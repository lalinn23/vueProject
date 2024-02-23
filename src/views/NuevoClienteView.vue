<script setup>
    import {FormKit} from '@formkit/vue';
    import { useRouter} from 'vue-router';
    import ClienteService from '../services/ClienteService.js'
    import RouterLink from '../components/UI/RouterLink.vue';
    import Heading from '../components/UI/HedingTe.vue';

    const router = useRouter()

    defineProps({
        titulo: {
            type: String
        }
    })

    const handleSunmit = (data) => {
        data.estado = 1
        ClienteService.agregarCliente(data)
            .then(respuesta => {
                console.log(respuesta)
                //redireccionar
                router.push({ name: 'inicio'})
            })
            .catch(error => console.log(error))
        }
</script>


<template>
    <div>
        <div class="flex justify-end">
            <RouterLink to="inicio">
                Volver
            </RouterLink>
        </div>
    </div>
    <div>
        <Heading>{{ titulo }}</Heading>
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
                    type="text"
                    label="Nombre" 
                    name="Nombre"
                    placeholder="Escribe tu Nombre"   
                    validation="required"
                    :validation-messages="{required:'El nombre de usuario es Obligatorio'}"
                />

                <FormKit
                    type="text"
                    label="Apellido" 
                    name="Apellido"
                    placeholder="Escribe tu Apellido"   
                    validation="required"
                    :validation-messages="{required:'El Apellido de usuario es Obligatorio'}"
                />

                <FormKit
                    type="text"
                    label="Email" 
                    name="Email"
                    placeholder="Escribe tu Email"   
                    validation="required|email"
                    :validation-messages="{required:'El correo es obligatorio', email:'Ingresa un correo valido'}"
                />

                
                <FormKit
                    type="text"
                    label="Telefono" 
                    name="Telefono"
                    placeholder="Telefono: xxx-xxx-xxxx"   
                    validation="?matches:/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/"
                    :validation-messages="{ matches: 'El formato no es valido'}"
                />

                <FormKit
                    type="text"
                    label="Empresa" 
                    name="Empresa"
                    placeholder="Escribe el nombre de la empresa"   
                />

                <FormKit
                    type="text"
                    label="Puesto"
                    name="Puesto" 
                    placeholder="Escribe el Puesto" 
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


