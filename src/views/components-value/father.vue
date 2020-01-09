<template>
  <div class="container">
    <h1>动态组件及组件值交互 {{this.$route.params.name}}</h1>
    <el-button type="default" style="margin:10px auto;">来自子组件的值：{{father_msg}}</el-button>
    <div class="tabbar">
      <p class="tab1" @click="switchTab('child1')">tab1</p>
      <p class="tab2" @click="switchTab('child2')">tab2</p>
      <p class="tab3" @click="switchTab('child3')">tab3</p>
      <p class="tab4" @click="switchTab('Child4')">tab4</p>
    </div>
    <keep-alive>
      <component v-bind:is="which_to_show" :msg="changeTXT" @toFatherData="sendSonData"></component>
    </keep-alive>
  </div>
</template>
<script>
import Child1 from "./child1.vue";
import Child2 from "./child2.vue";
import Child3 from "./child3.vue";
import Child4 from "./Child4.vue";
export default {
  name: "father",
  components: {
    Child1,
    Child2,
    Child3,
    Child4
  },
  data() {
    return {
      father_msg: "我是父组件",
      which_to_show: "child1",
      changeTXT:'',
      sendSonMessage: ""
    };
  },
  created(){
    console.log(this.$route.params.id+'_'+this.$route.params.name)
    setTimeout(function(){
      console.log('爸爸------created')
    },100)
  },
  mounted(){
    console.log('爸爸------mounted')
  },
methods:{
    switchTab(el) {
        this.which_to_show=el
        this.changeTXT = '改变'+el
    },
    sendSonData(data){
      this.father_msg=data;
    }
},
};
</script>
<style lang="less" scoped>
h1 {
  font-size: 24px;
}
.container {
  padding: 20px;
  text-align: center;
  .tabbar {
    width: 300px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      flex: 1;
      border-right: 1px solid #eee;
      background: chocolate;
      color: white;
      padding: 5px;
    }
  }
}
</style>
