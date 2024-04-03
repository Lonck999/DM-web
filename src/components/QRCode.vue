<template>
    <div class="content">
        <h1>A P P 預 約 掛 號</h1>
                    <p>歡迎多加下載使用</p>
        <div>
            <div class="android">
                <a href="https://play.google.com/store/apps/details?id=com.dl.dlar_dm&hl=it&gl=US">
                    <img :src="android" alt="android">
                </a>
                <p>Android</p>
                <img :src="androidQRCode" alt="">
            </div>
        </div>
    </div>
</template>
    
<script setup lang='ts'>
// 引入Andorid
import android from '../assets/Google play.png';
// 引入IOS
import ios from '../assets/App store.png';
// Andorid QRCode
import androidQRCode from '../assets/Andorid 用戶.png';
// IOS QRCode
import iosQRCode from '../assets/IOS 用戶.png';

</script>
    
<style scoped lang="scss">
/* SCSS規範：寬度>佈局>間距>文字>位置>動畫>其他 */
.content {
    max-width: 1920px;
    width: 100%;
    background-image: url('../assets/背景5.png');
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 11% 0 8% 0;
    container-type: inline-size;

    h1 {
        color: #464646;
        margin-bottom: 8%;
        font-size: 2.2cqw;
        font-weight: 600;
    }

    div {
        text-align: center;

    }
}
</style>