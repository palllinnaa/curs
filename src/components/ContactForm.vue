<template>
  <div class="contact-form container-sm">
    <form method="POST" class="row" autocomplete="on">
      <div class="col">
        <BaseInput label="Firstname" type="text" />
        <BaseInput label="Lastname" type="text" />
        <BaseInput label="Your Message" type="text" />
      </div>
      <div class="col">
        <BaseInput label="Email" type="email" />
        <BaseInput label="Phone Number" type="tel" />
      </div>
      <div class="col mt-3">
        <span
          >Our team is dedicated to providing creative solutions tailored to
          suit your individual energy needs.</span
        >
        <br />
        <br />
        <span
          >Interested in working with us? Please submit employment inquiries
          to</span
        >
        <a href="maito:hr@mail.com"> hr@mail.com</a>
      </div>
    </form>
  </div>
</template>
<script>
import BaseInput from "@/components/BaseInput.vue";

export default {
  name: "ContactForm",
  components: {
    BaseInput,
  },
};
</script>
