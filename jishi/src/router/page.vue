<template>
<div class="page">
<infomation :info="info"/>
<pay v-if="!info.isDone" @pay="changepay()"/>

</div>
</template>

<script>
import infomation from '../components/infomation'
import pay from '../components/pay'
export default {

    data () {
      return {
      info:{
       carNum: null,
       enterTime: null,
       outTime: null,
       cost: null,
       isDone: null,
      },
      

      };
    },
    components:{
      infomation,
      pay
    },
    
    beforeMount(){
      this.$axios.get('../../static/'+this.$route.params.carnum+'.json')
      .then((res)=>{
       this.info=res.data;

    })
 
}  , methods:{
      changepay(){
        window.alert("支付成功")
        this.info.isDone = true;
      }
    },}
</script>

<style scoped>


</style>
