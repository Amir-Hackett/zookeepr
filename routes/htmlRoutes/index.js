const path = require('path')
const router = require('express').Router()

//routes to different pages
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'))
})
  
router.get('/animals', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/animals.html'))
})
  
router.get('/zookeepers', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/zookeepers.html'))
})
  
// catches requests for non-existent route
// wildcard route
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'))
})
  
module.exports = router