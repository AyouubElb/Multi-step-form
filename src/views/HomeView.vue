<template>
  <div class="home">
    <div class="card">
      <sidebar />
      <stepContent />
    </div>
  </div>
</template>

<script>
import stepContent from "@/components/stepContent.vue";
import sidebar from "@/components/sidebar.vue";
export default {
  name: "HomeView",
  components: {
    sidebar,
    stepContent,
  },
};
</script>
<style>
*,
*::before,
*::after {
  box-sizing: border-box;
}

* {
  margin: 0;
  padding: 0;
  font: inherit;
}

img,
svg {
  display: block;
  max-width: 100%;
}

ul,
ol {
  list-style: none;
}
.home {
  height: 100vh;
  background-color: #eef5ff;
  font-family: "Ubuntu", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card {
  background-color: white;
  width: min(65%, 950px);
  margin-inline: auto;
  padding: 1rem 0 1rem 1rem;
  border-radius: 1rem;
  display: grid;
  grid-template-columns: min-content 1fr;
}
</style>
