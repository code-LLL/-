<template>
    <nav id="footer">
        <span class="studio">&copy;2019-2020  宏奕工作室 Homyit Studio 有爱同行 | 踏实求新</span>
        <span class="administrtor">管理员登录</span>
    </nav>
</template>

<script>
export default {
    
}
</script>

<style scoped>
#footer{
    position: relative;
    width: 100%;
    height: 40px;
    background: #c7e0f6;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 540;
}
#footer>span{
    flex: 3;
    text-align: center;
}
#footer>span:nth-of-type(1){
    flex: 4;
}
#footer>span:nth-of-type(2) span{
    margin: 0 10px;
}
#footer>span:nth-of-type(3){
    cursor: pointer;
}
</style>