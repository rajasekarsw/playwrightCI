import {test} from '@playwright/test';

test("sample google page test",async ({page})=>{

   await page.goto("https://google.com/");
});