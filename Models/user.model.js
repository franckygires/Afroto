const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const UserSchema = mongoose.Schema(
  {
    name: { 
      type: String, 
      required: true, 
      timestapms: true, 
      unique: false, 
      minlength: [4, 'Name too short'],
      validate (value) {

        if(!value.trim()) {
          throw new Error('Name couldn\'t be white space !')
        }
        if(value.search(/[a-zA-Z]/) < 0) {
          throw new Error('Name must contains letter !')
        }
      }
    },
    
    
    
    birthday: { 
      type: Date, 
      timestapms: true,
      // validate (value) {
      //   if(value.search(/^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/) < 0) {   // Validité de la date de naissance
      //     throw new Error('Invalid birthday')
      //   }
      // }
    },



    email: { 
      type: String, 
      required: true, 
      timestapms: true, 
      unique: true,
      validate (value) {
        if(value.search(/^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/) < 0) {   // Validité de l'email
          throw new Error('Invalid email')
        }
      }
    
    },



    is_admin: { 
      type: String, 
      required: true, 
      timestapms: true, 
      default: "no" 
    
    },



    password: { 
      type: String, 
      required: false,
      validate (value) {
        let errors = ''
        if(value.search(/[A-Z]/) < 0) {   // Validité du mot de passe : Lettre majuscule
          errors += 'Password must contains at least one capital letter ! '
        }
        if(value.search(/[a-z]/) < 0) {   // Validité du mot de passe : Lettres minuscule
          errors += 'Password must contains at least one lowercase letter ! '
        }
        if(value.search(/[0-9]/) < 0) {   // Validité du mot de passe : Chiffres
          errors += 'Password must contains at least one number ! '
        }
        if(value.search(/[^a-zA-Z0-9]/) < 0) {   // Validité du mot de passe : Caractère spéciaux
          errors += 'Password must contains at least one special character ! '
        }

        if(errors != '')
        {
          throw new Error(errors)
        }
      }
      
    
    },



    bio: { 
      type: String, 
      required: false, 
      timestapms: true 
    
    },


  },
  {
    timestamps: true,
  }
);
UserSchema.plugin(uniqueValidator);
module.exports = mongoose.model('User', UserSchema);
