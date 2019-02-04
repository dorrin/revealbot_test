import {browser, element, by, By, $, $$, ExpectedConditions,protractor} from 'protractor';
import {enterText} from './basicMethods';
import {RandomRegInfo, IRegInfo} from '../utils/infoGenerator';
import {allure} from "../allureSetup";

export class SignupPage {
    inputSignupCompName = element(by.css("input[id='user_company_name']"));
    inputSignupName = element(by.css("input[id='user_name']"));
    inputSignupEmail = element(by.css("input[id='user_email']"));
    inputSignupPassword = element(by.css("input[id='user_password']"));
    checkSignupAgree = element(by.css("label[for='agreement']"));
    buttonSignupSumbit = element(by.css("input[name='commit']"));

    async fillRegInfoRnd() {
        await allure.step(`Fill registration form`, async() => {
            const regInfo:IRegInfo = new RandomRegInfo();
            await enterText(this.inputSignupCompName, regInfo.compName);
            await enterText(this.inputSignupName, regInfo.name);
            await enterText(this.inputSignupEmail, regInfo.email);
            await enterText(this.inputSignupPassword, regInfo.password);
        });
    }
}