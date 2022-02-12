const HomePage = require('../../pageobjects/client/home.page')
const StartersPage = require('../../pageobjects/client/starters.page');

describe(`User Story: Place an order`, ()=>{
    describe(`Home Page`, ()=> {
        it(`make sure home page is loaded`, async ()=>{
            await HomePage.open();
            await HomePage.ensureOnPage();
            // await browser.url("https://example.refine.dev");

            // Make sure page is loaded
            // const elHeader = await $('h1');
            // const text = await elHeader.getText();

            // console.log(text) // outputs: "Delight"

        })
        it(`click on Starters`, async ()=> {
            await HomePage.clickOnStarters();
            // const link = await $('=STARTERS')
            // console.log(await link.getText()) // outputs: "STARTERS"
            // console.log(await link.getAttribute('href'))

        })
    })
    describe(`StartersPage`, ()=>{
        it(`make sure Starters Page is loaded`, async ()=>{
            await StartersPage.ensureOnPage();
        })
        it(`order 3rd item on menu`, async()=>{
            await StartersPage.orderItemNo(3);
        })
    })
})