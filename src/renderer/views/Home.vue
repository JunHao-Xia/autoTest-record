<template>
    <div class="homeContainer">
        <div class="selectBoxOne" @click="selectRecord(1)">
            APP录制
        </div>
        <div class="selectBoxTwo" @click="selectRecord(2)">
            网页录制 
        </div>
    </div>
</template>
<script lang="ts" setup>
import { useBusiDataStore } from '../store/index';
import { useRouter } from 'vue-router';
const router = useRouter();
const selectRecord = (value:number)=>{
    const busiData = useBusiDataStore();
    //选择录制方式 1:APP录制，2：网页录制
    busiData.selectRecordStyle(value);
    router.push('/inputPath');
}
</script>

<style scoped lang="scss">
@use "../assets/styles/variables.scss" as vars;
.homeContainer {
    height: 100vh;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: 0 10vw;
    justify-content: space-around;
}
.selectBoxOne,.selectBoxTwo{
    width:15rem;
    height: 15rem;
    background-color: rgba(255, 255, 255, .6);
    border-radius: vars.$base-border-radius;
    text-align: center;
    line-height: 15rem;
}
</style>