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
        this.$watch(() => this.$route.params,() => {
                this.getType();
            }
        )
    }
}
</script>


<template>
    <section v-if="store.type">
        <div class="container">
            <h1 class="mt-5 mb-3">type: {{ store.type.name }}</h1>
            <div class="row my-4 gy-4" v-if="store.type.records.length>=1">
                <div class="col col-md-4" v-for="record in store.type.records">
                    <ProjectCard :record="record" />
                </div>
            </div>
            <p v-else>nessun progetto trovato</p>
        </div>
    </section>
</template>


<style scoped></style>