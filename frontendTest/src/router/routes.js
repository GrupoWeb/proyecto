export default [
  {
    path: "/",
    name: "login",
    component: () => import(/* webpackChunkName: "login" */ '../modules/account/login'),
    meta: {
      requiresUnauth: true
    }
  },
  {
    path: "",
    name: "panel",
    component: () => import(/* webpackChunkName: "login" */ '@/Panel'),
    children: [
      {
        path: "default",
        name: "default",
        meta: {authRequired: true},
        component: () => import(/* webpackChunkName: "default" */ "./views/dashboards/default"),
      },
      {
        path: "/administracion/usuarios",
        name:"usuarios-administracion",
        meta: { authRequired: true },
        component: () => import(/* webpackChunkName: "Usuarios" */ "../modules/administrator/users/user")
      },
      {
        path: "/administracion/add",
        name:"add-administracion",
        meta: { authRequired: true },
        component: () => import(/* webpackChunkName: "Usuarios" */ "../modules/administrator/users/AddUser")
      },
      // {
      //   path: "/administracion/cuentas",
      //   name:"cuentas-administracion",
      //   meta: { authRequired: true },
      //   component: () => import(/* webpackChunkName: "Cuentas" */ "@/modules/administrator/account")
      // },
      // {
      //   path: "/administracion/clientes",
      //   name:"clientes-administracion",
      //   meta: { authRequired: true },
      //   component: () => import(/* webpackChunkName: "Clientes" */ "../modules/administrator/client")
      // },
      // {
      //   path: "/administracion/proveedores",
      //   name:"proveedores-administracion",
      //   meta: { authRequired: true },
      //   component: () => import(/* webpackChunkName: "Proveedores" */ "../modules/administrator/provider")
      // },
      // {
      //   path: "/administracion/productos",
      //   name:"productos-administracion",
      //   meta: { authRequired: true },
      //   component: () => import(/* webpackChunkName: "Productos" */ "../modules/administrator/product")
      // },
      {
        path: "/administracion/perfil/:id",
        name:"usuarios-peril-administracion",
        meta: { authRequired: true },
        component: () => import(/* webpackChunkName: "Perfil" */ "../modules/administrator/users/UserProfile")
      },

    ]
  },
  {
    path: "/logout",
    name: "logout",
    component: () => import(/* webpackChunkName: "logout" */ "../modules/account/logout"),
  },
  {
    path: "/404",
    name: "404",
    component: require("./views/utility/404").default,
  },
  {
    path: "/:catchAll(.*)",
    redirect: "404",
  },

];