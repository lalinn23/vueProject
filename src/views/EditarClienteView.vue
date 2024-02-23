<script setup>
    import { onMounted, reactive } from 'vue';
    import {FormKit} from '@formkit/vue';
    import { useRouter, useRoute} from 'vue-router'
    import ClienteService from '../services/ClienteService.js'
    import RouterLink from '../components/UI/RouterLink.vue';
    import Heading from '../components/UI/HedingTe.vue';

    const router = useRouter()
    const route = useRoute()
/*     const clientes = ref([]);
 */    /* para obtener los registros */
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
        ClienteService.obtenerCliente(id)
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



    defineProps({
        titulo: {
            type: String
        }
    })

    /* para actualizar el boton */
    const handleSunmit = (data) => {
        ClienteService.actualizarCliente(id, data)
            .then(() => router.push({name: 'inicio'}))
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
                submit-label="Guardar cambios"
                incomplete-message="Error al enviar, campos incompletos"
                @submit="handleSunmit"
                :value="formData"
                
            >
                <FormKit
                    type="text"
                    label="Nombre" 
                    name="Nombre"
                    placeholder="Escribe tu Nombre"   
                    validation="required"
                    :validation-messages="{required:'El nombre de usuario es Obligatorio' }"
                    v-model="formData.Nombre"
                    
                />

                <FormKit
                    type="text"
                    label="Apellido" 
                    name="Apellido"
                    placeholder="Escribe tu Apellido"   
                    validation="required"
                    :validation-messages="{required:'El Apellido de usuario es Obligatorio'}"
                    v-model="formData.Apellido"
                />

                <FormKit
                    type="text"
                    label="Email" 
                    name="Email"
                    placeholder="Escribe tu Email"   
                    validation="required|email"
                    :validation-messages="{required:'El correo es obligatorio', email:'Ingresa un correo valido'}"
                    v-model="formData.Email"
                />

                
                <FormKit
                    type="text"
                    label="Telefono" 
                    name="Telefono"
                    placeholder="Telefono: xxx-xxx-xxxx"   
                    validation="?matches:/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/"
                    :validation-messages="{ matches: 'El formato no es valido'}"
                    v-model="formData.Telefono"
                />

                <FormKit
                    type="text"
                    label="Empresa" 
                    name="Empresa"
                    placeholder="Escribe el nombre de la empresa"   
                    v-model="formData.Empresa"
                />

                <FormKit
                    type="text"
                    label="Puesto"
                    name="Puesto" 
                    placeholder="Escribe el Puesto" 
                    v-model="formData.Puesto"
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


