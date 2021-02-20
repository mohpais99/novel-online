import { Home, List, Detail } from "./views";

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
    }
]

export default listNovel;