/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat


/***
 * Quotes for the Random Quote Generator
 *
 * quote - The company's mission statement.
 * source - The company name.
 * citation - The destination of the statement.
 * year - The year the statement was formed.
 * tag - The business category.
***/

const quotes = [

  {
    quote: 'Create a world where anyone can belong anywhere',
    source: 'Airbnb',
    citation: 'airbnb.com',
    tag: 'Marketplace',
    year: '2008',
  },
  {
    quote: 'Make design accessible to everyone anywhere',
    source: 'Figma',
    citation: 'figma.com',
    tag: 'SaaS',
    year: '2008',
  },
  {
    quote: 'Organize the world\'s information and make it universally accessible and useful',
    source: 'Google',
    citation: 'google.com',
    tag: 'Search Engine',
    year: '1998',
  },
  {
    quote: 'Increasing the global GDP of the internet',
    source: 'Stripe',
    citation: 'stripe.com',
    tag: 'Fintech',
    year: '2010',
  },
  {
    quote: 'Democratize financial services',
    source: 'PayPal',
    citation: 'paypal.com',
    tag: 'Fintech',
    year: '1998',
  },
  {
    quote: 'To connect the world\’s professionals to make them more productive and successful.',
    source: 'LinkedIn',
    citation: 'linkedin.com',
    tag: 'Social Network',
    year: '2002',
  },
  {
    quote: 'To make it easy to do business anywhere.',
    source: 'Alibaba',
    citation: 'alibaba.com',
    tag: 'Marketplace',
    year: '1999',
  },

];

/***
 * Pick a Random Quote
 * randomNumber - A randomly generated number based on the # of items in quotes.
***/

function getRandomQuote() {
  const randomNumber = Math.floor(Math.random() * quotes.length); 
  return quotes[randomNumber];
};

/***
 * String Together the Final Quote
***/

function printQuote() {
  let randomQuote = getRandomQuote();
  let htmlQuote = `<p class="quote">${randomQuote.quote}</p><p class="source">${randomQuote.source}`

  if (randomQuote.citation) {
    htmlQuote += `<a href="https://${randomQuote.citation}" target="_blank" class="citation">${randomQuote.citation}</a>`
  }; 

  if (randomQuote.year) {
    htmlQuote += `<span class="citation">${randomQuote.year}</span>`
  };

  if (randomQuote.tag) {
    htmlQuote += `<span class="tag">${randomQuote.tag}</span>`
  };

  htmlQuote += `</p>`;

  document.getElementById('quote-box').innerHTML = htmlQuote; 
};

/***
 * Change Background to a Random Color
 * HEX values occasionally returned a light grey, which caused text to be eligible. 
 * Used Google's Colour Picker to find the RGB values that would avoid a lighter background color. 168 was the trick.
 * https://www.google.com/search?q=rgb+color+picker&rlz=1C5CHFA_enAU1008AU1008&oq=rgb+&aqs=chrome.2.69i57j0i131i433i512l5j0i10i131i433i650j0i512j0i433i512j0i512.3811j0j7&sourceid=chrome&ie=UTF-8
***/

function changeBackgroundColor() {
  let body = document.querySelector('body');
  let r = Math.floor(Math.random() * 168);
  let g = Math.floor(Math.random() * 168);
  let b = Math.floor(Math.random() * 168);
  body.style.backgroundColor = `rgba(${r},${g},${b})`;
};

/***
 * Change Quote and Background Every 10 Seconds
 * I wanted to execute the 10 second rotation script upon loading of the page:
 * https://www.w3schools.com/jsref/event_onload.asp 
***/

window.onload = function() {
  setInterval(function() {
    changeBackgroundColor();
    printQuote();
  }, 10000);
};

/***
 * Print the Quote to homepage
 * I initally had 2 event listeners, that called the 2 functions seperately. I realised this caused a mishap every few clicks, so I found a way to ensure both functions are run.
 * https://stackoverflow.com/questions/25028853/addeventlistener-two-functions 
***/

document.getElementById('load-quote').addEventListener("click", () => { printQuote(); changeBackgroundColor();}, false);

