const async_handler = require("express-async-handler");
const ConnectDb = require("./db");
let collection 
ConnectDb().then(coll=>{
    collection=coll
})
const getQuotes = async_handler(async (req, res) => {
  const quotes = await collection.find({}).toArray();
  const  author  = req.query.author;
  if (author) {
    const quote = await collection.findOne({ author: author });
    if (quote) {
      res.status(200).json(quote);
    } else {
      res.status(400).json("Quote not found!!");
    }
  }
  if (quotes.length > 0) {
    res.status(200).json(quotes);
  } else {
    res.status(400).json({ message: "Error occured while fetching quotes" });
  }
});

const createQuote = async_handler(async (req, res) => {
  const { author, quote } = req.body;
  if (!author || !quote) {
    res.status(400).json({ message: "Please input all the fields" });
  } else {
    const newQuote = {
      author: author,
      quote: quote,
    };
    const Dbquote = await collection.insertOne(newQuote);
    res.status(200).json(Dbquote);
  }
});

module.exports = { getQuotes, createQuote };
