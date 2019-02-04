import {browser, element, by, By, $, $$, ExpectedConditions,protractor} from 'protractor';

export class FbConnectPage {
    accFormTitle =  element(by.css(".account-form__title"));
    accFormText = element(by.css(".account-form__undertitle"));
    accFromFB = element(by.css(".account-form__facebook-btn"));
}