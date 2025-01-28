<template>
    <div>
        <Navi />
        <div class="home_start_menu">
        </div>


        <div class="container mb-5 p-0 text-center  instalar_uchunStillar">
            <h4 class="text-center pt-5 pb-5">Eng Kerakli ilovalar </h4>
            <MDBCardGroup class=" text-center card_groups777" style="gap: 80px;">
                <MDBCard class="card_w75 ">
                    <p class="text-center card_respotext">
                        <img src="../assets/healts.jpg" top alt="..." class="ilovalar_uchun"
                            style="border-radius: 50%;" />
                    </p>
                    <hr>
                    <MDBCardBody>
                        <MDBCardTitle>
                            <!-- <a href="https://play.google.com/store/search?q=samsung+health+monitor+watch+3&c=apps&hl=ru&gl=US">Ko'proq</a> -->
                             <router-link :to="{name:'smhealth'}">Ko'proq</router-link>
                        </MDBCardTitle>
                    </MDBCardBody>
                </MDBCard>
                <MDBCard class="card_w75">
                    <p class="text-center card_respotext">
                        <img src="../assets/strava.webp" top alt="..." class="ilovalar_uchun"
                            style="border-radius: 50%;" />
                    </p>
                    <hr>
                    <MDBCardBody>
                        <MDBCardTitle>
                            <!-- <a href="https://play.google.com/store/search?q=strava+%D0%B1%D0%B5%D1%81%D0%BF%D0%BB%D0%B0%D1%82%D0%BD%D0%BE&c=apps&hl=ru&gl=US">Ko'proq</a> -->
                            <router-link :to="{name:'strava'}">Ko'proq</router-link>
                        </MDBCardTitle>
                    </MDBCardBody>
                </MDBCard>
                <MDBCard class="card_w75">
                    <p class="text-center card_respotext">
                        <img src="../assets/ggfit.webp" top alt="..." class="ilovalar_uchun" />
                    </p>
                    <hr>
                    <MDBCardBody>
                        <MDBCardTitle>
                            <router-link :to="{name:'ggfit'}">Ko'proq</router-link>
                        </MDBCardTitle>
                    </MDBCardBody>
                </MDBCard>
            </MDBCardGroup>
        </div>
        <div class="container mb-5">
            <div class=" note-seconadary mb-3 p-2 rounded-2   ">
                <h5 class="mashiqQIlishuskunalari text-primary">Bizning tizimlarimiz</h5>
                <div class="d-flex justify-content-between align-items-center system_fath   mt-3 p-1">
                    <a href="https://moodle.jdpu.uz/">
                        <div class="system_dv">
                            <img src="../assets/moodle.png" alt="">
                            <p>Moddle</p>
                        </div>
                    </a>
                    <a href="https://student.jdpu.uz/dashboard/login">
                        <div class="system_dv">
                            <img src="../assets/student.png" alt="">
                            <p>Hemis</p>
                        </div>
                    </a>
                    <a href="https://iqtidor.jdpu.uz/">
                        <div class="system_dv">
                            <img src="../assets/e-hujjat.png" alt="">
                            <p>Iqtidorli talabalar</p>
                        </div>
                    </a>
                    <a href="https://main.jdpu.uz/">
                        <div class="system_dv">
                            <img src="../assets/main.png" alt="">
                            <p>Boshaqaruv tizimi</p>
                        </div>
                    </a>
                    <a href="https://110.jdpu.uz/">
                        <div class="system_dv">
                            <img src="../assets/110.png" alt="">
                            <p>110 ballik tizim</p>
                        </div>
                    </a>

                </div>
            </div>

        </div>

        <div class="container mb-5" id="mashuskunalari">
            <div class=" note-secondary mb-3 p-2 rounded-2  d-flex justify-content-start align-items-center">
                <h5 class="mashiqQIlishuskunalari">Mashq Qilish Uskunalari</h5>
            </div>
            <n-carousel autoplay draggable class="" :slides-per-view="4.5" :space-between="15" :loop="true">
                <img class="carousel-img rounded-4 border h-75" :src="img7.img" v-for="img7 in img_list" :key="img7.id">
            </n-carousel>
        </div>

 
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1705.2503448842174!2d67.82733318404728!3d40.1314035087043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38b29426d5c89667%3A0xfb1eb71ddf62c359!2z0J_QtdC00LDQs9C-0LPQuNC60LAg0YPQvdC40LLQtdGA0YHQuNGC0LXRgtC4!5e1!3m2!1suz!2s!4v1733946399544!5m2!1suz!2s"
            width="100%" height="600" style="border:0;" allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
        <Footer7 />
    </div>
</template>
<script setup>
import { ref } from "vue";
import Footer7 from "./Footer7.vue";
import { MDBCardGroup, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImg, MDBCardFooter } from "mdb-vue-ui-kit";

import Navi from "../components/Navi.vue";
let placeholder_if00 = ref(true);
const carouselLoad = () => { placeholder_if00.value = false; };


let img_list = ref([
    { id: 0, img: new URL("../assets/m9.jpg", import.meta.url) },
    { id: 1, img: new URL("../assets/m1.jpg", import.meta.url) },
    { id: 2, img: new URL("../assets/m2.jpg", import.meta.url) },
    { id: 3, img: new URL("../assets/m3.jpg", import.meta.url) },
    { id: 4, img: new URL("../assets/m4.jpg", import.meta.url) },
    { id: 5, img: new URL("../assets/m10.png", import.meta.url) },
    { id: 6, img: new URL("../assets/m6.webp", import.meta.url) },
    { id: 7, img: new URL("../assets/m7.webp", import.meta.url) },
    { id: 8, img: new URL("../assets/m8.jpg", import.meta.url) },
    { id: 9, img: new URL("../assets/m9.jpg", import.meta.url) },
    { id: 10, img: new URL("../assets/m1.jpg", import.meta.url) },
])




let img_list2 = ref([
    { id: 0, img: new URL("../assets/ms1.jpg", import.meta.url) },
    { id: 1, img: new URL("../assets/ms2.jpg", import.meta.url) },
    { id: 2, img: new URL("../assets/ms3.jpg", import.meta.url) },
    { id: 3, img: new URL("../assets/m3.jpg", import.meta.url) },
    { id: 4, img: new URL("../assets/m4.jpg", import.meta.url) },
])

</script>


<style>
/* responsive uchun  stillar */

@media (max-width:576px) {
    .system_dv{
        width: 80px !important;
        height: 80px !important;
        font-size: 12px;
        justify-content: center !important;
        text-align: center !important;
        margin-right: 20px;
    }
    .system_fath{
        overflow-y: auto;
    }
    .system_dv img{
    width:20px !important;

}
    .card_groups777 {
        display: flex;
        height: auto !important;
        gap: 10px !important;
    }

    .card_w75 {
        width: 80% !important;
        font-size: 15px !important;
    }

    .card_w75 .card-body .card-title {
        font-size: 12px;
    }

    .card-body {
        padding: 0;
    }

    .home_start_menu {
        height: 300px !important;
    }

    .mashiqQIlishuskunalari {
        font-size: 11px;
        font-weight: 550;
    }

    /* .card_respotext {
        margin-bottom: 0;
    } */
}



/* .............................................................. */
 
.system_dv {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* border: solid; */
    box-shadow: 0 0 10px rgb(209, 209, 209);
    border-radius: 10px;
    width: 230px;
    height: 170px;
    margin-bottom: 10px;
    border-color: rgb(211, 210, 210);
}
.system_dv img{
    width:70px;

}
.mashiqQIlishuskunalari {
    text-transform: uppercase;
}

.carousel-img {
    cursor: grab !important;
}

.card_respotext {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.card_groups777 {
    width: 80%;
    height: 350px;
}

.carousel-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    background-position-y: 100%;
}


.home_start_menu {
    height: 550px;
    background: url("../assets/jdpu11.jpg") no-repeat;
    background-size: cover;
    background-position-y: 100%;
    /* filter: brightness(80%); */
    /* object-fit: cover; */
}

.card_w75 {
    /* height: 75% !important; */
    filter: drop-shadow(0 0 10px #bab8b8);
    border-radius: 5px !important;
    padding-top: 5px;
}



.card_w75 img {
    width: 50%;
}



.instalar_uchunStillar {
    display: flex;
    flex-direction: column;
    align-items: center
}
</style>