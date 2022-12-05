<template>
  <img
    class="d-block mx-auto opacity-50 rounded carousel-item pb-5"
    src="dialog.jpg"
    alt=""
  />
  <div class="carousel-caption d-block text-success">
    <h1>Let’s talk</h1>
  </div>
  <div class="pb-5">
    <ContactForm />
  </div>
</template>
<script>
import ContactForm from "@/components/ContactForm.vue";

export default {
  name: "ContactComponent",
  components: {
    ContactForm,
  },
};
</script>
