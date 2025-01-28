 <template  >
  <div>
      <div v-if="spins" class="spinner_uchun_still">
      <div class="spinner-border" style="width: 200px;height: 200px;">
      </div>
 
    </div>
 
    <div v-else="spins">
      <router-view v-slot="{ Component }">
        <transition name="fade">
          <component :is="Component" />
        </transition>
      </router-view>  
    </div>
  </div>
 </template>
 <script setup> 
 import { MDBSpinner } from "mdb-vue-ui-kit";
import { onMounted, ref, computed } from "vue";
// import * as mdb from 'mdb-ui-kit'; // lib
// window.mdb = mdb;
let spins = ref(true);
let sp = onMounted(async () => {
 setTimeout(() => {
  spins.value=false;
 }, 1500);
})

sp();
 </script >
 <style >

 .router-link-active{
  border-bottom: solid rgba(67, 43, 226, 0.353);
  /* border-radius: 5px; */
 }
 
.fade-enter-active {
  transition: all 0.5s linear;
  transform: scale(1);
  filter: contrast(100%);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  filter: contrast(0%);
}


.spinner_uchun_still {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100% !important;
   
  height: 100vh;
  font-size: 50px;
  gap: 20px;
  position: absolute;
  z-index: 789;
  backdrop-filter: brightness(80%);
  /* filter: brightness(50%); */
  /* backdrop-filter: brightness(50%); */
  /* filter: brightness(); */
}
 </style>