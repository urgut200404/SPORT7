<template>
    <div class="container7">
        <div style=" width: 420px;">
            <form class="form_ajax-frm">
                <MDBDropdown class="nav-item float-end mt-3 me-3" v-model="dropdown1">
                    <MDBDropdownToggle tag="a" class="nav-link drop_menu" @click="dropdown1 = !dropdown1"><i class="fas fa-ellipsis-vertical"></i>
                    </MDBDropdownToggle>
                    <MDBDropdownMenu aria-labelledby="dropdownMenuButton" id="drop_child_pages">
                        <MDBDropdownItem href="/"><i class="fas fa-house"></i> Asosiy Sahifa
                        </MDBDropdownItem>
                        <MDBDropdownItem href="#"><i class="fas fa-repeat"></i> Parolni Tiklash
                        </MDBDropdownItem>
                         <hr>
                        <MDBDropdownItem href="#"><i class="fas fa-repeat d-none"></i> Statistika
                        </MDBDropdownItem>
                    </MDBDropdownMenu>
                </MDBDropdown>
                <div class="p-4 pb-0">
                    <div class="text-center   pb-3">
                        <img src="../assets/logo.png" alt="" class="lg_i">
                        <p>Jizzax davlat pedagogika universiteti </p>
                        <span style="font-size: 12px;">JISMONIY Madaniyat Kafedrasi</span>
                    </div>
                    <div data-mdb-input-init class=" mb-4 ">
                        <input type="email" class="form-control" placeholder="Login" required />
                    </div>
                    <div data-mdb-input-init class="mb-4">
                        <input type="password" class="form-control" placeholder="Parol" required />
                    </div>
                    <div class="row mb-4 ">
                        <div class="col">
                            <div class="form-check">
                                <input class="form-check-input" id="form1Example3" type="checkbox" value="" required />
                                <label class="form-check-label eqolish" for="form1Example3"> Eslab Qolish</label>
                            </div>
                        </div>
                        <div class="col-7">
                            <button data-mdb-ripple-init type="submit"
                                class="btn btn_submit btn-block shadow-none">Kirish</button>
                        </div>
                    </div>
                </div>
                <button type="button" data-mdb-ripple-init class="btn w-100 btn-outline-dark with_hemis">Hemis orqali
                    kirish</button>
            </form>
            <p class="v-dev"> <b>Dastur versiyasi</b>: 0.9.20 / <b>UID:</b> 351 / <b>Sana: </b>{{ vaqt }}</p>
        </div>
    </div>




    <n-space vertical class="d-none">
        <n-qr-code :value="text" />
        <n-input v-model:value="text" :maxlength="60" type="text" />
    </n-space>

    <div class="login-container d-none">
        <h1>Login</h1>
        <div class="number-animate" number-animate-start="10" number-animate-end="110" number-animate-increment="1">
        </div>
        <div class="number-animate" number-animate-start="7500" number-animate-end="8000" number-animate-increment="2">
        </div>
        <form>
            <!-- Login formasi maydonlari -->
        </form>
    </div>
</template>

<script setup>
// Initialization for ES Users
// import { Input, Ripple, initMDB } from "mdb-ui-kit";
// initMDB({ Input, Ripple }); 
import { defineComponent, ref, onMounted } from "vue";
import { MDBBtn, MDBIcon, MDBNavbar, MDBNavbarToggler, MDBNavbarBrand, MDBNavbarNav, MDBNavbarItem, MDBCollapse, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from 'mdb-vue-ui-kit';

const vaqt = ref('');
const dropdown1 = ref(false);
const timeFung = () => {
    const data = new Date();
    const yil = data.getFullYear();
    const oy = String(data.getMonth() + 1).padStart(2, '0');
    const kun = String(data.getDate()).padStart(2, '0');
    const soat = String(data.getHours()).padStart(2, '0');
    const minut = String(data.getMinutes()).padStart(2, '0');
    const sekund = String(data.getSeconds()).padStart(2, '0');

    vaqt.value = `${kun}:${oy}:${yil}   ${soat}:${minut}:${sekund}`;
};

onMounted(() => {
    timeFung();
    setInterval(timeFung, 1000);
});

// const text = ref("The rain dampened the sky");
const startCounterAnimation = () => {
    const counters = document.getElementsByClassName('number-animate');

    for (let i = 0; i < counters.length; i++) {
        const counter = counters[i];
        const startNumber = +counter.getAttribute('number-animate-start');
        const target = +counter.getAttribute('number-animate-end');
        const delay = +counter.getAttribute('number-animate-delay');
        const add = +counter.getAttribute('number-animate-increment');
        let current = startNumber;
        let animationId;
        let isInView = false;

        const updateCounter = () => {
            if (current >= target) {
                clearInterval(animationId);
            } else if (add) {
                current += add;
                counter.textContent = current;
            } else {
                current++;
                counter.textContent = current;
            }
        };

        const checkInView = () => {
            const rect = counter.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;

            const inView = (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= windowHeight
            );

            if (inView && !isInView) {
                isInView = true;
                current = startNumber;
                counter.textContent = current;
                animationId = setInterval(updateCounter, delay);
                counter.style.opacity = 1;
            } else if (!inView && isInView) {
                isInView = false;
                clearInterval(animationId);
                current = startNumber;
                counter.textContent = current;
                counter.style.opacity = 0;
            }
        };

        window.addEventListener('scroll', checkInView);
        window.addEventListener('resize', checkInView);
        checkInView(); // Check if already in view on page load
    }
};

// Call the function when the component is mounted
onMounted(() => {
    startCounterAnimation();
});
</script>

<style scoped>
.dropdown-toggle::after{
    display: none;
}


input {
    font-size: 14px !important;
    border-radius: 1px !important;
}

.v-dev {
    font-size: 13px;
    text-align: center;
    margin-top: 15px;
}

button {
    text-transform: capitalize !important;
    font-size: 13px;
    font-weight: normal;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    color: #fff !important;
}

.eqolish {
    font-size: 12px;
}

.with_hemis {
    background: #605ca8 !important;
    border: none;
    border-radius: 0;
}

.lg_i {
    width: 20%;
}

.btn_submit {
    background: #367fa9 !important;
    color: #fff;
    border-radius: 1px;
}

.login-container {
    /* Usul, ranglar va dizayn */
}

.number-animate {
    font-size: 2em;
    /* Misol uchun, kattalashtirish */
    opacity: 0;
    /* Dastlab ko'rinmaydi */
    transition: opacity 0.5s;
    /* O'zgarishlar uchun silliq o'tish */
}

.container7 {
    display: flex;
    justify-content: center !important;
    align-items: center;
    height: 100vh;
    background: rgba(244, 244, 244, 0.703) !important;
}

.form_ajax-frm {
    width: 420px;
    background: #fff !important;
    border: solid 0.2px rgb(220, 222, 222);
    border-radius: 5px 5px 0 0;
    border-top: solid rgb(6, 155, 6);
}
</style>