<template>
  <div class="p-5">
    <div class="pb-5 row" v-for="element in elements" :key="element.id">
      <h1>{{ element.title }}</h1>
      <h5>{{ element.description }}</h5>
      <div class="my-5 col-3" v-for="image in element.images" :key="image.id">
        <img class="img-fluid" :src="image.url" alt="" />
        <h3>{{ image.name }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PortfolioExamples",
  data() {
    return {
      elements: [
        {
          title: "Bridges & Urban Infrastructure",
          description:
            "We rely on the strength and longevity of our infrastructure to ensure the efficiency of daily life, while protecting our communities.",
          images: [
            {
              name: "Mechanized River Valley Access",
              url: "https://dialogdesign.ca/wp-content/uploads/projects/mechanized-river-valley-access/mechanized-river-valley-access-1-1400x1022.jpg",
            },
            {
              name: "Walterdale Bridge",
              url: "https://dialogdesign.ca/wp-content/uploads/projects/walterdale-bridge/Walterdale-Bridge-60_highresrgb-1400x1034.jpg",
            },
            {
              name: "Rainbow Park",
              url: "https://dialogdesign.ca/wp-content/uploads/projects/rainbow-park/Smithe-and-Richards-Park-1297-1400x933.jpg",
            },
            {
              name: "Chinook Centre Pedestrian Overpass",
              url: "https://dialogdesign.ca/wp-content/uploads/projects/chinook-centre-pedestrian-overpass-2/chinook-centre-pedestrian-overpass-2-1400x933.jpg",
            },
          ],
        },
        {
          title: "Civic & Culture",
          description:
            "Through the design of civic spaces, museums, and places dedicated to the arts, we create inspiring destinations for people to connect, explore, and share.",
          images: [
            {
              name: "Royal Alberta Museum",
              url: "https://dialogdesign.ca/wp-content/uploads/projects/royal-alberta-museum/royal-alberta-museum-1400x840.jpg",
            },
            {
              name: "The Shipyards",
              url: "https://dialogdesign.ca/wp-content/uploads/projects/the-shipyards/the-shipyards-1400x933.jpg",
            },
            {
              name: "St. Joseph Seminary",
              url: "https://dialogdesign.ca/wp-content/uploads/projects/st-joseph-seminary/St-Joseph-Seminary-chapel-interior.jpg-1400x932.jpg",
            },
            {
              name: "Chinook Centre Pedestrian Overpass",
              url: "https://dialogdesign.ca/wp-content/uploads/stories/calgary-central-library-nominated-for-mies-crown-hall-americas-prize/CPL-025_hiresjpg-1400x933.jpg",
            },
          ],
        },
        {
          title: "Education",
          description:
            "We plan and design campuses that become active participants in the learning process. Student residencies, labs, libraries, learning centers, and administrative blocks — our spaces encourage collaborative innovation.",
          images: [
            {
              name: "Bill Fisch Forest Stewardship and Education Centre",
              url: "https://dialogdesign.ca/wp-content/uploads/projects/bill-fisch-forest-stewardship-and-education-centre/bill-fisch-forest-stewardship-and-education-centre-1400x933.jpg",
            },
            {
              name: "Centennial College – A-Block Expansion Building",
              url: "https://dialogdesign.ca/wp-content/uploads/projects/centennial-college-a-block-expansion-building/centennial-college-a-block-expansion-building-1400x714.jpg",
            },
            {
              name: "AMS Student Nest: the UBC Student Union Building",
              url: "https://dialogdesign.ca/wp-content/uploads/projects/ams-student-nest-the-ubc-student-union-building-2/ams-student-nest-the-ubc-student-union-building-2-1400x933.jpg",
            },
            {
              name: "University of Calgary – MacKimmie Complex",
              url: "https://dialogdesign.ca/wp-content/uploads/projects/university-of-calgary-mackimmie-complex-2/university-of-calgary-mackimmie-complex-2-1400x934.jpg",
            },
          ],
        },
        {
          title: "Healthcare & Wellness",
          description:
            "Now more than ever, our essential workers need facilities that allow them to work safely and effectively.",
          images: [
            {
              name: "Calgary Cancer Centre",
              url: "https://dialogdesign.ca/wp-content/uploads/projects/calgary-cancer-centre/calgary-cancer-centre-1400x905.jpg",
            },
            {
              name: "Grande Prairie Regional Hospital",
              url: "https://dialogdesign.ca/wp-content/uploads/projects/grande-prairie-regional-hospital/grande-prairie-regional-hospital-1.jpg",
            },
            {
              name: "Kaye Edmonton Clinic",
              url: "https://dialogdesign.ca/wp-content/uploads/projects/kaye-edmonton-clinic/kaye-edmonton-clinic-1400x1050.jpg",
            },
            {
              name: "Vivo for Healthier Generations",
              url: "https://dialogdesign.ca/wp-content/uploads/projects/vivo-for-healthier-generations/vivo-for-healthier-generations-1400x766.jpg",
            },
          ],
        },
        {
          title: "Hospitality",
          description:
            "Specificities of place, culture, and brand merge to give shape to spaces that are unique and welcoming for all.",
          images: [
            {
              name: "Four Seasons Hotel Whistler",
              url: "https://dialogdesign.ca/wp-content/uploads/projects/four-seasons-hotel-whistler/four-seasons-hotel-whistler-1400x1002.jpg",
            },
            {
              name: "Buffo Restaurant",
              url: "https://dialogdesign.ca/wp-content/uploads/projects/buffo-restaurant/buffo-restaurant-1155x1400.jpg",
            },
            {
              name: "Four Seasons Hotel Toronto d|bar",
              url: "https://dialogdesign.ca/wp-content/uploads/projects/four-seasons-hotel-toronto-dbar/four-seasons-hotel-toronto-dbar-1400x934.jpg",
            },
            {
              name: "JJ Bean Cafés",
              url: "https://dialogdesign.ca/wp-content/uploads/projects/jj-bean-cafes-2/JJ-Bean-CAFES-1400x875.jpg",
            },
          ],
        },
      ],
    };
  },
};
</script>
