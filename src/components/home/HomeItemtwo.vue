<template>
    <div class="content-messege-box">
        <div class="content-messege">
          <slot name="content-messege"></slot>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style  scoped>
.content-messege-box{
    width: 100%;
    height: 100%;
    position: relative;
    border-radius: 6px;
    background: #b2dafd;
    box-shadow: inset 0 0 4px rgba(98, 178, 248,0.8);
    padding: 0 20px;
    position: absolute;   
    top: 0;
}
.content-messege{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

}
.content-messege p{
    text-indent: 2em;
    text-align: left;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 1px;
    /* font-family: '等线'; */

}
</style>