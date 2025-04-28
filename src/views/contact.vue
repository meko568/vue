<template>
    <div class="contact">
        <h1>{{ name }}</h1>
        <p>{{ des }}</p>
    </div>
</template>

<script>
export default {
    name: "contactComp",
    data: function () {
        return {
            name: "Contact",
            des: "This is a Contact Page",
        };
    },
};
import "@fortawesome/fontawesome-free/css/all.css";
</script>
