import { MainPage, MenuBar, SearchPage, SearchResultPage } from "./pages";

export class WebApp {
    constructor(page) {
        this.page = page;
        this.mainPage = new MainPage(this.page);
        this.searchPage = new SearchPage(this.page);
        this.searchResultPage = new SearchResultPage(page)
        this.menuBar = new MenuBar(this.page);
    }
}