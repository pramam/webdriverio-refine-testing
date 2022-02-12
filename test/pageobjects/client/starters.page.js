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
        await browser.pause(5000); // failing without this pause
        let actualUrl = await browser.getUrl();

        if ( actualUrl !== url)
            throw Error(`StartersPage.ensureOnPage: Expecting to be on ${url}, but on ${actualUrl}`)
        
        let heading = 'STARTERS';
        await this.heading.waitForExist({ timeout: 5000 });
        let actualHeading = await this.heading.getText();
        if ( actualHeading !== heading)
            throw Error(`StarterPage.ensureOnPage: heading ${actualHeading} does not match expected heading ${heading}`);
    
        let length = await this.menuItemHeadings.length;
        if (length !== 6)
            throw Error(`StarterPage.ensureOnPage: expecting 6 items on page, got ${length}`)
    }

    async orderItemNo(num){
        console.log('StartersPage.orderItemNo')
        const elListItems = await this.menuItemHeadings;
        console.log(`StartersPage.orderItemNo : got ${elListItems.length} h3\'s`)
        // await elListItems.map(async function (item){
        //     let text = await item.getText();

        //     console.log(text);
        //     return;
        // })
        // await browser.debug();
        console.log(`3rd item: ${await elListItems[2].getText()}`);
    }
}

module.exports = new StartersPage();