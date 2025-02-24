<template>
<el-container class="recordStepContainer">
    <el-header class="recordStepHeader">
        <section class="leftIcons">
            <!-- 启动、暂停按钮 -->
            <span class="commonIcon changehover">
                <i v-if="busiData.currentIsRecord !='record'" @click="startRecord" class="iconfont icon-bofang"></i>
                <i v-else class="iconfont icon-ai07" @click="continueRecord"></i>
            </span>
            <!-- 停止按钮 -->
            <span @click="stopRecord" class="commonIcon changehover"><i class="iconfont icon-tingzhi" style="font-size: 2.4rem;"></i></span>
        </section>
        <section class="rightIcons">
            <!-- 设置 -->
            <span class="commonIcon changehover" @click="goHome"><i class="iconfont icon-shezhi1"></i></span>
             <!-- 用户 -->
            <span class="commonIcon changehover"><i class="iconfont icon-yonghu"></i></span>
            <span class="commonIcon"><i class="iconfont icon-lianjie"></i></span>
        </section>
        <el-tag type="primary">
            当前录制状态: {{ busiData.getTextByRecordStatus()}}
        </el-tag>
    </el-header>
    <el-main>
        <x-table :columns="columns" :data="tableData"></x-table>
    </el-main>
    
</el-container>

</template>
<script lang="ts" setup>
    import { ref } from 'vue';
    import {useBusiDataStore} from '../store'
    import { useRouter } from 'vue-router';
    import xTable from '../components/xTable.vue'
    const router = useRouter();
    const busiData =  useBusiDataStore();
    
    const columns =  [
        { prop: 'id', label: '序号' },
        { prop: 'opareteStyle', label: '操作类型' },
        { prop: 'goalDom', label: '目标元素' },
        { prop: 'wait', label: '等待时间' },
        { prop: 'opareteValue', label: '操作值' },
        { prop: 'currentTime', label: '当前时间' }
      ]
      const  tableData =  ref([]);
      const stopRecord = ()=>{
        busiData.currentIsRecord = 'end'
        console.log("停止录制")
      }
      const startRecord = async ()=>{
        busiData.currentIsRecord = 'record';
        window.electronAPI.startRecord();
      }
      const continueRecord = ()=>{
        busiData.currentIsRecord = "stop"
        console.log("暂停录制");
      }
      const goHome = ()=>{
        busiData.currentIsRecord = 'none'
        router.replace("/")
        console.log("回到首页");
      }
</script>

<style lang="scss" scoped>
.recordStepContainer{
    height: 100%;
    .recordStepHeader{
        display: flex;
        position: relative;
        justify-content: space-between;
        &>.el-tag{
            position: absolute;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
        }
        .leftIcons,.rightIcons{
            .changehover>i:hover{
                color: #409EFF;
                cursor: pointer;
            }
            display: flex;
            align-items: center;
            &>span{
                margin-right: 1rem;
            }
            &>span>i{
                font-size:2rem;
                color: white;
            }
        }
    }
}
</style>