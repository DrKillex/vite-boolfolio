<!-- pagina lead -->
<script>
import axios from 'axios';
import {store} from '../store';
export default {
    name: "AppLead",
    data() {
        return {
            store,
            status:false,
            isError: false,
            errorMessage: null,
            formData: {
                author: '',
                content: ''
            }
        }
    },
    methods: {
        // chiamata per invio di dati (messaggio di contatto) a backend 
        sendLead() {
            this.status=false
            const data = {
                author: this.formData.author,
                content: this.formData.content,
            };
            this.formData.author=''
            this.formData.content=''
            axios.post(this.store.apiBaseUrl+this.store.apiUrls.leads, data)
                .then((response) => {
                    if(response.status === 201){
                        // variabile di stato per visualizzazione messaggio conferma
                        this.status=true
                    } 
                })
                .catch((error) => {
                    console.log(error)
                });
        },
    },
}
</script>


<template>
    <section>
        <div class="container">
            <h1>contact us</h1>
            <p v-if="status">messaggio inviato con successo</p>
            <!-- form di invio dati -->
            <form @submit.prevent="sendLead">
                <div class="mb-3">
                    <label for="author" class="form-label">Autore</label>
                    <input type="text" class="form-control" id="author" v-model="formData.author">
                </div>
                <div class="mb-3">
                    <label for="content" class="form-label">Testo</label>
                    <textarea class="form-control" id="content" rows="3" v-model="formData.content"></textarea>
                </div>
                <button class="btn btn-primary">send</button>
            </form>
            <!-- /form di invio dati -->
        </div>
    </section>
</template>