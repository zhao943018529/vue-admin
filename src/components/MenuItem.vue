<template>
  <div class="menu-item">
    <span>{{ data.name }}</span>
  </div>
</template>
<script>
export default {
  name: 'MenuItem',
  props: {
    data: Object,
  },
  methods: {},
};
</script>
