<template>
    <el-table
      :data="tableData"
      style="width: 100%"
    >
      <el-table-column
      align="center"
        v-for="(column, index) in columns"
        :key="index"
        :prop="column.prop" 
        :label="column.label"
      >
      </el-table-column>
  
      <el-table-column label="操作" 
      align="center">
        <template v-slot="scope">
          <el-button
          type="primary"
            size="small"
          >
            {{ scope.row.isEditing ? '保存' : '编辑' }}
          </el-button>
          <el-button
            type="danger"
            size="small"
            @click="handleDelete(scope)"
          >
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { ElMessage } from 'element-plus';
const props = defineProps<{
  columns: any[];
  data:any[];
}>();

const cloneTableData = JSON.parse(JSON.stringify(props.data));

const tableData = ref(cloneTableData.map((item:any) => ({ ...item, isEditing: false })));

    const handleDelete = (scope:any) => {
      scope.row.isEditing = false; 

      ElMessage.success('删除成功');
    };
</script>