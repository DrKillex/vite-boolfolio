<script>
import axios from 'axios';
import { store } from '../store';
export default {
    name: "ProjectPage",
    data() {
        return {
            store,
            isError: false,
            errorMessage: null,
        }
    },
    methods: {
        getRecord() {
            console.log(this.$route.params.slug);
            axios.get(this.store.apiBaseUrl + this.store.apiUrls.records + "/" + this.$route.params.slug)
                .then((response) => {                   
                    this.store.record = response.data.results;
                })
                .catch((error) => {
                    console.log(error);
                    if (error.response.status === 404) {
                        this.$router.push({ name: 'not-found' });
                    }
                    this.store.isError = true;
                    this.store.errorMessage = error.message;
                })
        },
        goTo(where, who){
            this.$router.push({name: where, params:{slug: who}});
        }
    },
    created() {
        this.getRecord();
    }

}
</script>


<template>
    <section v-if="store.record">
        <div class="container">
            <h1 class="mt-5 mb-3">{{ store.record.title }}</h1>
            <p>creation date: {{ store.record.creation_date }}</p>
            <p v-if="store.record.type" role="button" @click="goTo('type', store.record.type.slug)">type: <span class="badge bg-primary ms-4">{{ store.record.type.name }}</span></p>
            <div v-if="store.record.technologies.length > 0" class="d-flex">
                <span>technologies: </span>
                <ul>
                    <li class="badge bg-success me-2" role="button" v-for="technology in store.record.technologies"  @click="goTo('technology', technology.slug)">{{ technology.name }}</li>
                </ul>
            </div>
            <p v-if="store.record.record_description" class="card-text">description: {{ store.record.record_description }}</p>
            <p>completed: {{ store.record.completed ? '✔' : '❌'  }}</p>
            <img v-if="store.record.image" :src="store.record.image" alt="">
        </div>
    </section>
    <section v-if="isError">
        <div class="container">
            <p>{{ errorMessage }}</p>
        </div>
    </section>
</template>


<style scoped></style>