/// <reference types="Cypress" />

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

    const addUser = (user, password, base64, data) =>
       cy.request({
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
        }).then((response => {
           
            expect(response.status).to.eq(201);
            rBody  = response.body.id;
            
         return rBody;
          
          }));




    describe('Role: ADMIN', () => {

        beforeEach(setUser)

        beforeEach(() => {
            cy.fixture('new-user').as("user");
            // cy.fixture('scim-user-creste').then((data) => {
            //   this.data = data
            // })
            cy.fixture('scim-user-creste').as("data");
                
           
        })



        it("Admin can get /users", function () {

            
            // addUser().then((res => {
            //   expect(res.status).to.eq(200)
            // }))
                  cy.get('@user')
            .then(user => {
             let base64Encode = cy.base64encode(user.adminuser, user.adminupword);
              const userName = user.adminuser;
              const password = user.adminupword;
             let newSCIMUSER= addUser(userName,password,base64Encode,this.data)
                cy.log("+++++++"+newSCIMUSER);
            
        })
        })








    })




})

