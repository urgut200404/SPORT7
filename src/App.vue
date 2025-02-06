<template>
  <div>
    <!-- Spinner ko'rsatish -->
    <div v-if="spins" class="spinner_uchun_still">
      <div class="spinner-border" style="width: 200px; height: 200px;"></div>
    </div>

    <!-- Router komponentlar -->
    <div v-else>
      <router-view v-slot="{ Component }">
        <transition name="fade">
          <component :is="Component" />
        </transition>
      </router-view>  
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

let spins = ref(true);

onMounted(() => {
  setTimeout(() => {
    spins.value = false;
  }, 1500);
});
</script>

<style>
.router-link-active {
  border-bottom: solid rgba(67, 43, 226, 0.353);
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
  width: 100%;
  height: 100vh;
  font-size: 50px;
  gap: 20px;
  position: absolute;
  z-index: 789;
  backdrop-filter: brightness(80%);
}
</style>