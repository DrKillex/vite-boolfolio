<script>
import axios from 'axios';
import {store} from '../store';
export default {
    name: 'TypesList',
    data() {
        return {
            store,
            currentType: '',
        }
    },
    methods: {
        getTypes() {
            axios.get(this.store.apiBaseUrl+this.store.apiUrls.types)
                .then((response) => {
                    console.log(response);
                    this.store.types = response.data.results;

                })
                .catch((error) => {
                    console.log(error);
                })
        },
        changePage(){
            this.$router.push({name: 'type', params:{slug: this.currentType}});
        }
    },
    created(){
        this.getTypes();
    }
}
</script>
<template>
    <select class="form-select" v-if="store.types.length > 0" @change="changePage" v-model="currentType">
        <option :value="item.slug" v-for="item in store.types">{{ item.name }}</option>
    </select>
</template>