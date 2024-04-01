<template>
    <header class="container">
        <img class="logo" src="../assets/DM Logo(big).png" alt="logo">
        <ul>
            <li v-for="(menu, index) in menus" :key="index">
                <a :href="menu.href" v-if="menu.isText">
                    <p>{{menu.content}}</p>
                </a>
                <a :href="menu.href" v-else>
                    <img src="" alt="">
                </a>
            </li>
        </ul>
    </header>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

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
        content: '../../public/Facebook icon.png'
    },
    {
        href: 'https://lin.ee/AY002Fz',
        isText: false,
        content: '../../public/Line.png'
    }
])
</script>

<style scoped lang="scss">
/* SCSS規範：寬度>佈局>間距>文字>位置>動畫>其他 */
.container {
    background: pink;
    max-width: 1280px;
    width: 100%;
    margin: 0 auto;

    img {
        max-width: 225px;
        width: 100%;
    }

    ul {
        display: flex;

        li {
            background: burlywood;

            a {
                text-decoration: none;

                p {
                    color: #464646;
                    font-weight: 600;
                    font-size: 16px;
                }
            }
        }
    }
}
</style>
