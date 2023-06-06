<script>
import axios from 'axios';
import { store } from '../store';
import ProjectCard from '../components/ProjectCard.vue';
export default {
    name: "TechnologyPage",
    components: {
        ProjectCard
    },
    data() {
        return {
            store,
        }
    },
    methods: {
        // chiamata api per specifica technology e relativi progetti
        getTechnology() {
            axios.get(this.store.apiBaseUrl+this.store.apiUrls.technologies+'/'+this.$route.params.slug)
                .then((response) => {
                    this.store.technology = response.data.results;
                }).catch((error) => {
                    console.log(error);
                    if (error.response.status === 404) {
                        this.$router.push({ name: 'not-found' });
                    }
                })
        }
    },
    created() {
        this.getTechnology();
        // monitora il metodo getTechnology per aggiornare la view di conseguenza
        this.$watch(() => this.$route.params,() => {
                this.getTechnology();
            }
        )
    }
}
</script>


<template>
    <section v-if="store.technology">
        <div class="container">
            <h1 class="mt-5 mb-3">type: {{ store.technology.name }}</h1>
            <div class="row my-4 gy-4" v-if="store.technology.records.length>=1">
                <div class="col col-md-4" v-for="record in store.technology.records">
                    <ProjectCard :record="record" />
                </div>
            </div>
            <p v-else>nessun progetto trovato</p>
        </div>
    </section>
</template>


<style scoped></style>