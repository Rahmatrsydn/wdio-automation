describe('Test Saucedemo', () => {
    it('Test 1 - Login Sukses', async () => {
        await browser.url("https://www.saucedemo.com/");
              
        const usernameTextbox = await browser.$("#user-name");
        const passwordTextbox = await browser.$("#password");
        const loginButton = await browser.$('//input[@type="submit"]');

        await usernameTextbox.waitForDisplayed({ timeout: 5000 });
        await passwordTextbox.waitForDisplayed({ timeout: 5000 });
        await loginButton.waitForDisplayed({ timeout: 5000 });

        await usernameTextbox.setValue("visual_user");
        await passwordTextbox.setValue("secret_sauce");
        await loginButton.click()

        await browser.pause(5000)
        await browser.waitUntil(
            async () => (   await browser.getUrl()) === 'https://www.saucedemo.com/inventory.html',
            {
                timeout: 5000,
                timeoutMsg: 'expected URL to be different after 5s'

            }

        );
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        await expect(browser).toHaveTitle('Swag Labs');
    
    });
});