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
        let path = localStorage.getItem('path')
        if(path) {
            localStorage.removeItem('path')
            this.$router.push(`/${path}`)
        }
        this.updateTitle()
    },
    methods: {
        updateTitle() {
            document.title = this.$router.currentRoute.meta.title || 'Welcome to ATOM Tech Indonesia'
        }
    }
}
</script>
