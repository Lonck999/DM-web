<template>
    <div class="call">
        <h1>{{ title }}</h1>
        <div class="number">
            <div class="number-block" v-for="call in callNumber" :key="call.id">
                <div class="number-dark" v-if="call.dark">
                    <div class="number-room">
                        <p>{{ call.roomNameTop }}</p>
                        <p>{{ call.roomNameBottom }}</p>
                    </div>
                    <div class="number-clinic">
                        <p>{{ call.clinic }}<span class="green">{{ call.clinicName }}</span></p>
                        <p>{{ call.now }}</p>
                        <p class="green now">{{ call.nowNumber }}</p>
                    </div>
                    <div class="number-clinic">
                        <p>{{ call.doctor }}<span class="green">{{ call.doctorName }}</span></p>
                        <p>{{ call.waiting }}</p>
                        <p class="now">{{ call.waitingNumber }}</p>
                    </div>
                </div>
                <div class="number-light" v-else>
                    <div class="number-room">
                        <p>{{ call.roomNameTop }}</p>
                        <p>{{ call.roomNameBottom }}</p>
                    </div>
                    <div class="number-clinic">
                        <p>{{ call.clinic }}<span class="green">{{ call.clinicName }}</span></p>
                        <p>{{ call.now }}</p>
                        <p class="green now">{{ call.nowNumber }}</p>
                    </div>
                    <div class="number-clinic">
                        <p>{{ call.doctor }}<span class="green">{{ call.doctorName }}</span></p>
                        <p>{{ call.waiting }}</p>
                        <p class="now">{{ call.waitingNumber }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang='ts'>
//引入axios
import axios from 'axios';
import { ref, reactive, onMounted } from 'vue';

interface CallNumber {
    id: number;
    roomNameTop: string;
    roomNameBottom: string;
    clinic: string;
    clinicName: string;
    now: string;
    nowNumber: number;
    doctor: string;
    doctorName: string;
    waiting: string;
    waitingNumber: number;
    dark: boolean;
}

const title = ref<string>('叫號進度');

const callNumber = reactive<CallNumber[]>([
    {
        id: 1,
        roomNameTop: '一',
        roomNameBottom: '診',
        clinic: '科別 - ',
        clinicName: '外科',
        now: '看診號碼',
        nowNumber: 1,
        doctor: '醫師 - ',
        doctorName: '李明志',
        waiting: '候診人數',
        waitingNumber: 3,
        dark: true,
    },
    {
        id: 2,
        roomNameTop: '二',
        roomNameBottom: '診',
        clinic: '科別 - ',
        clinicName: '外科',
        now: '看診號碼',
        nowNumber: 1,
        doctor: '醫師 - ',
        doctorName: '李明志',
        waiting: '候診人數',
        waitingNumber: 3,
        dark: false,
    },
    {
        id: 3,
        roomNameTop: '三',
        roomNameBottom: '診',
        clinic: '科別 - ',
        clinicName: '外科',
        now: '看診號碼',
        nowNumber: 1,
        doctor: '醫師 - ',
        doctorName: '李明志',
        waiting: '候診人數',
        waitingNumber: 3,
        dark: true,
    }
]);

const callNumberAPI = ref<CallNumber[]>([]);

// API
const accessToken = ref<string>('');

const getAccessToken = async () => {
    const apiURL = 'https://www.dltech.com.tw/DLWabAPI-Official/api/Authoutication/AccessToken';
    const params = {
        API_ID: 'DM',
        API_Secret: '08727379'
    };

    try {
        const response = await axios.get(apiURL, { params });
        accessToken.value = response.data.Data[0].Token;
        return accessToken.value;
    } catch (error) {
        console.error('Error fetching access token:', error);
    }
};

const getNumberInfo = async () => {
    const apiURL = 'https://www.dltech.com.tw/DLWabAPI-Official/api/Official/NumberInfo';
    try {
        const response = await axios.get(apiURL, {
            headers: {
                'Accept': 'application/json',
                'token': accessToken.value,
                'os': '0',
                'ver': '0'
            }
        });
        console.log('data',response.data.Data);
        callNumberAPI.value.splice(0, callNumberAPI.value.length, ...response.data.Data.map((item: any) => ({
            id: item.代碼,
            roomName: item.名稱,
            clinic: '科別 - ',
            clinicName: item.科別,
            now: '看診號碼',
            nowNumber: item.看診號碼,
            doctor: '醫師 - ',
            doctorName: item.醫師,
            waiting: '候診人數',
            waitingNumber: item.候診人數,
            dark: item.是否休診,
        })));
    } catch (error) {
        console.error('Error fetching call numbers:', error);
    }
}


onMounted(() => {
    getAccessToken().then(() => {
        getNumberInfo();
    });
});
</script>

<style scoped lang="scss">
/* SCSS規範：寬度>佈局>間距>文字>位置>動畫>其他 */

.call {
    max-width: 1920px;
    width: 100%;
    margin: 0 auto;
    container-type: inline-size;

    h1 {
        background: #5b5b5c;
        color: #f5f5f5;
        text-align: center;
        font-weight: 700;
        font-size: 1.8cqw;
        letter-spacing: 0.05em;
        padding: 1.2% 0;
    }

    .number {
        display: flex;

        .number-block {
            flex: 1;

            .number-dark,
            .number-light {
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 0 9%;
                text-align: center;
                padding: 9.5% 0;

                .number-room {
                    background: #2bc0bc;
                    border-radius: 5px;
                    color: #f5f5f5;
                    font-size: 1.8cqw;
                    font-weight: 700;
                    padding: 8.5% 2%;

                    p:nth-child(1) {
                        margin-bottom: 40%;
                    }
                }
            }

            .number-clinic {
                color: #f5f5f5;
                font-size: 1cqw;
                font-weight: 400;

                .green {
                    color: #81e8e5;
                }

                .now {
                    font-size: 2.8cqw;
                    font-weight: 700;
                    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                }

                p:nth-child(2) {
                    margin: 2.8cqw 0 1cqw 0;
                }
            }

            .number-dark {
                background: url('../../../assets/cardbg-1.png');
                background-size: cover;
            }

            .number-light {
                background: url('../../../assets/cardbg-2.png');
                background-size: cover;
            }
        }
    }
}
</style>