<script>
import axios from 'axios';
import { store } from '../store';
import ProjectCard from '../components/ProjectCard.vue';

export default {
    name: 'App',
    data() {
        return {
            store,
            showButton: true,
            currentPage:1,
        }
    },
    components: {
        ProjectCard,
    },
    methods: {
        // chiamata a api per tutti i progetti e relativi types e technologies
        getRecords() {
            axios.get(this.store.apiBaseUrl + this.store.apiUrls.records, {
                params: {
                    page: this.currentPage
                }
            })
                .then((response) => {
                    const results = response.data.results.data ?? response.data.results;
                    const isNextAvaiable = response.data.results.next_page_url ?? null;
                    this.store.records = [...this.store.records, ...results];
                    console.log(this.store.records)
                    if (!isNextAvaiable) {
                        this.showButton = false;
                    }
                })
                .catch((error) => {
                    console.log(error);
                })
        },
        // funzione "load more"
        nextPage() {
            this.currentPage += 1;
            this.getRecords();
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
                    <div class="text-center my-5" v-if="showButton">
                        <button class="btn btn-primary" @click.prevent="nextPage">More</button>
                    </div>
                </div>
            </div>
        </main>
    </section>
</template>


<style lang="scss"></style>
