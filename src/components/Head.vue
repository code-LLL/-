<template>
  <nav class="head">
    <div class="headimg">
      <div>
        <img src="@/assets/img/导航栏/logo.png" alt />
      </div>
      <div>
        <p>江西师范大学</p>
        <p>网络教育精品资源共享课</p>
      </div>
    </div>

    <div class="content">
      <div class="lists">
        <router-link to="/home" tag="span">首页</router-link>
        <router-link to="/coursetitle" tag="span">课程信息</router-link>
        <router-link to="/courselearning" tag="span">课程学习</router-link>
        <router-link to="/experimentteaching" tag="span">实验教学</router-link>
        <router-link to="/mobilelearning" tag="span">移动学习</router-link>
        <router-link to="/resourcecenter" tag="span">资源中心</router-link>
        <router-link to="/coursework" tag="span">课程作业</router-link>
        <router-link to="/interactiongarden" tag="span">交互园地</router-link>
      </div>
      <div class="login">
        <router-link to="/login" tag="span">登录</router-link>
        <router-link to="/signin" tag="span">注册</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Head"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
nav {
  background: #ffffff;
  width: 100%;
  height: 110px;
  position: relative;
  font-family: "YouYuan";
  display: flex;

}
/* 图标部分 */
.headimg {
  position: relative;
  width: 400px;
  height: 98%;
  top: 6px;
  right: 30px;
  transform: skewX(-25deg);
  border-bottom-right-radius: 20px;
  background: rgb(141, 196, 237);
  box-shadow: 0 0 13px rgba(121, 124, 127, 0.71);
  padding: 0px 20px 0px 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  /* border-bottom-right-radius: 10%  90%;  */
}

/* 图标内部 */
.headimg div {
  transform: skewX(25deg);
}
.headimg > div:nth-of-type(1) {
  width: 60px;
  height: 60px;
  margin-right: 10px;
}
.headimg > div:nth-of-type(2) {
  text-align: left;
}
.headimg > div:nth-of-type(2) > p:nth-of-type(1) {
  font-size: 25px;
  letter-spacing: 5px;
}
/* 导航栏项目 */
.content{
  border-top: 6px solid rgb(141, 196, 237);
  display: flex;
  width: calc(100vw - 400px);
}
.lists,
.login {
  position: relative;
  top: 20%;
  display: flex;
 
  align-items: center;
  height: 80%;
}
.lists{
  justify-content: space-between;
  padding-left: 50px;
  flex-grow: 8;
}
.lists span {
  margin: 5px 10px;
  font-weight: 600;
  font-size: 18px;
  cursor: pointer;
  position: relative;
}
.lists span::before {
  content: "";
  display: block;
  position: absolute;
  bottom: -10px;
  width: 100%;
  height: 5px;
  border-radius: 10px;
}
.lists span:hover::before {
  background: #ffbc72;
}
/* 登录注册 */
.login {
  width: 200px;
  justify-content: center;
  flex-grow: 1.5;
}
.login span {
  width: 55px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
  border: 2px solid #ffbc72;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
}
.login span:nth-of-type(1) {
  background: #ffbc72;
  color: #ffffff;
}
</style>
