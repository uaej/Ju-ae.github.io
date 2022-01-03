const quotes = [{
       quote : "“Do not pity the dead, Harry. Pity the living, and, above all those who live without love.”",
        author : "Albus Dumbledore, Harry Potter and the Deathly Hallows"
    },{
        quote: "“Books! And cleverness! There are more important things — friendship and bravery.”",
        author : "Hermione Granger, Harry Potter and the Sorcerer’s Stone"
    },{
        quote: "“We’re with you whatever happens.”",
        author : "Ron Weasley, Harry Potter and the Half-Blood Prince"
    },{
        quote: "I solemnly swear I am up to no good.",
        author : "Harry Potter"
    },{
        quote: "Numbing the pain for a while will make it worse when you finally feel it.",
        author : "Albus Dumbledore"
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");


const number = Math.floor(Math.random()*quotes.length);
console.log(`number: ${number}`);
setQuote(number);

function setQuote(index){
    console.log(quotes[index]);
    quote.innerText=quotes[index].quote;
    author.innerText = quotes[index].author;
}