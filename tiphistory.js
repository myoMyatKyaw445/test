const tipHistoryTag = document.getElementsByClassName("tipHistory")[0];

const tipHistoryAry = [
    "14-8-2023 မှ 22-8-2023 ထိ ရွေးချယ်မှု ပြန်လည်ကြည့်ရူ့ရန်",
  ]
 
  const tipHistoryFun = () => {
    for (let i = 0; i < tipHistoryAry.length; i++) {
     
      const tipHistoryAll = tipHistoryAry[i];
      console.log(tipHistoryAll);
      currentplayingindex = i;
      
     const tipHistoryDiv = document.createElement("div");
    tipHistoryDiv.className = "tipHistoryClass"
    tipHistoryDiv.innerHTML = tipHistoryAll;
    tipHistoryTag.append(tipHistoryDiv);
    tipHistoryDiv.addEventListener('click' , () => {
     if(i === 0){
      console.log("helloworld");
      window.location.href = "https://backuptip.aungaung74.repl.co/";
     // tipHistoryTag.style.display = "none";
    //  allTagFun();
     }else if(i === 1){
      console.log("world");
     }
        
      
    })
    }
  }
  tipHistoryFun();
  
  