<template>
  <div class="page1">
    <h1>监听函数：watch</h1>
    <div id="watch-example">
      <p>
        问一个是/不是的问题:
        <input v-model="question" style="border:1px solid rgb(117, 91, 91);">
      </p>
      <p>{{ answer }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      question: "",
      answer: "除非你问问题，否则我不能给你答复!"
    };
  },
  watch: {
    // 如果 `question` 发生改变，这个函数就会运行
    question: function(newQuestion, oldQuestion) {
      this.answer = "等着你停止打字…";
      this.debouncedGetAnswer();
    }
  },
  created: function() {
    this.debouncedGetAnswer = _.debounce(this.getAnswer, 500);
  },
  methods: {
    getAnswer: function() {
      if (this.question.indexOf("?") === -1) {
        this.answer = "问题通常包含一个问号。 ;-)";
        return;
      }
      this.answer = "Thinking...";
      var vm = this;
      this.$http
        .get("https://yesno.wtf/api")
        .then(function(response) {
          vm.answer = _.capitalize(response.data.answer);
        })
        .catch(function(error) {
          vm.answer = "Error! Could not reach the API. " + error;
        });
    }
  }
};
</script>

<style scoped>
.page1 {
  font-size: 20px;
  text-align: center;
  color: white;
  height: 100%;
  color: #333333;
}
</style>
