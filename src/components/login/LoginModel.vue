<template>
  <div id="log_in_box">
    <form action>
      <div class="title">
        <h1>登录</h1>
      </div>
      <div class="log-content">
        <div class="input">
          <i class="iconfont icon-user"></i>
          <input class="user" type="text" placeholder="请输入用户名" />
        </div>
        <div class="input">
          <i class="iconfont icon-key"></i>
          <input class="password" type="password" placeholder="请输入密码" />
        </div>
        <label for="rem">
          <input type="checkbox" id="rem" />
          <div class="replace"></div>
          <span>记住用户名和密码</span>
        </label>
        <div class="sub">
          <span>登录</span>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import "@/assets/icon/iconfont.css";
export default {};
</script>

<style scoped>
#log_in_box {
  width: 100%;
  height: 100%;
  background: url("../../assets/img/login/bac.png");
  background-size: cover;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
form {
  width: 400px;
  height: 300px;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  box-shadow: 0 0 10px rgba(1, 1, 1, 0.2);
  border-radius: 10px;
}
form .title {
  height: 20%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #8dc4ed;
  border-radius: 10px 10px 0 0;
}
form .title h1 {
  color: #ffffff;
  letter-spacing: 15px;
  font-weight: 500;
}
.log-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 5% 15% 0 15%;
  position: relative;
}
.log-content .input {
  height: 18%;
  margin: 2% 0;

  position: relative;
}
.log-content .input input {
  width: 100%;
  height: 100%;
  padding-left: 2em;
  border: 2px solid #f8f8f9;
  color: #d1d1d1;
  font-size: 13px;
  font-family: "微软雅黑";
  line-height: 100%;
  vertical-align: middle;
}
.log-content input::-webkit-input-placeholder {
  /* WebKit browsers */
  color: #d1d1d1;
}
.log-content input:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  color: #d1d1d1;
}
.log-content input::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: #d1d1d1;
}
.log-content input:-ms-input-placeholder {
  /* Internet Explorer 10+ */
  color: #d1d1d1;
}
/* 图标 */
.log-content i {
  position: absolute;
  color: #d1d1d1;
  top: 9px;
  left: 5px;
  font-size: 20px;
}

/* 记住账号 */
.log-content label {
  height: 15%;
  width: 60%;
  margin: 5% 0 5% 0;
  display: flex;
  justify-content: left;
  align-items: center;
  font-family: "微软雅黑";
  font-weight: 540;
  font-size: 15px;
  cursor: pointer;
}
.log-content label input {
  display: none;
}
.log-content label div {
  width: 20px;
  height: 20px;
  border: 1px solid #d1d1d1;
  margin-right: 5px;
  position: relative;
}
.log-content label div::before {
  content: "";
  border: 2px solid #ffffff;
  border-top: none;
  border-left: none;
  transform: rotate(45deg);
  width: 5px;
  height: 10px;
  position: relative;
  top: 2px;
  left: 5px;
  display: none;
}
.log-content label input:checked ~ div {
  background: #44abf0;
}
.log-content label input:checked ~ div::before {
  display: block;
}

.log-content .sub {
  background: #8dc4ed;
  height: 15%;
  width: 100%;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 5px;
  cursor: pointer;
}
</style>