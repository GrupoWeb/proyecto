export const menuItems = [
    {
        id: 1,
        label: "menuvertical.menu.administration.text",
        isTitle: true,
        rol: "A"
    },
    {
        id: 2,
        label: "menuvertical.administration.menu.users",
        icon: "bxs-user",
        link: "/customers"
    },
    {
        id: 3,
        label: "menuvertical.menu.customers.text",
        isTitle: true,
        rol: "A"
    },
    {
        id: 4,
        label: "menuvertical.customers.menu.administration",
        icon: "bxs-group",
        subItems: [
            {
                id: 13,
                label: "menuitems.ecommerce.list.products",
                link: "/ecommerce/products",
                parentId: 12
            },
            {
                id: 14,
                label: "menuitems.ecommerce.list.productdetail",
                link: "/ecommerce/product-detail/1",
                parentId: 12
            },
            {
                id: 15,
                label: "menuitems.ecommerce.list.orders",
                link: "/ecommerce/orders",
                parentId: 12
            },
            {
                id: 16,
                label: "menuitems.ecommerce.list.customers",
                link: "/ecommerce/customers",
                parentId: 12
            },
            {
                id: 17,
                label: "menuitems.ecommerce.list.cart",
                link: "/ecommerce/cart",
                parentId: 12
            },
            {
                id: 18,
                label: "menuitems.ecommerce.list.checkout",
                link: "/ecommerce/checkout",
                parentId: 12
            },
            {
                id: 19,
                label: "menuitems.ecommerce.list.shops",
                link: "/ecommerce/shops",
                parentId: 12
            },
            {
                id: 20,
                label: "menuitems.ecommerce.list.addproduct",
                link: "/ecommerce/add-product",
                parentId: 12
            }
        ]
    },
    {
        id: 5,
        label: "menuvertical.menu.providers.text",
        isTitle: true,
        rol: "A"
    },
    {
        id: 6,
        label: "menuvertical.providers.menu.administration",
        icon: "bxs-truck",
        link: "/customers"
    },
    // {
    //     id: 2,
    //     label: "menuitems.dashboards.text",
    //     icon: "bx-home-circle",
    //     badge: {
    //         variant: "info",
    //         text: "menuitems.dashboards.badge"
    //     },
    //     subItems: [
    //         {
    //             id: 3,
    //             label: "menuitems.dashboards.list.default",
    //             link: "/",
    //             parentId: 2
    //         },
    //         {
    //             id: 4,
    //             label: "menuitems.dashboards.list.saas",
    //             link: "/dashboard/saas",
    //             parentId: 2
    //         },
    //         {
    //             id: 5,
    //             label: "menuitems.dashboards.list.crypto",
    //             link: "/dashboard/crypto",
    //             parentId: 2
    //         },
    //         {
    //             id: 6,
    //             label: "menuitems.dashboards.list.blog",
    //             link: "/dashboard/blog",
    //             parentId: 2
    //         }
    //     ]
    // },
]