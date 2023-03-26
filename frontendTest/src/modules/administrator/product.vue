<template>
  <PageHeader :title="title" :items="item" />
  <h1>Productos</h1>
</template>

<script>
  import appConfig from "@/app.config.json";
  import PageHeader from "@/components/page-header";
export default {
  page: {
    title: "Producto",
    meta: [{ name: "Producto", content: appConfig.description }]
  },
  name: "product",
  components: { PageHeader },
  data(){
    return {
      title: "Módulo de Productos",
      item: [
        {
          text: "Administración",
          href: "/",
        },
        {
          text: "Módulo de Productos",
          active: true,
        },
      ],
    }
  }
}
</script>