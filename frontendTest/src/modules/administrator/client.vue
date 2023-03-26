<template>
   <PageHeader :title="title" :items="item" />
  <h1>Clientes</h1>
</template>

<script>
  import PageHeader from "@/components/page-header";
  import appConfig from "@/app.config.json";
export default {
  page: {
    title: "Clientes",
    meta: [{ name: "cliente", content: appConfig.description }]
  },
  name: "client",
  components: { PageHeader },
  data(){
    return {
      title: "Módulo de Clientes",
      item: [
        {
          text: "Administración",
          href: "/",
        },
        {
          text: "Módulo de Cliente",
          active: true,
        },
      ],
    }
  }
}
</script>
