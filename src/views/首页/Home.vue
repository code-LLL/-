<template>
  <HomeModel>
    <MainImg slot="home-img">
      <img src="@/assets/img/首页/背景.png" alt slot="bacimg" />
      <h1 slot="home-title">操作系统原理</h1>
      <p slot="home-Englishtitle">Operating System</p>
    </MainImg>
    <HomeContent slot="home-content">
      <HomeItembox slot="content-item-box" path="/coursecontent">
        <HomeItemone slot="home-item">
          <h2 slot="title">课程导学</h2>
          <p slot="English-title">COURSE GUIDENCE</p>
          <img src="@/assets/img/首页/望远镜.png" alt slot="icon" />
        </HomeItemone>
        <HomeItemtwo slot="home-item-back">
            <p slot="content-messege">{{message[0]}}</p>
        </HomeItemtwo>
      </HomeItembox>
      <HomeItembox slot="content-item-box" path="/courselearning">
        <HomeItemone slot="home-item">
          <h2 slot="title">课程学习</h2>
          <p slot="English-title">COURSE LEARNING</p>
          <img src="@/assets/img/首页/书.png" alt slot="icon" />
        </HomeItemone>
        <HomeItemtwo slot="home-item-back">
            <p slot="content-messege">{{message[1]}}</p>
        </HomeItemtwo>
      </HomeItembox>
      <HomeItembox slot="content-item-box" path="/experimentteaching">
        <HomeItemone slot="home-item">
          <h2 slot="title">实验教学</h2>
          <p slot="English-title">EXPERMENT TEACHING</p>
          <img src="@/assets/img/首页/实验瓶.png" alt slot="icon" />
        </HomeItemone>
        <HomeItemtwo slot="home-item-back">
            <p slot="content-messege">{{message[2]}}</p>
        </HomeItemtwo>
      </HomeItembox>
      <HomeItembox slot="content-item-box" path="/mobilelearning">
        <HomeItemone slot="home-item">
          <h2 slot="title">移动学习</h2>
          <p slot="English-title">MOBILE LEARNING</p>
          <img src="@/assets/img/首页/电视.png" alt slot="icon" />
        </HomeItemone>
        <HomeItemtwo slot="home-item-back">
            <p slot="content-messege">{{message[3]}}</p>
        </HomeItemtwo>
      </HomeItembox>
    </HomeContent>
  </HomeModel>
</template>

<script>
import HomeModel from "./HomeModel";
import HomeContent from "@/components/home/HomeContent";
import MainImg from "@/components/home/MainImg";
import HomeItembox from "@/components/home/HomeItembox";
import HomeItemone from "@/components/home/HomeItemone";
import HomeItemtwo from "@/components/home/HomeItemtwo";

export default {
  name: "Home",
  components: {
    HomeModel,
    HomeContent,
    MainImg,
    HomeItembox,
    HomeItemone,
    HomeItemtwo
  },
  data(){
      return{
          message:[
              '燥作系统是管理计算机硬件与款件责源的计算机程序,阅时也是计算机系统的内植与基石,提作系丝需要处理面管与配置内存、决定系肤责源供需的优先次序,控制输入设备与输出设备、操作周络与管理文件系脑等基本事务',
              '燥作系统是管理计算机硬件与款件责源的计算机程序,阅时也是计算机系统的内植与基石,提作系丝需要处理面管与配置内存、决定系肤责源供需的优先次序,控制输入设备与输出设备、操作周络与管理文件系脑等基本事务',
              '燥作系统是管理计算机硬件与款件责源的计算机程序,阅时也是计算机系统的内植与基石,提作系丝需要处理面管与配置内存、决定系肤责源供需的优先次序,控制输入设备与输出设备、操作周络与管理文件系脑等基本事务',
              '燥作系统是管理计算机硬件与款件责源的计算机程序,阅时也是计算机系统的内植与基石,提作系丝需要处理面管与配置内存、决定系肤责源供需的优先次序,控制输入设备与输出设备、操作周络与管理文件系脑等基本事务'
          ]
      }
  }
};
</script>

<style  scoped>
</style>