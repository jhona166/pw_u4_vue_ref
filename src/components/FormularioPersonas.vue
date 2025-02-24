<template>
    <div class="form-container">
        <h2>Formulario de Personas</h2>
        <div class="formulario">
            <div class="formulario-atributos">
                <p for="id">ID:</p>
                <input id="id" type="text" v-model="persona.id" placeholder="Ingrese su id">
                <p for="nombre">Nombre:</p>
                <input id="nombre" type="text" v-model="persona.nombre" placeholder="Ingrese su nombre">

            </div>
            <div class="formulario-atributos">
                <p for="apellido">Apellido:</p>
                <input id="apellido" type="text" v-model="persona.apellido" placeholder="Ingrese su apellido">
                <p for="fechaNacimiento">Fecha Nacimiento:</p>
                <input id="fechaNacimiento" type="datetime" v-model="persona.fechaNacimiento" placeholder="Ingrese su fecha de nacimiento">
            </div>
            <div class="formulario-atributos">
                <button class="btn-C" @click="buscarPersona">Consultar</button>
              
                <button class="btn-C" @click="guardarPersona">Guardar</button>
                <button class="btn-C" @click="eliminarPersona">Eliminar</button>
              
                <button class="btn-C" @click="actualizarPersona">Actualizar</button>
                <button class="btn-C" @click="actualizarParcialPersona">Actualizar Parcial</button>
            </div>

        </div>
    </div>


</template>

<script>
import { obtenerPorIdFachada,insertarFachada,eliminarFachada,actualizarFachada,actualizarParcialFachada} from '@/client/PersonaClient';

export default {
    data(){
        return{
            persona:{
                id:'',
                nombre:'',
                apellido:'', 
                fechaNacimiento:''
            }
        }
    },

    methods:{
        async buscarPersona(){
            console.log('Mando al mounted AQUI');
            const persona = await obtenerPorIdFachada(this.persona.id);
            console.log('Persona', persona);
            this.persona.nombre = persona.nombre;
            this.persona.apellido = persona.apellido;
            this.persona.fechaNacimiento = persona.fechaNacimiento.split("T")[0];
            //this.fecha = data.fechaNacimiento.split("T")[0]; // Extrae solo YYYY-MM-DD
        },
        async guardarPersona(){
            const bodyPersona = {
                nombre: this.persona.nombre,
                apellido: this.persona.apellido,
                
                fechaNacimiento: this.persona.fechaNacimiento+"T00:00:00",
            }; 
            await insertarFachada(bodyPersona);
            alert(`Persona insertada exitosamente:
                -Nombre:${this.nombre}
                -Apellido:${this.apellido}
                -Fecha Nacimiento:${this.fechaNacimiento}
            `);


        },
        async eliminarPersona() {
            await eliminarFachada(this.persona.id);
        },
        async actualizarPersona(){
            await actualizarFachada(this.persona.id);
        },
        async actualizarParcialPersona(){
            const bodyPersona = {};
            if (this.nombre) bodyPersona.nombre = this.nombre;
    

    await actualizarParcialFachada(this.persona.id, bodyPersona);
    alert("Persona actualizada exitosamente");
        }

    }, 
    mounted(){
        console.log('Se monto en la pag antes de lla mar a la aqui');
        obtenerPorIdFachada(this.persona.id);
    }
}
</script>

<style>
.form-container{
    display:flex;
    flex-direction: column;
    background: rgb(242, 238, 234);
    max-width: 600px;
    margin:10px auto;
    padding: 30px;
    border-radius:10px;
    box-shadow: 0px 5px 12px rgba(0,0,0,0.6);
}
h2{
    color:#4a4c4e;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size:19px;
    text-align: left;
}
.formulario{
    width:100%;
    text-align: left;
}
.formulario-atributos{
    display: flex;
    flex-direction:column;
    margin-bottom:2px;
}
p{
    font-weight: bold;
    margin-bottom:1px;
    color:#666;

}
input{
    padding:12px;
    border: 1px solid #bbb;
    border-radius:12px;
    font-size:1rem;
    transition: border-color 0.3s ease;

    
}
input:focus{
    border-color:rgb(44, 18, 195);
    outline:none;
}
.btn-C {
    background: #0056b3;
    color: white;
    border: none;
    padding: 12px;
    font-size: 1rem;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 15px;
    transition: background 0.3s ease;
}
.btn-C:hover {
    background: #003f7f;
}
</style>