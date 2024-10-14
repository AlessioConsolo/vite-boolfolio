<template lang="">
  <div>
    <div v-if="projects.length > 0">
      <ProjectCard
        v-for="project in projects"
        :key="project.id"
        :project="project"
      />
    </div>

    <div v-else>
      <p>Caricamento progetti...</p>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import ProjectCard from "./ProjectCard.vue";

export default {
  name: "AppProjects",
  components: {
    ProjectCard,
  },
  data() {
    return {
      projects: [],
    };
  },
  created() {
    this.getProjects();
  },
  methods: {
    getProjects() {
      axios.get("http://127.0.0.1:8000/api/home").then((results) => {
        this.projects = results.data.results;
      });
    },
  },
};
</script>
<style lang=""></style>
