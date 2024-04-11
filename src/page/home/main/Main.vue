<template>
    <div class="main" id="callNumber">
        <div class="content">
            <div class="main-img">
                <p class="join">{{ join }}</p>
                <p class="serve">
                    {{contentText.inquire}}<span>{{contentText.time}}</span>、<span>{{contentText.now}}</span>、<span>{{contentText.pre}}</span><br><span class="blank">{{contentText.blank }}</span>、<span
                        class="blank"> {{contentText.home}} </span> 。
                </p>
                <img :src="talk" alt="talk">
            </div>
            <p class="title">{{line}}</p>
            <div class="line">
                <img :src="QRCode2">
                <div>
                    <a href="https://page.line.me/rpi1156z?openQrModal=true">
                        <p>{{qrCode}}</p>
                    </a>
                </div>
                <div>
                    <router-link to="/qrcode">
                        <p>{{app}}</p>
                    </router-link>
                </div>
                <div>
                    <a href="">
                        <p>{{web}}</p>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang='ts'>
import talk from '../../../assets/talk.png'
import QRCode2 from '../../../assets/QRCode2.png'
import { ref,reactive } from 'vue';

const join = ref('立即加入 !')
const contentText = reactive({
    inquire: '查詢 ',
    time: '門診時間',
    now: '看診進度',
    pre: '預',
    blank: '約掛號',
    home: '居家照護視訊診療',
})
const line = ref('德美診所官方LINE帳號')
const qrCode = ref('掃描條碼或點我加入！')
const app = ref('APP預約掛號')
const web = ref('網路預約掛號')

</script>

<style scoped lang="scss">
/* SCSS規範：寬度>佈局>間距>文字>位置>動畫>其他 */
.main {
    width: 100%;

    .content {
        max-width: 1920px;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 7% auto 0;
        container-type: inline-size;

        .main-img {
            display: flex;
            justify-content: center;
            align-items: center;

            .join {
                color: #464646;
                font-size: 2.5cqw;
                font-weight: 700;
                letter-spacing: 0.05em;
                animation: fadein-left 2.5s;
            }

            .serve {
                animation: fadein-top 2.5s;
            }

            p {
                color: #464646;
                font-size: 0.95cqw;
                font-weight: 600;

                span {
                    display: inline-block;
                    color: #00908c;
                }

                .blank {
                    margin-top: 3%;
                }
            }

            img {
                width: 11%;
                margin: -4% 0 0 1%;
                animation: fadein-right 2s, shake 2s ease-in-out 2.5s infinite;
            }
        }

        .title {
            color: #464646;
            font-size: 2.5cqw;
            font-weight: 700;
            letter-spacing: 0.05em;
            margin-left: 31.4%;
            margin-bottom: 1.5%;
            animation: fadein-left 2.5s;
        }

        .line {
            background: rgba(217, 217, 217, 0.4);
            width: 34%;
            border-radius: 10px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-left: 31.4%;
            padding: 0.7% 1.5%;
            animation: fadein-buttom 2.5s;

            img {
                width: 10.8%;
            }

            div {
                background: linear-gradient(180deg, #4fd9d5 51.03%, #2bc0bc 51.04%);
                border: none;
                border-radius: 5px;
                padding: 2.8% 2.2%;

                a {
                    text-decoration: none;
                    color: #f5f5f5;
                    font-size: 0.9cqw;
                    font-weight: 700;
                    letter-spacing: 0.1em;
                    text-shadow: -2px 2px 2px rgba(0, 0, 0, 0.25);
                    filter: drop-shadow(0px 15px 25px rgba(0, 0, 0, 0.2));
                }
            }
        }
    }

    @keyframes fadein-top {
        0% {
            opacity: 0;
            transform: translateY(-60px);
        }

        100% {
            opacity: 1;
            transform: translateY(0px);
        }
    }

    @keyframes fadein-right {
        0% {
            opacity: 0;
            transform: translateX(100px);
        }

        100% {
            opacity: 1;
            transform: translateX(0px);
        }
    }

    @keyframes fadein-left {
        0% {
            opacity: 0;
            transform: translateX(-100px);
        }

        100% {
            opacity: 1;
            transform: translateX(0px);
        }
    }

    @keyframes fadein-buttom {
        0% {
            opacity: 0;
            transform: translateY(60px);
        }

        100% {
            opacity: 1;
            transform: translateY(0px);
        }
    }

    @keyframes shake {

        10%,
        90% {
            transform-origin: 0% 100%;
            transform: rotateZ(-2deg);
        }

        20%,
        80% {
            transform-origin: 0% 100%;
            transform: rotateZ(2deg);
        }

        30%,
        70% {
            transform-origin: 0% 100%;
            transform: rotateZ(-4deg);
        }

        40%,
        60% {
            transform-origin: 0% 100%;
            transform: rotateZ(4deg);
        }

        50% {
            transform-origin: 0% 100%;
            transform: rotateZ(-4deg);
        }
    }

}
</style>