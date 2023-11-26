import React from "react";

export default function Quote() {
  const [quote, setQuote] = React.useState({
    quote: "Life isn’t about getting and having, it’s about giving and being.",
    author: "Kevin Kruse",
  });
  const [allQuotes, setAllQuotes] = React.useState([]);
  React.useEffect(() => {
    async function getQuotes() {
      const res = await fetch(
        "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json "
      );
      const data = await res.json();
      setAllQuotes(data.quotes);
    }
    getQuotes();
  }, []);
  function getQuotesData() {
    const randomNumber = Math.floor(Math.random() * allQuotes.length);
    const randomQuote = allQuotes[randomNumber];
    setQuote(() => ({
      /*...randomQuote*/
      quote: randomQuote.quote,
      author: randomQuote.author,
    }));
  }
  return (
    <main>
      <div className="quote-box" id="quote-box">
        <div className="Quote">
          <p className="quote-text" id="text">
            {quote.quote}
          </p>
          <p className="quote-author" id="author">
            {quote.author}
          </p>
        </div>
        <div className="click">
          <div className="buttons">
            <a
              class="button"
              id="tweet-quote"
              title="Tweet this quote!"
              target="_top"
              href="https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22Happiness%20is%20not%20something%20readymade.%20%20It%20comes%20from%20your%20own%20actions.%22%20Dalai%20Lama"
            >
              <img src="" alt="twitter" />
            </a>
            <a
              class="button"
              id="tumblr-quote"
              title="Post this quote on tumblr!"
              target="_blank"
              href="https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=George%20Addair&content=Everything%20you%E2%80%99ve%20ever%20wanted%20is%20on%20the%20other%20side%20of%20fear.&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button"
            >
              <img src="" alt="tumblr" />
            </a>
          </div>
          <button className="new-quote" id="new-quote" onClick={getQuotesData}>
            New quote
          </button>
        </div>
      </div>
    </main>
  );
}
