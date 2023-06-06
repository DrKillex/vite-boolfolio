<template>
    <main>
        <div class="container">
            <div class="row my-4 gy-4">
                <!-- ciclo di card per progetto -->
                <div class="col col-md-4" v-for="record in store.records">
                    <!-- componente card di progetto singolo -->
                    <ProjectCard :record="record"/>
                    <!-- /componente card di progetto singolo -->
                </div>
                <!-- /ciclo di card per progetto -->
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