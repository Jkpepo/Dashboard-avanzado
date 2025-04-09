import {
  
    Building2,
    PanelsTopLeft,
    ShieldCheck,
    CircleHelpIcon,
    Calendar,
    Settings,
    ListChecks,
    Repeat,ChartColumn,BookImage} from 'lucide-react'

export const dataSideBar=[
    {
    icon: PanelsTopLeft,
    label:"Dashboard",
    href:"/"
},
{
    icon: Repeat,
    label:"Comparador",
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