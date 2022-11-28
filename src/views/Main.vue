<template>
  <div>
    <el-container>
      <el-aside width="auto"> <CommonAise /></el-aside>
      <el-container>
        <el-header>
          <CommonHeader />
        </el-header>
        <CommonTag />
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import CommonAise from "../components/CommonAside.vue";
import CommonHeader from "../components/CommonHeader.vue";
import CommonTag from "../components/CommonTag.vue";
export default {
  data() {
    return {};
  },
  components: {
    CommonAise,
    CommonHeader,
    CommonTag,
  },
};
</script>

<style scoped>
.el-header {
  padding: 0;
}
</style>