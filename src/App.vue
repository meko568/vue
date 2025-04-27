<template>
    <div id="app">
        <nav>
            <ul class="nav">
                <li class="nav-item">
                    <router-link class="nav-link" to="/">Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/about"
                        >About</router-link
                    >
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/help">Help</router-link>
                </li>
            </ul>
        </nav>
        <router-view />
    </div>
</template>
