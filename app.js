


    const quotes = [
      {
        quote:
          "Walk away from people who put you down. Walk away from fights that will never be resolved. Walk away from trying to please people who will never see your worth. The more you walk away from things that poison your soul, the healthier you will be.",
        author: "-Shaista Saba"
      },
      {
        quote: "You don’t have a right to the cards you believe you should have been dealt. You have an obligation to play the hell out of the ones you’re holding.",
        author: "-Cheryl Strayed"
      },
      {
        quote: "The journey of a thousand miles begins with one step.",
        author: "-Lao Tzu"
        
      },
      {
        quote: "Great minds discuss ideas; average minds discuss events; small minds discuss people.",
        author: "-Eleanor Roosevelt"
      },
      {
        quote: "Those who dare to fail miserably can achieve greatly.",
        author: "-Charles Lindbergh"
      },
      {
        quote: "Life is ten percent what happens to you and ninety percent how you respond to it.",
        author: "-Charles Swindoll"
      },
      {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "-Nelson Mandela"
      },
      {
        quote: "The truth is, everyone is going to hurt you. You just got to find the ones worth suffering for.",
        author: "-Bob Marley"
      },
      {
        quote: "The day you stop racing, is the day you win the race.",
        author: "-Bob Marley"
      }
    ];



   

 const btn = document.querySelector("#btn");
 const text =  document.getElementById("quoteid");
 const author = document.getElementById("authorid");
 

     
 
  btn.addEventListener("click", ()=>{

    let index = Math.floor(Math.random() * quotes.length);
    let randomQuote = quotes[index].quote;
    let randomAuthor = quotes[index].author;
    
    text.textContent = randomQuote;
    author.textContent = randomAuthor;
  });


    
    