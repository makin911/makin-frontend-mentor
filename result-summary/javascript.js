let variance = document.getElementById("min");
let score=0;
let result=fetch("./data.json")
  .then((Response) => Response.json())
  .then((data)=>{
    document.getElementById('rs').textContent=data[0].score;
    document.getElementById('ms').textContent=data[1].score;
    document.getElementById('vs').textContent=data[2].score;
    document.getElementById('vis').textContent=data[3].score;
    data.forEach(element => {
      score+=element.score;
    });
      variance.textContent=Math.trunc(score/4);

  });
  
    
    
