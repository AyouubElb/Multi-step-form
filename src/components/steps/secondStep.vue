<template>
  <!-- Step 2 start -->

  <h1>Select your plan</h1>
  <p class="text-description">
    You have the option of monthly or yearly billing.
  </p>
  <div class="subscription-option">
    <div
      class="subscription-option-content"
      :class="{ activeOption: arcadeOption }"
      @click="subscriptionOption = 'arcade'"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 40 40"
      >
        <g fill="none" fill-rule="evenodd">
          <circle cx="20" cy="20" r="20" fill="#FFAF7E" />
          <path
            fill="#FFF"
            fill-rule="nonzero"
            d="M24.995 18.005h-3.998v5.998h-2v-5.998H15a1 1 0 0 0-1 1V29a1 1 0 0 0 1 1h9.995a1 1 0 0 0 1-1v-9.995a1 1 0 0 0-1-1Zm-5.997 8.996h-2v-1.999h2v2Zm2-11.175a2.999 2.999 0 1 0-2 0v2.18h2v-2.18Z"
          />
        </g>
      </svg>
      <div class="subscription-option-text">
        <p class="subscription-option-title">Arcade</p>
        <p class="subscription-option-price">
          ${{ subscriptionPrices.arcade }}
        </p>
        <div class="promotion" v-if="!monthlyPlan">2 months free</div>
      </div>
    </div>
    <div
      class="subscription-option-content"
      :class="{ activeOption: advancedOption }"
      @click="subscriptionOption = 'advanced'"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 40 40"
      >
        <g fill="none" fill-rule="evenodd">
          <circle cx="20" cy="20" r="20" fill="#F9818E" />
          <path
            fill="#FFF"
            fill-rule="nonzero"
            d="M25.057 15H14.944C12.212 15 10 17.03 10 19.885c0 2.857 2.212 4.936 4.944 4.936h10.113c2.733 0 4.943-2.08 4.943-4.936S27.79 15 25.057 15ZM17.5 20.388c0 .12-.108.237-.234.237h-1.552v1.569c0 .126-.138.217-.259.217H14.5c-.118 0-.213-.086-.213-.203v-1.583h-1.569c-.126 0-.217-.139-.217-.26v-.956c0-.117.086-.213.202-.213h1.584v-1.554c0-.125.082-.231.203-.231h.989c.12 0 .236.108.236.234v1.551h1.555c.125 0 .231.083.231.204v.988Zm5.347.393a.862.862 0 0 1-.869-.855c0-.472.39-.856.869-.856.481 0 .87.384.87.856 0 .471-.389.855-.87.855Zm1.9 1.866a.86.86 0 0 1-.87-.852.86.86 0 0 1 .87-.855c.48 0 .87.38.87.855a.86.86 0 0 1-.87.852Zm0-3.736a.862.862 0 0 1-.87-.854c0-.472.39-.856.87-.856s.87.384.87.856a.862.862 0 0 1-.87.854Zm1.899 1.87a.862.862 0 0 1-.868-.855c0-.472.389-.856.868-.856s.868.384.868.856a.862.862 0 0 1-.868.855Z"
          />
        </g>
      </svg>
      <div class="subscription-option-text">
        <p class="subscription-option-title">Advanced</p>
        <p class="subscription-option-price">
          ${{ subscriptionPrices.advanced }}
        </p>
        <div class="promotion" v-if="!monthlyPlan">2 months free</div>
      </div>
    </div>
    <div
      class="subscription-option-content"
      :class="{ activeOption: prOption }"
      @click="subscriptionOption = 'pro'"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 40 40"
      >
        <g fill="none" fill-rule="evenodd">
          <circle cx="20" cy="20" r="20" fill="#483EFF" />
          <path
            fill="#FFF"
            fill-rule="nonzero"
            d="M26.666 13H13.334A3.333 3.333 0 0 0 10 16.333v7.193a3.447 3.447 0 0 0 2.14 3.24c1.238.5 2.656.182 3.56-.8L18.52 23h2.96l2.82 2.966a3.2 3.2 0 0 0 3.56.8 3.447 3.447 0 0 0 2.14-3.24v-7.193A3.333 3.333 0 0 0 26.666 13Zm-9.333 6H16v1.333a.667.667 0 0 1-1.333 0V19h-1.333a.667.667 0 0 1 0-1.334h1.333v-1.333a.667.667 0 1 1 1.333 0v1.333h1.333a.667.667 0 1 1 0 1.334Zm7.333 2a2.667 2.667 0 1 1 0-5.333 2.667 2.667 0 0 1 0 5.333ZM26 18.333a1.333 1.333 0 1 1-2.667 0 1.333 1.333 0 0 1 2.667 0Z"
          />
        </g>
      </svg>
      <div class="subscription-option-text">
        <p class="subscription-option-title">Pro</p>
        <p class="subscription-option-price">{{ subscriptionPrices.pro }}</p>
        <div class="promotion" v-if="!monthlyPlan">2 months free</div>
      </div>
    </div>
  </div>
  <div class="billing-cycle-toggle">
    <label :class="{ active: monthlyPlan }">Monthly</label>
    <div
      class="monthly-toggle-button"
      @click="monthlyPlan = false"
      v-if="monthlyPlan"
    >
      <i class="bi bi-toggle-off"></i>
    </div>
    <div class="yearly-toggle-button" @click="monthlyPlan = true" v-else>
      <i class="bi bi-toggle-on"></i>
    </div>
    <label :class="{ active: !monthlyPlan }">Yearly</label>
  </div>
  <div class="navigation-buttons">
    <p class="previous-step" @click="stepStore.previousStep">Go Back</p>
    <button class="navigation-button" @click="handleNextStep">Next Step</button>
  </div>

  <!-- Step 2 end -->
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
      subscList: [
        { name: "arcade", price: 9 },
        { name: "advanced", price: 12 },
        { name: "pro", price: 15 },
      ],
      subscriptionOption: "arcade",
      monthlyPlan: true,
    };
  },
  computed: {
    arcadeOption() {
      return this.subscriptionOption === "arcade";
    },
    advancedOption() {
      return this.subscriptionOption === "advanced";
    },
    prOption() {
      return this.subscriptionOption === "pro";
    },
    subscriptionPrices() {
      if (this.monthlyPlan) {
        return { arcade: "9/mo", advanced: "12/mo", pro: "15/mo" };
      } else {
        return { arcade: "90/yr", advanced: "120/yr", pro: "150/yr" };
      }
    },
  },
  methods: {
    handleNextStep() {
      let price = 0;
      this.stepStore.userForm.plan = this.subscriptionOption;
      this.subscList.forEach((item) => {
        if (item.name === this.subscriptionOption) {
          price += item.price;
        }
      });
      if (this.monthlyPlan) {
        this.stepStore.userForm.paymentFrequency = "monthly";
      } else {
        this.stepStore.userForm.paymentFrequency = "yearly";
        price = price * 10;
      }

      this.stepStore.userForm.subscPrice = price;
      this.stepStore.nextStep();
    },
  },
};
</script>
<style>
.subscription-option {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
}

.subscription-option-content {
  padding: 1rem;
  margin-bottom: 2rem;
  border: 1px solid #ceced4;
  border-radius: 6px;
  cursor: pointer;
}

.subscription-option-content:hover {
  border: 1px solid #726ca8;
}

.activeOption {
  border: 1px solid #726ca8;
  background-color: #f8f9fe;
}

.subscription-option text {
  display: block;
}

.subscription-option-content svg {
  margin-bottom: 2rem;
}

.subscription-option-title {
  color: #03295a;
  font-weight: bold;
  margin-bottom: 4px;
}

.subscription-option-price {
  color: #a9a9b1;
}

.promotion {
  color: #03295a;
  font-size: 12px;
  margin-top: 4px;
}

.billing-cycle-toggle {
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  background-color: #f8f9fe;
  border-radius: 5px;
  padding: 0.5rem 0;
}

.billing-cycle-toggle label {
  font-weight: 500;
  color: #a9a9b1;
}

.billing-cycle-toggle .active {
  color: #03295a;
}

.billing-cycle-toggle i {
  font-size: 1.5rem;
  color: #03295a;
  cursor: pointer;
}

@media only screen and (max-width: 600px) {
  .subscription-option {
    display: block;
  }
  .subscription-option-content {
    display: flex;
    gap: 1rem;
    margin-bottom: 0.5rem;
  }
  .subscription-option-content svg {
    margin-bottom: 0;
  }
  .subscription-option-price {
    font-size: 14px !important;
  }
  .billing-cycle-toggle label {
    font-size: 16px !important;
  }
}
</style>
