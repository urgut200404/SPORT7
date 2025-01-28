<template>
    <div>
        <Navi />
        <div class="container">
            <div class="note-secondary mt-3 mb-2 p-3">
                <router-link :to="{ name: 'home' }">Home</router-link> >> {{ $route.name }}
            </div>
        </div>
        <div class="container mb-5 mt-5">
            <h4 class="text-center">O'g'il Bolalar Uchun</h4>
            <div class="d-flex gap-2 justify-content-between  route_Mash7_mx">
                <div class="" style="width: 32%;">
                    <div id="yonalishlar" class="d-flex align-items-center gap-4" style="flex-direction: column; ">
                        <div class="rounded-3 w-100 h-100">
                            <img src="../assets/boy2.jpg" class="card-img-top card-img-top78 h-100 rounded-3"
                                alt="Fissure in Sandstone" style="filter: drop-shadow(0 0 10px #bab8b8);" />
                        </div> 
                        <div>
                            <Qapp/>
                        </div>
                    </div>
                    
                </div>

                <div class="ps-3 pt-4" style="width: 63%;">
                    <!-- ...................................................................... -->
                    <div class="note-light p-3 rounded-2" v-show="fakultet_click == 'jism'">
                        <h4 class="text-center border-bottom pb-2">O'g'il bolalar uchun mashiqlar</h4>
                        <div class="d-flex justify-content-center  route_Mash7_mx">

                        </div>
                        <div>

                            <div class="border-top  mt-5 pt-3 text-center">
                                <p class="note note-secondary7 m-0"><b style="text-transform: uppercase;">PRESga
                                        ISHLASH</b></p>
                                <div class="mt-2">
                                    <img src="../assets/press7.jpg" alt="" class="w-100">
                                    <div v-show="placeholder_if0">
                                        <h5 class="card-title placeholder-glow">
                                            <span class="placeholder col-12"
                                                style="width: 560px;;height: 315px;"></span>
                                        </h5>
                                    </div>
                                    <div v-show="!placeholder_if0" class="w-100">
                                        <iframe width="560" height="315"
                                            src="https://www.youtube.com/embed/I-mWMuOzDpc?si=baRZNUmfWtJC20Au"
                                            title="YouTube video player" frameborder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen
                                            @load="videoLoaded"></iframe>
                                    </div>

                                </div>
                            </div>

                            <div class="border-top  pt-5 text-center" style="margin-top: 100px;">
                                <p class="note note-secondary7 m-0"><b style="text-transform: uppercase;">GANTEYLGA
                                        ISHLASH</b></p>
                                <div class="mt-2">
                                    <img src="../assets/gantel.jpeg" alt="" class="w-100">
                                    <div v-show="placeholder_if1">
                                        <h5 class="card-title placeholder-glow">
                                            <span class="placeholder col-12"
                                                style="width: 560px;;height: 315px;"></span>
                                        </h5>
                                    </div>
                                    <div v-show="!placeholder_if1" class="w-100 mt-3">
                                        <iframe width="560" height="315"
                                            src="https://www.youtube.com/embed/_Le7cqsyiSA?si=h2uI1C9Pqto6QSS8"
                                            title="YouTube video player" frameborder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen
                                            @load="videoLoaded1"></iframe>
                                    </div>

                                </div>
                            </div>


                            <div class="border-top  pt-5 text-center" style="margin-top: 100px;">
                                <p class="note note-secondary7 m-0"><b style="text-transform: uppercase;">BO'Y O'STIRISH
                                        MASHIQLARI</b></p>
                                <div class="mt-2">
                                    <img src="../assets/boyus.jpg" alt="" class="w-100">
                                    <div v-show="placeholder_if3">
                                        <h5 class="card-title placeholder-glow">
                                            <span class="placeholder col-12"
                                                style="width: 560px;;height: 315px;"></span>
                                        </h5>
                                    </div>
                                    <div v-show="!placeholder_if3" class="w-100 mt-4">
                                        <iframe width="560" height="315"
                                            src="https://www.youtube.com/embed/uU3Wu2A42iQ?si=ChpQ5bYJ8r8v4eaK"
                                            title="YouTube video player" frameborder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen @load="videoLoaded3"></iframe>
                                    </div>

                                </div>
                            </div>
                            
                        </div>

                    </div>
                    <!-- .............................................................................. -->
                </div>
            </div>
            <div class="container mt-5 mb-2">
                <Commt/>
            </div>
        </div>
        <Footer7 />
    </div>
</template>

<script setup>
import Navi from './Navi.vue';
import Footer7 from './Footer7.vue';
import Qapp from './Qapp.vue';
import Commt from './Comments.vue'
import { ref, onMounted, watchEffect } from 'vue';
let fakultetstilll = ref("background: #0a42f85f;color: #fff;  filter: drop-shadow(0 0 5px #9a46ba);");
let fakultet_click = ref("jism");
let placeholder_if0 = ref(true);
let placeholder_if1 = ref(true);
// let placeholder_if2 = ref(true);
let placeholder_if3 = ref(true);
// let placeholder_if4 = ref(true);
// let placeholder_if5 = ref(true);
// let placeholder_div = ref(true);

const videoSrc = 'https://www.youtube.com/embed/2ZrjJUze5ls?si=KEk7UQ44YotCBFD4';

// let videoLoaded_div7 = () => { placeholder_div.value = false; };
let videoLoaded = () => { placeholder_if0.value = false; };
let videoLoaded1 = () => { placeholder_if1.value = false; };
// let videoLoaded2 = () => { placeholder_if2.value = false; };
let videoLoaded3 = () => { placeholder_if3.value = false; };
// let videoLoaded4 = () => { placeholder_if4.value = false; };

</script>

<style scoped>



@media (max-width:576px){
    .route_Mash7_mx{
        
        flex-direction:column;
        align-items: center !important;
        font-size: 12px !important;
    }
    .route_Mash7_mx2DIv h5,h4{
        font-size: 13px !important;
        text-align: center
    }
    .route_Mash7_mx div{
        width: 100% !important;
        font-size: 12px !important;
    } 

    .route_Mash7_mx div iframe{
        width: 100%;
        height: 50%;
    }
    .user_link{
        gap:10px !important;
    }
    #yonalishlar ul {
        padding: none !important;
    }
    .rahbar_mxres{
        flex-direction: column; 
        align-items: center;
    }
    .route_Mash7_mx div .placeholder{
        width: 100% !important;
        height: 150px !important;
    }

    .rahbar_mxres .about_me { 
        padding: none !important;
    }
    .rahbar_mxres>div{
        border:none !important;
    }
}

/* 18-01-05 Project n<-----3#..3 */

/* 18-01-05 Project n<-----3#..3 */

.card-img-top78 {
    object-fit: cover;
    /* box-shadow: -10px 10px 80px rgba(38, 5, 103, 0.386); */
}

.note-secondary79 {
    background: linear-gradient(to right, #dfdeee, #efeded)
}

iframe {
    border-radius: 10px;
}

.note-secondary7 {
    background: #908f9645;
}

.placeholder {
    border-radius: 10px;
}

.about_me li {
    display: flex;
    gap: 5px;
    border-bottom: solid #0404042d 1px !important;
}

#yonalishlar {
    position: sticky !important;
    top: 20px !important;
    /* height: 400px; */
    /* box-shadow: 0 0 10px rgb(122, 85, 255); */
}

body {
    background: #bab8b8 !important;
}

.card {
    width: 34%;
    padding-top: 20px;
    height: 500px !;
    display: flex;
    align-items: center;

    filter: drop-shadow(0 0 10px #bab8b8);
}

#card_img {
    width: 55%;
    border-radius: 40% 10% 40% 10%;
    /* outline: solid #364e91 4px; */
    outline-offset: 7px;
}

.fakellist {
    display: flex;
    flex-direction: column;
    gap: 5px;
}

li {
    list-style: none;
}

.fakellist li {
    list-style: none;
    cursor: pointer;
    padding: 10px;
    background: #ededef;

    border-radius: 2px;
    border: solid #0404042d 1px !important;
}

.fakellist li:hover {
    background: #0a42f83b;
    /* background: #0a42f85f; */
}

body {
    position: relative;
}


</style>