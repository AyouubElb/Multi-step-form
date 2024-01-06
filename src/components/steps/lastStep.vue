<template>
  <!-- <div class="step-one-container"> -->
  <!-- Step 1 start -->

  <h1>Finishing up</h1>
  <p class="text-description">
    Double-check everything looks OK before confirming.
  </p>

  <div class="navigation-buttons">
    <p class="previous-step">Go Back</p>
    <button>Next Step</button>
  </div>

  <!-- Step 1 end -->
  <!-- </div> -->
</template>
<script>
export default {};
</script>
<style>
.step-container label {
  color: #03295a;
  margin-bottom: 5px;
}

.step-container input {
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #babbc0;
  border-radius: 6px;
}

/* .step-container input:nth-of-type(3) {
  margin-bottom: 5rem;
} */

.step-container input::placeholder {
  color: #a9a9b1;
}
</style>
