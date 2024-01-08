import { defineStore } from "pinia";

export const useStepStore = defineStore("StepStore", {
  state: () => {
    return {
      stepNb: 1,
      userForm: {
        plan: "",
        paymentFrequency: "",
        features: [],
        subscPrice: 0,
      },
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
    finishStep() {
      return this.stepNb === 0;
    },
    totalPayment() {
      let featuresPrice = 0;
      this.userForm.features.forEach((feature) => {
        featuresPrice += feature.price;
      });
      return this.userForm.subscPrice + featuresPrice;
    },
  },
  actions: {
    nextStep() {
      if (this.stepNb < 4) {
        this.stepNb++;
      }
    },
    previousStep() {
      if (this.stepNb > 1) {
        this.stepNb--;
      }
    },
    returnSecondStep() {
      this.stepNb = 2;
    },
    confirm() {
      this.stepNb = 0;
    },
  },
});
