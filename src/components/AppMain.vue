<template>
    <main>
        <div class="container">
            <div class="row my-4 gy-4">
                <div class="col col-md-4" v-for="record in store.records">
                    <ProjectCard :record="record"/>
                </div>
            </div>
        </div>
    </main>
</template>
 
 
<script>
import { store } from '../store';
import ProjectCard from './ProjectCard.vue';
export default {
    name: 'AppMain',
    data() {
        return {
            store
        }
    },
    components: {
    ProjectCard,
},
}
</script>
 
<style></style>