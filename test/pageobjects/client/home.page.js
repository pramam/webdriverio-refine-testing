const Page = require('./page');

class HomePage extends Page {

    get starters() {
        return $('=STARTERS')
    }
    get pastas(){
        return $('=PASTAS')
    }
    get pizzas(){
        return $('=PIZZAS')
    }

    open(){
        return super.open('');
    }
    async ensureOnPage(){
        // await browser.url("https://example.refine.dev");

        // Make sure page is loaded
        const elHeader = await $('h1');
        const text = await elHeader.getText();

        console.log(text) // outputs: "Delight"

    }
    async clickOnStarters(){

        let title = 'STARTERS';
        let actualTitle = await this.starters.getText();
        if ( actualTitle !== title)
            throw Error(`StarterPage.clickOnStarters: title ${actualTitle} does not match expected title ${title}`);
        await this.starters.click();
    }

}

module.exports = new HomePage();