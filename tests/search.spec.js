import { expect } from '@playwright/test';

import { WebApp } from '../src/app';
import { test } from '../src/helpers/fixtures/fixture';

test('Perform multiple searches from top menu', async ({ webApp }) => {
  let searchText = 'Пушкин'
  await webApp.mainPage.open('/');
  await webApp.menuBar.goToSearch()
  await webApp.searchPage.search(searchText)
  expect(await webApp.searchResultPage.getFirstTextResult()).toContain(searchText)
  expect(await webApp.searchResultPage.searchTextInUrl()).toBe(searchText)
  searchText = 'Италия'
  await webApp.menuBar.goToSearch()
  await webApp.searchPage.search(searchText)
  expect(await webApp.searchResultPage.searchTextInUrl()).toBe(searchText)
  expect(await webApp.searchResultPage.getFirstTextResult()).toContain(searchText, `Search result must contain ${searchText}`)
});


