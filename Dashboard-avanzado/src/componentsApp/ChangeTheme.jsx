
import { Moon,Sun } from "lucide-react";
import { useEffect, useState } from "react"

export function ChangeTheme(){

    const [theme,setTheme]=useState(()=>{
        //buscar el tema del localstore o usa light por defecto

        if (typeof window !== "undefined") {
            const savedTheme = localStorage.getItem("theme");
            return savedTheme || "light";
        }
        return "light"
    });

    useEffect(()=>{
        if (theme === "dark") { //si el tema es dark agrega la clase dark a todo el documento html y lo guarda el localstorage
            document.querySelector("html").classList.add("dark");
           
            localStorage.setItem("theme", "dark");
        } else { // caso contrario le quita la clase dark y guarda el light en localstorage
            document.querySelector("html").classList.remove("dark");
            localStorage.setItem("theme", "light");
        }   
    }, [theme]);
    

    const handleChangeTheme=()=>{
        setTheme(prevTheme => prevTheme === "light" ? "dark" : "light")
        
    }

    return(
        <div className="dark:bg-neutral-900">

        <button className=" px-4 py-2 rounded hover:bg-slate-300 hover:cursor-pointer border"
        onClick={handleChangeTheme}
        >  
        {theme === "dark" ? <Sun/> : <Moon/>  }
            {/* cambiar tema */}
            </button>
        </div>
    )
} 