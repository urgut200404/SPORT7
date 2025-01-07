<template>
  <div class="nuxt-jdp">
    <div class="container home_mx h-100  text-center">
      <div class=" pt-5 ps-4 home_mx_child">
        <p class="home_text">O'z Sog'lig'ingizni Nazorat qiling </p>
        <MDBBtn color="primary" id="btn_start" @click="Starthome">BOSHLASH</MDBBtn>
      </div>
      <div class="w-50 d-flex d-none   justify-content-center mx777">
        <div class="text-center  home_shadow" >
          <img src="../assets/sports7.jpg" alt="" class="h-100 w-100 " style="border-radius: 40px;">
        </div>
      </div>
    </div>
      
    
  </div>
</template>
<script setup>
import { MDBBtn } from "mdb-vue-ui-kit";
import {useRouter} from "vue-router";
const router=useRouter()

let Starthome = (()=>{
  router.push({name:"starthome"})
})
</script>

<style scoped>

.nuxt-jdp {
  height: 100vh;  
  /* background: rgb(43, 24, 33); */
  background: url("../assets/sports7.jpg") no-repeat;
  background-size: cover;
  filter: brightness(70%);
  /* filter: brightness(); */
}

.home_mx {
  display: flex;
  justify-content: center;
  padding-top: 100px;
}

.home_text {
  color: #fff;
  font-family: "YAFdJvl8raw 0", _fb_, auto;
  font-size: 70px;
  width: 80%;
  text-align: center;
  font-weight: 650;
  letter-spacing: 1px;
  /* background: linear-gradient(to right, rgb(224, 126, 170), rgb(217, 112, 161),rgb(143, 65, 101), rgb(167, 103, 133)); */
  filter: drop-shadow(0 0 40px rgb(172, 98, 215));
   
}

#btn_start {
  font-size: 17px;
  background: rgb(253, 40, 141);
  padding: 10px 70px;
  border-radius: 20px;
  box-shadow: none !important;
  outline: none;
}


.home_shadow{ 
  border-radius: 40px;
  width: 80%;
  height: 80%;
  filter: drop-shadow(0 0 0px rgba(91, 140, 245, 0.462));
  box-shadow:-120px 0 80px rgba(204, 121, 185, 0.122), -10px 0 80px rgba(237, 87, 174, 0.495),70px 0 80px rgba(82, 42, 128, 0.182) ,120px 0 80px rgba(207, 124, 255, 0.055);

}


.home_mx_child p{
   /* backdrop-filter: blur(20px) !important; */
   background: linear-gradient(50deg, rgb(149, 51, 156), transparent);
   border-radius: 40px !important;
   border-left: solid 5px;
}

@media (max-width:576px){
  .home_text{
    text-align: center;
    font-size: 20px;
    color: #e40a98;
  }

  #btn_start{
    font-size: 12px;  
    padding: 10px 40px;
  }

  .home_shadow{
    display: none;
  }

  .nuxt-jdp { 
    background: url("../assets/boys.jpg") no-repeat;  
    background-size: cover;
    text-align: center; 
    padding: 0 !important;
  }

  .home_mx{ 
    text-align: center;
    display: flex !important;   
    justify-content: center ; 
    padding: 0;
  }
  .home_mx_child{
    display: flex !important;
    flex-direction: column !important;
    justify-content: center;
    border-radius: 10px;
    margin: 0 !important;
    width: 100% !important;
    height: 100% !important;
    border: solid;
    color: #fff !important;

  }

  .home_mx_child p{
    color: #fff !important;
    border-radius: 10px !important;
    height: 10%;
    width: 90%;
  }


  .mx777{
    display: none !important;
  }
}
</style>