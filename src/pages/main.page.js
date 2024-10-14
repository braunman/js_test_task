import { step } from "allure-js-commons"

import { BasePage } from "./base.page";

export class MainPage extends BasePage {
    constructor(page) {
        super(page);
        this.navigationList = this.page.locator('.nav-list');
    }

    async waitPageLoad() {
        await step(`Wait main page is loading`, async () => {
            this.elementIsVisible(this.navigationList)
        })
    }



}
