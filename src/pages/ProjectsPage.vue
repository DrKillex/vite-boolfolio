<script>
import axios from 'axios';
import { store } from '../store';
import ProjectCard from '../components/ProjectCard.vue';

export default {
    name: 'App',
    data() {
        return {
            store,
        }
    },
    components: {
        ProjectCard,
    },
    methods: {
        getRecords() {
            axios.get(this.store.apiBaseUrl + this.store.apiUrls.records)
                .then((response) => {
                    this.store.records = response.data.results;
                    console.log(this.store.records)
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    },
    created() {
        this.getRecords();
    }
}
</script>

<template>
    <section>
        <main>
            <div class="container">
                <div class="row my-4 gy-4">
                    <div class="col col-md-4" v-for="record in store.records">
                        <ProjectCard :record="record" />
                    </div>
                </div>
            </div>
        </main>
    </section>
</template>


<style lang="scss"></style>
