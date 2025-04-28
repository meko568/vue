<template>
    <div class="home" id="home">
        <i class="fas fa-home home" @click="scale($event)"></i>
        <h1>{{ name }}</h1>
        <h1>{{ des }}</h1>
    </div>
</template>
<script>
// @ is an alias to /src
import "@/js/project.js";
import "@/scss/main.css";
export default {
    name: "HomeView",
    components: {},
    data: function () {
        return {
            name: "Home",
            des: "This is a Home Page",
        };
    },
    methods: {
        scale: function (event) {
            event.target.classList.add("scale");
            setTimeout(() => {
                event.target.classList.remove("scale");
            }, 300);
        },
    },
};
</script>
