class loginPage {
    constructor(page){
        this.page=page;
        this.country=page.locator('#country-code-select');
        this.username=page.locator("#phone-number-input");
        this.password=page.locator("#password-input");
        this.button= page.getByRole('button', { name: 'Sign In to Portal' });
    }

    async login_func(user,pass)
    {
            await this.country.selectOption({label : " India (+91) "});
            await this.username.fill((user));
            await this.password.fill(pass);
            
}

async login_click(){
    await this.button.click();
    }
}

module.exports= loginPage;