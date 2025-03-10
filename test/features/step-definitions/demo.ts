import { Given, When, Then } from "@cucumber/cucumber";

Given("Google page is opened", async () => {
  await browser.url("https://google.com");
  await browser.pause(7000);
});