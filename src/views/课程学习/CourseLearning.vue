<template>
    <div id="course_content">
      <CourseContentModel>
          <ContentList slot="content-list" width="220px">
                <ContentListTitle slot="content-list-item" >
                  <span slot="title">课程学习</span>
                </ContentListTitle>

                <ContentListItem slot="content-list-item" titlePadding='5%'>
                  <span slot="other-title">模块一 操作系统概述</span>
                </ContentListItem>

                <ContentListItem slot="content-list-item" titlePadding='5%'>
                  <span slot="other-title">模块一 进程管理</span>
                  <OtherItem slot="other-item">
                      <span slot="other-item-title">教学概要</span>
                  </OtherItem>
                  <OtherItem slot="other-item">
                      <span slot="other-item-title">知识点一 进程概念</span>
                  </OtherItem>
                  <OtherItem slot="other-item">
                      <span slot="other-item-title">知识点二 进程操作与进程通信</span>
                  </OtherItem>
                  <OtherItem slot="other-item">
                      <span slot="other-item-title">知识点一 进程概念</span>
                  </OtherItem>
                  <OtherItem slot="other-item">
                      <span slot="other-item-title">知识点一 进程概念</span>
                  </OtherItem>
                  <OtherItem slot="other-item">
                      <span slot="other-item-title">知识点一 进程概念</span>
                  </OtherItem>
                  <OtherItem slot="other-item">
                      <span slot="other-item-title">知识点一 进程概念</span>
                  </OtherItem>
                  <OtherItem slot="other-item">
                      <span slot="other-item-title">知识点一 进程概念</span>
                  </OtherItem>
                </ContentListItem>

                <ContentListItem slot="content-list-item" titlePadding='5%'>
                  <span slot="other-title">模块一 操作系统概述</span>
                </ContentListItem>
                <ContentListItem slot="content-list-item" titlePadding='5%'>
                  <span slot="other-title">模块一 操作系统概述</span>
                </ContentListItem>
                <ContentListItem slot="content-list-item" titlePadding='5%'>
                  <span slot="other-title">模块一 操作系统概述</span>
                </ContentListItem>
                <ContentListItem slot="content-list-item" titlePadding='5%'>
                  <span slot="other-title">模块一 操作系统概述</span>
                </ContentListItem>
                <ContentListItem slot="content-list-item" titlePadding='5%'>
                  <span slot="other-title">模块一 操作系统概述</span>
                </ContentListItem>
                <ContentListItem slot="content-list-item" titlePadding='5%'>
                  <span slot="other-title">模块一 操作系统概述</span>
                </ContentListItem>
          </ContentList>
          <ContentBox slot="content-box">

          </ContentBox>
      </CourseContentModel>
    </div>    
</template>

<script>
import CourseContentModel from '@/components/coursecontent/CourseContentModel'
import ContentList from '@/components/coursecontent/ContentList'
import ContentBox from '@/components/coursecontent/ContentBox'
import ContentListTitle from '@/components/coursecontent/ContentListTitle'
import ContentListItem from '@/components/coursecontent/ContentListItem'
import OtherItem from '@/components/coursecontent/OtherItem'
export default {
    name: 'CourseContent',
    components: {
        CourseContentModel,
        ContentList,
        ContentBox,
        ContentListTitle,
        ContentListItem,
        OtherItem

    },
    data(){
        return{
            
        }
    }
}
</script>

<style lang="stylus" scoped>

</style>