function newQuote() {
  var randomNumber = Math.floor(Math.random() * (quotes.length));
  document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
} 
var quotes = ['I feel like I\'m taking crazy pills! -Jacobin Mugato (Will Ferrell) in Zoolander (2001)',
'I\'m just thinking about the future, I guess. We\'re on, like, the bleeding edge of history. Everything ahead of us is totally unknown and there\'s no guarantee that things are going to be all right. It\'s exciting, but it\'s also pretty scary. You know?- Jake the dog',
'Sucking at something is the first step towards being sorta good at something. - Jake the dog',
'People get built different. We don\'t need to figure it out, we just need to respect it. - Princess Bubblegum' 
  
];
