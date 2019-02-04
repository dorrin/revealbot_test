import {browser, element, by, By, $, $$, ExpectedConditions,protractor} from 'protractor';

export class StartPage {
    startNavBar = element(by.css(".navbar-nav"));
    startLogin = element(by.css("a[data-component='login']"));
    startProfile = element(by.css("a[data-component='profile']"));
}