<template>
    <div class="dateTable">
        <div class="title">
            <h2>{{ title }}</h2>
            <div class="remark">
                <p>{{ content1 }}</p>
                <p>{{ content2 }}</p>
            </div>
        </div>
        <slot></slot>
    </div>
</template>
    
<script setup lang='ts'>
defineProps(['title', 'content1', 'content2'])

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