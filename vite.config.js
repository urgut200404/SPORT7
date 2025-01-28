// import { defineConfig } from 'vite'
// import vue from '@vitejs/plugin-vue'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue()],
//   build:{
//     rollupOptions:{
//       external: ['naive-ui'],
//       output:{
//         manualChunks(id){
//           if(id.includes("node_modules")){
//             return id.toString().split('node_modules')[1].split('/').toString()
//           }
//         }
//       }
//     }
//   }
// })







import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: { 
       output:{
        manualChunks(id){
          if(id.includes("node_modules")){
            return id.toString().split('node_modules')[1].split('/').toString()
          }
        }
      }
    },
  },
})


 












