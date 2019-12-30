<template>
  <div class="container">
    <h1>{{msg}}</h1>
    <!-- 定义一个子组件传值的方法 -->
    <el-button type="primary" style="margin:10px auto;" @click="toFatherData">改变父组件的值</el-button>
  </div>
</template>·
<script>
export default {
  name: "child3",
  data() {
    return {};
  },
  props: {
    msg: {
      type: String,
      default: "我是tab3~"
    }
  },
  mounted() {
    console.log("child3加载完成");
  },
methods:{
    toFatherData(){
      this.$emit("toFatherData","【child3】改变父组件的值")
    }
  }
};
</script>
<style scoped>
.container {
  width: 300px;
  margin: 0 auto;
  height: 300px;
  padding: 20px;
  border: 1px solid #eee;
}
</style>
