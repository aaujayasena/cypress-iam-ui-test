# WSO2 Identity Server Cloud Test

This is the IAM cloud test repository. The repository contain test suites for continuous tests on IAM cloud. Tests
 implemented with [cypress.io](https://www.cypress.io) test framework.  

## Project setup

1. Get the sample repo 

    git clone https://github.com/NilukaSripalim/cypress-iam-ui-test.git
    
    cd /cypress-iam-ui-test/iam-cloud-test-automation/iam-e2e-test2

2. Install Node js. (support: Node.js 8 and above)

3. Install npm

   npm install

4. Install Cypress

   npm install --save-dev cypress@4.1.0

5. Install Reporting dependencies

   npm install mocha --save-dev
   
   npm install cypress-multi-reporters --save-dev
   
   npm install mochawesome --save-dev
   
   npm install mochawesome-merge --save-dev
   
   npm install mochawesome-report-generator --save-dev

6. Install packages

   Navigate to the root package.json and execute 'npm install'

## Scenarios
1. SAML SSO login

## Execute the cloud Tests

Please follow the instrution given for execye the Identity server cloud tests scenarios

### Prerequisites

Run Sample SAML App
   1. Navigate to cypress-iam-ui-test/iam-cloud-test-automation/src/sample-saml-sso
   2. execute npm start

### Run IAM cloud tests.
   There are two ways to execute the test. 

#### Run a single Test against Cypress Test Runner without headless mode
   1. Navigate to the package.json location where the test script available ex: [iam-e2e-test](https://github.com/NilukaSripalim/cypress-iam-ui-test/tree/master/iam-cloud-test-automation/iam-e2e-test)
   2. Execute command ‘npx cypress open’ to open the test project
   3. After the test runner launch , select the listed tests (ex:saml-sso.spec.json)  will start to execute the test. 

#### Run Tests in headless mode 
   1. Navigate to the package.json location where the test script available ex: [iam-e2e-test](https://github.com/NilukaSripalim/cypress-iam-ui-test/tree/master/iam-cloud-test-automation/iam-e2e-test)
   2. Execute command ‘npm run test’ to open the test project.
