<template>
    <div class="content">
        <Main />
        <CallNumber />
    </div>
</template>

<script setup lang='ts'>
import Main from './main/Main.vue'
import CallNumber from './callNumber/CallNumber.vue';
</script>

<style scoped lang="scss">
/* SCSS規範：寬度>佈局>間距>文字>位置>動畫>其他 */

.content {
    width: 100%;
    background-image: url('../../assets/背景.png');
    background-size: cover;
    margin: 0 auto;
    padding: 4% 0 0 0;
}
</style>