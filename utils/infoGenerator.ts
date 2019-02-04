export interface IRegInfo {
    compName: string;
    name: string;
    email: string;
    password: string;
}

export class RandomRegInfo implements IRegInfo{

    compName: string;
    name: string;
    email: string;
    password: string;

    constructor()
    {
          this.compName = "TestCompany_" + (Math.floor(Math.random() * 99999) + 1).toString();
          this.name = "Test_User_" + (Math.floor(Math.random() * 99999) + 1).toString();
          this.email = "test_" + (Math.floor(Math.random() * 99999) + 1).toString() + "@test.com";
          this.password = "password_" + (Math.floor(Math.random() * 99999) + 1).toString();
    }

}