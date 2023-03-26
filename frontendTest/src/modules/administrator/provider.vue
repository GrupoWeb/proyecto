<template>
  <PageHeader :title="title" :items="item" />
  <h1>Proveedores</h1>
</template>

<script>
import appConfig from "@/app.config.json";
import PageHeader from "@/components/page-header";

export default {
  page: {
    title: "Proveedor",
    meta: [{ name: "Proveedor", content: appConfig.description }]
  },
  name: "provider",
  components: { PageHeader },
  data(){
    return {
      title: "Módulo de Proveedores",
      item: [
        {
          text: "Administración",
          href: "/",
        },
        {
          text: "Módulo de Proveedores",
          active: true,
        },
      ],
    }
  }
}
</script>
