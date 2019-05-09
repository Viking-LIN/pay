<template>
<div class="pay">
<div class="pay-items">
<div class="pay-item">
  <div>  
     <el-radio v-model="radio" label="微信支付"><span>微信支付</span></el-radio>
 </div>
    
<div class="graytxt"> 推荐安装微信5.0及以上版本用户使用银行</div>
</div>
<el-divider></el-divider>
<div class="pay-item">
     <el-radio v-model="radio" label="支付宝"><span>支付宝</span></el-radio>
       <div class="graytxt">  
       推荐有支付宝账号的用户使用
   </div>
</div>
<el-divider></el-divider>
<div class="pay-item">
    <el-radio v-model="radio" label="浦发银行"><span>浦发银行</span></el-radio>
      <div class="graytxt">  
       推荐有浦发银行账号的用户使用
   </div>
</div>
  <el-divider></el-divider>
  <div class="pay-item">
    <el-radio v-model="radio" label="运达一卡通"><span>运达一卡通</span></el-radio>
      <div class="graytxt">  
       仅供运达一卡通的用户使用
   </div>
</div>
  <el-divider></el-divider>
  <div class="pay-item">
    <el-radio v-model="radio" label="银行卡支付"><span>银行卡支付</span></el-radio>
      <div class="graytxt">  
       推荐有我家云钱包账号的用户使用
   </div>
</div>
</div>
<div class="pay-btn">
    <el-button class="zhifu" @click="pay()">支付</el-button>
</div>
</div>
</template>

<script>

export default {
    name:"pay",
   
    data () {
      return {
        radio: '支付宝',

      };
    },
    methods : {
        pay(){
            if(this.radio==="支付宝")
            window.alert("支付失败")
            else if(this.radio==="微信支付")
              this.$emit('pay')
        }
    }
}
</script>

<style scoped>
.pay{
    height: 500px;
}
.pay-item{
    width: 100%;
    height: 15%;
    
}
.pay-item el-row{
    font-size: 32px;
}
.graytxt{
    color: gray;
    font-size: 10px;
    margin-left: 60px;
}
.el-divider{
    margin:5px;
}
.el-radio{
    margin: 20px 0 10px 20px;
}

.el-radio__label span{
    font-size: 18px;
    padding-left: 20px;
    font-weight: bold;
}
.pay-btn{
    margin-top:5%;
}
.zhifu{
    background-color: rgb(33,196,179);
    width: 90%;
    height: 60px;
    color:white;
    font-size: 24px;
    margin: 5%;
}
</style>
