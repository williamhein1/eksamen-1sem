window.addEventListener("load", portfolioStart);



function portfolioStart(){
    hider();
  
    document.querySelector("#tema052-link").addEventListener("mouseover", mouseOverTema052);
    
    document.querySelector("#tema051-link").addEventListener("mouseover",mouseOverTema051);
  
    document.querySelector("#tema04-link").addEventListener("mouseover", mouseOverTema04);
  
    document.querySelector("#tema03-link").addEventListener("mouseover", mouseOverTema03);
  
    document.querySelector("#tema02-link").addEventListener("mouseover", mouseOverTema02);
  
    document.querySelector("#tema01-link").addEventListener("mouseover", mouseOverTema01);
  
  
  
    document.querySelector("#tema051-link").addEventListener("mouseout",mouseOutAll);
  
    document.querySelector("#tema052-link").addEventListener("mouseout",mouseOutAll);
  
    document.querySelector("#tema04-link").addEventListener("mouseout", mouseOutAll);
  
    document.querySelector("#tema03-link").addEventListener("mouseout", mouseOutAll);
  
    document.querySelector("#tema02-link").addEventListener("mouseout", mouseOutAll);
  
    document.querySelector("#tema01-link").addEventListener("mouseout", mouseOutAll);
  }
  
  
  
  function hider(){
    console.log("gemmer alle");
    document.querySelector('.background-text-tema052').classList.add("hide");
    
    document.querySelector('.background-text-tema051').classList.add("hide");
  
    document.querySelector('.background-text-tema04').classList.add("hide");
  
    document.querySelector('.background-text-tema03').classList.add("hide");
  
    document.querySelector('.background-text-tema02').classList.add("hide");
  
    document.querySelector('.background-text-tema01').classList.add("hide");
  
  
  }
  
  
  function mouseOutAll(){
    console.log("mouse out");
  
    document.querySelector('.background-text-tema052').classList.add("hide");
    
    document.querySelector('.background-text-tema051').classList.add("hide");
  
    document.querySelector('.background-text-tema04').classList.add("hide");
  
    document.querySelector('.background-text-tema03').classList.add("hide");
  
    document.querySelector('.background-text-tema02').classList.add("hide");
  
    document.querySelector('.background-text-tema01').classList.add("hide");
  
  

    document.querySelector(".background-text-portfolio").classList.remove("hide");
  }
  
  
  function mouseOverTema052(){
    console.log("virker")
  
    document.querySelector('.background-text-tema052').classList.remove("hide");
  
    document.querySelector('.background-text-portfolio').classList.add("hide");
  }
  
  
  function mouseOverTema051(){
    console.log("a short talk vises")
  
    document.querySelector('.background-text-tema051').classList.remove("hide");
  
    document.querySelector('.background-text-portfolio').classList.add("hide");
  }
  
  function mouseOverTema04(){
    console.log("fodboldspillet vises")
  
    document.querySelector(".background-text-tema04").classList.remove("hide");
  
    document.querySelector(".background-text-portfolio").classList.add("hide");
  }
  
  function mouseOverTema03(){
    console.log("drop vises")
  
    document.querySelector(".background-text-tema03").classList.remove("hide");
  
    document.querySelector(".background-text-portfolio").classList.add("hide");
  }
  
  function mouseOverTema02(){
    console.log("tema 02 vises");
  
    document.querySelector(".background-text-tema02").classList.remove("hide");
  
    document.querySelector(".background-text-portfolio").classList.add("hide");
  }
  
  function mouseOverTema01(){
    console.log("tema 01 vises");
  
    document.querySelector(".background-text-tema01").classList.remove("hide");
  
    document.querySelector(".background-text-portfolio").classList.add("hide");
  }
  
  
  function gemTekstGalleri(){
    console.log("gemmer tekst i galleri")
  
    document.querySelector(".keeper-overlay-text").classList.add("hide");
  }  