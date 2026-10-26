const wisdom=[
    {
      "quotes":'“ Be yourself; everyone else is already taken.”' ,
      "author":'― Oscar Wilde'
    }
    ,
    {
      "quotes":'“ So many books, so little time.”' ,
      "author":'― Frank Zappa' 
    }
    ,
    {
      "quotes":'“ You only live once, but if you do it right, once is enough.”' ,
      "author":'― Mae West' 
    }
    ,
    {
      "quotes":'“ A friend is someone who knows all about you and still loves you.”' ,
      "author":'― Elbert Hubbard' 
    }
    ,
    {
      "quotes":'“ You only live once, but if you do it right, once is enough.”' ,
      "author":'― Mae West' 
    }
    ,
    {
      "quotes":'“ Be the change that you wish to see in the world.”' ,
       "author":'― Mahatma Gandhi' 
    }
    ,
    {
      "quotes":'“ Do not take life too seriously. You will not get out alive.”' ,
      "author":'― Elbert Hubbard' 
    }
    ,
    {
      "quotes":'A room without books is like a body without a soul.' ,
      "author":'― Marcus Tullius Cicero' 
    } 
];

function quote(){
    const random =Number.parseInt(Math.random()*wisdom.length + 1);

    document.querySelector('#quotes').textContent=`${wisdom[random].quotes}`;
    document.querySelector('#author').textContent=`${wisdom[random].author}`;
}

