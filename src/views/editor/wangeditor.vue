<template>
    <div>
        <div class="config">
            <p>图片链接：<span style="color: red;">https://inews.gtimg.com/newsapp_match/0/9019815929/0</span></p>
            <p>视频链接：<span style="color: red;">'https://lmbsy.qq.com/flv/220/12/p0872bj9yy4.mp4?sdtfrom=v1010&guid=8626524552ac8ff3fd78b47e055df880&vkey=B9A19B93F6DDB4F3A6613CBF7E4635189A5487034AECAB3597B7572C0DB1DDA4F256672C9F6A6CE60E52A2EBB26D8B3A28DDB416B6409A46667BBFA407551FADCBC8BDBBD6F59D9CB3D85BE6232E1B8ECCA1844768F293AADD02C209612AC0DBD8A612D03F8F0BBA1BBA686FAF8E40C831BF18FE13C687359B519DBC93F8A24C'</span></p>
            <p>http://img.wx.xiao-bo.com/a_res_app/php/lucky_card/t_004/img/tv.mp4</p>
            <p>通用代码：<span style="color: red;">{{this.demoVIdeo}}</span></p>
        </div>
        <div id="editorElem" style="text-align:left"></div>
        <el-button type="primary" @click="show">显示</el-button>
        <div class="showarea w-e-text" v-html="showdata"></div>
    </div>
</template>
<script>
    import E from "wangeditor";
    
    export default{
        data(){
          return {
              demoVIdeo:'<iframe frameborder="0" src="https://v.qq.com/txp/iframe/player.html?vid=x0872jf6fjc" allowFullScreen="true"></iframe>',
              editor: null,
              content: '',
              showdata:''
          }  
        },
        mounted(){
            this.editor = new E("#editorElem");
            this.editor.create();
            this.editor.txt.html(this.content);
        },
        methods:{
            show(){
                this.showdata = this.editor.txt.html()
            }
        }
    }
</script>

<style>
    .config{
        padding: 20px;
    }
    .wangEditor-container .wangEditor-txt blockquote {
  display: block;
  border-left: 8px solid #d0e5f2;
  padding: 5px 10px;
  margin: 10px 0;
  line-height: 1.4;
  font-size: 100%;
  background-color: #f1f1f1;
}
.wangEditor-container .wangEditor-txt table {
  border: none;
  border-collapse: collapse;
}
.wangEditor-container .wangEditor-txt table td,
.wangEditor-container .wangEditor-txt table th {
  border: 1px solid #f1f1f1 !important;
  padding: 3px 5px;
  min-width: 50px;
  height: 20px;
}
.wangEditor-container .wangEditor-txt pre {
  border: 1px solid #ccc;
  background-color: #f8f8f8;
  padding: 10px;
  margin: 5px 0px;
  font-size: 0.8em;
  border-radius: 3px;
} 
</style>
