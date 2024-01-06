<template>
  <!-- Step 3 start -->

  <h1>Pick add-ons</h1>
  <p class="text-description">Add-ons help enhance your gaming experience.</p>
  <div class="feature-choices-container">
    <div
      class="feature-choices-content"
      :class="{ activeChoice: onlineService }"
    >
      <input type="checkbox" @click="addRemoveFeature('onlineService')" />
      <div class="feature-choice-text">
        <p>Online service</p>
        <p>Access to multiplayer games</p>
      </div>
      <p class="feature-choice-price">+$1/mo</p>
    </div>
    <div
      class="feature-choices-content"
      :class="{ activeChoice: largerStorage }"
    >
      <input type="checkbox" @click="addRemoveFeature('largerStorage')" />
      <div class="feature-choice-text">
        <p>Larger storage</p>
        <p>Extra 1TB of cloud save</p>
      </div>
      <p class="feature-choice-price">+$2/mo</p>
    </div>
    <div
      class="feature-choices-content"
      :class="{ activeChoice: customizableProfile }"
    >
      <input type="checkbox" @click="addRemoveFeature('customizableProfile')" />
      <div class="feature-choice-text">
        <p>Customizable Profile</p>
        <p>Custom theme on your profile</p>
      </div>
      <p class="feature-choice-price">+$2/mo</p>
    </div>
  </div>
  <div class="navigation-buttons">
    <p class="previous-step">Go Back</p>
    <button>Next Step</button>
  </div>

  <!-- Step 3 end -->
</template>
<script>
export default {
  data() {
    return {
      featureChoices: [],
    };
  },
  computed: {
    onlineService() {
      return this.featureChoices.includes("onlineService");
    },
    largerStorage() {
      return this.featureChoices.includes("largerStorage");
    },
    customizableProfile() {
      return this.featureChoices.includes("customizableProfile");
    },
  },
  methods: {
    addRemoveFeature(value) {
      if (this.featureChoices.length === 0) {
        console.log("value", value);
        console.log("featureChoices", this.featureChoices.length);
        this.featureChoices.push(value);
        this.featureChoices.forEach((item) => console.log("item", item));
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
</style>
