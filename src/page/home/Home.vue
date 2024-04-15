<template>
    <div>
        <div class="main-bg">
            <Main />
        </div>
        <div class="callNumber-bg">
            <CallNumber />
        </div>
        <div class="clinicHours-bg">
            <ClinicHours />
        </div>
        <MedicalTeam />
        <div class="environment-bg">
            <Environment />
        </div>
    </div>
</template>

<script setup lang='ts'>
import Main from './main/Main.vue'
import CallNumber from './callNumber/CallNumber.vue';
import ClinicHours from './clinicHours/ClinicHours.vue';
import MedicalTeam from './medicalTeam/MedicalTeam.vue';
import Environment from './environment/Environment.vue';
</script>

<style scoped lang="scss">
/* SCSS規範：寬度>佈局>間距>文字>位置>動畫>其他 */

.main-bg {
    width: 100%;
    background-image: url('../../assets/背景.png');
    background-size: cover;
    padding: 4% 0 0 0;
}

.callNumber-bg, .clinicHours-bg, .environment-bg {
    width: 100%;
    background-size: cover;
}

.callNumber-bg{
    background:#5b5b5c;
}

.clinicHours-bg {
    background-image: url('../../assets/背景2.png');
}

.environment-bg {
    background-image: url('../../assets/背景4.png');
}
</style>