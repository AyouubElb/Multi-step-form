<template>
  <!-- <div class="step-one-container"> -->
  <!-- Step 1 start -->

  <h1>Finishing up</h1>
  <p class="text-description">
    Double-check everything looks OK before confirming.
  </p>
  <div class="summary-container">
    <div class="subscription-plan">
      <div class="subscription-plan-title">
        <p>Arcad(Yearly)</p>
        <p class="modify-subscription-plan">Change</p>
      </div>
      <p class="subscription-plan-price">$90/yr</p>
    </div>
    <hr />
    <div class="feature-container">
      <p class="feature-title">Online service</p>
      <p class="feature-price">+$10/yr</p>
    </div>
  </div>
  <div class="total-container">
    <p class="total-title">Total(per year)</p>
    <div class="total-price">$120/yr</div>
  </div>
  <div class="navigation-buttons">
    <p class="previous-step">Go Back</p>
    <button class="confirm-button">Confirm</button>
  </div>

  <!-- Step 1 end -->
  <!-- </div> -->
</template>
<script>
export default {};
</script>
<style>
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
  background-color: #493efe;
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
