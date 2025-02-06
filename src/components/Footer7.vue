<template>
 <div class="ft_bgs_google">
    <div class="container">
        <MDBFooter :text="['center', 'lg-start', 'muted']" style="background: none !important;">
            <!-- Section: Social media -->
            <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom text-light">
                <!-- Left -->
                <div class="me-5 d-none d-lg-block">
                    <span>Jismoniy Madaniyat Kafedrasi</span>
                </div>
                <!-- Left -->

                <!-- Right -->
                <div>
                    <a href="" class="me-4 text-reset">
                        <MDBIcon class="link-secondary" iconStyle="fab" icon="facebook-f"></MDBIcon>
                    </a>
                    <a href="" class="me-4 text-reset">
                        <MDBIcon class="link-secondary" iconStyle="fab" icon="twitter"></MDBIcon>
                    </a>
                    <a href="" class="me-4 text-reset">
                        <MDBIcon class="link-secondary" iconStyle="fab" icon="google"></MDBIcon>
                    </a>
                    <a href="" class="me-4 text-reset">
                        <MDBIcon class="link-secondary" iconStyle="fab" icon="instagram"></MDBIcon>
                    </a>
                    <a href="" class="me-4 text-reset">
                        <MDBIcon class="link-secondary" iconStyle="fab" icon="linkedin"></MDBIcon>
                    </a>
                    <a href="" class="me-4 text-reset">
                        <MDBIcon class="link-secondary" iconStyle="fab" icon="github"></MDBIcon>
                    </a>
                </div>
                <!-- Right -->
            </section>
            <!-- Section: Social media -->

            <!-- Section: Links  -->
            <section class="">
                <MDBContainer class="text-center text-md-start mt-5">
                    <!-- Grid row -->
                    <MDBRow class="mt-3">
                        <!-- Grid column -->
                        <MDBCol md="3" lg="4" xl="3" class="mx-auto mb-4">
                            <!-- Content -->
                            <h6 class="text-uppercase fw-bold mb-4 text-light">
                                <img src="../assets/logo.png" alt="" class="logo_js_jdpu"> 
                            </h6>
                            <p class="text-light">
                                Bizni Ilovani yuklab oling
                            </p>
                            <p class="d-flex">
                               <a href="#"> <button class="btn  p-0 down_btn"><img src="../assets/ggplay.jpg" class="w-100 h-75 rounded-2"></button></a>
                                <a href="#"><button class="btn  p-0 down_btn"><img src="../assets/apstore.png" class="w-100 h-100"></button></a>
                            </p>
                        </MDBCol>
                        <!-- Grid column -->

                        <!-- Grid column -->
                        <MDBCol md="2" lg="2" xl="2" class="mx-auto mx78 mb-4 text-light">
                            <!-- Links -->
                            <h6 class="text-uppercase fw-bold mb-4 text-warning borlink">Products</h6>
                            <p>
                                <a href="/" class="text-reset borlink7878">Bosh Menu</a>
                            </p>
                            <p>
                                <a href="#!" class="text-reset borlink7878">Sayt haqida</a>
                            </p>
                            <p>
                                <a href="#!" class="text-reset borlink7878">Qo'llanma</a>
                            </p>
                            <p>
                                <a href="/login" class="text-reset borlink7878">Tizimga kirish</a>
                            </p>
                            <p>
                                <a href="#!" class="text-reset borlink7878">JDPU Ta'lim yo'nalishlari</a>
                            </p>
                        </MDBCol>
                        <!-- Grid column -->

                        <!-- Grid column -->
                        <MDBCol md="3" lg="2" xl="2" class="mx-auto mx78 mb-4 dspnone text-light">
                            <!-- Links -->
                            <h6 class="text-uppercase fw-bold mb-4 text-warning borlink">Useful links</h6>
                            <p>
                                <a href="/seven" class="text-reset borlink7878 ">Togri ovqatlanish</a>
                            </p>
                            <p>
                                <a href="/#mashuskunalari" class="text-reset borlink7878">Mashq qilish uskunalari</a>
                            </p>
                            <p>
                                <a href="/girls" class="text-reset borlink7878">Qiz bolalar uchun</a>
                            </p>
                            <p>
                                <a href="/boys" class="text-reset borlink7878">O'g'il bollalar uchun</a>
                            </p>

                            <p>
                                <a href="/boys" class="text-reset borlink7878">Main Jdpu UZ</a>
                            </p>
                        </MDBCol>
                        <!-- Grid column -->

                        <!-- Grid column -->
                        <MDBCol md="4" lg="3" xl="3" class="mx-auto mx78 mb-md-0 mb-4 text-light">
                            <!-- Links -->
                            <h6 class="text-uppercase fw-bold mb-4 text-warning borlink">Contact</h6>
                            <p>
                                <i class="fas fa-home me-3 link-light"></i> Uzbekistan, Jizzax
                            </p>
                            <p>
                                <i class="fab fa-telegram me-3 link-light"></i>
                                 @jdpu_axborot_bot
                            </p>
                            <p>
                                <MDBIcon icon="phone" class="link-light" /><sub class="me-2">1</sub>
                                +(99872) 226 68 10
                            </p>
                            <p>
                                <MDBIcon icon="phone" class="link-light" /><sub class="me-2">2</sub>
                                +(99872) 221 55 16 
                            </p>
                            <p class="send_msg">
                                <!-- <input type="text"><button><i class="fas fa-paper-plane"/></button> -->
                                <div class="d-lg-block">
                                        <form class="d-flex input-group p-0" action="https://t.me/jdpu_axborot_bot" method="get">
                                            <input type="text" class="form-control text-light" placeholder="Biz bilan boglaning"
                                                aria-label="text" required />
                                            <MDBBtn class="bg-dark telegram_icon_uchun" type="submit">
                                                <MDBIcon class="text-light fs-4" iconStyle="fab" icon="telegram"></MDBIcon>
                                            </MDBBtn>
                                        </form>
                                    </div>
                            </p>
                        </MDBCol>
                        <!-- Grid column -->
                    </MDBRow>
                    <!-- Grid row -->
                </MDBContainer>
            </section>
            <!-- Section: Links  -->

            <!-- Copyright -->
            <div class="text-center p-4 text-warning" style="background-color: rgba(0, 0, 0, 0.05)">
                © {{ new Date().getFullYear() }} Copyright:
                <a class="text-reset fw-bold" href="#">MAIN.JDPU.UZ</a>
            </div>
            <!-- Copyright -->
        </MDBFooter>
    </div>
 </div>
</template>

<script setup>
import { MDBFooter, MDBIcon, MDBRow, MDBCol, MDBContainer , MDBBtn} from "mdb-vue-ui-kit";
import {ref} from "vue";
</script>

<style scoped>
.telegram_icon_uchun {
    /* background: rgba(233, 99, 10, 0.789) !important; */
    background: rgba(246, 123, 9, 0.842) !important;
}


#iconlar_va_forma_uchunn {
    z-index: 100 !important;
}

form [type="text"] {
    /* background: #3e3a3a; */
    background: #323030 !important;
    color: #ffff;
    border: none;
    height: 48px;
} 
::placeholder{color: #ffffff66;}
.logo_js_jdpu{
    width: 40%;
}

.mx78 p{position: relative;padding-bottom: 1px;transition: ease 0.3;}
.mx78 p::before{
    content: "";
    position: absolute;
    bottom: 0;
    width: 0%;
    height: 2px;
    background:linear-gradient(to left, transparent , orange);
    transition: ease 0.3s;
}
.mx78 p:hover::before{
    width: 100%;
}
.mx78 p:hover{
    color:orange;
}

.ft_bgs_google{
    background-image: url("../assets/AoWnqAMaZvUO6tA7UXBuSYsczEVZ9PxDb9dCMFht_WTe_0GVW031Uo38C1JfL8pej8BcqgaykuPif3YMWsDvBv6XGRmaqWuMq0-c0Q.avif");
    background-size: cover;
    background-repeat: no-repeat;
    filter: brightness(90%);
}

/* .borlink7878::before{
    content: "";
    position: absolute;
    width: 0%;
    transition:ease 0.5s;
    height: 2px;
    background: orange;
    bottom: 0;
}

.borlink7878:hover::before{
    width: 100%;
} */
@media (max-width:576px){
    .dspnone{
        display: none;
    }
}

.down_btn{
    width: 150px;
    height: 50px;
}

.down_btn img{
    object-fit: cover
}
</style>