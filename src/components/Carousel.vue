<template>
  <div
    id="carouselExampleControls"
    class="carousel slide"
    data-bs-ride="carousel"
  >
    <div class="carousel-inner">
      <div
        class="carousel-item"
        v-for="element in elements"
        :key="element.id"
        :class="{ active: element.isActive }"
      >
        <img :src="element.picture" class="d-block" alt="..." />
        <div class="carousel-caption d-none d-md-block second-bg-color">
          <h5>{{ element.label }}</h5>
          <p>{{ element.text }}</p>
        </div>
      </div>
    </div>
    <a
      v-for="control in controls"
      :key="control.id"
      :class="control.buttonClass"
      type="button"
      data-bs-target="#carouselExampleControls"
      :data-bs-slide="control.text"
    >
      <span :class="control.buttonClass + '-icon'" aria-hidden="true"></span>
      <span class="visually-hidden">{{ control.text }}</span>
    </a>
  </div>
</template>

<script>
export default {
  name: "CarouselComponent",
  data() {
    return {
      elements: [
        {
          picture: "/1.jpg",
          label: "THE BIGGEST AND MOST TRUSTED BRAND IN ETFE CLADDING",
          text: "ALSO ITS CREATOR. WE ARE A GLOBAL PLAYER WITH GERMAN ROOTS AND WE HAVE COMPLETED OVER 1,700 PROJECTS WORLDWIDE, RANGING FROM SMALL TO LARGE.",
          isActive: true,
        },
        {
          picture: "/2.jpg",
          label: "Over 35 years of experience.",
          text: "We are professionals, so you can leave it in our hands.",
        },
        {
          picture: "/3.jpg",
          label: "The Master of Quality Construction",
          text: "We never compromise on the quality of construction materials.",
        },
      ],
      controls: [
        {
          buttonClass: "carousel-control-prev",
          text: "prev",
        },
        {
          buttonClass: "carousel-control-next",
          text: "next",
        },
      ],
    };
  },
};
</script>
