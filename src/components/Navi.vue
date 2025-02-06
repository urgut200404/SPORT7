<template >
    <div class="bg-primary">

        <div class="container d-flex justify-content-between align-items-center" id="top_navi">
            <div class="text-light d-flex gap-4 h6 pt-4 pb-3 top_icons_gr w-25">
                <a href="https://t.me/jdpuuz" class="text-light"><i class="fab fa-telegram ms-2"></i></a>
                <a href="https://instagram.com/jdpuuz" class="text-light"><i class="fab fa-instagram ms-2"></i></a>
                <a href="https://facebook.com/jdpuuz" class="text-light"><i class="fab fa-facebook ms-2"></i></a>
                <a href="https://youtube.com/jdpuuz" class="text-light"><i class="fab fa-youtube ms-2"></i></a>
                
            </div>
            

            <div class=" w-50 mb-2">
                <form class="d-flex input-group ">
                    <input type="search" class="form-control" v-model="input_value" placeholder="Saytdan Malumot izlang" aria-label="Search" />
                    <MDBBtn outline="light"  @click="search_books_fung"  style="background:rgb(46, 82, 159); border: solid rgb(203, 207, 217);">
                        <i class="fas fa-search" />
                    </MDBBtn>

                </form>
            </div>
            <!-- <div class="d-flex " style="height: 40px;">
                <img src="../Images/Logo.png" alt=""> ,
                <select name="" id="" class="form-select">
                    <option :value="lang.text" v-for="lang in language" :key="lang.id"><span>{{ lang.text }}</span>
                    </option>

                </select>

            </div> -->

            <MDBNavbar expand="lg"  container class="language">
                <MDBNavbarNav>
                    <!-- Icon dropdown -->
                    <MDBDropdown class="nav-item lang_still" v-model="dropdown5">
                        <MDBDropdownToggle tag="a" class="nav-link" @click="dropdown5 = !dropdown5">
                            <MDBIcon  flag="flag flag-uzbekistan" class="m-0 united_kingdom"></MDBIcon>
                        </MDBDropdownToggle>
                        <MDBDropdownMenu>
                            <MDBDropdownItem href="#">
                                <MDBIcon flag="flag flag-uzbekistan" />Uzbekistan
                                <MDBIcon icon="check" class="text-success ms-2"></MDBIcon>
                            </MDBDropdownItem>
                            <MDBDropdownItem divider />
                            <MDBDropdownItem href="#">
                                <MDBIcon flag="poland" />Polski
                            </MDBDropdownItem>
                             
                             
                        </MDBDropdownMenu>
                    </MDBDropdown>
                </MDBNavbarNav>
            </MDBNavbar>
        </div>
        <div>

        </div>
        <div class="bg-light border-bottom ">

            <div class="container">
                <MDBNavbar expand="lg" light class="text-light pb-0" container>
                    <MDBNavbarBrand href="#">
                        <a href="/">
                            <img src="../assets/channels4_profile.jpg" alt="" id="web_logo">
                        </a>
                        <div class="logo_text ms-1">
                            <!-- <p>Samarqand Davlat Unversititi <br> Urgut Filali, Online Kutubxona <br>Markazi </p> -->
                            <p><span class="onlLi">JDPU</span> <br> <span style="font-size: 15px;">O'z Sog'lig'ingizni Nazorat qiling</span></p>
                            <p></p>
                        </div>
                    </MDBNavbarBrand>
                    <MDBNavbarToggler @click="collapse1 = !collapse1" target="#navbarSupportedContent"></MDBNavbarToggler>
                    <MDBCollapse v-model="collapse1" id="navbarSupportedContent" class="text-light ">
                        <MDBNavbarNav class="mb-2 mb-lg-0 ms-auto">
                            <MDBNavbarItem :to="{name:'home'}" active>
                                Main Page
                            </MDBNavbarItem> 
                            <MDBNavbarItem>
                                <!-- Navbar dropdown -->
                                <MDBDropdown class="nav-item" v-model="dropdown1">
                                    <MDBDropdownToggle tag="a" class="nav-link drop_menu" @click="dropdown1 = !dropdown1">
                                        Jismoniy tarbiya va sog‘lom turmush tarzi
                                    </MDBDropdownToggle>
                                    <MDBDropdownMenu aria-labelledby="dropdownMenuButton" id="drop_child_pages">
                                        <router-link :to="{name:'jdpu'}" class="dropdown-item">JDPU Ta'lim  Yo'nalishlar</router-link>
                                        <router-link :to="{name:'jdpu'}" class="dropdown-item">Ilmiy Maqolalar</router-link>
                                        <router-link :to="{name:'smhealth'}" class="dropdown-item">Samsung Heath haqida malumot</router-link>
                                        <router-link :to="{name:'seven'}" class="dropdown-item">Sog‘lom turmush tarzi va uning 7 qoidasi</router-link>
                                        <router-link :to="{name:'ggfit'}" class="dropdown-item">Google Fit haqida malumot</router-link>
                                        <router-link :to="{name:'strava'}" class="dropdown-item">Strava haqida malumot</router-link>

                                        <!-- <MDBDropdownItem >  Sport va To'g'ri Ovqatlanish</MDBDropdownItem> -->
                                        <MDBDropdownItem >Ilmiy Maqolalar</MDBDropdownItem> 
                                    </MDBDropdownMenu>
                                </MDBDropdown>
                            </MDBNavbarItem>
                            <MDBNavbarItem to="/boys" class="boys77">
                                O'g'il bolalar uchun

                            </MDBNavbarItem>

                            <MDBNavbarItem to="/girls">
                                Qizlar uchun
                            </MDBNavbarItem>
                            <MDBNavbarItem to="/jdpu">
                                Main Jdpu Uz 
                            </MDBNavbarItem>
                        </MDBNavbarNav>
                        <!-- Search form -->

                        <div v-if="sigin_login" class="mb-4">
                            <router-link :to="{name:'logins'}" class="btn text-dark btn-outline-primary" outline="primary">Kirish</router-link>
                            <!-- <MDBBtn outline="primary">Kirish</MDBBtn> -->
                            <MDBBtn outline="primary" class="d-none"> Sigin Up</MDBBtn>
                        </div>
                        <div class="ms-4" v-else>
                            <MDBDropdown class="nav-item" v-model="dropdown2">
                                <MDBDropdownToggle tag="a" class="nav-link drop_menu" @click="dropdown2 = !dropdown2">
                                    <MDBBtn outline="primary rounded-5 users_m">
                                        <!-- <i class="fas fa-user"></i> -->
                                    </MDBBtn>
                                </MDBDropdownToggle>
                                <MDBDropdownMenu aria-labelledby="dropdownMenuButton" id="drop_child_pages">
                                    <MDBDropdownItem href="#"><i class="fas fa-user"/> Profile</MDBDropdownItem>
                                    <MDBDropdownItem href="#" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" ><i class="fas fa-cog"/> Settings</MDBDropdownItem>
                                    <MDBDropdownItem href="#"><i class="fas fa-check"/> Check Books</MDBDropdownItem>
                                    <MDBDropdownItem href="#"><i class="fas fa-sign-out-alt"/> Log out</MDBDropdownItem>
                                    
                                </MDBDropdownMenu>
                            </MDBDropdown>
                        </div>

                    </MDBCollapse>
                </MDBNavbar>
            </div>

        </div>
        
    </div>
</template>

<script setup>
import { ref, watchEffect} from 'vue';
import { MDBBtn, MDBIcon, MDBNavbar, MDBNavbarToggler, MDBNavbarBrand, MDBNavbarNav, MDBNavbarItem, MDBCollapse, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from 'mdb-vue-ui-kit';

// const collapse7 = ref(false);
import { useRouter } from 'vue-router';
const collapse1 = ref(false);
const dropdown1 = ref(false);
const dropdown2 = ref(false);
const dropdown5 = ref(false);
let router = useRouter();
const sigin_login = ref(true);

// let language = ref([
//     { "id": 0, "text": "UZB", "images": new URL("../Images/Logo.png", import.meta.url) },
//     { "id": 1, "text": "RU", "images": new URL("../Images/Logo.png", import.meta.url) },
//     { "id": 2, "text": "ENG", "images": new URL("../Images/Logo.png", import.meta.url) },
// ])

let input_value = ref();
let search_books_fung = (async()=>{
    router.push({path:`/search`})
})
// let search_books_fung = async () => {
//     router.push({ name: 'jdpu', params: { text7: input_value.value } }); // "search" marshrut nomini ishlatish
// };

</script>
<style  scoped>

.boys77{
    overflow: hidden; 
    white-space: nowrap; 
    /* text-overflow: ellipsis; */
}
/* responsive  uchun stillar  */

@media (max-width:576px){
    #top_navi{
        flex-direction: column !important;
    }
    
    #top_navi div {
        width: 100% !important;
    }
    .language{
        display: none;
    }
}
 
 
.onlLi{
    color: rgb(124, 38, 205);
}

#web_logo{
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 50%;
}
.top_icons_gr i {
    width: 20px !important;
    height: 20px !important;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    outline-offset: 4px;
    outline: solid 2px;
    outline-color: #ffff;
    transition: all ease 0.5s !important;
}

.top_icons_gr i:hover {
    outline: none;
    transform: scale(1.5);
}

 
.navbar {
    border: none !important;
    box-shadow: none;
}

.nav-item .border_still_navs {
    color: #ffff !important;
}

.users_m {
    border-radius: 50% !important;
    width: 50px !important;
    height: 50px !important;
    background: url("../assets/user12.png");
    background-size: cover;

}

#drop_child_pages {
    background: #f9f9f9 !important;
    color: #fff;
    box-shadow: 0 0 10px #878686;
    border-radius: 5px !important;
}

#drop_child_pages a:hover {
    background: #e9e7e7 !important;
}

select {
    font-family: sans-serif;
    font-size: 15px !important;
    border-radius: 20% !important;
}

.logo_text {
    position: relative !important;
    height: 90px !important;
    font-size: 15px;
    font-weight: 600;
    font-variant: normal;
    text-align: justify !important;
    display: flex !important;
    align-items: center !important;
}
.lang_still{
    /* background: #ffffff !important; */
    /* box-shadow: 0 0 10px rgb(235, 236, 238); */
    border-radius: 50%;
    /* outline: solid 2px ; */
    outline-color: #fff;
    outline-offset: 5px; 
}

.united_kingdom{
    width: 20px !important; 
}


[type="search"]{
    background:rgb(46, 82, 159); 
    outline: none !important;
    border: none !important;
    height: 35px ;
    color: #fff;
}

[type="search"]::placeholder{color: #d4cece;}
</style>