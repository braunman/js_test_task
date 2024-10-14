import { test as base } from '@playwright/test';

import { WebApp } from '../../app';

export const test = base.extend({
    webApp: async ({ page }, use) => {
        const app = new WebApp(page);
        await app.mainPage.open('/');
        await app.mainPage.waitPageLoad()
        await use(app);
    }
});

export { expect } from '@playwright/test';