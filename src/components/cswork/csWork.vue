<template>
    <div class="cs-work-box">
        <div class="title"> 
            <slot name="title"/>
        </div>
        <div class="cs-works-box">
            <slot name="cs-works" />
        </div>
        <slot name="sub" />
    </div>    
</template>

<script>
export default {
    
}
</script>

<style scoped>
.cs-work-box{
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 20px 160px 20px 40px;
}
.cs-work-box .title{
    font-size: 30px;
    font-weight: 500;
    letter-spacing: 4px;
    padding-bottom: 10px;
    border-bottom:1px solid #111;

}
.cs-works-box{
    margin:10px 0 100px;
}
/* 问题单元 */
form{
    width: 100%;
    display: flex;
    flex-direction: column;
}
.cs-works-box form>div{
    width: 60%;
    min-height: 30px;
    display: flex;
    align-items: center;
}
/* 问题标题 */
.cs-works-box form .work-title{
    font-weight: 550;
    font-size: 17px;
}
.cs-works-box form .work-title>span:nth-of-type(1){
    margin-right: 20px;
    font-size: 20px;
    width: 10px;
}
/* 隐藏原生单选框 */
.cs-works-box form>div input{
    display: none;
}

.cs-works-box form>div label{
    display: flex;
    width: 100%;
    min-height: 40px;
    cursor: pointer;
    position: relative;
}
/* 单选框样式设置 */
.cs-works-box form div .icon-circle{
    width: 15px;
    height: 15px;
    border: 1px solid #111;
    border-radius: 50%;
    margin:12px 10px 0 5px;
    background: #f4f4f4;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
}
.cs-works-box form div .icon-circle::before{
    content: '';
    display: block;
    width: 7px;height: 7px;
    background: #a9a9a8;
    border-radius: 50%;
    display: none;
}
/* 问题文字 */
.cs-works-box form div span{
    position: relative;
    width: calc( 100% - 15px);
    margin: 9px 0;
}
/* 选中时的改变 */
.cs-works-box form input[type="radio"]:checked ~ label{
    background: #e3edf6;
}
.cs-works-box form input[type="radio"]:checked ~ label .icon-circle::before{
    display: block;
}
/* 提交答案 */
.cs-work-box .sub{
    width: 120px;
    height: 40px;
    font-size: 18px;
    background: #ffbc72;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 550;
    cursor: pointer;
    margin-bottom: 20px;
}
/* 正确答案 */
.cs-works-box form>.answer{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
}
.cs-works-box form>.answer>span{
    width: 100px;
    margin-right: 5px;
    font-weight: 600;
}
/* .cs-works-box form>.answer>span:nth-of-type(1){
    color: #79abd2;
} */
</style>