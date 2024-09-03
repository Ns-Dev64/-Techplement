const router= require('express').Router()
const {getQuotes,createQuote}=require('./controller')

router.get('/quotes',getQuotes)
router.post('/quotes',createQuote)


module.exports=router