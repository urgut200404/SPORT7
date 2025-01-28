<template>
    <div>
        <Navi />
        <div class="">

            <div class="carusel_st">
                <n-carousel :space-between="20" draggable autoplay class="w-100 h-100">
                    <img class="carousel-img" src="../assets/sem111.jpg">
                    <img class="carousel-img" src="../assets/uzb111.jpg">
                    <img class="carousel-img" src="../assets/sm3.webp">
                </n-carousel>
            </div>

        </div>

        <div class="container pt-5">
            <h2 class="text-center">Sog‘lom turmush tarzi va uning yetti qoidasi</h2>
            <!-- <img src="../assets/sm77.webp" alt=""> -->
            <div>
                <p class="note note-secondary7 m-0 mb-2"><b style="text-transform: uppercase;">1. Sport</b></p>
                <p>Sport — umrimiz oxiriga qadar sog‘lom hayot kechirishning asosiy shartlaridan. U yosh ham, joy ham,
                    hattoki shart-sharoit ham tanlamaydi. Uning ko‘rinishlari, shakllari, usullari ko‘p. Yoga, pilates,
                    piyoda yurish, yugurish, turnikka tortilish, otjimaniya, raqs, rafting, bodibilding, gimnastika,
                    futbol va hokazo turlari bor. Istaganingizni tanlang, jismonan faol bo‘lsangiz kifoya. Har kuni
                    emas, kunora 30-60 daqiqa sport bilan shug‘ullansangiz, sog‘lom bo‘lishingiz uchun yetarli. Kamroq
                    o‘tirish va ko‘proq harakatlanish kerak. Agarda kasbingiz o‘tirib ishlashni taqozo etsa, har soatda
                    kamida 5 daqiqa tanaffus qiling va bu vaqtda turli yengil mashqlarni bajarib, yelka, bel va oyoqlar
                    chigilini yozing.</p>
                <div>
                    <div>

                    </div>
                    <div></div>
                </div>
            </div>
            <div class="mb-5">
                <p class="note note-secondary7 m-0 mb-2"><b style="text-transform: uppercase;">2. To‘g‘ri
                        ovqatlanish</b></p>
                <p>Ovqatlanish rasioningizga tabiiy mahsulotlar — meva va sabzavotlar, vitamin va minerallarga boy
                    oziq-ovqatlarni ko‘proq kiriting. Ovqatlanish rasionining 65 foizini meva va sabzavotlar, non va
                    turli bo‘tqalar tashkil etishi, 30 foizi go‘sht va sut mahsulotlari, 5 foizi shirinlik va yog‘larga
                    ajratilishi lozim. Ozuqalar imkon qadar yangi, mavsumga mos bo‘lishi lozim. Bahor va yozda
                    o‘simliklar, qishda oqsil va yog‘ga boy mahsulotlarga ko‘proq o‘rin ajratilishi lozim. Har kuni 2
                    litr atrofida suv iching. Fast-fud, gazli ichimliklar, yarim tayyor mahsulotlar, chips va
                    kiriyeshkilar, boshqa ko‘plab sun’iy ta’m, rang va shakl berilgan ozuqalardan voz keching.
                    Ovqatlanishda xilma-xil taomlarni aralashtirib yubormaslik lozim. Mevalar ovqatdan yarim soat avval,
                    choy va ichimliklar 1-2 soat keyin iste’mol qilinishi zarur. Kechki 19-00dan keyin faqatgina bir oz
                    olma tanovvul qilishga ijozat beriladi.</p>
                <div class="d-flex pt-3">
                    <div class="w-50">
                        <img src="../assets/ovqat1.jpg" alt="" class="w-75">
                    </div>
                    <div class="w-50">
                        <!-- <CanvasJSChart :options="options" /> -->
                        <div class="container">
                           <!-- <CanvasJSChart :options="newVSReturningVisitorsOptions" @chart-ref="chartRef"
                                :styles="styleOptions" /> -->
                            <button class="back-button" v-if="showBackButton" @click="handleClick"
                                :style="buttonStyle">&lt; Back</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="pt-3">
                <p class="note note-secondary7 m-0 mb-2"><b style="text-transform: uppercase;">3. Zararli odatlar.</b>
                </p>
                <div class="row pt-5">
                    <div class="col">
                        <img src="../assets/nosm7.webp" alt="" class="w-75">
                    </div>
                    <div class="col d-flex border-none" style="justify-content: center;">
                        <!-- <img src="../assets/nosm6.webp" alt="" class="w-75"> -->
                        <div class="card w-100" style="width: 18rem;">
                            <img src="../assets/nosm6.webp" class="card-img-top" alt="Sunset Over the Sea" />
                            <div class="card-body">
                                <b class="card-text">Organizmimizning asosiy dushmanlaridan bo‘lmish tamaki va alkogol
                                    mahsulotlari, turli zararli odatlar
                                    (ularni o‘zingiz yaxshi bilasiz)dan voz kechish orqali sog‘lom turmush tarziga keng
                                    yo‘l oching. Har
                                    bir chekilmagan sigaret, ichilmagan har bir stakan aroq sizning sog‘lom hayot
                                    kechirish sari
                                    tashlagan muhim qadamingizdir. </b>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <p class="note note-secondary7 m-0 mb-2"><b style="text-transform: uppercase;">4. Kun tartibi</b></p>
                <p>Kun tartibiga qat’iy rioya eting. Birinchi navbatda — 8 soatlik uyqu! Ikkinchidan, kunning bir
                    vaqtida uxlash va muayyan vaqtida uyg‘onishga odatlanish! Uyquning buzilishi asta-sekinlik bilan
                    inson ruhiyati, hissiyotlariga ziyon yetkazadi, ishchanlik kayfiyatini yo‘qotadi, keyinchalik turli
                    surunkali, jiddiy xastaliklarning rivojlanishiga sabab bo‘lishi mumin.</p>
                <p>
                    Yetarli uyqu (7-8 soat) – Statistikaga ko‘ra, sog‘lom turmush uchun kuniga o‘rtacha 7-8 soat uyqu
                    tavsiya etiladi. Uyqu yetishmasligi stress, charchoq va surunkali kasalliklarni keltirib chiqarishi
                    mumkin.
                    <br>
                    Erta uyg‘onish va jismoniy mashqlar (30 daqiqa) – Kuniga kamida 30 daqiqa jismoniy mashqlar bilan
                    shug‘ullanish sog‘lig‘ingiz uchun foydali hisoblanadi. Bu yurak-qon tomir tizimini mustahkamlaydi va
                    kayfiyatni yaxshilaydi.
                    <br>
                    Toza havo (1 soat) – Har kuni toza havoda kamida bir soat vaqt o‘tkazish ham sog‘lom turmush
                    qoidalaridan biri. Bu nafaqat o‘pka salomatligini, balki ruhiy holatni ham yaxshilaydi.
                    <br>
                    Suv ichish (8 stakan) – Organizmdagi suv balansini saqlash uchun kuniga kamida 8 stakan suv ichish
                    tavsiya etiladi. Bu tana energiyasini saqlab qolishda muhim rol o‘ynaydi.
                    <br>
                    Sog‘lom ovqatlanish (3-5 mahal) – Sog‘lom ovqatlanishning ahamiyati katta. Kunda 3-5 mahal
                    muvozanatli ovqat iste’mol qilish organizmning to‘g‘ri ishlashiga yordam beradi.
                    <br>
                    Texnologiyadan uzoqlashish va dam olish (1-2 soat) – Har kuni kamida 1-2 soat texnologiyadan
                    uzoqlashish va dam olish tavsiya etiladi. Bu ko‘zlar va ruhiy salomatlik uchun foydalidir.
                    <br>
                    O‘zini rivojlantirish (kitob o‘qish yoki yangi ko‘nikma o‘rganish) – Har kuni kamida 30 daqiqa
                    o‘zini rivojlantirish uchun ajratish tavsiya etiladi. Bu intellektual rivojlanishga yordam beradi.
                </p>

                <div class="mt-5 mb-5">
                   <!-- <CanvasJSChart :options="chartOptions" /> -->
                </div>
            </div>
            <div>
                <p class="note note-secondary7 m-0 mb-2"><b style="text-transform: uppercase;">5. Ijobiy kayfiyat</b>
                </p>
                <p>Sog‘lom turmush tarzining yana bir muhim qoidasi — yorqin va ijobiy kayfiyat! Hayotdan ko‘proq zavq
                    oling, muvaffaqiyatsizlik, omadsizliklarga ko‘p e’tibor qaratmang, doimo olg‘a intilish uchun kuch
                    topa biling va odamlarga nisbatan g‘araz, gina-kudurat, yomon gumonlar saqlab yurmang, kechirimli,
                    bag‘rikeng bo‘ling. Nodonlar bilan aslo tenglasha ko‘rmang!</p>
                <p>
                    Kunlik stressni kamaytirish (30 daqiqa) – Tadqiqotlar shuni ko‘rsatadiki, kuniga kamida 30 daqiqa
                    davomida dam olish yoki kayfiyatni ko‘taradigan mashg‘ulotlar (masalan, yoga, nafas mashqlari yoki
                    sevimli hobbi) stressni kamaytiradi va ijobiy kayfiyatni saqlaydi.

                    Muloqot va ijtimoiy faoliyat (60 daqiqa) – Ijobiy kayfiyat uchun kun davomida kamida 60 daqiqa
                    yaqinlar bilan muloqot qilish tavsiya etiladi. Bu hayotdan qoniqish hissini oshirib, ruhiy
                    mustahkamlikni mustahkamlaydi.

                    Tabassum va kulish – Kulish kayfiyatni yaxshilaydi va immun tizimiga ijobiy ta'sir qiladi.
                    Tadqiqotlarga ko‘ra, kun davomida ko‘proq kulish odamlarni yanada ijobiyroq qiladi.

                    Shukrona (minnatdorlik) hissi – Har kuni shukrona yoki minnatdorlik his qilish va yozib borish
                    stressni kamaytirib, kayfiyatni yaxshilashga yordam beradi. Har kuni 5 daqiqa o‘z hayotidagi yaxshi
                    narsalarga minnatdorlik bildirish ruhiy holatga ijobiy ta'sir ko‘rsatadi.

                    Tabiatda sayr qilish (15-30 daqiqa) – Tabiat qo‘ynida vaqt o‘tkazish kayfiyatni yaxshilaydi.
                    O‘rganishlar shuni ko‘rsatadiki, 15-30 daqiqa davomida tabiat qo‘ynida bo‘lish hissiy farovonlikni
                    oshiradi.

                </p>
            </div>
            <div class="">
                <p class="note note-secondary7 m-0 mb-2"><b style="text-transform: uppercase;">6. Toza Havo</b></p>
                <div class="san_zm">
                </div>
                <div class="pt-1">
                    <p>Uyingiz, xona va ish kabinetingizni doimo toza tuting, har kuni uni artib-tozalang,
                        derazalarni
                        ochib, toza havo kirishini ta’minlang. Normal jismoniy holatda bo‘lish uchun albatta chuqur
                        va
                        to‘g‘ri nafas olishni bilish lozim. Tabiat qo‘ynida sayr qilish, oynalarni ma’lum muddat
                        ochib
                        qo‘yish, tomorqa yoki ochiq havoda jismoniy mehnat qilishga yetadigani yo‘q.</p>
                    <p>
                        “Toza havo” sog‘lom turmush tarzining ajralmas qismi bo‘lib, kundalik hayotda uni yetarli
                        miqdorda
                        olish ruhiy va jismoniy salomatlik uchun katta ahamiyatga ega. Quyidagi tushuntirish va
                        statistik
                        ma’lumotlar toza havoda bo‘lishning foydalari haqida ma'lumot beradi:

                        Yurak va o‘pka salomatligini yaxshilaydi – Tadqiqotlar shuni ko‘rsatadiki, toza havoda sayr
                        qilish
                        o‘pka salomatligini yaxshilash va yurak-qon tomir tizimini mustahkamlashga yordam beradi.
                        Yengil
                        shamol va o‘rmon havosi ayniqsa foydali bo‘lib, unda ko‘proq kislorod bor.

                        Kundalik 15-30 daqiqa tavsiya etiladi – Kun davomida kamida 15-30 daqiqa davomida toza
                        havoda
                        bo‘lish tavsiya etiladi. Bu nafaqat tana, balki miya uchun ham foydali bo‘lib,
                        konsentratsiyani
                        oshiradi va kayfiyatni ko‘taradi.

                        Stressni kamaytiradi va kayfiyatni yaxshilaydi – Tabiatda va toza havoda vaqt o‘tkazish
                        stressni
                        kamaytirishga yordam beradi. Tabiat tovushlari va toza havo nerv tizimini tinchlantirib,
                        organizmda
                        "baxt gormoni" sifatida tanilgan serotoninni oshiradi.

                        Immun tizimini mustahkamlaydi – Toza havoda yurish va ayniqsa o‘rmon hududlarida vaqt
                        o‘tkazish
                        immunitetni kuchaytiradi. Tabiiy muhitda o‘simliklardan ajralib chiqadigan fitontsidlardan
                        foyda
                        olish mumkin, bu moddalar bakteriyalarni o‘ldirish xususiyatiga ega.

                        Uyqu sifatini yaxshilaydi – Toza havoda vaqt o‘tkazish uyqu sifatini yaxshilashga yordam
                        beradi.
                        Ayniqsa, kun bo‘yi toza havoda bo‘lish melatonin gormonining yaxshi ishlab chiqilishiga
                        yordam
                        beradi, bu esa uyquni yaxshilaydi.

                        Vue loyihangizda bu qoidani diagrammada aks ettirish uchun kun davomida toza havoda
                        o‘tkazish
                        kerak
                        bo‘lgan vaqtni yoki uning salomatlikka ta'sirini ko‘rsatadigan grafik yaratishingiz mumkin.
                        Masalan,
                        quyidagi ma'lumotlarni kiritishingiz mumkin:

                        Har kuni 15-30 daqiqa toza havoda bo‘lish tavsiya qilinadi.
                        Stressni kamaytirish va immunitetni mustahkamlash uchun haftasiga kamida 3-5 marta toza
                        havoda
                        yurish foydali.
                    </p> 
                </div>
            </div>
            <div>
                <p class="note note-secondary7 m-0 mb-2"><b style="text-transform: uppercase;">7. Shaxsiy gigiyena.</b>
                </p>
                <p>Ovqatlanishdan avval va keyin albatta qo‘llarni yuvish, uyqudan oldin va ovqatlangandan keyin
                    tishlarni tozalash, toza kiyim, umuman, tozalikka qat’iy rioya etish sog‘lom turmush tarzining
                    asosiy shartlaridan hisoblanadi. Unutmang! Sog‘lom turmush tarzi, bu — har qanday kasalliklar
                    profilaktikasi va salomatlik, kuch-quvvat garovidir. U insonning turli qirralarini rivojlantirish,
                    muvaffaqiyatga erishish garovidir. Sog‘lom turmush tarzi qoidalariga rioya etgan odam oilasi, mehnat
                    jamoasi, umuman, jamiyatda o‘z o‘rniga ega bo‘ladi, turli murakkab vaziyatlarni yengib o‘tish, hayot
                    qiyinchiliklari oldida o‘zini yo‘qotmaslikka o‘rganadi. </p>
            </div>

        </div>

        <Footer />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Navi from './Navi.vue';
import Footer from './Footer7.vue'
// import { NButton, useMessage } from "naive-ui";
const chart = ref(null);
const showBackButton = ref(false);

const buttonStyle = ref({
    backgroundColor: "#F25F5C"
});

// const chartOptions = ref({
//     animationEnabled: true,
//     title: {
//         text: "Sog‘lom turmush tarzi va uning yetti qoidasi bo‘yicha kunlik vaqt taqsimoti"
//     },
//     data: [{
//         type: "pie",
//         startAngle: 140,
//         toolTipContent: "<b>{label}</b>: {y} daqiqa",
//         showInLegend: true,
//         legendText: "{label}",
//         indexLabelFontSize: 16,
//         indexLabel: "{label} - {y} daqiqa",
//         dataPoints: [
//             { label: "Yetarli uyqu (7-8 soat)", y: 480 },
//             { label: "Erta uyg‘onish va jismoniy mashqlar (30 min)", y: 30 },
//             { label: "Toza havo (15-30 min)", y: 20 },
//             { label: "Suv ichish (8 stakan)", y: 10 },
//             { label: "Sog‘lom ovqatlanish (3-5 mahal)", y: 60 },
//             { label: "Texnologiyadan uzoqlashish (1-2 soat)", y: 90 },
//             { label: "O‘zini rivojlantirish (30 min)", y: 30 }
//         ]
//     }]
// });

 
// const visitorsDrilldownedChartOptions = ref({
//     animationEnabled: true,
//     theme: "light2",
//     axisY: {
//         gridThickness: 0,
//         lineThickness: 1
//     },
//     data: []
// });

// const newVSReturningVisitorsOptions = ref({
//     animationEnabled: true,
//     theme: "light2",
//     title: {
//         text: "Ovqatlanish rasionining Diagrammasi",
//         // backgroundColor: "",
//         // fontColor:"white",
//     },
//     subtitles: [{
//         text: "Drilldown uchun har qanday segmentni bosing",
//         backgroundColor: "#EA5C59",
//         fontSize: 16,
//         fontColor: "white",
//         padding: 5
//     }],
//     data: []
// });

// const options = ref({
//     "New vs Returning Visitors": [{
//         type: "pie",
//         name: "New vs Returning Visitors",
//         startAngle: 90,
//         cursor: "pointer",
//         explodeOnClick: false,
//         showInLegend: true,
//         legendMarkerType: "square",
//         click: visitorsChartDrilldownHandler,
//         indexLabelPlacement: "inside",
//         indexLabelFontColor: "white",
//         dataPoints: [
//             { y: 5, name: "shirinlik va yog‘larga ajratilishi lozim", color: "orange", indexLabel: "5 %" },
//             { y: 30, name: "go‘sht va sut mahsulotlari", color: "#F25F5C", indexLabel: "30 %" },
//             { y: 65, name: "Meva va sabzavotlar", color: "rgba(22, 210, 110, 0.726)", indexLabel: "65%" }
//         ]
//     }],
//     "New Visitors": [{
//         color: "#F25F5C",
//         name: "New Visitors",
//         type: "column",
//         dataPoints: [
//             { label: "Jan", y: 42600 },
//             // More data points here...
//             { label: "Dec", y: 54400 }
//         ]
//     }],
//     "Returning Visitors": [{
//         color: "#FFE066",
//         name: "Returning Visitors",
//         type: "column",
//         dataPoints: [
//             { label: "Jan", y: 21800 },
//             // More data points here...
//             { label: "Dec", y: 31400 }
//         ]
//     }]
// });

// const styleOptions = ref({
//     width: "100%",
//     height: "360px"
// });

// function visitorsChartDrilldownHandler(e) {
//     chart.value.options = visitorsDrilldownedChartOptions.value;
//     chart.value.options.data = options.value[e.dataPoint.name];
//     buttonStyle.value.backgroundColor = options.value[e.dataPoint.name][0].color;
//     chart.value.options.title = { text: e.dataPoint.name };
//     chart.value.render();
//     showBackButton.value = true;
// }

// function handleClick() {
//     chart.value.options = newVSReturningVisitorsOptions.value;
//     chart.value.options.data = options.value["New vs Returning Visitors"];
//     chart.value.render();
//     showBackButton.value = false;
// }

// function chartRef(chartInstance) {
//     chart.value = chartInstance;
//     chart.value.options = newVSReturningVisitorsOptions.value;
//     chart.value.options.data = options.value["New vs Returning Visitors"];
//     chart.value.render();
// }
</script>

<style scoped>
.san_zm {
    display: flex;
    justify-content: center;
    align-items: center;
    background: url("../assets/san.webp") no-repeat;
    background-size: cover;
    background-position: 70%;
    border-radius: 5px;
    color: aliceblue;
    width: 100%;
    height: 600px;
    /* filter: brightness(70%); */
    /* backdrop-filter: brightness(70%); */
}

.san_zm>div {
    background: #1c1b1b9c;
    display: none;
    padding: 10px;
    width: 75%;
    height: 85%;
    border-radius: 20px;
}

.note-secondary7 {
    margin-top: 30px !important;
}

.note {
    border-left: solid 3px;
}

.note-secondary7 {
    background: #f3f2f29c;
    /* color: rgba(22, 210, 110, 0.626); */
    font-weight: 700 !important;
}

.carousel-img {
    width: 100%;
    height: 240px;
    object-fit: cover;
}

.carusel_st {
    height: 550px;
}

.carousel-img {
    height: 100%;
    object-fit: cover;
}
</style>
