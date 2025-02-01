# Etransact Test Automation

<div style="text-align: center;">
  <img src="data:image/png;base64,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" alt="eTransact" />
  
  <div>
    <a href="https://github.com/Blesnick/etransact-assessment/actions">
      <img src="https://img.shields.io/github/workflow/status/Blesnick/etransact-assessment/Cypress%20Tests?label=Build" alt="Build Status" />
    </a>
    <a href="https://github.com/Blesnick/etransact-assessment/actions">
      <img src="https://img.shields.io/github/workflow/status/Blesnick/etransact-assessment/Cypress%20Tests?label=Cypress%20Tests" alt="Cypress Tests" />
    </a>
    <a href="https://www.npmjs.com/package/cypress-mochawesome-reporter">
      <img src="https://img.shields.io/badge/reporter-cypress%20mochawesome%20reporter-blue" alt="Mochawesome Report" />
    </a>
    <a href="https://github.com/cucumber/cucumber">
      <img src="https://img.shields.io/badge/Cucumber-Enabled-green" alt="Cucumber" />
    </a>
    <a href="https://www.typescriptlang.org/">
      <img src="https://img.shields.io/badge/TypeScript-v4.5-blue" alt="TypeScript" />
    </a>
  </div>
</div>

This project contains automated UI and API test cases for Etransact, implemented using Cypress with the Cucumber framework.

## Table of Contents

- [Project Structure](#project-structure)
- [Pre-requisites](#pre-requisites)
- [Installation](#installation)
- [Running Tests](#running-tests)
  - [Running UI Tests](#running-ui-tests)
  - [Running API Tests](#running-api-tests)
- [Configuration](#configuration)
- [Features](#features)
- [Code Challenge](#code-challenge)
- [License](#license)

## Project Structure

```
.
├── cypress
│   ├── e2e
│   │   ├── step_definitions      # Step definitions for the Cucumber tests
│   │   └── features              # Contains feature files for tests
│   │       └── automation.feature # Feature file with UI and API test scenarios
│   ├── fixtures                  # Static test data
│   ├── videos                    # Cypress video recordings
│   └── screenshots               # Screenshots from failed test cases
├── package.json                  # Project dependencies and scripts
├── cypress.config.ts             # Cypress configuration file
└── README.md                     # Project documentation
```

## Pre-requisites

Make sure you have the following installed:

- Node.js (v14 or higher)
- npm (v6 or higher)
- Chrome Browser

## Installation

Clone the repository and install the required dependencies:

```bash
git clone https://github.com/Blesnick/etransact-assessment.git
cd Etransact-test
npm install
```

## Running Tests

You can run tests using Cypress via the following commands:

### Running UI Tests

To open Cypress and run UI tests interactively:

```bash
npm run cy:open:test
```

To run UI tests in the terminal with the tag `@uiTest`:

```bash
npm run cy:run:tag:ui
```

### Running API Tests

To run API tests in the terminal with the tag `@apiTest`:

```bash
npm run cy:run:tag:api
```

## Configuration

- The base URL for the project is set to `https://www.amazon.in/`.
- Default timeouts, viewport size, and security settings are configured in `cypress.config.ts`.

## Features

### UI Tests

- **Scenario: Add Product**

  - This test navigates to the Amazon homepage and selects a Samsung TV from the "Televisions" category under "TV, Appliances, Electronics" and verifies product details.

  Example from `uiTest.feature`:

  ```gherkin
  @uiTest
  Scenario: Add Product
    Given I visit "/"
    When I click on the selector "#nav-hamburger-menu"
    ...
    Then I see selector "#feature-bullets"
  ```

### API Tests

- **Scenario: Create an Admin User**

  - This test sends a POST request to create an admin user and validates the response schema, content type, and response time.

  - **Scenario: Create a Player User**
    - Similar to the admin scenario but for a player user.

  Example from `apiTest.feature`:

  ```gherkin
  @apiTest
  Scenario: Create an Admin User
    Given I have user data for an admin
    When I make a POST request to create a user
    Then Validate Admin response schema using include
    Then the response time should be less than 2 seconds
  ```

## Code Challenge

This project is based on the **Automation Coding Challenge** provided for automating both web and API test cases using Cypress and JavaScript.

### Test Case 1: Web Automation

Steps to automate:

1. Open [Amazon India](https://www.amazon.in/).
2. Click on the hamburger menu in the top left corner.
3. Select "TV, Appliances, Electronics".
4. Click on "Televisions".
5. Filter by Brand: Samsung.
6. Sort results by price from high to low.
7. Click on the second highest priced item.
8. Assert that the "About this item" section is present and log the text of this section to the console.

### Test Case 2: API Automation

Steps to automate:

1. Create a dummy user by making a POST request to `https://reqres.in/api/users`.
2. Use the following JSON data for two test cases:
   ```json
   [
     { "name": "admin", "job": "admin" },
     { "name": "ronaldo", "job": "player" }
   ]
   ```
3. Assert the following in the response:
   - Response code.
   - Response schema.
   - Response time (should be less than 2 seconds).
   - Response header includes `Content-Type` with `application/json`.

For more detailed information, see the original challenge instructions.

## License

This project is licensed under the [ISC License](LICENSE).
