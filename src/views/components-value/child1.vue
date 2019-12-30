<template>
  <div class="container">
    <h1>{{msg}}</h1>
    <el-button @click="changeValue">改变父组件的值</el-button>
  </div>
</template>
<script>
export default {
  name: "child1",
  data() {
    return {};
  },
  props: {
    msg: {
      type: String,
      default: "我是tab1~"
    }
  },
  created(){
    console.log('儿子------created')
  },
  mounted() {
    console.log('儿子------mounted')
    // console.log("child1加载完成");
  },
  methods:{
    changeValue(){
      this.$emit('toFatherData','【child1】改变父组件的值')
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
