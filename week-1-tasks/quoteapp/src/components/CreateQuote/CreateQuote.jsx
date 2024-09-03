import React, { useState } from 'react';
import './CreateQuote.css';
import axios from 'axios';

const CreateQuote = () => {
  const [author, setAuthor] = useState('');
  const [quote, setQuote] = useState('');

  const handleAuthorChange = (event) => {
    setAuthor(event.target.value);
  };

  const handleQuoteChange = (event) => {
    setQuote(event.target.value);
  };

  const handleQuote=async()=>{
    await axios.post('http://localhost:5001/api/v1/quotes',{
      'author':author,
      'quote':quote
    },{
      headers:{
        "Content-Type": "application/json",
      }
    }).then(response=>{
      console.log(response)
    }).catch(err=>{
      console.error(err)
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (author && quote) {
      handleQuote();
      setAuthor(''); // Reset the form
      setQuote('');
      window.location.reload()
    }
  };

  return (
    <div className="create-quote-container">
      <h3>Create Your Own Quote</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Author Name"
            value={author}
            onChange={handleAuthorChange}
          />
        </div>
        <div className="form-group">
          <textarea
            className="form-control"
            placeholder="Your Quote"
            value={quote}
            onChange={handleQuoteChange}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-warning btn-lg">Submit</button>
      </form>
    </div>
  );
};

export default CreateQuote;
