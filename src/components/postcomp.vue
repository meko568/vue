<template>
    <div class="post">
        <div class="title">{{ content | upper }}</div>
        <div class="title">{{ catogery }}</div>
        <div class="title">{{ data }}</div>
        <div class="title">{{ view }}</div>
        <div class="title">{{ author }}</div>
    </div>
</template>
<script>
export default {
    name: "postsComp",
    props: ["view", "title", "data", "catogery", "author", "content"],
    filters: {
        m: function () {},
    },
};
</script>
