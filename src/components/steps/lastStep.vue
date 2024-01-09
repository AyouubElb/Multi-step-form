<template>
  <!-- <div class="step-one-container"> -->
  <!-- Step 4 start -->

  <h1>Finishing up</h1>
  <p class="text-description">
    Double-check everything looks OK before confirming.
  </p>
  <div class="summary-container">
    <div class="subscription-plan">
      <div class="subscription-plan-title">
        <p>{{ stepStore.userForm.plan }}({{ Pf }})</p>
        <p class="modify-subscription-plan" @click="stepStore.returnSecondStep">
          Change
        </p>
      </div>
      <p class="subscription-plan-price">
        ${{ stepStore.userForm.subscPrice }}/
        <span v-if="Pf === 'monthly'">mo</span>
        <span v-if="Pf === 'yearly'">yr</span>
      </p>
    </div>
    <hr />
    <div class="feature-container" v-for="(feature, index) in featuresList">
      <p class="feature-title">{{ feature.name }}</p>
      <p class="feature-price">
        +${{ feature.price }}/
        <span v-if="Pf === 'monthly'">mo</span>
        <span v-if="Pf === 'yearly'">yr</span>
      </p>
    </div>
  </div>
  <div class="total-container">
    <p class="total-title">
      Total(per
      <span v-if="Pf === 'monthly'">month</span>
      <span v-if="Pf === 'yearly'">year</span>
      )
    </p>
    <div class="total-price">
      ${{ stepStore.totalPayment }}/
      <span v-if="Pf === 'monthly'">mo</span>
      <span v-if="Pf === 'yearly'">yr</span>
    </div>
  </div>
  <div class="navigation-buttons">
    <p class="previous-step gray-color">Go Back</p>
    <button class="navigation-button confirm-button" @click="stepStore.confirm">
      Confirm
    </button>
  </div>

  <!-- Step 4 end -->
  <!-- </div> -->
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
      Pf: this.stepStore.userForm.paymentFrequency,
      featuresList: this.stepStore.userForm.features,
    };
  },
};
</script>
<style>
hr {
  border: 1px solid #e8e8e8;
}
.summary-container {
  background-color: #f8f9fe;
  border-radius: 6px;
  padding: 1.25rem;
  margin-bottom: 1.5rem;
}

.subscription-plan {
  display: flex;
  margin-bottom: 1rem;
}

.subscription-plan-title {
  text-transform: capitalize;
}

.subscription-plan-title p:nth-child(1) {
  color: #03295a;
  font-weight: 600;
}

.subscription-plan-title p:nth-child(2) {
  color: #a9a9b1;
  text-decoration: underline;
  cursor: pointer;
}

.subscription-plan-price {
  color: #03295a;
  font-weight: bold;
  margin-left: auto;
  margin-top: auto;
  margin-bottom: auto;
}

.feature-container {
  display: flex;
  margin-top: 1rem;
}

.feature-title {
  color: #a9a9b1;
}

.feature-price {
  color: #03295a;
  margin-left: auto;
}

.total-container {
  display: flex;
  padding-inline: 1.25rem;
}

.total-title {
  color: #a9a9b1;
}

.total-price {
  color: #493efe;
  font-size: 1.25rem;
  font-weight: bold;
  margin-left: auto;
}

.confirm-button {
  background-color: #493efe !important;
}

.confirm-button:hover {
  background-color: #948bff !important;
}

.gray-color {
  color: #a9a9b1;
}

/* @media only screen and (max-width: 600px) {
} */
</style>
