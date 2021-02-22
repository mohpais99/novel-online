import { Home, List, Detail, Artikel } from "./views";

const listNovel = [
    {
        path: "/",
        name: "Beranda",
        component: Home,
        role: null
    },
    {
        path: "/daftar-novel",
        name: "Daftar Novel",
        component: List,
        role: null
    },
    {
        path: "/novel/:params",
        name: "Detail Novel",
        component: Detail,
        role: null
    },
    {
        path: "/novel/:params/:params",
        name: "Artikel Novel",
        component: Artikel,
        role: null
    }
]

export default listNovel;