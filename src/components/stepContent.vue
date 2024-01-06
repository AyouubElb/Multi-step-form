<template>
  <div class="step-container">
    <!-- Steps start -->
    <firstStep />
    <!-- <secondStep /> -->
    <!-- <thirdStep /> -->
    <!-- <lastStep /> -->
    <!-- Steps end -->
  </div>
</template>
<script>
import firstStep from "./steps/firstStep.vue";
import secondStep from "./steps/secondStep";
import thirdStep from "./steps/thirdStep.vue";
import lastStep from "./steps/lastStep.vue";
export default {
  components: {
    firstStep,
    secondStep,
    thirdStep,
    lastStep,
  },
};
</script>
<style>
.step-container {
  display: flex;
  flex-direction: column;
  width: 65%;
  margin-inline: auto;
  padding-top: 2rem;
  padding-bottom: 1rem;
}

.step-container h1 {
  color: #03295a;
  font-size: 1.75rem;
  font-weight: bold;
  margin-bottom: 12px;
}

.step-container p,
label {
  font-size: 14px;
}

.text-description {
  color: #a9a9b1;
  margin-bottom: 1.75rem;
}

.step-container .navigation-buttons {
  display: flex;
  margin-top: auto;
}

.step-container .previous-step {
  font-weight: bold;
  cursor: pointer;
}

.step-container button {
  background-color: #03295a;
  color: white;
  font-size: 14px;
  width: fit-content;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  margin-left: auto;
  cursor: pointer;
}
</style>
