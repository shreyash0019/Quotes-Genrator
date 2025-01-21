const quoteElement = document.querySelector('.quote');
const authorElement = document.querySelector('.author');
const button = document.getElementById('new-quote');

async function fetchQuote() {
    try {
        const response = await fetch('https://api.quotable.io/random'); // Replace with new API URL
        const data = await response.json();
        quoteElement.textContent = `"${data.content}"`;
        authorElement.textContent = `- ${data.author}`;
    } catch (error) {
        quoteElement.textContent = "Failed to fetch a quote. Try again!";
        authorElement.textContent = "";
    }
}

button.addEventListener('click', fetchQuote);
