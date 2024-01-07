import { defineStore } from "pinia";

export const useStepStore = defineStore("StepStore", {
  state: () => {
    return {
      stepNb: 1,
    };
  },
  getters: {
    firstStep() {
      return this.stepNb === 1;
    },
    secondStep() {
      return this.stepNb === 2;
    },
    thirdStep() {
      return this.stepNb === 3;
    },
    lastStep() {
      return this.stepNb === 4;
    },
  },
  actions: {
    nextStep() {
      if (this.stepNb < 4) {
        this.stepNb++;
      }
    },
  },
});
