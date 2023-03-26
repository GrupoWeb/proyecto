<template>
    <layout>
      <router-view></router-view>
    </layout>
</template>

<script>
  import Layout from "@/router/layouts/main";
export default {
  name: 'App',
  components: { Layout },
  mounted() {
  }
}
</script>
