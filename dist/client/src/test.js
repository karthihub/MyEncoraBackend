"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("zone.js/testing");
const testing_1 = require("@angular/core/testing");
const testing_2 = require("@angular/platform-browser-dynamic/testing");
testing_1.getTestBed().initTestEnvironment(testing_2.BrowserDynamicTestingModule, testing_2.platformBrowserDynamicTesting(), { teardown: { destroyAfterEach: true } });
const context = require.context('./', true, /\.spec\.ts$/);
context.keys().map(context);
//# sourceMappingURL=test.js.map