<template>
  <div class="container">
    <h1>{{msg}}</h1>
  </div>
</template>
<script>
export default {
  name: "child2",
  data() {
    return {};
  },
  props: {
    msg: {
      type: String,
      default: "我是tab2~"
    }
  },
  mounted() {
    console.log("child2加载完成");
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
