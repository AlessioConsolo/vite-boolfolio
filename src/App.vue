<template lang="">
  <div id="app">
    <h1>Lista Progetti</h1>
    <AppProjects />
  </div>
</template>
<script>
import AppProjects from "./components/AppProjects.vue";
import ProjectCard from "./components/ProjectCard.vue";

export default {
  components: {
    AppProjects,
    ProjectCard,
  },
};
</script>
<style lang="scss">
@import "./styles/generals.scss";
</style>
