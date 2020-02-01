<template>
    <div id="course-content-box">
        <div class="course-content">
            <slot name="content-list"></slot>
            <slot name="content-box"></slot>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
#course-content-box{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.course-content{
    width: 1000px;
    display: flex;
    margin: 25px 0 80px 0;
}
</style>