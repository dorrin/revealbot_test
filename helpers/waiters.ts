import {browser, protractor, ElementFinder} from 'protractor';
const EC = protractor.ExpectedConditions;

export async function waitElementIsVisible(elem: ElementFinder) {
    await browser.wait(EC.visibilityOf(elem), jasmine.DEFAULT_TIMEOUT_INTERVAL);
}

export async function waitElementIsClickable(elem: ElementFinder) {
    await browser.wait(EC.elementToBeClickable(elem), jasmine.DEFAULT_TIMEOUT_INTERVAL);
}