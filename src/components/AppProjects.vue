<template lang="">
  <div></div>
</template>
<script>
import axios from "axios";

export default {
  name: "AppProjects",
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
        console.log(results);
      });
    },
  },
};
</script>
<style lang=""></style>
