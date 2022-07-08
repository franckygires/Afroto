const User = require("../Models/user.model")

const jwt = require('jsonwebtoken');
module.exports = async (req,res,next) => {
    try 
    {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, 'RAMDOM_TOKEN_SECRET');

        req.user = await User.findById(decodedToken.userId).select("-password");

        const userId = decodedToken.userId;
        req.auth = {userId};
        // console.log (req.user);
        if (req.body.userId && req.body.userId !== req.auth.userId) {
          throw 'Invalid user ID';
        } else {
          next();
        }
    }
    catch
    {
        res.status(401).json({
            error: new Error('Invalid request!')
          });
        }
    };

    
