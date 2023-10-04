<template>
  <div>
    <!-- Your component's content here -->
  </div>
</template>

<script>
export default {
  mounted() {
    // Listen for the custom event emitted by the plugin
    this.$on('f9-key-pressed', this.handleF9KeyPress);
  },
  methods: {
    handleF9KeyPress() {
      // Trigger the desired action when F9 is pressed
      // For example, simulate a button click
      this.$refs.submitPrintButton.click();
    },
  },
};
</script>
