



module.exports = async (req,res,next) => {
    try 
    {


        if ( req.user.is_admin === "yes") {
            next();
          } else {
            res.status(401);
            throw new Error("Not Authorized as an Admin");
          } 
    }
    catch
    {
        res.status(401).json({
            error: new Error('Invalid request!')
          });
        }
    };