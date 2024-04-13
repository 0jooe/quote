const btnEl = document.getElementById('btn')
const quoteEl = document.getElementById('quote')
const authorEl = document.getElementById('author')
const apiURL = 'https://api.quotable.io/random'


async function getQuote(){
  try {
btnEl.innerText = 'Loading...'
btnEl.disables = true
quoteEl.innerText = 'Updating...'
authorEl.innerText = 'Updating...'
const response = await fetch(apiURL)
const data = await response.json()
const quoteContent = data.content
const quoteAuthor = data.author
quoteEl.innerText = quoteContent
authorEl.innerText = '~' + quoteAuthor
btnEl.innerText = 'Get a quote'
btnEl.disables = false
    
  } catch (error) {
    quoteEl.innerText = ' An error happened, check your connection or try again later.'
   authorEl.innerText = 'An error happened.' 
   btnEl.innerText = 'Get a quote'
   btnEl.disables = false
  }


}
getQuote()
btnEl.addEventListener('click',getQuote)