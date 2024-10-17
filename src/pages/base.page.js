import { expect } from '@playwright/test';
import { step } from "allure-js-commons"

export class BasePage {
    constructor(page) {
        this.page = page;
    }

    async open(url) {
        await step(`Go to page ${url}`, async () => {
            await this.page.goto(url);
        })
    }

    async get_url() {
        let url;
        await step(`Get url`, async () => {
            url = await this.page.url()
        })
        return url
    }

    async click(locator) {
        await step(`Click on locator ${locator}`, async () => {
            await locator.click();
        })
    }

    async elementIsVisible(locator) {
        await step(`Wait locator ${locator} is visible`, async () => {
            await expect(locator).toBeVisible()
        })
    }

    async fill(locator, text) {
        await step(`Fill in locator ${locator} text '${text}'`, async () => {
            await locator.fill(text);
        })
    }

    async getElementText(locator) {
        let text;
        await step(`Get text from locator ${locator}`, async () => {
            text = await locator.textContent();
        });
        return text;
    }

}
