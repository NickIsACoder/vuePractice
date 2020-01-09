<template>
  <div class="container">
    <p>{{msg}}</p>
    <input type="text">
  </div>
</template>
<script>
export default {
  name: "child4",
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
  },
  mounted() {
    console.log('child4')
  },
  activated(){
    console.log('keepalive加载了')
  },
  deactivated(){
    console.log('deactivated加载了')
  },
  methods:{
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
input{
  border: 1px solid #8d7474
}
</style>