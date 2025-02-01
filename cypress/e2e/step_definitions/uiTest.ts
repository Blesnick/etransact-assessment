import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { Pages } from "../../support/page";
interface MyClickOptions extends Cypress.ClickOptions {
  target?: string;
}
Given("I visit {string}", (url: string) => {
  Pages.visit(url);
});

When("I click on text {string}", (text: string) => {
  Pages.clickElementByText(text);
});
When("I force click on text {string}", (text: string) => {
  Pages.clickElementByTextForce(text);
});

When("I wait {int} milliseconds", (milliseconds: number) => {
  Pages.wait(milliseconds);
});

Then("I should see the Amazon Pages elements (e.g., search bar, logo)", () => {
  Pages.validatePagesElements();
});

When("I click on the selector {string}", (el: string) => {
  Pages.clickElementBySelector(el);
});
When("I see selector {string}", (el: string) => {
  Pages.seeSelector(el);
});

When("I see text {string}", (text: string) => {
  Pages.seeText(text);
});

When(
  "I click on the {int} child element {string} that opens in the same tab",
  (elementNumber: number, el: string) => {
    Pages.clickNthChildElement(elementNumber, el, {
      target: "_self",
    } as MyClickOptions);
  }
);
When(
  "I type {string} into the {string} field",
  (text: string, selector: string) => {
    Pages.typeIntoField(selector, text);
  }
);

Then(
  "the {string} field should contain {string}",
  (selector: string, text: string) => {
    cy.get(selector).should("have.value", text);
  }
);

When(
  "I select {string} from the {string} dropdown",
  (value: string, selector: string) => {
    Pages.selectDropdown(selector, value);
  }
);

Then(
  "the {string} dropdown should have {string} selected",
  (selector: string, value: string) => {
    cy.get(selector).should("have.value", value);
  }
);

Then(
  "I click on the {int} child selector {string}",
  (elementNumber: number, el: string) => {
    Pages.clickNthChildElement(elementNumber, el);
  }
);

When(
  "I upload a file to the {string} field with file {string}",
  (selector: string, fileName: string) => {
    // You can reference a file from the 'fixtures' folder
    const filePath = `images/${fileName}`; // e.g., 'images/profile-picture.jpg'
    Pages.uploadFile(selector, filePath); // Uploading the file using the method in Pages class
  }
);
