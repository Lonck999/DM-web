<template>
    <div class="call">
        <h1>{{ title }}</h1>
        <div class="number">
            <div class="number-dark">
                <div class="number-room">
                    <p>一</p>
                    <p>診</p>
                </div>
                <div class="number-clinic">
                    <p>科別 - <span class="green">外科</span></p>
                    <p>看診號碼</p>
                    <p class="green now">1</p>
                </div>
                <div class="number-clinic">
                    <p>醫師 - <span class="green">李明志</span></p>
                    <p>候診人數</p>
                    <p class="now">3</p>
                </div>
            </div>
            <div class="number-light">
                <div class="number-room">
                        <p>二</p>
                        <p>診</p>
                    </div>
                    <div class="number-clinic">
                        <p>科別 - <span class="green">外科</span></p>
                        <p>看診號碼</p>
                        <p class="green now">1</p>
                    </div>
                    <div class="number-clinic">
                        <p>醫師 - <span class="green">李明志</span></p>
                        <p>候診人數</p>
                        <p class="now">3</p>
                    </div>
            </div>
            <div class="number-dark">
                 <div class="number-room">
                        <p>三</p>
                        <p>診</p>
                    </div>
                    <div class="number-clinic">
                        <p>科別 - <span class="green">外科</span></p>
                        <p>看診號碼</p>
                        <p class="green now">1</p>
                    </div>
                    <div class="number-clinic">
                        <p>醫師 - <span class="green">李明志</span></p>
                        <p>候診人數</p>
                        <p class="now">3</p>
                    </div>
            </div>
        </div>
    </div>
</template>
    
<script setup lang='ts'>
import { ref } from 'vue';

const title = ref('叫號進度');

</script>
    
<style scoped lang="scss">
/* SCSS規範：寬度>佈局>間距>文字>位置>動畫>其他 */

.call {
    width: 100%;
    margin: 4.5% 0;
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

        .number-dark,
        .number-light {
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 0 9%;
            text-align: center;
            padding: 3.2% 0;

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
        }

        .number-dark {
            background: url('../../../assets/cardbg-1.png');
        }

        .number-light {
            background: url('../../../assets/cardbg-2.png');
        }
    }
}
</style>