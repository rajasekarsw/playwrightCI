import {test} from '@playwright/test';

test("sample google page test",({page})=>{

    page.goto("https://google.com");
})