<template>
    <div class="dateTable">
        <div class="title">
            <h2>{{ rehClinic.title }}</h2>
            <div class="remark">
                <p>{{ rehClinic.content1 }}</p>
                <p>{{ rehClinic.content2 }}</p>
            </div>
        </div>
        <slot :doctor="rehClinic.doctor"></slot>
    </div>
</template>
    
<script setup lang='ts'>
import { reactive } from 'vue';

const rehClinic = reactive({
    title: '復健科門診',
    content1: '物理治療 冰凍肩(五十肩)、下背痛(腰痛)、坐骨神經痛、膝關節傷害、臏骨軟化症及其他膝蓋疼痛、腳踝扭傷等肌肉骨骼以及神經控制系統各種的不悅感或異常感。',
    content2: '職能治療 成人治療範圍：腦傷、中風、脊椎損傷、骨折、燒燙傷等... / 兒童治療範圍：自閉症、過動症、腦性麻痺、發展遲緩、感覺統合失調、學習障礙等...。',
    doctor:'林嘉勇'
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