<template>
  <div class="learning-box">
    <ul>
      <li>
        <span>在线点播</span>
      </li>
      <li>
        <span>ppt课件</span>
      </li>
      <li>
        <span>课本文件</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.learning-box {
  width: 100%;
  height: 100%;
  padding: 10px 50px 100px;
  position: relative;
}
ul {
  width: 35%;
  height: 45px;
  display: flex;
  margin: 20px 0;
  border: 3px solid #ebebeb;
  border-radius: 5px;
}
ul li {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  text-transform: uppercase;
  cursor: pointer;
}
ul li:nth-of-type(1),
ul li:nth-of-type(2) {
  border-right: 2px solid #ebebeb;
}
</style>