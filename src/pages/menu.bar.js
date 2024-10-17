import { step } from "allure-js-commons"

import { BasePage } from "./base.page";

export class MenuBar extends BasePage {
    constructor(page) {
        super(page);
        this.searchButtonMenu = this.page.locator('.header-top button[aria-label="Поиск"]');
    }

    async goToSearch() {
        await step(`Go to search from top menu`, async () => {
            await this.click(this.searchButtonMenu);
        })
    }
}