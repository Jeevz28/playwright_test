
import { expect, test } from '@playwright/test';
const loginpage = require('../pages/loginpage');
require('dotenv').config({ override: true });



test('Page opening', async({page})=>
{
  await page.goto(`${process.env.BASE_URL}/instructor/login`);
  console.log(process.env.username);
  console.log(process.env.password);
 const login = new loginpage(page);
 await login.login_func(process.env.username,process.env.password);
 await login.login_click();
 await expect(page).toHaveURL(/options/);
});