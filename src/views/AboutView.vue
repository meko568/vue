<template>
    <div class="about">
        <h1>{{ name }}</h1>
        <p>{{ des }}</p>
        <welcomeComp></welcomeComp>
    </div>
</template>

<script>
// @ is an alias to /src
import welcomeComp from "@/components/welcomeComponent.vue";

export default {
    name: "AboutView",
    components: {
        welcomeComp,
    },
    data: function () {
        return {
            name: "About",
            des: "This is an About Page",
        };
    },
};
</script>
