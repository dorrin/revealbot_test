import { JasmineAllureReporter } from "jasmine-allure2-reporter";
import { JasmineConsoleReporter } from "jasmine-allure2-reporter";
import { AllureRuntime, Status, GlobalInfoWriter, AllureInterface } from "allure2-js-commons";
import { TestResult } from "allure2-js-commons";

jasmine.getEnv().addReporter(new JasmineConsoleReporter());

const reporter = new JasmineAllureReporter(new AllureRuntime({
    resultsDir: "./allure-results",
    testMapper: (result: TestResult) => {
        if (result.status == Status.SKIPPED) result.fullName = `(WAS SKIPPED) ${result.fullName}`;
        return result;
    }
}));
jasmine.getEnv().addReporter(reporter);

export const allure: AllureInterface = reporter.getInterface();