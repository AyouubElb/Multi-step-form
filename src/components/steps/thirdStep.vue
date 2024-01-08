<template>
  <!-- Step 3 start -->

  <h1>Pick add-ons</h1>
  <p class="text-description">Add-ons help enhance your gaming experience.</p>
  <div class="feature-choices-container">
    <div
      class="feature-choices-content"
      :class="{ activeChoice: onlineService }"
    >
      <input type="checkbox" @click="addRemoveFeature('Online service')" />
      <div class="feature-choice-text">
        <p>Online service</p>
        <p>Access to multiplayer games</p>
      </div>
      <p class="feature-choice-price">+${{ featuresPrices.onlineService }}</p>
    </div>
    <div
      class="feature-choices-content"
      :class="{ activeChoice: largerStorage }"
    >
      <input type="checkbox" @click="addRemoveFeature('Larger storage')" />
      <div class="feature-choice-text">
        <p>Larger storage</p>
        <p>Extra 1TB of cloud save</p>
      </div>
      <p class="feature-choice-price">+${{ featuresPrices.largerStorage }}</p>
    </div>
    <div
      class="feature-choices-content"
      :class="{ activeChoice: customizableProfile }"
    >
      <input
        type="checkbox"
        @click="addRemoveFeature('Customizable profile')"
      />
      <div class="feature-choice-text">
        <p>Customizable Profile</p>
        <p>Custom theme on your profile</p>
      </div>
      <p class="feature-choice-price">
        +${{ featuresPrices.customizableProfile }}
      </p>
    </div>
  </div>
  <div class="navigation-buttons">
    <p class="previous-step" @click="stepStore.previousStep">Go Back</p>
    <button class="navigation-button" @click="handleNextStep">Next Step</button>
  </div>

  <!-- Step 3 end -->
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
    return {
      featuresList: [
        { name: "Online service", price: 1 },
        { name: "Larger storage", price: 2 },
        { name: "Customizable profile", price: 2 },
      ],
      featureChoices: [],
    };
  },
  computed: {
    onlineService() {
      return this.featureChoices.includes("Online service");
    },
    largerStorage() {
      return this.featureChoices.includes("Larger storage");
    },
    customizableProfile() {
      return this.featureChoices.includes("Customizable profile");
    },
    featuresPrices() {
      if (this.stepStore.userForm.paymentFrequency === "monthly") {
        return {
          onlineService: "1/mo",
          largerStorage: "2/mo",
          customizableProfile: "2/mo",
        };
      } else {
        return {
          onlineService: "10/yr",
          largerStorage: "20/yr",
          customizableProfile: "20/yr",
        };
      }
    },
  },
  methods: {
    addRemoveFeature(value) {
      if (this.featureChoices.length === 0) {
        this.featureChoices.push(value);
      } else {
        if (this.featureChoices.includes(value)) {
          this.featureChoices = this.featureChoices.filter(
            (item) => item !== value
          );
        } else {
          this.featureChoices.push(value);
        }
      }
    },
    handleNextStep() {
      const userForm = this.stepStore.userForm;
      // this.stepStore.userForm.features = this.featureChoices;
      if (userForm.paymentFrequency === "monthly") {
        this.featureChoices.forEach((feature) => {
          this.featuresList.forEach((item) => {
            if (feature === item.name) {
              this.stepStore.userForm.features.push(item);
            }
          });
        });
      } else {
        this.featureChoices.forEach((feature) => {
          this.featuresList.forEach((item) => {
            if (feature === item.name) {
              item.price = item.price * 10;
              this.stepStore.userForm.features.push(item);
            }
          });
        });
      }
      this.stepStore.nextStep();
    },
  },
};
</script>
<style>
.feature-choices-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.feature-choices-content {
  display: flex;
  padding: 1rem;
  border: 1px solid #ceced4;
  border-radius: 6px;
  cursor: pointer;
}

.activeChoice {
  border: 1px solid #726ca8;
  background-color: #f8f9fe;
}

.feature-choices-content input[type="checkbox"] {
  transform: scale(
    1.25
  ); /* Change the scale value to increase or decrease the size */
  margin-bottom: 0;
  margin-right: 1.25rem;
}

.feature-choice-text p:nth-child(1) {
  color: #03295a;
  font-weight: bold;
}

.feature-choice-text p:nth-child(2) {
  color: #a9a9b1;
}

.feature-choice-price {
  color: #7d70e8;
  height: fit-content;
  margin-left: auto;
  margin-bottom: auto;
  margin-top: auto;
}

@media only screen and (max-width: 600px) {
  .feature-choice-text p:nth-child(2) {
    font-size: 14px;
  }
  .feature-choice-price {
    font-size: 14px !important;
  }
  .feature-choices-content input[type="checkbox"] {
    margin-right: 1rem;
  }
}
</style>
