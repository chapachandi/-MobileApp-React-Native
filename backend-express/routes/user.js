const express = require('express');
const router = express.Router();

const User = require('../models/UserSchema');


router.get('/user', async(req, res) => {
  try{
      const user = await User.find();
      res.json(user);

  }catch(err){
      res.send('Error' + err);
  }
  
});

// router.get('/', async(req, res) => {
//   try{
//       const user = await User.find({email : req.query.email})
//       console.log(user[0]);
//       console.log(user[0]._id);
//       if(user[0].email == req.query.email){
//         if(user[0].password == req.query.password){
//           res.json(user[0])
//         }else{
//           res.json(false)
//         }
//       }else{
//         res.json("email not found" + err)
//       }
//   }catch(err){
//       res.send("Error :"+err)
//   }
// });
// router.get('/:email', async(req, res) => {
//   try{
//       const u = await User.findByEmail(req.params.email)
//       res.json(user)
//       res.json(u)
//   }catch(err){
//       res.send('Error')
//   }
// });




router.post('/', async(req, res) => {
  const user = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
  })
  try{
      const u = await user.save();
      res.json(u);
  }catch(err){
      res.send('Error');
  }

});

router.put('/:email',async(req,res)=>{
  try{
    const user = await User.findByEmail(req.params.email)
    user.sub = req.body.sub
    const a = await user.save()
    res.json(a1)
  }catch(err){
    res.send('Error')
  }
})




module.exports = router;
