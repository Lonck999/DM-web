<template>
    <div class="clinicHours">
        <div class="title">
            <h1>{{ title }}</h1>
            <p>{{ illustrate }}</p>
        </div>
        <div>
            <EyesClinic v-slot="eyesClinic">
                <table>
                    <thead>
                        <tr>
                            <th>
                                <p>{{ tableTitle }}</p>
                            </th>
                            <th>
                                <p>{{ week.monCN }}</p>
                                <p>{{ week.monEN }}</p>
                            </th>
                            <th>
                                <p>{{ week.tueCN }}</p>
                                <p>{{ week.tueEN }}</p>
                            </th>
                            <th>
                                <p>{{ week.wedCN }}</p>
                                <p>{{ week.wedEN }}</p>
                            </th>
                            <th>
                                <p>{{ week.thuCN }}</p>
                                <p>{{ week.thuEN }}</p>
                            </th>
                            <th>
                                <p>{{ week.friCN }}</p>
                                <p>{{ week.friEN }}</p>
                            </th>
                            <th>
                                <p>{{ week.satCN }}</p>
                                <p>{{ week.satEN }}</p>
                            </th>
                            <th>
                                <p>{{ week.sunCN }}</p>
                                <p>{{ week.sunEN }}</p>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>
                                <p>{{ timePeriod.morning }}</p>
                                <p>{{ timePeriod.morningTime }}</p>
                            </th>
                            <td>
                                <p>{{ eyesClinic.doctor.wang }}</p>
                            </td>
                            <td>
                                <p>{{ eyesClinic.doctor.wang }}</p>
                            </td>
                            <td>
                                <p>{{ eyesClinic.doctor.wang }}</p>
                            </td>
                            <td></td>
                            <td>
                                <p>{{ eyesClinic.doctor.huang }}</p>
                            </td>
                            <td>
                                <p>{{ eyesClinic.doctor.wang }}</p>
                            </td>
                            <td></td>
                        </tr>
                        <tr>
                            <th>
                                <p>{{ timePeriod.afternoon }}</p>
                                <p>{{ timePeriod.afternoonTime }}</p>
                            </th>
                            <td>
                                <p>{{ eyesClinic.doctor.xu }}</p>
                                <p>1400-1700</p>
                            </td>
                            <td>
                                <p>{{ eyesClinic.doctor.huang }}</p>
                            </td>
                            <td>
                                <p>{{ eyesClinic.doctor.wang }}</p>
                            </td>
                            <td>
                                <p>{{ eyesClinic.doctor.xu }}</p>
                                <p>1400-1700</p>
                            </td>
                            <td>
                                <p>{{ eyesClinic.doctor.wang }}</p>
                            </td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th>
                                <p>{{ timePeriod.night }}</p>
                                <p>{{ timePeriod.nightTime }}</p>
                            </th>
                            <td>
                                <p>{{ eyesClinic.doctor.wang }}</p>
                            </td>
                            <td></td>
                            <td></td>
                            <td>
                                <p>{{ eyesClinic.doctor.wang }}</p>
                            </td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </EyesClinic>
            <FamilyClinic v-slot="familyClinic">
                <table>
                    <thead>
                        <tr>
                            <th>
                                <p>{{ tableTitle }}</p>
                            </th>
                            <th>
                                <p>{{ week.monCN }}</p>
                                <p>{{ week.monEN }}</p>
                            </th>
                            <th>
                                <p>{{ week.tueCN }}</p>
                                <p>{{ week.tueEN }}</p>
                            </th>
                            <th>
                                <p>{{ week.wedCN }}</p>
                                <p>{{ week.wedEN }}</p>
                            </th>
                            <th>
                                <p>{{ week.thuCN }}</p>
                                <p>{{ week.thuEN }}</p>
                            </th>
                            <th>
                                <p>{{ week.friCN }}</p>
                                <p>{{ week.friEN }}</p>
                            </th>
                            <th>
                                <p>{{ week.satCN }}</p>
                                <p>{{ week.satEN }}</p>
                            </th>
                            <th>
                                <p>{{ week.sunCN }}</p>
                                <p>{{ week.sunEN }}</p>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>
                                <p>{{ timePeriod.morning }}</p>
                                <p>{{ timePeriod.morningTime }}</p>
                            </th>
                            <td>
                                <p>{{ familyClinic.doctor.tsai }}</p>
                            </td>
                            <td>
                                <p>{{ familyClinic.doctor.lin }}</p>
                            </td>
                            <td>
                                <p>{{ familyClinic.doctor.chiu }}</p>
                            </td>
                            <td></td>
                            <td>
                                <p>{{ familyClinic.doctor.chiu }}</p>
                            </td>
                            <td></td>
                            <td>
                                <p>{{ familyClinic.doctor.tsai }}</p>
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <p>{{ timePeriod.afternoon }}</p>
                                <p>{{ timePeriod.afternoonTime }}</p>
                            </th>
                            <td></td>
                            <td>
                                <p>{{ familyClinic.doctor.tsai }}</p>
                            </td>
                            <td></td>
                            <td>
                                <p>{{ familyClinic.doctor.lin }}</p>
                            </td>
                            <td>
                                <p>{{ familyClinic.doctor.tsai }}</p>
                            </td>
                            <td>
                                <p>{{ familyClinic.doctor.tsai }}</p>
                            </td>
                            <td>
                                <p>{{ familyClinic.doctor.tsai }}</p>
                                <p>1300-1800</p>
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <p>{{ timePeriod.night }}</p>
                                <p>{{ timePeriod.nightTime }}</p>
                            </th>
                            <td>
                                <p>{{ familyClinic.doctor.lin }}</p>
                            </td>
                            <td></td>
                            <td>
                                <p>{{ familyClinic.doctor.lin }}</p>
                            </td>
                            <td>
                                <p>{{ familyClinic.doctor.tsai }}</p>
                            </td>
                            <td>
                                <p>{{ familyClinic.doctor.li }}</p>
                            </td>
                            <td>
                                <p>{{ familyClinic.doctor.lin }}</p>
                            </td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </FamilyClinic>
            <RehClinic v-slot="rehClinic">
                <table>
                    <thead>
                        <tr>
                            <th>
                                <p>{{ tableTitle }}</p>
                            </th>
                            <th>
                                <p>{{ week.monCN }}</p>
                                <p>{{ week.monEN }}</p>
                            </th>
                            <th>
                                <p>{{ week.tueCN }}</p>
                                <p>{{ week.tueEN }}</p>
                            </th>
                            <th>
                                <p>{{ week.wedCN }}</p>
                                <p>{{ week.wedEN }}</p>
                            </th>
                            <th>
                                <p>{{ week.thuCN }}</p>
                                <p>{{ week.thuEN }}</p>
                            </th>
                            <th>
                                <p>{{ week.friCN }}</p>
                                <p>{{ week.friEN }}</p>
                            </th>
                            <th>
                                <p>{{ week.satCN }}</p>
                                <p>{{ week.satEN }}</p>
                            </th>
                            <th>
                                <p>{{ week.sunCN }}</p>
                                <p>{{ week.sunEN }}</p>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>
                                <p>{{ timePeriod.morning }}</p>
                                <p>{{ timePeriod.morningTime }}</p>
                            </th>
                            <td>
                                <p>{{ rehClinic.doctor }}</p>
                            </td>
                            <td>
                                <p>{{ rehClinic.doctor }}</p>
                            </td>
                            <td></td>
                            <td></td>
                            <td>
                                <p>{{ rehClinic.doctor }}</p>
                            </td>
                            <td>
                                <p>{{ rehClinic.doctor }}</p>
                            </td>
                            <td></td>
                        </tr>
                        <tr>
                            <th>
                                <p>{{ timePeriod.afternoon }}</p>
                                <p>{{ timePeriod.afternoonTime }}</p>
                            </th>
                            <td></td>
                            <td>
                                <p>{{ rehClinic.doctor }}</p>
                            </td>
                            <td></td>
                            <td>
                                <p>{{ rehClinic.doctor }}</p>
                            </td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th>
                                <p>{{ timePeriod.night }}</p>
                                <p>{{ timePeriod.nightTime }}</p>
                            </th>
                            <td>
                                <p>{{ rehClinic.doctor }}</p>
                            </td>
                            <td></td>
                            <td>
                                <p>{{ rehClinic.doctor }}</p>
                            </td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
                <div class="reh">
                    <p class="reh-time">{{ reh.title }}</p>
                    <div class="lasting">
                        <span>{{ reh.morning }}</span>
                        <span>{{ reh.morningTime }}</span>
                    </div>
                    <div class="lasting">
                        <span>{{ reh.afternoon }}</span>
                        <span>{{ reh.afternoonTime }}</span>
                    </div>
                    <div class="reh-remark">
                        <p>{{ reh.lastTime }}</p>
                        <p>
                            <img :src="vector" alt="">
                            {{ reh.sunday }}
                        </p>
                    </div>
                </div>
                <div class="ot">
                    <p class="ot-time">{{ot.title}}</p>
                    <p class="child">{{ ot.child}}</p>
                    <div class="lasting">
                        <span>{{ ot.childWeek}}</span>
                        <span>{{ ot.childTime}}</span>
                    </div>
                    <p class="aldult">{{ ot.aldult}}</p>
                    <div class="lasting">
                        <span>{{ ot.aldultWeek}}</span>
                        <span>{{ ot.aldultTime}}</span>
                    </div>
                </div>
            </RehClinic>
        </div>
    </div>
</template>

<script setup lang='ts'>
import EyesClinic from './clinicTable/EyesClinic.vue';
import FamilyClinic from './clinicTable/FamilyClinic.vue';
import RehClinic from './clinicTable/RehClinic.vue';
import vector from '../../../assets/Vector.png';
import { ref, reactive } from 'vue';

const title = ref('門診時間');
const illustrate = ref('點擊醫生姓名可進行網路預約');
const tableTitle = ref('門診時間/星期');
const week = reactive({
    monCN: '星期一',
    monEN: 'MON',
    tueCN: '星期二',
    tueEN: 'TUE',
    wedCN: '星期三',
    wedEN: 'WED',
    thuCN: '星期四',
    thuEN: 'THU',
    friCN: '星期五',
    friEN: 'FRI',
    satCN: '星期六',
    satEN: 'SAT',
    sunCN: '星期日',
    sunEN: 'SUN'
});
const timePeriod = reactive({
    morning: '上午',
    morningTime: '09:00-12:00',
    afternoon: '下午',
    afternoonTime: '15:00-18:00',
    night: '晚上',
    nightTime: '18:00-22:00'
});
const reh = reactive({
    title: '復健治療時間',
    morning: '上午',
    morningTime: '08:00-12:00',
    afternoon: '下午',
    afternoonTime: '14:00-21:00',
    lastTime: '復健治療最後收單時間 : 11:30、20:30',
    sunday: '星期日僅有上午',
});
const ot = reactive({
    title: '職能治療時間',
    child: '兒童',
    childWeek: '星期一至五',
    childTime: '13:00 - 21:00',
    aldult: '成人',
    aldultWeek: '星期一至六',
    aldultTime: '09:00 - 12:00'
});
</script>

<style scoped lang="scss">
.clinicHours {
    max-width: 1920px;
    width: 100%;
    margin: 0 auto;
    padding: 4.5% 0 0 0;
    container-type: inline-size;

    .title {
        text-align: center;

        h1 {
            font-size: 1.7cqw;
            color: #00908c;
            font-style: normal;
            font-weight: 700;
            letter-spacing: 0.05em;
            margin-bottom: 1.5%;
        }

        p {
            color: #343434;
            font-style: normal;
            font-weight: 600;
            font-size: 0.95cqw;
            letter-spacing: 0.05em;
            margin-bottom: 2.5%;
        }
    }

    table {
        width: 100%;
        margin-top: 1.8%;
        text-align: center;

        thead {
            background: #F5F5F5;

            tr {

                th {
                    padding: 0.8% 0;

                    & p:first-child {
                        color: #343434;
                        font-size: 0.85cqw;
                        font-weight: 600;
                        letter-spacing: 0.05em;
                        margin-bottom: 1%;
                    }

                    & p:nth-child(2) {
                        color: #AFAFAF;
                        font-size: 0.7cqw;
                        font-weight: 400;
                        letter-spacing: 0.05em;
                    }
                }

                & th:first-child {
                    width: 21%;
                    border-bottom: 1px solid #e6e6e6;
                    vertical-align: middle;

                    p {
                        color: #AFAFAF;
                    }
                }

                & th:not(:first-child) {
                    width: 11%;
                    vertical-align: middle;
                    border-left: 1px solid #e6e6e6;
                    border-bottom: 1px solid #e6e6e6;
                }

                & th:nth-child(7),
                & th:nth-child(8) {
                    background: #E3EEEE;
                    color: #00908C;

                    & p:first-child {
                        color: #00908C;
                        font-size: 0.85cqw;
                        font-weight: 600;
                        letter-spacing: 0.05em;
                    }

                    & p:nth-child(2) {
                        color: #676765;
                        font-size: 0.7cqw;
                        font-weight: 400;
                        letter-spacing: 0.05em;
                    }
                }
            }
        }

        tbody {

            tr {
                th {
                    background: #F5F5F5;
                    padding: 1.2% 0;

                    & p:first-child {
                        color: #343434;
                        font-size: 0.85cqw;
                        font-weight: 600;
                        letter-spacing: 0.05em;
                        margin-bottom: 1%;
                    }

                    & p:nth-child(2) {
                        color: #676765;
                        ;
                        font-size: 0.65cqw;
                        font-weight: 400;
                        letter-spacing: 0.05em;
                    }
                }


                td {
                    vertical-align: middle;

                    & p:first-child {
                        color: #00908C;
                        font-size: 1.05cqw;
                        font-weight: 600;
                        letter-spacing: 0.05em;
                    }

                    & p:nth-child(2) {
                        color: #676765;
                        font-size: 0.80cqw;
                        font-weight: 400;
                        letter-spacing: 0.05em;
                        margin-top: 2.5%;
                    }
                }

                & td:nth-child(7),
                & td:nth-child(8) {
                    background: #EAF5F5;
                }
            }

            & tr:first-child,
            & tr:nth-child(2) {
                th {
                    border-bottom: 1px solid #e6e6e6;
                }

                td {
                    border-left: 1px solid #e6e6e6;
                    border-bottom: 1px solid #e6e6e6;
                }
            }

            & tr:last-child {
                td {
                    border-left: 1px solid #e6e6e6;
                }
            }
        }
    }

    .reh {
        display: flex;
        align-items: center;

        .reh-time {
            flex: 0.9;
            border-left: 0.3cqw solid #00908C;
            padding: 1.1% 0.2%;
            color: #00908C;
            font-size: 1.05cqw;
            font-weight: 600;
            letter-spacing: 0.05em;
            text-align: center;
        }

        .lasting {
            flex: 1.2;
            display: flex;
            align-items: center;

            & span:first-child {
                color: #343434;
                font-size: 0.85cqw;
                font-weight: 600;
                letter-spacing: 0.05em;
                padding: 0 4% 0 10%;
            }

            & span:nth-child(2) {
                color: #00908C;
                font-size: 0.85cqw;
                font-weight: 400;
                letter-spacing: 0.05em;
            }
        }

        .reh-remark {
            flex: 7;
            font-size: 0.8cqw;
            letter-spacing: 0.05em;

            & p:nth-child(1) {
                color: #343434;
                margin-bottom: 0.5%;
            }

            & p:nth-child(2) {
                display: flex;
                align-items: center;
                color: #DE5050;
                gap: 0.5%;
                font-size: 0.8cqw;

                img {
                    width: 1.5%;
                }
            }
        }

        & div:nth-child(2) {
            border-right: 1px solid #e6e6e6;
        }
    }

    .ot {
        margin-top: 1%;
        display: flex;
        align-items: center;

        .ot-time {
            border-left: 0.3cqw solid #00908C;
            padding: 1.1% 0.6%;
            color: #00908C;
            font-size: 1.05cqw;
            font-weight: 600;
            letter-spacing: 0.05em;
            text-align: center;
        }

        .child,
        .aldult {
            background: #E3EEEE;
            padding: 1.1% 1.3%;
            margin: 0 0 0 1.1%;
            color: #00908C;
            font-size: 1.05cqw;
            font-weight: 600;
            letter-spacing: 0.05em;
        }

        .lasting {
            width: 15%;
            display: flex;
            align-items: center;

            & span:first-child {
                color: #343434;
                font-size: 0.85cqw;
                font-weight: 600;
                letter-spacing: 0.05em;
                padding: 0 4% 0 0;
                margin-left: 5%;
            }

            & span:nth-child(2) {
                color: #00908C;
                font-size: 0.85cqw;
                font-weight: 400;
                letter-spacing: 0.05em;
            }
        }
    }
}
</style>