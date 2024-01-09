<template>
  <div class="sidebar-container">
    <!-- Sidebar start -->
    <div class="steps-container">
      <div class="sidebar-steps">
        <button class="step-nb" :class="{ activeStep: stepStore.firstStep }">
          1
        </button>
        <div class="sidebar-steps-text">
          <p class="sidebar-step-title">Step 1</p>
          <p class="sidebar-step-description">Your info</p>
        </div>
      </div>
      <div class="sidebar-steps">
        <button class="step-nb" :class="{ activeStep: stepStore.secondStep }">
          2
        </button>
        <div class="sidebar-steps-text">
          <p class="sidebar-step-title">Step 2</p>
          <p class="sidebar-step-description">Select plan</p>
        </div>
      </div>
      <div class="sidebar-steps">
        <button class="step-nb" :class="{ activeStep: stepStore.thirdStep }">
          3
        </button>
        <div class="sidebar-steps-text">
          <p class="sidebar-step-title">Step 3</p>
          <p class="sidebar-step-description">Add-ons</p>
        </div>
      </div>
      <div class="sidebar-steps">
        <button
          class="step-nb"
          :class="{ activeStep: stepStore.lastStep || stepStore.finishStep }"
        >
          4
        </button>
        <div class="sidebar-steps-text">
          <p class="sidebar-step-title">Step 4</p>
          <p class="sidebar-step-description">Summary</p>
        </div>
      </div>
    </div>

    <!-- Sidebar end -->
  </div>
</template>
<script>
import { useStepStore } from "@/stores/StepStore";

export default {
  setup() {
    const stepStore = useStepStore();
    return {
      stepStore,
    };
  },
  data() {
    return {};
  },
  computed: {},
  mounted() {},
};
</script>
<style>
.sidebar-container {
  background-image: url("../assets/images/bg-sidebar-desktop.svg");
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 1rem;
  padding-top: 2rem;
  padding-bottom: 16rem;
  padding-left: 2rem;
  padding-right: 5rem;
}

.sidebar-steps {
  display: flex;
  flex-direction: row;
  margin-bottom: 1.5rem;
}
.step-nb {
  border: 1px solid white;
  display: inline-block;
  height: 2rem;
  width: 2rem;
  border-radius: 1rem;
  background-color: transparent;
  color: white;
  font-weight: 500;
  cursor: pointer;
}

.activeStep {
  color: #03295a;
  background-color: #bee3ff;
  border: 1px solid #bee3ff;
}

.sidebar-steps-text {
  margin-left: 1rem;
}

.sidebar-step-title {
  font-size: 12px;
  font-weight: 300;
  color: #bee1fd;
  text-transform: uppercase;
}

.sidebar-step-description {
  font-size: 14px;
  color: white;
  text-transform: uppercase;
  white-space: nowrap;
}

@media only screen and (max-width: 600px) {
  .sidebar-container {
    background-image: url("../assets/images/bg-sidebar-mobile.svg");
    border-radius: 0;
    padding-top: 2rem;
    padding-bottom: 5rem;
    padding-inline: 0;
  }
  .steps-container {
    display: flex;
    justify-content: center;
    gap: 1rem;
  }
  .sidebar-steps-text {
    display: none;
  }
}
</style>
