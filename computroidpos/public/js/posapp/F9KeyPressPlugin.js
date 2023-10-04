// F9KeyPressPlugin.js

export default {
  install(Vue) {
    Vue.mixin({
      mounted() {
        // Add an event listener for keydown events
        window.addEventListener('keydown', this.handleF9KeyPress);
      },
      beforeDestroy() {
        // Remove the event listener when the component is destroyed
        window.removeEventListener('keydown', this.handleF9KeyPress);
      },
      methods: {
        handleF9KeyPress(event) {
          if (event.key === 'F9') {
            // Prevent the default F9 key behavior
            event.preventDefault();

            // Emit a custom event to indicate F9 key press
            this.$emit('f9-key-pressed');
          }
        },
      },
    });
  },
};
