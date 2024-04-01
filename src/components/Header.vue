<template>
    <header class="max-w-[1920px] w-full flex justify-around items-center bg-red-200">
        <img class="max-w-64 w-full " src="../assets/DM Logo(big).png" alt="logo">
        <ul class="flex gap-[52px]">
            <li v-for="(menu, index) in menus" :key="index">
                <a :href="menu.href" v-html="menu.content">
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
        content: `<p class='text-[#464646] text-base font-bold'>叫號進度</p>`
    },
    {
        href: '#clinicTime',
        content: `<p class='text-[#464646] text-base font-bold'>門診時間</p>`
    },
    {
        href: '#medicalTeam',
        content: `<p class='text-[#464646] text-base font-bold'>醫療團隊</p>`
    },
    {
        href: '#clinicEnvironment',
        content: `<p class='text-[#464646] text-base font-bold'>診所環境</p>`
    },
    {
        href: '#contactUs',
        content: `<p class='text-[#464646] text-base font-bold'>聯絡我們</p>`
    },
    {
        href: '#registrationQuery',
        content: `<p class='text-[#464646] text-base font-bold'>掛號查詢</p>`
    },
    {
        href: 'https://www.facebook.com/dermai.clinic/?locale=zh_TW',
        content: `<img class='max-w-6 w-full' src="../../public/Facebook icon.png" alt="Facebook">`
    },
    {
        href: 'https://lin.ee/AY002Fz',
        content: `<img class='max-w-6 w-full' src="../../public/Line.png" alt="Line">`
    }
])
</script>

<style scoped lang="css">
/* tailwind規範：寬度>佈局>間距>文字>位置>動畫>其他 */
</style>