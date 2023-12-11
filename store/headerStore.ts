import { defineStore } from "pinia";
import {ref} from 'vue';



export const useHeaderStore = defineStore("headerStore", () => {


   const showMenu = ref(false);

   const menuHandler = () => {
       showMenu.value = !showMenu.value
       debugger
   }
    return {
        showMenu,
        menuHandler,
    };

});