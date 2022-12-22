const {ROLES } = require("../constants/const");

module.exports = {
   isFarmer : (req, res, next) => {
    if (req.user.user_type !== ROLES.FARMER){
      res.status(401).send("Unauthorized! Not a farmer")
    }
    else{
      next()
    }
  },
    isCustomer:(req,res,next)=>{
        if (req.user.user_type !== ROLES.CUSTOMER){
            res.status(401).send("Unauthorized! Not a customer")
        }
        else{
            next()
        }
    },
    isOwner:(req,res,next)=>{
        if (req.user.user_type !== ROLES.OWNER){
            res.status(401).send("Unauthorized! Not a owner")
        }
        else{
            next()
        }
    },
    farmerOowner:(req,res,next)=>{
       console.log(req.user)
       if (req.user.user_type === ROLES.FARMER || req.user.user_type === ROLES.OWNER){
            next()
        }
        else{
            res.status(401).send("Unauthorized! Not a farmer or owner")
        }
    },
    isExpert:(req,res,next)=>{
        if (req.user.user_type !== ROLES.EXPERT){
            res.status(401).send("Unauthorized! Not a expert")
        }
        else{
            next()
        }
    },
}

