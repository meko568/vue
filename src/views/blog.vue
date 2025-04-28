<template>
    <div class="blog">
        <h1 v-format>{{ name }}</h1>
        <p>{{ des }}</p>
        <div class="row">
            <div class="col-lg-8">
                <posts-comp
                    v-for="post in posts"
                    :key="post.id"
                    :view="post.view"
                    :title="post.title"
                    :author="post.author"
                    :catogery="post.catogery"
                    :data="post.data"
                    :content="post.content"
                />
            </div>
            <div class="col-lg-4">
                <sidebar-comp />
            </div>
        </div>
    </div>
</template>

<script>
import sidebarComp from "@/components/sidebar.vue";
import postsComp from "@/components/postcomp.vue";
import json from "../../MOCK_DATA.json";
export default {
    name: "BlogComp",
    components: {
        sidebarComp,
        postsComp,
    },
    data: function () {
        return {
            name: "Blog",
            des: "This a Blog Page",
            posts: json,
        };
    },
};
</script>
