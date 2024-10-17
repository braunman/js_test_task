import { step } from "allure-js-commons"

import { BasePage } from "./base.page";

export class SearchResultPage extends BasePage {
    constructor(page) {
        super(page);
        this.searchResultBox = page.locator('.search__results');
        this.resultsItems = page.locator('.result-item');
    }

    async searchTextInUrl() {
        let encodedQuery;
        await step("Get search text from URL", async () => {
            await this.waitFirstSearchResult()
            const parsedUrl = new URL(await this.get_url());
            encodedQuery = parsedUrl.searchParams.get('query');
        })
        return encodedQuery
    }

    async getResultsText() {
        let resultsText;
        await step("Get text from all search result", async () => {
            await this.waitFirstSearchResult()
            resultsText = await this.resultsItems.evaluateAll(
                result => result.map(element => element.textContent));
        })
        return resultsText;
    }
    async getFirstTextResult() {
        let text;
        await step("Get text from first search result", async () => {
            await this.waitFirstSearchResult()
            text = await this.getElementText(this.resultsItems.first());
        })
        return text;
    }

    async waitFirstSearchResult() {
        await step("Wait first search result is visible", async () => {
            const firstResultItem = this.page.locator('.result-item').first();
            this.elementIsVisible(firstResultItem);
        })
    }
}
