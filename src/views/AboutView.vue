<template>
  <div class="d-flex flex-column text-dark">
    <!-- <h5 class="fw-bold">About Us</h5> -->
    <nav style="--bs-breadcrumb-divider: '•'">
      <ul class="breadcrumb text-dark">
        <li
          v-for="item in items"
          :key="item.id"
          class="breadcrumb-item text-gray-600 h6"
        >
          <router-link :to="item.href" class="text-secondary">{{
            item.text
          }}</router-link>
        </li>
      </ul>
    </nav>
    <AboutComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import AboutComponent from "@/components/AboutCard.vue";

export default {
  name: "AboutView",
  components: {
    AboutComponent,
  },
  data() {
    return {
      items: [
        {
          text: "Home",
          href: "/home",
        },
        {
          text: "About",
          href: "/about ",
          active: true,
        },
      ],
    };
  },
};
</script>
