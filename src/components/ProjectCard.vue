<template>
    <div class="card">
        <img v-if="record.image" :src="record.image" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">{{ record.title }}</h5>
            <p v-if="record.record_description" class="card-text">{{ record.record_description.substring(0, 150) + '...' }}</p>
            <p v-if="record.type">{{ record.type.name }}</p>
            <div v-if="record.technologies">
                <ul>
                    <li v-for="technology in record.technologies">{{ technology.name }}</li>
                </ul>
            </div>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
</template>
 
 
<script>
export default {
    name: 'ProjectCard',
    props: {
        record: Object
    }
}
</script>
 
<style></style>