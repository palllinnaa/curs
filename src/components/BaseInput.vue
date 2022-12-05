<template>
  <div class="m-3">
    <label>{{ label }}</label>
    <input v-bind="$attrs" :placeholder="label" class="form-control" value="" />
  </div>
</template>
<script>
export default {
  props: {
    label: {
      type: String,
      default: "",
    },
  },
};
</script>
