<template>
    <div class="inquire">
        <div class="content">
            <div class="form">
                <div class="form-block">
                    <h1>{{ title }}</h1>
                    <p>{{ illustrate }}</p>
                    <p>{{ deadline }}</p>
                    <form>
                        <div class="form-block_id">
                            <label for="idNumber">
                                {{ idName }}<span>{{ star }}</span>
                                <br>
                                <input id="idNumber" name="idNumber" type="text" v-model="idNumber">
                            </label>
                        </div>
                        <div class="form-block_birth">
                            <label for="birthYear">{{ birth }}<span>{{ star }}</span></label>
                            <br>
                            <select id="birthYear" v-model="birthYear" @change="onYearOrMonthChange">
                                <option disabled value="">{{ choose }}</option>
                                <option v-for="year in years" :key="year" :value="year">{{ year }}{{ CNYear }}</option>
                            </select>
                            <select v-model="birthMonth" @change="onYearOrMonthChange">
                                <option disabled value="">{{ choose }}</option>
                                <option v-for="month in 12" :key="month" :value="month">{{ month }}{{ CNMonth }}</option>
                            </select>
                            <select v-model="birthDay">
                                <option disabled value="">{{ choose }}</option>
                                <option v-for="day in daysInMonth" :key="day" :value="day">{{ day }}{{ CNDay }}</option>
                            </select>
                        </div>
                        <div class="form-phone">
                            <label for="phone">{{ phoneNumber }}<span>{{ star }}</span></label>
                            <br>
                            <input id="phone" name="phone" type="text" v-model="phone">
                        </div>
                        <button>{{ inquireBtn }}</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
    
<script setup lang='ts'>
import { ref, computed } from 'vue';

const title = ref('查詢預約掛號');
const illustrate = ref('請輸入預約掛號時所填寫的預約資料。');
const deadline = ref('※僅供查詢兩個月內的網路掛號資料');
const star = ref('*');
const idName = ref('身份證號/居留證號');
const birth = ref('出生年份');
const choose = ref('請選擇');
const CNYear = ref('年');
const CNMonth = ref('月');
const CNDay = ref('日');
const phoneNumber = ref('手機號碼');
const inquireBtn = ref('查詢');

const idNumber = ref('');
const birthYear = ref('');
const birthMonth = ref('');
const birthDay = ref('');
const phone = ref('');

const currentYear = new Date().getFullYear();
const years = Array.from({ length: currentYear - 1900 + 1 }, (_, i) => 1900 + i);

const daysInMonth = computed(() => {
    if (!birthYear.value || !birthMonth.value) return [];
    return new Date(birthYear.value, birthMonth.value, 0).getDate();
});

const onYearOrMonthChange = () => {
    birthDay.value = '';
};

</script>
    
<style scoped lang="scss">
/* SCSS規範：寬度>佈局>間距>文字>位置>動畫>其他 */
.inquire {
    width: 100%;
    background: url('../assets/背景5.png') no-repeat;
    background-size: cover;

    .content {
        max-width: 1920px;
        width: 100%;
        display: flex;
        justify-content: center;
        margin: auto;
        padding: 10% 0;
        container-type: inline-size;

        .form {
            width: 28.4%;
            background: #fff;
            border-radius: 20px;
            box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
            display: flex;

            .form-block {
                width: 60%;
                margin: 10% auto;
                color: #343434;

                h1 {
                    font-size: 1.1cqw;
                    font-weight: 900;
                    letter-spacing: 0.05em;
                    margin-bottom: 6%;
                }

                p {
                    font-size: 0.9cqw;
                    font-weight: 600;
                    letter-spacing: 0.05em;

                    &:nth-child(3) {
                        color: #FE4B4B;
                        margin-top: 1%;
                    }
                }

                form {

                    .form-block_id {
                        font-size: 0.9cqw;
                        font-weight: 600;
                        letter-spacing: 0.05em;
                        line-height: 25px;
                        margin-top: 15%;

                        span {
                            color: #FE4B4B;
                        }

                        input {
                            width: 90%;
                            height: 2.3cqw;
                            background: #F5F5F5;
                            border: 1px solid #D9D9D9;
                            border-radius: 5px;
                            font-size: 0.9cqw;
                            font-weight: 400;
                            letter-spacing: 0.05em;
                            padding: 0 4%;
                        }
                    }

                    .form-block_birth {
                        font-size: 0.9cqw;
                        font-weight: 600;
                        letter-spacing: 0.05em;
                        line-height: 25px;
                        margin-top: 8%;

                        span {
                            color: #FE4B4B;
                        }

                        select {
                            width: 32.2%;
                            height: 2.3cqw;
                            background: #F5F5F5;
                            border: 1px solid #D9D9D9;
                            border-radius: 5px;
                            margin-right: 1%;
                            padding-right: 2.5%;
                            font-size: 0.9cqw;
                            font-weight: 400;
                            text-align: center;
                            letter-spacing: 0.05em;
                            /* 箭頭 */
                            appearance: none;
                            background-image: url('../assets/arr-bottom.png');
                            background-repeat: no-repeat;
                            background-position: 90% 50%;
                        }
                    }

                    .form-phone {
                        font-size: 0.9cqw;
                        font-weight: 600;
                        letter-spacing: 0.05em;
                        line-height: 25px;
                        margin-top: 8%;

                        span {
                            color: #FE4B4B;
                        }

                        input {
                            width: 90%;
                            height: 2.3cqw;
                            background: #F5F5F5;
                            border: 1px solid #D9D9D9;
                            border-radius: 5px;
                            font-size: 0.9cqw;
                            font-weight: 400;
                            letter-spacing: 0.05em;
                            padding: 0 4%;
                        }
                    }

                    button {
                        background: #2BC0BC;
                        border-radius: 5px;
                        border: none;
                        margin-top: 23%;
                        padding: 3.5% 43.5%;
                        color: #F5F5F5;
                        font-size: 0.9cqw;
                        font-weight: 500;
                        text-align: center;
                        letter-spacing: 0.1em;
                        cursor: pointer;
                    }
                }
            }
        }
    }
}
</style>