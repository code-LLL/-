<template>
  <div id="course_content">
    <CourseContentModel>
      <!-- 列表项目 -->
      <ContentList slot="content-list" width="185px">
        <!-- 页面标题 -->
        <ContentListTitle slot="content-list-item">
          <span slot="title">课程信息</span>
        </ContentListTitle>
        <!-- 详细列表 -->
        <ContentListItem slot="content-list-item" v-for="(contentList,index) in contentLists" :key="index" @itemsClick="itemsClick" :if-fold="ifFold==index?1:0"
        :index="index">
          <span slot="other-title" >{{contentList.title}}</span>

          <OtherItem  slot="other-item" v-for="(item,itemkey) in contentList.items" :key="itemkey" v-show="index==ifFold?1:0" @itemGet = "itemGet" :ifcurrent="itemkey==itemNameth?1:0" 
          :contentSet='contentset'  :nameth="itemkey">
            <span slot="other-item-title">{{item}}</span>
          </OtherItem>

        </ContentListItem>
        
      </ContentList>
      <ContentBox slot="content-box">
        <span slot="position">&gt;课程信息</span>
        <span slot="position" v-show="ifFold!=-1?1:0">&gt;{{currenttitle}}</span>
        <span slot="position" v-show="ifFold!=-1&&itemNameth!=-1?1:0">&gt;{{currentitem}}</span>
        <csContent slot="differ-content">
          <span slot="title-name">{{currenttitlename}}</span>
          <p slot="p-content">操作系统是管理计算机硬件与软件资源的计算机程序，同时也是计算机系统的内核与基石。操作系统需要处理如管理与配置内存、决定系统资源供需的优先次序、控制输入设备与输出设备、操作网络与管理文件系统等基本事务。</p>
        </csContent>
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
import csContent from "@/components/coursecontent/csContent";

export default {
  name: "CourseContent",
  components: {
    CourseContentModel,
    ContentList,
    ContentBox,
    ContentListTitle,
    ContentListItem,
    OtherItem,
    csContent
  },
  data() {
    return {
      contentset: {
        paddingLeft: "25px",
        width: "74%",
        margin: "2px 5px 2px 16%"
      },
      contentLists:[
      {
        title: '课程介绍',
        items:[],
      },
      {
        title: '教师团队',
        items:['李宏伟1','李宏伟2','李宏伟3'],
      },
      {
        title: '课程介绍',
        items:['李宏伟a','李宏伟b','李宏伟c'],
      }],
      ifFold:-1,
      itemNameth:-1,
    };
  },
  computed:{
    currenttitle(){
      return this.ifFold!=-1?this.contentLists[this.ifFold].title:''
    },
    currentitem(){
      return this.ifFold!=-1&&this.itemNameth!=-1?this.contentLists[this.ifFold].items[this.itemNameth]:''   
    },
    currenttitlename(){
      if(this.itemNameth!=-1) return this.contentLists[this.ifFold].items[this.itemNameth];
      else if(this.ifFold!=-1) return this.contentLists[this.ifFold].title;
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