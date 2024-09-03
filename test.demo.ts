import LoginPage from "../pageobjects/login.page";

describe('Test Saucedemo', () => {
    
    it('Test 1 - Login Sukses', async () => {
        await browser.url("https://www.saucedemo.com/");
              
        const usernameTextbox = await browser.$("#user-name");
        const passwordTextbox = await browser.$("#password");
        const loginButton = await browser.$('//input[@type="submit"]');

        await usernameTextbox.setValue("visual_user");
        await passwordTextbox.setValue("secret_sauce");
        await loginButton.click()

        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        await expect(browser).toHaveTitle('Swag Labs');
    
    });
it('Test 2 - Login with wrong password', async () => {
    await browser.url("https://www.saucedemo.com/")
              
    const usernameTextbox = await browser.$("#user-name");
    const passwordTextbox = await browser.$("#password");
    const loginButton = await browser.$('//input[@type="submit"]');

    await usernameTextbox.setValue("visual_user");
    await passwordTextbox.setValue("wrong_password");
    await loginButton.click()

    const errorMessageBox = await browser.$('*[@id="login_button_container"]/div/form/div[3]/h3')
    await expect (errorMessageBox).toContain("Epic sadface: Username and password do not match any user in this service")


    });
});