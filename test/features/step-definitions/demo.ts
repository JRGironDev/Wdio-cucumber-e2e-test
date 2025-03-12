import { Given, When, Then } from "@cucumber/cucumber";

Given("Google page is opened", async function() {
  await browser.url("https://google.com");
  await browser.pause(7000);
});

When("I search for {string}", async function (searchItem: string) {
  console.log("Searching for: " + searchItem);
  let ele = await $(`[name=q]`);
  await ele.waitForExist({ timeout: 5000 });
  await ele.setValue(searchItem);
  await browser.keys("Enter");
});

Then("Click on the first search result", async function (){
  let ele = await $(`<h3>`);
  ele.click();
});