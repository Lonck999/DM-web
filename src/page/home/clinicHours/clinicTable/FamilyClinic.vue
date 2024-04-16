<template>
    <div class="dateTable">
        <div class="title">
            <h2>{{ familyClinic.title }}</h2>
            <div class="remark">
                <p>{{ familyClinic.content1 }}</p>
                <p>{{ familyClinic.content2 }}</p>
            </div>
        </div>
        <slot :doctor="familyClinic.doctor"></slot>
    </div>
</template>
    
<script setup lang='ts'>
import { reactive } from 'vue';

const familyClinic = reactive({
    title: '家醫科門診',
    content1: '內科 感冒、腸胃炎、糖尿病、高血壓、高血脂、X光檢查、心電圖檢查、腹部超音波、胃鏡檢查、血液尿液檢查、骨質密度檢查、成人健康檢查。',
    content2: '職能治療 成人治療範圍：腦傷、中風、脊椎損傷、骨折、燒燙傷等... / 兒童治療範圍：自閉症、過動症、腦性麻痺、發展遲緩、感覺統合失調、學習障礙等...。',
    doctor:{
        tsai:'蔡政達',
        lin:'林昌錦',
        chiu:'邱旭祥',
        li: '李明智'
    }
})

</script>
    
<style scoped lang="scss">
.dateTable {
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