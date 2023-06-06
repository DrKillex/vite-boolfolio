<script>
import axios from 'axios';
import { store } from '../store';
import ProjectCard from '../components/ProjectCard.vue';
export default {
    name: "TypePage",
    components: {
        ProjectCard
    },
    data() {
        return {
            store,
        }
    },
    methods: {
        // chiamata api per specifico type e relativi progetti
        getType() {
            axios.get(this.store.apiBaseUrl+this.store.apiUrls.types+'/'+this.$route.params.slug)
                .then((response) => {
                    this.store.type = response.data.results;
                }).catch((error) => {
                    console.log(error);
                    if (error.response.status === 404) {
                        this.$router.push({ name: 'not-found' });
                    }
                })
        }
    },
    created() {
        this.getType();
        // monitora il metodo getType per aggiornare la view di conseguenza
        this.$watch(() => this.$route.params,() => {
                this.getType();
            }
        )
    }
}
</script>


<template>
    <!-- se store.type è popolato -->
    <section v-if="store.type">
        <div class="container">
            <h1 class="mt-5 mb-3">type: {{ store.type.name }}</h1>
            <!-- se store.type ha almeno un progetto -->
            <div class="row my-4 gy-4" v-if="store.type.records.length>=1">
                <div class="col col-md-4" v-for="record in store.type.records">
                    <ProjectCard :record="record" />
                </div>
            </div>
            <!-- se store.type non ha progetti -->
            <p v-else>nessun progetto trovato</p>
        </div>
    </section>
</template>


<style scoped></style>