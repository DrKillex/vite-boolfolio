<template>
    <header class="py-4">
        <div class="container">
            <div class="d-flex justify-content-between">
                <div class="logo">Blog</div>
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
                            <router-link :to="{ name: 'projects' }" class="nav-link">
                                projects
                            </router-link>
                        </li>
                        <li>
                            <TypesList />
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
</template>
 
<script>
import TypesList from './TypesList.vue';
export default {
    name: 'AppHeader',
    components: {
        TypesList
    }
}
</script>
 
<style></style>