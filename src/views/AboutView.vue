<template>
    <div class="about">
        <h1>This is an about page</h1>
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
};
</script>
