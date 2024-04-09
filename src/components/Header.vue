<template>
    <div class="header">
        <div class="content">
            <router-link to="/home">
                <img :src="logo" alt="logo">
            </router-link>
            <ul>
                <li v-for="(menu, index) in menus" :key="index">
                    <router-link :to="menu.href" v-if="menu.isText">
                        <p>{{ menu.content }}</p>
                    </router-link>
                    <a :href="menu.href" target="_blank" v-else>
                        <img :src="menu.content" alt="">
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
// 引入logo
import logo from '../assets/DM Logo(big).png';

const menus = reactive([
    {
        href: '#callNumber',
        isText: true,
        content: '叫號進度'
    },
    {
        href: '#clinicTime',
        isText: true,
        content: '門診時間'
    },
    {
        href: '#medicalTeam',
        isText: true,
        content: '醫療團隊'
    },
    {
        href: '#clinicEnvironment',
        isText: true,
        content: '診所環境'
    },
    {
        href: '#contactUs',
        isText: true,
        content: '聯絡我們'
    },
    {
        href: '#registrationQuery',
        isText: true,
        content: '掛號查詢'
    },
    {
        href: 'https://www.facebook.com/dermai.clinic/?locale=zh_TW',
        isText: false,
        content: '/facebook.png'
    },
    {
        href: 'https://lin.ee/AY002Fz',
        isText: false,
        content: '/Line.png'
    }
])
</script>

<style scoped lang="scss">
/* SCSS規範：寬度>佈局>間距>文字>位置>動畫>其他 */
.header {
    width: 100%;

    .content {
        max-width: 1920px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 auto -4%;
        position: relative;
        left: 0;
        top: 0;
        z-index: 1;
        container-type: inline-size;

        img {
            flex: 1;
            width: 22%;
            margin-left: 7.8%;
        }

        ul {
            flex: 2;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            gap: 0 10%;
            margin-right: 7.8%;

            li {

                a {
                    text-decoration: none;

                    p {
                        color: #464646;
                        font-weight: 600;
                        font-size: 1cqw;
                        text-wrap: nowrap;
                        transition: transform 0.3s ease;

                        &:hover {
                            color: rgb(0, 189, 183);
                            transform: scale(1.15);
                        }
                    }

                    img {
                        max-width: 25px;
                        width: 1.7cqw;
                    }
                }
            }
        }
    }
}
</style>