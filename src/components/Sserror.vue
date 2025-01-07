<template >
    <div>
        <Navi/>
        <div class="container cn7 ">
            <b class="e4r">404</b>
            <p id="sf_uchun" class="">Sahifa topilmadi</p>
            <p class="p_text">Siz qidirayotgan sahifa umuman mavjud emas yoki o‘chirib tashlangan. Iltimos, bajarmoqchi bo‘lgan amalingiz to‘g‘riligiga ishonch hosil qilib, qaytadan urinib ko‘ring. Halovatni buzmang!</p>
            <!-- <router-link :to="{name:'home'}" class="btn btn-outline-primary">Asosiy Sahifa</router-link> -->
             <img src="../assets/404.png" alt="">

        </div>

        <Footer7/>
    </div>
</template>

<script setup> 
import Navi from './Navi.vue';
import Footer7 from './Footer7.vue';

</script>

<style scoped>
.cn7{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;  
    height: 100vh;
    color: rgba(53, 115, 240, 0.53);
}
.cn7 > b{
    font-size:120px;
    font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    height: 150px;
    font-weight: 800;
}

.cn7 p{ 
    font-weight: 700;
}
#sf_uchun{
    font-size: 48px;
}

.p_text{ 
    font-size: 15px;
    width: 45%;
    text-align: center;
}
</style>