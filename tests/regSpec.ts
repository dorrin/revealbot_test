import {browser, element, by, By, $, $$, ExpectedConditions,protractor} from 'protractor';
import {goToPageAndWait,clickAndWaitElem,clickAndWaitClickable} from '../pageMethods/basicMethods';
import {StartPage} from '../pageMethods/startPage';
import {LoginPage} from '../pageMethods/loginPage';
import {SignupPage} from '../pageMethods/signupPage';
import {FbConnectPage} from '../pageMethods/fbConnectPage';
import {registrationSpecData} from '../testsData/regSpec';
const startPage = new StartPage();
const loginPage = new LoginPage();
const signupPage = new SignupPage();
const fbConnectPage = new FbConnectPage();

describe('revealbot demo test', function() {
    
  it('registration', async () => {
    await goToPageAndWait(registrationSpecData.startUrl,startPage.startNavBar);
    await clickAndWaitElem(startPage.startLogin,loginPage.loginSignup);
    await clickAndWaitElem(loginPage.loginSignup, signupPage.inputSignupCompName);
    await signupPage.fillRegInfoRnd();
    await clickAndWaitClickable(signupPage.checkSignupAgree, signupPage.buttonSignupSumbit);
    await clickAndWaitElem(signupPage.buttonSignupSumbit, fbConnectPage.accFormTitle);
    await expect(fbConnectPage.accFormTitle.getText()).toContain(registrationSpecData.fbConnPageText[0]);
    await expect(fbConnectPage.accFormText.getText()).toContain(registrationSpecData.fbConnPageText[1]);
    await expect(fbConnectPage.accFormText.getText()).toContain(registrationSpecData.fbConnPageText[2]);
    await expect(browser.isElementPresent(fbConnectPage.accFromFB)).toBeTruthy();
    await goToPageAndWait(registrationSpecData.startUrl,startPage.startNavBar);
    await expect(browser.isElementPresent(startPage.startLogin)).toBeFalsy();
    await expect(browser.isElementPresent(startPage.startProfile)).toBeTruthy();
  });
});