import {create} from "zustand";

export const useThemeStore=create((set)=>({
    theme: localStorage.getItem("harlos-theme") || "cmyk",
    setTheme: (theme)=>{
        localStorage.setItem("harlos-theme",theme);
        set({theme});
    },
}));