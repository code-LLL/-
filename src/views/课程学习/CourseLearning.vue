<template>
  <div id="course_content">
    <CourseContentModel>
      <ContentList slot="content-list" width="220px">
        <!-- 页面标题 -->
        <ContentListTitle slot="content-list-item">
          <span slot="title">课程学习</span>
        </ContentListTitle>
        <!-- 列表 -->
        <ContentListItem
          slot="content-list-item"
          titlePadding="5%"
          v-for="(list,index) in module"
          :key="index"
          @itemsClick="itemsClick"
          :if-fold="ifFold==index?1:0"
          :index="index"
        >
          <!-- 模块标题 -->
          <span slot="other-title">{{list.title}}</span>
          <!-- 具体每一节 -->
          <OtherItem
            slot="other-item"
            v-for="(item,itemkey) in list.items"
            :key="itemkey"
            v-show="index==ifFold?1:0"
            @itemGet="itemGet"
            :ifcurrent="itemkey==itemNameth?1:0"
            :nameth="itemkey"
          >
            <span slot="other-item-title">{{item}}</span>
          </OtherItem>
        </ContentListItem>
      </ContentList>
      <!-- 每节内容 -->
      <ContentBox slot="content-box">
        <span slot="position">&gt;课程学习</span>
        <span slot="position" v-show="ifFold!=-1?1:0">&gt;{{currenttitle}}</span>
        <span slot="position" v-show="ifFold!=-1&&itemNameth!=-1?1:0">&gt;{{currentitem}}</span>

        <csLearningbox slot="differ-content">

        </csLearningbox>
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
import OtherItem from "@/components/coursecontent/OtherItem";
import csLearningbox from "@/components/cslearning/csLearningbox";
export default {
  name: "CourseContent",
  components: {
    CourseContentModel,
    ContentList,
    ContentBox,
    ContentListTitle,
    ContentListItem,
    OtherItem,
    csLearningbox
  },
  data() {
    return {
      module: [
        {
          title: "模块一 操作系统概述",
          items: []
        },
        {
          title: "模块二 进程管理1",
          items: [
            "教学概要",
            "知识点一 进程概念",
            "知识点二 进程操作与进程通信",
            "知识点一 进程概念",
            "知识点一 进程概念",
            "知识点一 进程概念",
            "知识点一 进程概念",
            "知识点一 进程概念",
            "知识点一 进程概念"
          ]
        },
        {
          title: "模块二 进程管理2",
          items: [
            "教学概要",
            "知识点一 进程概念",
            "知识点二 进程操作与进程通信",
            "知识点一 进程概念",
            "知识点一 进程概念",
            "知识点一 进程概念",
            "知识点一 进程概念",
            "知识点一 进程概念",
            "知识点一 进程概念"
          ]
        },
        {
          title: "模块二 进程管理3",
          items: [
            "教学概要",
            "知识点一 进程概念",
            "知识点二 进程操作与进程通信",
            "知识点一 进程概念",
            "知识点一 进程概念",
            "知识点一 进程概念",
            "知识点一 进程概念",
            "知识点一 进程概念",
            "知识点一 进程概念"
          ]
        },
        {
          title: "模块二 进程管理4",
          items: [
            "教学概要",
            "知识点一 进程概念",
            "知识点二 进程操作与进程通信",
            "知识点一 进程概念",
            "知识点一 进程概念",
            "知识点一 进程概念",
            "知识点一 进程概念",
            "知识点一 进程概念",
            "知识点一 进程概念"
          ]
        },
        {
          title: "模块二 进程管理5",
          items: [
            "教学概要",
            "知识点一 进程概念",
            "知识点二 进程操作与进程通信",
            "知识点一 进程概念",
            "知识点一 进程概念",
            "知识点一 进程概念",
            "知识点一 进程概念",
            "知识点一 进程概念",
            "知识点一 进程概念"
          ]
        },
        {
          title: "模块二 进程管理6",
          items: [
            "教学概要",
            "知识点一 进程概念",
            "知识点二 进程操作与进程通信",
            "知识点一 进程概念",
            "知识点一 进程概念",
            "知识点一 进程概念",
            "知识点一 进程概念",
            "知识点一 进程概念",
            "知识点一 进程概念"
          ]
        },
        {
          title: "模块二 进程管理7",
          items: [
            "教学概要",
            "知识点一 进程概念",
            "知识点二 进程操作与进程通信",
            "知识点一 进程概念",
            "知识点一 进程概念",
            "知识点一 进程概念",
            "知识点一 进程概念",
            "知识点一 进程概念",
            "知识点一 进程概念"
          ]
        }
      ],
      ifFold: -1,
      itemNameth: -1
    };
  },
  computed:{
    currenttitle(){
      return this.ifFold!=-1?this.module[this.ifFold].title:''
    },
    currentitem(){
      return this.ifFold!=-1&&this.itemNameth!=-1?this.module[this.ifFold].items[this.itemNameth]:''   
    },
    currenttitlename(){
      if(this.itemNameth!=-1) return this.module[this.ifFold].items[this.itemNameth];
      else if(this.ifFold!=-1) return this.module[this.ifFold].title;
      else return '';
    }
  },
   methods: {
    /*
    *展开/收缩
    */
   itemsClick(index){
     this.ifFold = index;
     this.itemNameth=-1;
   },
   /*
    *回调列表名称
    */
   itemGet(name){
     this.itemNameth = name;
   }
  }
};
</script>

<style lang="stylus" scoped></style>