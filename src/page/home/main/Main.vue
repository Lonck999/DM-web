<template>
    <div class="main">
        <div class="content">
            <div class="main-img">
                <p class="join">立即加入 !</p>
                <p>查詢<span>門診時間、 看診進度、預約掛號、居家照護視訊診療</span>。</p>
                <img :src="talk" alt="talk">
            </div>
            <p class="join">德美診所官方LINE帳號</p>
            <div>3</div>
        </div>
    </div>
</template>

<script setup lang='ts'>
import talk from '../../../assets/talk.png'
</script>

<style scoped lang="scss">
/* SCSS規範：寬度>佈局>間距>文字>位置>動畫>其他 */
.main {
    width: 100%;
}
</style>