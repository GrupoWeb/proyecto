export const menuItems = [
    {
        id: 1,
        label: "menuitems.menu.text",
        isTitle: true
    },
    {
        id: 2,
        label: "menuitems.dashboards.text",
        icon: "bx-home-circle",
        subItems: [
            {
                id: 3,
                label: "menuitems.dashboards.list.default",
                link: "/administracion/usuarios",
                parentId: 2
            },

        ]
    },

];