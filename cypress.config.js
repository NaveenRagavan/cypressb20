const { defineConfig } = require("cypress");
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')
const allureWriter = require('@shelex/cypress-allure-plugin/writer');


module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    //specPattern: "**/*.feature",
    'baseUrl':'https://opensource-demo.orangehrmlive.com',
    //'defaultCommandTimeout':8000,
    //pageLoadTimeout:120000,
    retries:{openMode:1,runMode:1},
    //viewportWidth:1920,
    //viewportHeight:1080,
    video:true,
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on,config)
      require('cypress-mochawesome-reporter/plugin')(on);
        on('task', {downloadFile})
        allureWriter(on, config);
        return config;
    },
  },
  env:{
    "allureResultsPath": "allure-results",

  }
});
