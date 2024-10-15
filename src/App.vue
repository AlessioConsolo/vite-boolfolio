<template lang="">
  <div id="app">
    <AppHeader />
    <router-view />
  </div>
</template>
<script>
import AppProjects from "./components/AppProjects.vue";
import ProjectCard from "./components/ProjectCard.vue";
import AppHeader from "./components/AppHeader.vue";

export default {
  components: {
    AppProjects,
    ProjectCard,
    AppHeader,
  },
};
</script>
<style lang="scss">
@import "./styles/generals.scss";
</style>
