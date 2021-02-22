<template>
    <div>
        <div class="wrapper bg-secondary">
            <div class="content">
                <slot />
            </div>
        </div>
        <footer class="footer">
            <nav class="navbar navbar-main navbar-expand-lg navbar-dark justify-content-between navbar-footer">
                <ul class="navbar-nav navbar-nav-hover flex-row align-items-center">
                    <li class="nav-item">
                        <a href="/" class="nav-link" role="button">
                            <span class="nav-link-inner-text">📺 Start</span>
                        </a>
                    </li>
                </ul>
                <div class="time text-center">
                    <span class="time text-uppercase">19:10 PM</span>
                </div>
            </nav>
        </footer>
    </div>
</template>

<style scoped>
.wrapper {
    min-height: 100vh;
}
.content {
    overflow: auto;
    padding-bottom: 38px;
}
.footer {
    position: relative;
    margin-top: -38px;
    clear:both;
}
</style>

<script>
</script>
