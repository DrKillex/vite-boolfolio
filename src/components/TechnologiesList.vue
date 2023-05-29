<script>
import axios from 'axios';
import {store} from '../store';
export default {
    name: 'TypesList',
    data() {
        return {
            store,
            currentTechnology: '',
        }
    },
    methods: {
        getTechnologies() {
            axios.get(this.store.apiBaseUrl+this.store.apiUrls.technologies)
                .then((response) => {
                    console.log(response);
                    this.store.technologies = response.data.results;

                })
                .catch((error) => {
                    console.log(error);
                })
        },
        changePage(){
            this.$router.push({name: 'technology', params:{slug: this.currentTechnology}});
        }
    },
    created(){
        this.getTechnologies();
    }
}
</script>
<template>
    <select class="form-select" v-if="store.types.length > 0" @change="changePage" v-model="currentTechnology">
        <option :value="item.slug" v-for="item in store.technologies">{{ item.name }}</option>
    </select>
</template>