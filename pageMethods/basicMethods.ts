import {browser, ElementFinder } from "protractor";
import {waitElementIsVisible, waitElementIsClickable} from "../helpers/waiters";
import {allure} from "../allureSetup";

export async function goToPageAndWait(url:string, waitElem:ElementFinder) {
    await allure.step(`Go to url: ${url}`, async() => {
        await browser.waitForAngularEnabled(false);
        await browser.get(url);
        await waitElementIsVisible(waitElem);
    });
}

export async function clickAndWaitElem(elem:ElementFinder,waitElem:ElementFinder){
    await allure.step(`Click on element and wait`, async() => {
        await elem.click();
        await waitElementIsVisible(waitElem);
    });
}

export async function clickAndWaitClickable(elem:ElementFinder,waitElem:ElementFinder){
    await allure.step(`Click on element and wait element is clickable`, async() => {
        await elem.click();
        await waitElementIsVisible(waitElem);
        await waitElementIsClickable(waitElem);
    });
}

export async function enterText(elem:ElementFinder,text:string){
    await allure.step(`Enter text "${text}" to input element`, async() => {
        await elem.click();
        await elem.sendKeys(text);
    }); 
}
