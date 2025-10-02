<script setup>
import Carousel from "./carousel/index.vue";
import Search from "./search/index.vue";
import Level from "./level/index.vue";
import Region from "./region/index.vue";
import Card from "./card/index.vue";
import { ref, onMounted } from "vue";
import { reqHospital } from "@/api/home";

let pageNo = ref(1);
let pageSize = ref(10);
let hasHospitalArr = ref([]);
let total = ref(0);

onMounted(() => {
  getHospitalInfo();
});

const getHospitalInfo = async () => {
  let result = await reqHospital(pageNo.value, pageSize.value);
  if (result.code == 200) {
    hasHospitalArr.value = result.data.content;
    total.value = result.data.totalElements;
  }
};

function currentChange() {
  getHospitalInfo();
}

function sizeChange() {
  pageNo.value = 1
  getHospitalInfo();
}
</script>

<template>
  <div>
    <!-- 首页轮播图的结构 -->
    <Carousel />
    <!-- 首页搜索医院的表单区域 -->
    <Search />
    <!-- 底部展示医院的结构 -->
    <el-row gutter="20">
      <el-col :span="20">
        <!-- 等级子组件 -->
        <Level />
        <!-- 地区 -->
        <Region />
        <!-- 展示医院的结构 -->
        <div class="hospital">
          <Card
            class="item"
            v-for="item in hasHospitalArr"
            :key="item.id"
            :hospitalInfo="item"
          />
        </div>
        <!-- 分页器 -->
        <el-pagination
          v-model:current-page="pageNo"
          v-model:page-size="pageSize"
          :page-sizes="[10, 20, 30, 40]"
          layout="prev, pager, next, jumper, ->, sizes, total"
          :total="total"
          @current-change="currentChange"
          @size-change="sizeChange"
        />
      </el-col>
      <el-col :span="4">456</el-col>
    </el-row>
  </div>
</template>

<style scoped lang="scss">
.hospital {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .item {
    width: 49%;
    margin: 10px 0;
  }
}
</style>
