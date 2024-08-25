const { defineConfig } = require("cypress");
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  preprocessor,
} = require("@badeball/cypress-cucumber-preprocessor/browserify");
const sqlServer = require("cypress-sql-server");
const excelToJson = require("convert-excel-to-json");
const fs = require("fs");
const ExcelJs = require("exceljs");

async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  config.db = {
    userName: "",
    password: "",
    server: "",
    options: {
      database: "",
      encrypt: true,
      rowCollectionOnRequestCompletion: true,
    },
  };

  await addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor", preprocessor(config));
  require('cypress-mochawesome-reporter/plugin')(on);

  tasks = sqlServer.loadDBPlugin(config.db);
  on("task", tasks);

  on("task", {
    excelToJsonConverter(filePath) {
      const result = excelToJson({
        source: fs.readFileSync(filePath), // fs.readFileSync return a Buffer
      });
      return result;
    },
  });
  on("task", {
    async writeExcelTest({ searchText, replaceText, change, filePath }) {
      const workbook = new ExcelJs.Workbook();
      await workbook.xlsx.readFile(filePath);
      const worksheet = workbook.getWorksheet("Sheet1");
      const output = await readExcel(worksheet, searchText);

      const cell = worksheet.getCell(
        output.row,
        output.column + change.colChange
      );
      cell.value = replaceText;
      return workbook.xlsx
        .writeFile(filePath)
        .then(() => {
          return true;
        })
        .catch((error) => {
          return false;
        });
    },
  });

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

async function readExcel(worksheet, searchText) {
  let output = { row: -1, column: -1 };
  worksheet.eachRow((row, rowNumber) => {
    row.eachCell((cell, colNumber) => {
      if (cell.value === searchText) {
        output.row = rowNumber;
        output.column = colNumber;
      }
    });
  });
  return output;
}

module.exports = defineConfig({
  projectId: "739wch",
  defaultCommandTimeout: 6000,
  reporter: 'cypress-mochawesome-reporter',

  env: {
    url: "https://rahulshettyacademy.com",
  },
  retries: {
    runMode: 1,
  },
  e2e: {
    specPattern: "cypress/integration/examples/*.js",
    setupNodeEvents,
    //specPattern: "**/*.feature",
  },
});
