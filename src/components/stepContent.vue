<template>
  <div class="step-container">
    <!-- Steps start -->
    <firstStep v-if="stepStore.firstStep" />
    <secondStep v-if="stepStore.secondStep" />
    <thirdStep v-if="stepStore.thirdStep" />
    <lastStep v-if="stepStore.lastStep" />
    <finishStep v-if="stepStore.finishStep" />
    <!-- <finishStep /> -->
    <!-- Steps end -->
  </div>
</template>
<script>
import { useStepStore } from "@/stores/StepStore";

import firstStep from "./steps/firstStep.vue";
import secondStep from "./steps/secondStep.vue";
import thirdStep from "./steps/thirdStep.vue";
import lastStep from "./steps/lastStep.vue";
import finishStep from "./steps/finishStep.vue";

export default {
  components: {
    firstStep,
    secondStep,
    thirdStep,
    lastStep,
    finishStep,
  },
  setup() {
    const stepStore = useStepStore();
    return {
      stepStore,
    };
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

.navigation-button {
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

@media only screen and (max-width: 600px) {
  .step-container {
    background-color: white;
    width: min(90%, 540px);
    padding: 2rem 1rem;
    border-radius: 8px;
    margin-top: -5rem;
  }
  .step-container p {
    font-size: 16px;
  }

  .text-description {
    font-size: 17px !important;
  }
  .step-container .previous-step {
    position: fixed;
    bottom: 1rem;
  }
  .navigation-button {
    position: fixed;
    bottom: 1rem;
    right: 1rem;
    padding: 0.75rem 1rem;
    border-radius: 3px;
  }
}
</style>
