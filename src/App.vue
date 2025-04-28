<template>
    <div id="app" class="container text-center">
        <header-comp />
        <router-view />
    </div>
</template>
<script>
import HeaderComp from "@/components/headecomp.vue";
export default {
    name: "App",
    components: {
        HeaderComp,
    },
};
</script>
