<!-- componente header -->
<template>
    <header class="py-4">
        <div class="container">
            <div class="d-flex justify-content-between">
                <div class="logo">Blog</div>
                <!-- barra di navigazione -->
                <nav>
                    <ul class="list-unstyled m-0 p-0 gap-2 d-flex">
                        <li>
                            <router-link :to="{ name: 'home' }" class="nav-link">
                                Home
                            </router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'about' }" class="nav-link">
                                About
                            </router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'lead' }" class="nav-link">
                                contact
                            </router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'projects' }" class="nav-link">
                                projects
                            </router-link>
                        </li>
                        <!-- select dei type -->
                        <li>
                            <TypesList />
                        </li>
                        <!-- /select dei type -->
                        <!-- select delle technologies -->
                        <li>
                            <TechnologiesList />
                        </li>
                        <!-- /select delle technologies -->
                    </ul>
                </nav>
                <!-- /barra di navigazione -->
            </div>
        </div>
    </header>
</template>
 
<script>
import TechnologiesList from './TechnologiesList.vue';
import TypesList from './TypesList.vue';
export default {
    name: 'AppHeader',
    components: {
        TypesList,
        TechnologiesList
    }
}
</script>
 
<style></style>