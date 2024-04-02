<template>
    <div class="header">
        <img src="../assets/DM Logo(big).png" alt="logo">
        <ul>
            <li v-for="(menu, index) in menus" :key="index">
                <a :href="menu.href" v-if="menu.isText">
                    <p>{{ menu.content }}</p>
                </a>
                <a :href="menu.href" target="_blank" v-else>
                    <img :src="menu.content" alt="">
                </a>
            </li>
        </ul>
    </div>
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
        content: '/Facebook icon.png'
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
    max-width: 1920px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;

    img {
        max-width: 225px;
        width: 11.8%;
        margin-left: 7.8%;
    }

    ul {
        flex: 1;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: 0 4%;
        margin-right: 7.8%;

        li {

            a {
                text-decoration: none;
                container-type: inline-size;

                p {
                    color: #464646;
                    font-weight: 600;
                    font-size: 1cqw;
                    text-wrap: nowrap;
                }

                img {
                    max-width: 25px;
                    width: 1.4cqw;
                }
            }
        }
    }
}
</style>
