const router = require('express').Router();
const db = require('../mongo.js');

module.exports = function(){
  router.post('/signup', function(req, res){
    console.log(req.body);
    const { email, first_name, last_name, password } = req.body;
    db.signup(email, first_name, last_name, password).then(()=>{
      res.send('Account Created')
    });
  })
  return router;
}
