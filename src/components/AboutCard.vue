<template>
  <div class="card">
    <h2 class="text-center mt-5">About Us</h2>
    <div class="text-center opacity-50 container">
      Our name spells out our mission: a bridge to a cleaner energy future.
      <br />
      That bridge safely connects millions of people around the world to the
      energy they rely on every day, fueling quality of life. Throughout our
      history, and especially today, we are looking beyond the horizon to invest
      in and build modern infrastructure, resilient communities and reliable
      energy.
    </div>
    <div
      class="mx-auto my-5"
      @mouseover="isHovering = true"
      @mouseleave="isHovering = false"
    >
      <img
        class="rounded"
        src="https://as2.ftcdn.net/v2/jpg/05/07/03/15/1000_F_507031566_SHIGu5VMQGwo1YvY4G9c6uxc7rrdHbXS.jpg"
        alt=""
        :class="{ 'opacity-50': isHovering }"
      />
      <a
        v-if="isHovering"
        href="/contact"
        class="btn btn-success second-bg-color btn-on-img"
        >Contact us</a
      >
    </div>
    <div class="px-5 mb-5 opacity-75 container">
      <span>
        We move about 30% of the crude oil produced in North America, we
        transport nearly 20% of the natural gas consumed in the U.S., and we
        operate North America’s third-largest natural gas utility by consumer
        count. Enbridge was an early investor in renewable energy, and we have a
        growing offshore wind portfolio.
      </span>
      <br />
      <br />
      <span>
        As a diversified energy company, we are uniquely positioned to help
        accelerate the global transition to a cleaner energy future, and we’re
        doing it in ways that are ethical, sustainable and socially responsible.
        We’re advancing new low-carbon energy technologies—including hydrogen,
        renewable natural gas, and carbon capture and storage. We’re committed
        to reducing the carbon footprint of the energy we deliver, and to
        achieving net zero emissions by 2050.
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutComponent",
  data() {
    return {
      isHovering: false,
    };
  },
};
</script>
