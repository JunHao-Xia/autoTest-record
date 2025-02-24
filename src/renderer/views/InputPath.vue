<template>
    <div class="inputPathContainer"> 
        <div class="box">
            <el-input v-model="input" style="width: 40vw" clearable placeholder="Please input" />
            <div class="box_btns">
                <el-button class="box_btn" type="primary" @click="startRecord">录制</el-button>
                <el-button class="box_btn" type="info" @click="backPrePage">返回</el-button>
            </div>
        </div>
        
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router';
const router = useRouter();
const input = ref('');
const startRecord = ()=>{
    if(!input.value.trim()) {
        ElMessage.error("输入相关地址不允许为空");
        return;
    }
    window.electronAPI.openPage(input.value);
    router.replace('/recordStep');
}
const backPrePage = ()=>{
    router.replace('/');

}
</script>
<style scoped lang="scss">
.inputPathContainer{
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .box{
        display: flex;
        .box_btns{
            margin-left: 20px;
        }
    }
}
</style>