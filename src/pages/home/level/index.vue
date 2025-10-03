<script setup>
import { reqHospitalLevelAndRegion } from "@/api/home";
import { onMounted, ref } from "vue";

let levelArr = ref([]);
let activeFlag = ref("");

onMounted(() => {
  getLevel();
});

const getLevel = async () => {
  let result = await reqHospitalLevelAndRegion("HosType");
  if (result.code == 200) {
    levelArr.value = result.data;
  }
};

function changeLevel(level) {
  activeFlag.value = level;
}
</script>

<template>
  <div class="level">
    <h1>医院</h1>
    <div class="content">
      <div class="left">等级:</div>
      <ul class="hospital">
        <li :class="{ active: activeFlag == '' }" @click="changeLevel('')">
          全部
        </li>
        <li
          v-for="level in levelArr"
          :class="{ active: activeFlag == level.value }"
          :key="level.value"
          @click="changeLevel(level.value)"
        >
          {{ level.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
.level {
  color: #7f7f7f;
  h1 {
    font-size: 16px;
    margin: 10px 0;
  }
  .content {
    display: flex;
    .left {
      margin-right: 10px;
    }
    .hospital {
      display: flex;
      li {
        margin-right: 10px;
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
