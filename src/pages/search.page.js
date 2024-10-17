import { step } from "allure-js-commons"

import { BasePage } from "./base.page";

export class SearchPage extends BasePage {
    constructor(page) {
        super(page);
        this.searchBarInput = page.locator('.popups-wrapper [name="search"]');
        this.searchButton = page.locator('.popups-wrapper button.btn._link');
        this.searchResults = page.locator('.search-result li');
        this.results = page.locator('.dropdown-search-result');
        this.notFoundResults = page.locator('.not-found _search')
    }

    async search(text = '') {
        await step(`Search by text ${text}`, async () => {
            await this.fill(this.searchBarInput, text)
            await this.click(this.searchButton);
        })
    }


}
