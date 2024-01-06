<template>
  <!-- <div class="step-one-container"> -->
  <!-- Step 1 start -->

  <h1>Personal info</h1>
  <p class="text-description">
    Please provide your name, email address, and phone number.
  </p>
  <label for="">Name</label>
  <input type="text" placeholder="e.g. Stephen King" />
  <label for="">Email Address</label>
  <input type="text" placeholder="e.g. stephenking@lorem.com" />
  <label for="">Phone Number</label>
  <input type="text" placeholder="e.g. +1 234 567 890" />
  <button>Next Step</button>

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
