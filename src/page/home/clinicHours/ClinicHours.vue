<template>
    <div class="clinicHours">
        <div class="title">
            <h1>門診時間</h1>
            <p>點擊醫生姓名可進行網路預約</p>
        </div>
        <div>
            <DateTable :title="eyes.title" :content1="eyes.content">
                1
            </DateTable>
            <DateTable :title="family.title" :content1="family.content1" :content2="family.content2">
                2
            </DateTable>
            <DateTable :title="reh.title" :content1="reh.content1" :content2="reh.content2">
                3
            </DateTable>
        </div>
    </div>
</template>
    
<script setup lang='ts'>
import { reactive } from 'vue'
import DateTable from './dateTable/DateTable.vue'

const eyes = reactive({
    title: '眼科門診',
    content: '視力保健、視力檢查、一般眼疾、近視雷射矯正、老花矯正、白內障超音波乳化治療、視網膜治療、飛蚊症雷射治療、青光眼治療、角膜塑型矯正等眼科手術。'
})

const family = reactive({
    title: '家醫科門診',
    content1: '內科 感冒、腸胃炎、糖尿病、高血壓、高血脂、X光檢查、心電圖檢查、腹部超音波、胃鏡檢查、血液尿液檢查、骨質密度檢查、成人健康檢查。',
    content2:'職能治療 成人治療範圍：腦傷、中風、脊椎損傷、骨折、燒燙傷等... / 兒童治療範圍：自閉症、過動症、腦性麻痺、發展遲緩、感覺統合失調、學習障礙等...。'
})

const reh = reactive({
    title: '復健科門診',
    content1: '物理治療 冰凍肩(五十肩)、下背痛(腰痛)、坐骨神經痛、膝關節傷害、臏骨軟化症及其他膝蓋疼痛、腳踝扭傷等肌肉骨骼以及神經控制系統各種的不悅感或異常感。',
    content2: '職能治療 成人治療範圍：腦傷、中風、脊椎損傷、骨折、燒燙傷等... / 兒童治療範圍：自閉症、過動症、腦性麻痺、發展遲緩、感覺統合失調、學習障礙等...。'
})
</script>
    
<style scoped lang="scss"> .clinicHours {
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
 }
</style>