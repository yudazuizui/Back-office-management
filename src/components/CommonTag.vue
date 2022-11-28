<template>
  <div class="tabs">
    <el-tag
      v-for="(item, index) in tags"
      :key="item.path"
      :closable="item.name !== 'home'"
      @click="changeMenu(item)"
      @close="handleClose(item, index)"
      :effect="$route.name === item.name ? 'dark' : 'plain'"
    >
      {{ item.label }}
    </el-tag>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "CommonTag",
  data() {
    return {};
  },
  computed: {
    ...mapState({
      tags: (state) => state.tab.tabsList,
    }),
    // ...mapState(["tabsList"]),
  },
  // mounted() {
  //   // console.log(tabsList);
  //   console.log(this.$store.state);
  // },
  methods: {
    ...mapMutations(["closeTag"]),
    // 点击tag跳转的功能
    changeMenu(item) {
      // console.log(this.$router);
      this.$router.push(item.path);
    },
    // 点击tag删除的功能
    handleClose(item, index) {
      // 调用store中的mutation
      this.closeTag(item);
      const length = this.tags.length;
      // 删除非高亮时不变
      if (item.name !== this.$route.name) {
        return;
      }
      // 表示的是删除的最后一项
      if (index === length) {
        this.$router.push({
          name: this.tags[index - 1].name,
        });
      } else {
        this.$router.push({
          name: this.tags[index + 1].name,
        });
      }
    },
  },
};
</script>

<style lang="less" scoped>
.tabs {
  .el-tag {
    margin-right: 15px;
    cursor: pointer;
  }
}
</style>