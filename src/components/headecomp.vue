<template>
    <nav>
        <ul class="nav justify-content-center">
            <li class="nav-item">
                <router-link class="nav-link" to="/" exact>Home</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/about">About</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/help" replace
                    >Help</router-link
                >
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/contact"
                    >Contact</router-link
                >
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/blog">Blog</router-link>
            </li>
        </ul>
    </nav>
</template>
<script>
export default {
    name: "HeaderComp",
};
</script>
