<template>
    <div class="footer">
        <div class="content">
            <ul>
                <li v-for="(menu, index) in menus" :key="index">
                    <router-link :to="menu.href">
                        <p>{{ menu.content }}</p>
                    </router-link>
                </li>
            </ul>
            <div class="map">
                <router-link to="/qrcode">
                    <img :src="mapImage" alt="map">
                </router-link>
                <div>
                    <h3>{{ name }}</h3>
                    <p>
                        {{ address }}
                    </p>
                    <p>
                        {{ tel }}
                    </p>
                    <p>
                        {{ email }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from "vue";
import mapImage from '../assets/地圖.png';


const menus = reactive([
    {
        href: '#callNumber',
        content: '叫號進度'
    },
    {
        href: '#clinicTime',
        content: '門診時間'
    },
    {
        href: '#medicalTeam',
        content: '醫療團隊'
    },
    {
        href: '#clinicEnvironment',
        content: '診所環境'
    },
    {
        href: '#contactUs',
        content: '聯絡我們'
    },
    {
        href: '#registrationQuery',
        content: '掛號查詢'
    }
])

const name = ref('德美診所');
const address = ref('地址：234新北市永和區中正路455-1號');
const tel = ref('電話：02 2927 3001');
const email = ref('信箱：dl.dmmm@gmail.com');

</script>

<style scoped lang="scss">
/* SCSS規範：寬度>佈局>間距>文字>位置>動畫>其他 */
.footer {
    width: 100%;
    background: #5b5b5c;

    .content {
        max-width: 1920px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin: 0 auto;
        padding: 1.7% 0;

        ul {
            flex: 1;
            display: flex;
            gap: 0 5%;
            margin-left: 7.8%;

            li {
                a {
                    text-decoration: none;
                    container-type: inline-size;

                    p {
                        color: #fff;
                        font-size: 0.9cqw;
                        font-weight: 600;
                        text-wrap: nowrap;
                    }
                }
            }
        }

        .map {
            flex: 1;
            display: flex;
            justify-content: flex-end;
            gap: 0 5%;
            margin-right: 7.8%;
            container-type: inline-size;

            img {
                max-width: 267px;
                width: 33cqw;
            }

            div {
                color: #fff;

                h3 {
                    font-size: 2.4cqw;
                    font-weight: 600;
                    margin: 8% 0;
                }

                p {
                    font-size: 2cqw;
                    margin-bottom: 3%;
                }
            }
        }
    }
}
</style>