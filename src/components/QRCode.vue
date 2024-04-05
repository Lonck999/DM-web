<template>
    <div class="QRCode">
        <div class="content">
            <h1>A P P 預 約 掛 號</h1>
            <p>歡迎多加下載使用</p>
            <div class="download">
                <div class="android">
                    <a href="https://play.google.com/store/apps/details?id=com.dl.dlar_dm&hl=it&gl=US">
                        <img class="version" :src="android" alt="android">
                    </a>
                    <p>Android用戶</p>
                    <img class="qrcodeimg" :src="androidQRCode" alt="">
                </div>
                <div class="ios">
                    <a href="https://play.google.com/store/apps/details?id=com.dl.dlar_dm&hl=it&gl=US">
                        <img class="version" :src="ios" alt="ios">
                    </a>
                    <p>IOS用戶</p>
                    <img class="qrcodeimg" :src="iosQRCode" alt="">
                </div>
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
.QRCode {
    width: 100%;
    background-image: url('../assets/背景5.png');
    background-size: cover;

    .content {
            max-width: 1920px;
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 11% 0 8% 0;
            margin: 0 auto;
            container-type: inline-size;
    
            h1 {
                color: #464646;
                margin-bottom: 6%;
                font-size: 2.2cqw;
                font-weight: 600;
            }
    
            >p {
                color: #464646;
                margin-bottom: 4%;
                font-size: 1.5cqw;
                font-weight: 600;
            }
    
            .download {
                width: 100%;
                display: flex;
                justify-content: center;
                text-align: center;

                .android{
                    margin-left: 10%;
                }

                .ios{
                    margin-right: 10%;
                }

                .android,
                .ios {
                    flex: 1;
                }
                
                .version {
                    width: 40%;
                }
    
                p {
                    color: #464646;
                    font-size: 1.2cqw;
                    font-weight: 600;
                    margin: 4.5% 0;
                }
    
                .qrcodeimg {
                    width: 35%;
                }
            }
        }
}

</style>