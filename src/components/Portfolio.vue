<template>
  <div>
    <h1>Portfolio</h1>
    <p>Qui troverai i tuoi progetti:</p>
    <AppProjects />
  </div>
</template>

<script>
import AppProjects from "./AppProjects.vue";

export default {
  name: "PortfolioPage",
  components: {
    AppProjects,
  },
};
</script>
<style lang="scss"></style>
