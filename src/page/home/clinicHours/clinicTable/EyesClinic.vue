<template>
    <div class="eyesClinic">
        <div class="title">
            <h2>{{ eyesClinic.title }}</h2>
            <div class="remark">
                <p>{{ eyesClinic.content }}</p>
            </div>
        </div>
        <slot></slot>
    </div>
</template>
    
<script setup lang='ts'>
import { reactive } from 'vue';

const eyesClinic = reactive({
    title: '眼科門診',
    content: '視力保健、視力檢查、一般眼疾、近視雷射矯正、老花矯正、白內障超音波乳化治療、視網膜治療、飛蚊症雷射治療、青光眼治療、角膜塑型矯正等眼科手術。',
    doctor: ['王司宏','黃瑞冰','徐郁芳']
})

</script>
    
<style scoped lang="scss">
.eyesClinic {
    width: 85%;
    border-radius: 10px;
    margin: 0 auto 1.4%;
    padding: 1.4% 0.9%;
    background: #fff;

    .title {
        display: flex;
        align-items: center;

        h2 {
            width: 9%;
            background: #00908c;
            margin-right: 1.2%;
            padding: 1% 0;
            color: #f5f5f5;
            font-size: 1cqw;
            text-align: center;
        }

        .remark {
            flex: 1;
            font-size: 0.78cqw;
            line-height: 1.3;
            padding-left: 0.4%;

            p {
                margin: 0.4% 0;
                border-left: 3px solid #00908c;
                padding-left: 0.4%;
            }
        }
    }
}
</style>