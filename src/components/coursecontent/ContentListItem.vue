<template>
  <div class="other-box" >
    <div class="other" :style="{paddingLeft : titlePadding}" @click="titleClick">
      <slot name="other-title"></slot>
    </div>
    <div class="other-item" >
      <slot name="other-item"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titlePadding: {
      type: String,
      default: "20%"
    },
    index:Number,
    ifFold:{
      type:Number,
      default: 0
    },
  },
  data() {
    return {
      currentFold:1,
      // titleIffold:this.ifFold
    };
  },
  watch:{
    ifFold(newVal){
      if(newVal==0) this.currentFold =1 ;
    }
  },
  methods: {
    titleClick() {
      if(!this.ifFold && this.currentFold) {
        this.$emit('itemsClick',this.index);
        this.currentFold--;
      }else{
        this.$emit('itemsClick','-1');
        this.currentFold++;
      }
    }
  }
};
</script>

<style scoped>
.other-box {
  width: 100%;
}
.other {
  width: 100%;
  height: 30px;
  background: #9ac6ec;
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
  margin: 5px 0;
  display: flex;
  align-items: center;
  cursor: pointer;
  /* padding-left: 20%; */
}
.other span {
  text-align: left;
  color: #fff;
  font-weight: 540;
}

.other-item {
  display: flex;
  flex-direction: column;
}
</style>