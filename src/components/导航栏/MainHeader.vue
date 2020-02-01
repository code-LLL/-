<template>
  <Header >
    <HeaderImg slot="headimg"></HeaderImg>
    <Content slot="content">
      <Item slot="item" path="/home">
        <span slot="item-content">首页</span>
      </Item>
      <Item slot="item" path="/coursecontent">
        <span slot="item-content">课程信息</span>
      </Item>
      <Item slot="item" path="/courselearning">
        <span slot="item-content">课程学习</span>
      </Item>
      <Item slot="item" path="/experimentteaching">
        <span slot="item-content">实验教学</span>
      </Item>
      <Item slot="item" path="/mobilelearning">
        <span slot="item-content">移动学习</span>
      </Item>
      <Item slot="item" path="/resourcecenter">
        <span slot="item-content">资源中心</span>
      </Item>
      <Item slot="item" path="/coursework">
        <span slot="item-content">课程作业</span>
      </Item>
      <Item slot="item" path="/interactiongarden">
        <span slot="item-content">交互园地</span>
      </Item>
    </Content>
    <Login slot="login">
      <LoginItem slot="login-item" path="/login">
        <span slot="login-item-content">登录</span>
      </LoginItem>
      <LoginItem slot="login-item" path="/signin">
        <span class="login_span" slot="login-item-content">注册</span>
      </LoginItem>
    </Login>
  </Header>
</template>

<script>
import Header from '@/components/导航栏/Header.vue'
import HeaderImg from '@/components/导航栏/Headerimg.vue'
import Content from '@/components/导航栏/Content.vue'
import Item from '@/components/导航栏/Item.vue'
import Login from '@/components/导航栏/Login.vue'
import LoginItem from '@/components/导航栏/LoginItem.vue'
export default {
  components: {
    Header,
    HeaderImg,
    Content,
    Login,
    Item,
    LoginItem
  },
};
</script>

<style scoped>
@font-face {
  font-family: 'YouYuan';
  src: url('../../assets/font/YouYuan.woff2');
}
</style>