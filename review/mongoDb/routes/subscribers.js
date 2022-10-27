const express = require('express');
const router = express.Router();

//getting all
router.get('/', (req,res) =>{
res.send('hello world')

})
//gettin one
router.get('/:id', (req,res)=>{
 const id = req.params.id;
 res.send(id)
})
//creating one
router.post('/', (req,res)=>{

})
//updating one
router.patch('/', (req,res)=>{

})
//deleting one
router.delete('/', (req, res)=>{

})

module.exports = router;