/// <reference types="Cypress" />

var variable = 0;
var val2;
describe('Protected endpoints: role-based testing', () => {

  let user;


  //Method to set the User before visiting the page. 
  //This way app thinks it is already authenticated. 
  const setUser = () => {

    cy.visit('/user-portal');//, {


    cy.clearCookies();
    cy.clearLocalStorage();

  }
  //Method  to authenticate User. 
  //User credentials are taken from separate file (cypress.env.json).

  const addUser = function (user, password, base64, data) {

    return cy
      .request({
        url: '/scim2/Users',
        method: 'POST',
        auth:
        {
          'username': user,
          'password': password,
        },
        headers:
        {
          'Authorization': 'Basic ' + base64,
          'Content-Type': 'application/json'
        },
        body: data


      })
  }

  const getUsers = (user, password, base64, userID) =>

    cy.request({
      url: '/scim2/Users/' + userID,
      method: 'GET',
      auth:
      {
        'username': user,
        'password': password,
      },
      headers:
      {
        'Authorization': 'Basic ' + base64,
        'Content-Type': 'application/json'
      }
    })



  describe('Role: ADMIN', () => {

    before(setUser)

    beforeEach(() => {
      cy.fixture('new-user').as("user");

      cy.fixture('new-scim-user-create').as("data");



    })
    after(function () {
      cy.log("sublevel after");
  });



    it("Test for the User Creation via SCIM2", function () {
   var variable;
      cy.get('@user')
        .then(user => {
          let base64Encode = cy.base64encode(user.adminuser, user.adminupword);
          const userName = user.adminuser;
          const password = user.adminupword;
        return  addUser(userName, password, base64Encode, this.data).then((response) => {
           // cy.writeFile('cypress/fixtures/scim-users.json', response.body)
            variable = response.body;
            return variable

          });

          // cy.fixture('scim-users').then((rBody) => {
          //   Object.keys(rBody).forEach(key => {
          //     if (key == "id") {
          //       variable = rBody[key];
          //       getUsers(userName, password, base64Encode, variable).then((response) => {
          //         expect(response.status).to.eq(200);
          //       });
          //     }
              
             
              
          //    // 



          //   })
          // })
          
          






        })
        cy.log("^&^&&^&^&^^" + variable);
    })










  })




})




Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test

  //   expect(err.message).to.include('Ignoring error for now');
  console.log('Cypress detected uncaught exception', err);
  debugger
  return false;
});

