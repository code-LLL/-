<template>
    <div :style="[contentSet,ifcurrent?back:'']" @click="itemReturn">
        <slot name="other-item-title"></slot>
    </div>
</template>

<script>
export default {
    props:{
        // css样式设置
        contentSet:Object,
        // 路径
        nameth:Number,
        ifcurrent:{
            type:Number,
            default:0
        }
    },

    data(){
        return{
            back:{
                background:'#a6d1ee'
            }
        }
    },
    methods:{
        itemReturn(){
            // console.log(this.name)
            this.$emit('itemGet',this.nameth);

        }
    }
}
</script>

<style scoped>

.other-item div{
    width: 90%;
    height: 25px;
    border-radius: 30px;
    background: #c8e0f5;
    margin: 2px 5px 2px 10px;
    display: flex;
    align-items: center;
    position: relative;
    cursor: pointer;

}
.other-item div::before{
    content: '';
    position: absolute;
    position: relative;
    border-top: 4px solid transparent;
    border-bottom: 4px solid transparent;
    border-left: 6px solid #8c8c8c;
    margin:0 6px;


}
.other-item div span{
    font-size: 12px;
    color: #111;
    font-weight: 500;
}
/* .other-item .content-div{
    padding-left: 25px;
    width: 74%;
    margin: 2px 5px 2px 16%;
} */
</style>