<template>
  <div id="course_content">
    <CourseContentModel width="1200px">
      <ContentList slot="content-list" width="220px">
        <!-- 页面标题 -->
        <ContentListTitle slot="content-list-item">
          <span slot="title">课程作业</span>
        </ContentListTitle>
        <!-- 列表 -->
        <ContentListItem
          slot="content-list-item"
          titlePadding="5%"
          v-for="(list,index) in module"
          :key="index"
        >
          <!-- 模块标题 -->
          <span slot="other-title"  @click="clickItem(index)">{{list.title}}</span>
        </ContentListItem>
      </ContentList>

      <!-- 每节内容 -->
      <ContentBox slot="content-box">
        <span slot="position">&gt;课程学习</span>
        <csWork slot="differ-content">
          <span slot="title">第一单元测验</span>
          <form action slot="cs-works" v-for="(works,index) in csWorks" :key="index">
            <div class="work-title">
              <span>{{index+1}}</span>
              <span>{{works.title}}(&nbsp;)</span>
            </div>
            <div v-for="(question,num) in works.work" :key="num">
              <input type="radio" :name="index+1" :id="'work'+index+'-'+num" />
              <label :for="'work'+index+'-'+num" @click="stdClick(index,num)">
                <div class="icon-circle"></div>
                <span>{{numChange(num)}}&nbsp;{{question}}</span>
              </label>
            </div>
            <!-- 正确答案 -->
              <div class="answer" v-if="complete">
                <span :style="color(index)">正确答案：{{numChange(answer[index])}}</span>
                <span>
                  <span v-if="answer[index]!=stdAnswer[index]">
                    你的答案：{{numChange(stdAnswer[index])}}
                  </span>
                </span>
              </div>
          </form>
          <div class="sub" slot="sub" v-if="!complete" @click="checkClick()">
            <span>提交答案</span>
          </div>
        </csWork>
      </ContentBox>
    </CourseContentModel>
  </div>
</template>

<script>
import CourseContentModel from "@/components/coursecontent/CourseContentModel";
import ContentList from "@/components/coursecontent/ContentList";
import ContentBox from "@/components/coursecontent/ContentBox";
import ContentListTitle from "@/components/coursecontent/ContentListTitle";
import ContentListItem from "@/components/coursecontent/ContentListItem";
import csWork from "@/components/cswork/csWork";
export default {
  name: "CourseWork",
  components: {
    CourseContentModel,
    ContentList,
    ContentBox,
    ContentListTitle,
    ContentListItem,
    csWork
  },

  data() {
    return {
      contentset: {
        paddingLeft: "25px",
        width: "74%",
        margin: "2px 5px 2px 16%"
      },
      module: [
        {
          title: "习题一 操作系统概述",
          items: []
        },
        {
          title: "习题二 进程管理",
          items: []
        },
        {
          title: "习题三 fefwef",
          items: []
        }
      ],
      // 作业题目
      csWorks: [
        {
          title: '批处理操作系统首先要考虑的问题是',
          work:[
            '灵活性和可适应性1-1',
            '灵活性和可适应性1-2',
            '灵活性和可适应性1-3',
            '灵活性和可适应性1-4'
          ],
        },
        {
          title: '批处理操作系统首先要考虑的问题是',
          work:[
            '灵活性和可适应性2-1',
            '灵活性和可适应性2-2',
            '灵活性和可适应性2-3',
            '灵活性和可适应性2-4'
          ],
        },
        {
          title: '批处理操作系统首先要考虑的问题是',
          work:[
            '灵活性和可适应性3-1',
            '灵活性和可适应性3-2',
            '灵活性和可适应性3-3',
            '灵活性和可适应性3-4'
          ],
        },
      ],
      // 学生的答案
      stdAnswer:[-1,-1,-1],
      answer:[0,1,2],
      complete:0,
    };
  },

  methods: {
    // clickItem(index) {
    //   console.log(index);

    // },
    stdClick(index,num){
      this.stdAnswer[index]=num;
    },
    checkClick(){
      let flag=1;
      let i=0;
      for(;i<this.csWorks.length && flag==1;i++){
        if(this.stdAnswer[i]==-1) {
          alert('第'+i+'存在题目未作答!!!');
          flag = 0;
        }
      }
      if(i==this.csWorks.length && flag==1){
        alert('提交成功');
        // 上传至后台，返回正确答案
        this.complete = 1;
      }
    }
  },
  computed:{
    numChange(){
      return (num)=>{
        if( num==0 ) return 'A';
        else if( num==1 ) return 'B';
        else if( num==2 ) return 'C';
        else return 'D';
      }
    },
    color(){
      return (num)=>{
        if(this.answer[num]!=this.stdAnswer[num]) 
          return 'color:#fb6361';
        else return 'color:#79abd2';
      }
    }
  },

};
</script>

<style lang="stylus" scoped></style>