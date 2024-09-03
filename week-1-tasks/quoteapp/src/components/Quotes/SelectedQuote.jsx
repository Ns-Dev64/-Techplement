import React from 'react'
import './Quotes.css'
export default function SelectedQuote({selectedQuote}) {
    console.log(selectedQuote)
  return (
    <>
    <div className="card car1">
          <div className="card-header">Random Quote</div>
          <div className="card-body">
            <blockquote className="blockquote mb-0">
              <p>{selectedQuote ? selectedQuote.quote : "Loading..."}</p>
              <footer className="blockquote-footer">
                {selectedQuote ? selectedQuote.author : "Loading..."}{" "}
              </footer>
            </blockquote>
          </div>
        </div>
    </>
  )
}
