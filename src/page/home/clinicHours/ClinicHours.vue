<template>
    <div class="clinicHours">
        <div class="title">
            <h1>門診時間</h1>
            <p>點擊醫生姓名可進行網路預約</p>
        </div>
        <div>
            <EyesClinic>
                1
            </EyesClinic>
           <FamilyClinic>
                2
            </FamilyClinic>
           <RehClinic>
                3
            </RehClinic>
        </div>
    </div>
</template>
    
<script setup lang='ts'>
import EyesClinic from './clinicTable/EyesClinic.vue'
import FamilyClinic from './clinicTable/FamilyClinic.vue'
import RehClinic from './clinicTable/RehClinic.vue'
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