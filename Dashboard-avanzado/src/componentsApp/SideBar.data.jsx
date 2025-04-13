import {
    PanelsTopLeft,
    ShieldCheck,
    CircleHelpIcon,
    Settings,
    Repeat,ChartColumn,BookImage} from 'lucide-react'
// quise modularizar un poco el codigo le paso este arreglo de objetos con un icono su texto y su direccionamiento
// en el sidebar solo lo recorro y ya me trae todo los datos
export const dataSideBar=[
    {
    icon: PanelsTopLeft,
    label:"Dashboard",
    href:"/"
},
{
    icon: Repeat,
    label:"Comparing",
    href:"/comparing"
},
{
    icon:ChartColumn,
    label:"Ranking",
    href:"/ranking"
},
{
    icon:BookImage,
    label:"Album",
    href:"/album"
},



]

export const dataToolSideBar=[
    {

    icon:CircleHelpIcon,
    label:"Faqs",
    href:"/Faqs"

},
{

    icon:CircleHelpIcon,
    label:"Analitys",
    href:"/analitys"

},

]

export const dataSupportSideBar=[

    {

        icon:Settings,
        label:"Settings",
        href:"/settings"
    
    },
    {

        icon:ShieldCheck,
        label:"Security",
        href:"/Security"
    
    },
]