<script>
import axios from 'axios';
import { store } from './store';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';

export default{
  name:'App',
  data() {
    return {
      apiBaseUrl: 'http://127.0.0.1:8000/api',
      apiUrls: {
        records: '/records'
      },
      store
    }
  },
  components: {
    AppHeader,
    AppMain,
    AppFooter
  },
  methods: {
    getRecords() {
      axios.get(this.apiBaseUrl + this.apiUrls.records)
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
  <AppHeader />
  <AppMain />
  <AppFooter />
</template>


<style lang="scss">

</style>
