<template>
    <layout>
        <router-view />
    </layout>
</template>

<style scoped>
</style>

<script>
import layout from './components/shared/layout'

export default {
    components: {
        layout
    },
    watch: {
        $route(to, from) {
            this.updateTitle()
        }
    },
    mounted() {
        this.updateTitle()
    },
    methods: {
        updateTitle() {
            document.title = this.$router.currentRoute.meta.title || 'Welcome to ATOM Tech Indonesia'
        }
    }
}
</script>
