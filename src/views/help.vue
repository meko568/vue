<template>
    <div class="help">
        <h1>{{ name }}</h1>
        <p>{{ des }}</p>
    </div>
</template>
<script>
export default {
    name: "helpComp",
    data: function () {
        return {
            name: "Help",
            des: "This is a Help Page",
        };
    },
};
</script>
