import React, { useState, useEffect } from "react";
import SearchBar from "../SearchBar/SearchBar";
import axios from "axios";
import "./Quotes.css";
import SelectedQuote from "./SelectedQuote";
import CreateQuote from "../CreateQuote/CreateQuote";
export default function Quotes() {
  const [searchTerm, setSearchTerm] = useState("");
  const [quotes, setQuotes] = useState([]);
  const [quote1, setQuote1] = useState(null);
  const [selectedQuote, setSelectedQuote] = useState(null);
  const [quote2, setQuote2] = useState(null);
  const handleSearchInputChange = (newSearchTerm) => {
    setSearchTerm(newSearchTerm);
  };
  useEffect(() => {
    quotes.map((item) => {
      if (item.author.toLowerCase() === searchTerm.toLowerCase()) setSelectedQuote(item);
    });
  }, [quotes, searchTerm]);

  // Fetch quotes when component mounts
  useEffect(() => {
    const getQuotes = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5001/api/v1/quotes",
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        setQuotes(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    getQuotes();
  }, []);

  // Update random quotes when quotes change
  useEffect(() => {
    if (quotes.length > 0) {
      const getRandomNumber = (max) => Math.floor(Math.random() * max);
      const random1 = getRandomNumber(quotes.length);
      const random2 = getRandomNumber(quotes.length);
      setQuote1(quotes[random1]);
      setQuote2(quotes[random2]);
    }
  }, [quotes]);

  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />
      <SearchBar onSearchInputChange={handleSearchInputChange} />
      <div className="flex-container">
        {selectedQuote!==null?(
            <SelectedQuote selectedQuote={selectedQuote}></SelectedQuote>
        ):(
            <>
            <div className="card car1">
          <div className="card-header">Random Quote</div>
          <div className="card-body">
            <blockquote className="blockquote mb-0">
              <p>{quote1 ? quote1.quote : "Loading..."}</p>
              <footer className="blockquote-footer">
                {quote1 ? quote1.author : "Loading..."}{" "}
              </footer>
            </blockquote>
          </div>
        </div>
        <div className="card car2">
          <div className="card-header">Another Random Quote</div>
          <div className="card-body">
            <blockquote className="blockquote mb-0">
              <p>{quote2 ? quote2.quote : "Loading..."}</p>
              <footer className="blockquote-footer">
                {quote2 ? quote2.author : "Loading..."}{" "}
              </footer>
            </blockquote>
          </div>
        </div>
            </>
        )}
      </div>
      <CreateQuote></CreateQuote>
    </>
  );
}
