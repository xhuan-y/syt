<script setup>
import { reqHospitalLevelAndRegion } from "@/api/home";
import { onMounted, ref } from "vue";

let regionArr = ref([]);
let regionFlag = ref("");

onMounted(() => {
  getRegion();
});

const getRegion = async () => {
  const result = await reqHospitalLevelAndRegion("北京");
  if (result.code == 200) {
    regionArr.value = result.data;
  }
};

function changeRegion(region) {
  regionFlag.value = region;
}
</script>

<template>
  <div class="region">
    <div class="content">
      <div class="left">地区:</div>
      <ul>
        <li :class="{ active: regionFlag == '' }" @click="changeRegion('')">
          全部
        </li>
        <li
          v-for="item in regionArr"
          :key="item.value"
          @click="changeRegion(item.value)"
          :class="{ active: regionFlag == item.value }"
        >
          {{ item.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
.region {
  color: #7f7f7f;
  margin-top: 10px;
  .content {
    display: flex;
    .left {
      margin-right: 10px;
      width: 70px;
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      li {
        margin-right: 10px;
        margin-bottom: 10px;
        &.active {
          color: #55a6fe;
        }
      }
      li:hover {
        color: #55a6fe;
        cursor: pointer;
      }
    }
  }
}
</style>
