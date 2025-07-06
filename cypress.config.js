const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'k3gnfc',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
