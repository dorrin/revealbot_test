import {browser, element, by, By, $, $$, ExpectedConditions,protractor} from 'protractor';

export class LoginPage {
    loginSignup = element(by.cssContainingText("a", "Sign up"));
}