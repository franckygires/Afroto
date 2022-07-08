// const UserCtrl = require('../Controllers/user.controller');
// const { expect} = require('chai');
// const User = require('../Models/user.model');
// const sinon = require('sinon');

// // const bcrypt = require("bcrypt");
// const { response } = require('express');





// describe("User Models Unit Tests", function () {
//     describe("Save User functionality", function () {
//       it("should add a user in the database if the provided email does not exist in the database", async function () {


//             const name = "Vincentkjf";
//             const email = "vincent22@afroto.dev";
//             const birthday = "12-12-2000";
//             const is_admin = "yes";
//             const password = "Giro12345@";
//             const bio = "Ceci est un test unitaire";

//             sinon.stub(User, "countDocuments").returns(0);
//             sinon.stub(User.prototype, "save").returns(
//             { name, email, birthday, is_admin, password, bio }

//             );

//             const returnedUser = await UserCtrl.signup(
//                 {body: {
//                     name,
//                     email,
//                     birthday,
//                     is_admin,
//                     password,
//                     bio
//                 }} );

//                 // returnedUser
//                 //     .save()
//                 //     .then((user) => res.status(201).json(user))
//                 //     .catch((error) => res.status(400).json({ error }));

//             // const user = response.json(returnedUser);

                
//             expect(returnedUser.name).to.equal(name);
//             expect(returnedUser.email).to.equal(email);
//             expect(returnedUser.birthday).to.equal(birthday);
//             expect(returnedUser.is_admin).to.equal(is_admin);
//             expect(returnedUser.password).to.equal(password);
//             expect(returnedUser.bio).to.equal(bio);




//       });
//       it("should generate an error if the number of users with the same email is not zero", async function () {
//       });
//     });
//   });












// process.env.NODE_ENV = 'test';

const User = require('../Models/user.model');

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../index');

chai.should();


chai.use(chaiHttp);

// describe('Users', () => {
  
  /*
  * Test the /Signup route
  */
  describe('/POST User', () => {

    beforeEach((done) => {
        User.remove({}, (err) => { 
           done();           
        });        
    });

      it('it should not POST a User', (done) => {


          let user = {

             name : "Vincent",
             email : "vincen@afroto.dev",
             birthday : "12-12-2000",
             is_admin : "yes",
             password : "Giro12345@",
             bio : "Ceci est un test unitaire"
          }

        chai.request(server)
            .post('/api/auth/signup')
            .send(user)
            .end((err, res) => {

                  res.should.have.status(201);
                
                  res.body.should.be.a('object');
                  res.body.should.have.property('name');
                  res.body.should.have.property('email');
                  res.body.should.have.property('birthday');
                  res.body.should.have.property('is_admin');
                  res.body.should.have.property('password');
                  res.body.should.have.property('bio');
                  done();
                        
                });
      });


      


      
  });
