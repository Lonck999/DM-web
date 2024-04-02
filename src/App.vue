<template>
    <div class="container">
        <Header />
        <main class="content">123</main>
        <Footer />
    </div>
</template>
    
<script setup lang='ts'>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

</script>
    
<style lang="scss" scoped>
/* SCSS規範：寬度>佈局>間距>文字>位置>動畫>其他 */
.container {
    width: 100%;

    main{
        background-image: url('./assets/背景.png');
    }
}
</style>