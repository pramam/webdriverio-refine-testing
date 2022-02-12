const Page = require('./page');

class StartersPage extends Page {

    get heading(){
        return $('h1')
    }
    get menuItemHeadings(){
        return $$('h3')
    }
    async ensureOnPage(){
        let url = "https://example.refine.dev/1/Starters";
        let actualUrl = await browser.getUrl();

        if ( actualUrl !== url)
            throw Error(`StartersPage.ensureOnPage: Expecting to be on ${url}, but on ${actualUrl}`)
        
        let heading = 'STARTERS';
        let actualHeading = await this.heading.getText();
        if ( actualHeading !== title)
            throw Error(`StarterPage.ensureOnPage: heading ${actualHeading} does not match expected heading ${heading}`);
    
        if (this.menuItemHeadings.length !== 6)
            throw Error(`StarterPage.ensureOnPage: expecting 6 items on page`)
    }
}

module.exports = new StartersPage();