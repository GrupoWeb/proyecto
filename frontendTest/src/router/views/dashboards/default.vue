<script>
import appConfig from "@/app.config";
import PageHeader from "@/components/page-header";



/**
 * Dashboard Component
 */
export default {
  page: {
    title: "Dashboard",
    meta: [
      {
        name: "description",
        content: appConfig.description,
      },
    ],
  },
  components: {
    PageHeader,
  },
  data() {
    return {
      title: "Dashboard",

      showModal: false,
      isLoading: false,
      fullPage: true,
      canCancel: false,
      useSlot: false,
      loader: "spinner",
      color: "#007bff",
      bgColor: "#ffffff",
      height: 128,
      width: 128,
      timeout: 3000, //ms
      fetchingStats: true,
      earningStatus: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.showModal = true;
    }, 1500);
  },
};
</script>

<template>
    <PageHeader :title="title" :items="items" />
    <div class="row">
      <div class="col-xl-4">
      </div>
      <!-- end col -->
      <div class="col-xl-8">
        <div class="row">

        </div>
      </div>
    </div>

</template>
