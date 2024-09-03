import homePage from "../pageobjects/home.page";
import LoginPage from "../pageobjects/login.page";

describe('Login Test', () => {
    it('Test 3 - Sucessfull login - Page Object Based', async () => {

        await LoginPage.open()
        await LoginPage.login("standard_user", "secret_sauce")
        await homePage.validateOnHomePage()
        
    });
});