import {
  
    Building2,
    PanelsTopLeft,
    ShieldCheck,
    CircleHelpIcon,
    Calendar,
    Settings} from 'lucide-react'

export const dataSideBar=[
    {
    icon: PanelsTopLeft,
    label:"Dashboard",
    href:"/"
},
{
    icon: Building2,
    label:"Companies",
    href:"/companies"
},
{
    icon:Calendar,
    label:"Calendar",
    href:"/calendar"
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