import {createRouter, createWebHistory, createMemoryHistory} from "vue-router";

const router = createRouter({
    history:createWebHistory(), 
    routes:[
        {
            path:"/", 
            name:"home",  
            meta:{title:"JDPU JISMONIY Madaniyat Kafedrasi"},
            component:()=> import("../components/Starthome.vue")
        }, 
        {
            path:"/jdpu", 
            name:"jdpu", 
            meta: { title: "Ta'lim yo'nalishlari | JISMONIY Madaniyat Kafedrasi" },
            component:()=> import("../components/Jdpu.vue")
        }, 
        {
            path:"/boys", 
            name:"boys", 
            meta: { title: "O'g'il bolalar uchun | JISMONIY Madaniyat Kafedrasi" },
            component:()=> import("../components/Boys.vue")
        },
        {
            path:"/girls", 
            name:"girls", 
            meta: { title: "Qiz bolalar uchun | JISMONIY Madaniyat Kafedrasi" },
            component:()=> import("../components/Girls.vue")
        }, 
        {
            path:"/login",
            name:"logins",
            meta: { title: 'Login | JISMONIY Madaniyat Kafedrasi' },
            component:()=> import("../components/login.vue")
        },
        {
            path:"/seven",
            name:"seven",
            meta: { title: "Sog‘lom turmush tarzi va uning 7 qoidasi" },
            component:()=> import("../components/Seven.vue")
        }, 
        {
            path:"/search", 
            name:"search", 
            meta:{title:"Search"}, 
            component: ()=> import("../components/Smht.vue")
        },
        {
            path:"/fakultet", 
            name:"fakultet", 
            meta:{title:"JDPU Fakultet Haqida"}, 
            component: ()=> import("../components/Fakultet_h.vue")
        },
        {
            path:"/smhealth", 
            name:"smhealth", 
            meta:{title:"Samsung health haqida malumot"}, 
            component: ()=> import("../components/Smhealth.vue")
        },
        {
            path:"/ggfit", 
            name:"ggfit", 
            meta:{title:"Google fit haqida malumot"}, 
            component: ()=> import("../components/Ggfit.vue")
        },
        {
            path:"/strava", 
            name:"strava", 
            meta:{title:"Strava haqida malumot"}, 
            component: ()=> import("../components/Strava.vue")
        },
        {
            path:'/:pathMath(.*)*',
            component:()=> import("../components/Sserror.vue")
        },
    ]
})

router.beforeEach((to, from, next) => {
    document.title = to.meta.title || 'JISMONIY Madaniyat';
    next();
  });

  
export default router;

