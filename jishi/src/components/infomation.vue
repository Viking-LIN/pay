<template>
<div style="height:15rem;width:100%;background:rgb(222,233,244)">

<div class="infomation">
    <el-row class="top">
       <el-col :span="10" > <div class='carnum'>{{info.carNum}}</div></el-col>
    <el-col :span="4"><div class="isDoneDiv"><div class='isDone'>{{info.isDone?'已缴费':'未缴费'}}</div></div></el-col>
    </el-row>
      <el-divider></el-divider>
      <div class="main">
    <div><div class='enter'><div>进场时间：</div><div>{{info.enterTime}}</div></div></div>
     <div><div class='out'><div>出场时间：</div><div>{{info.outTime}}</div></div></div>
      </div>
     <div class='costdiv'><div class="cost">￥{{info.cost}}</div></div>
</div>
</div>
</template>

<script>
export default {
  name: 'cost',
  props:['info'],
  data () {
    return {
    //   carNum: '粤B12344',
    //   isDone: false,
    //   enterTime: '2018-03-10 12:10',
    //   outTime: '2018-03-14 11:20',
    //   cost: '40.00'
    }
  }
}
</script>

<style scoped>
.infomation{
     width: 100%;
    height: 100%;
  background: url(../assets/Oval6.png)no-repeat 91% 69%,url(../assets/Oval6Copy3.png)no-repeat 85% 30%,url(../assets/蒙版.png);
    background-size: 50% 50%,60% 70%, 100% 100%;

  font-family: PingFangSC-Medium;
    color: #FFFFFF;

}
.top>div{
    margin:8% 10% 4% 10%;
}
.el-divider{
    margin: 0;
}

.isDone{

    height: 25px;
    opacity: 0.8;
    background: #FFFFFF;
    border-radius: 30%;
    font-size: 16px;
    font-weight:600;
    color: #1890FF ;
    letter-spacing: -0.18px;
    text-align: center;
}
.main{
    margin-left: 5%;
}
.main>div{
    margin: 3%;
}
.costdiv{
    position: absolute;
    top:18%;
    left: 50%;
  
}
.cost{
    font-size: 50px;
}


</style>
