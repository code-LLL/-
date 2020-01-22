<template>
    <div class="content-item">
        <div class="iconbox">
            <div class="icon-"></div>
        </div>
        <div class="content">
            <slot name="title"></slot>
            <slot name="English-title"></slot>
        </div>
        <div class="svg-box">
            <svg>
                <line x1="0" y1="50%" x2="30%" y2="50%"></line>
                <line x1="70%" y1="50%" x2="100%" y2="50%"></line>
            </svg>
            <div class="icon_box">
                <slot name="icon"></slot>
            </div>
        </div>
    </div>    
</template>

<script>
export default {
    
}
</script>

<style  scoped>
.content-item{
    width: 100%;
    height: 100%;
    position: relative;
    border-radius: 6px;
    background: #b2dafd;
    box-shadow: inset 0 0 4px rgba(98, 178, 248,0.8);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 20px;
    z-index: 10;
}
/* 部分1 */
.iconbox{
    width: 100%;
    height: 15%;
    display: flex;
    justify-content:flex-end;
    align-items: center;
}

.icon-{
    height: 20px;
    display: flex;
    align-items: center;
}
.icon-::before{
    content: '';
    display: block;
    width: 15px;
    height: 3px;
    background: #111111;
    position: relative;
    left: calc(100% - 15px);
    margin-bottom: 10px;
    border-radius: 1px;
}
.icon-::after{
    content: '';
    display: block;
    width: 35px;
    height: 3px;
    background: #111111;
    border-radius: 2px;

}
/* 部分2 */
.content-item .content{
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    width: 80%;
    height: 30%;
}
.content-item .content h2{
    text-align: center;
    letter-spacing: 10px;
    font-size: 32px;
    color: #3a3a3a;
}
.content-item .content p{
    text-align: center;
    letter-spacing: 2px;
    font-weight: 600;
    font-size: 12px;
    font-family: '等线';
    color: #5b5959;
}
/* 部分3 */
.svg-box{
    width: 80%;
    height: 25%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
}
svg{
    width: 100%;
    height: 100%;
    position: absolute;
}
svg line{
    stroke-width: 1;
    stroke:#111;
    stroke-dasharray: 4;
}
.icon_box{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #97C1E7;
    display: flex;
    justify-content: center;
    align-items: center;
}
.icon_box img{
    width: 100%;
    transform: scale(0.7);
}
</style>