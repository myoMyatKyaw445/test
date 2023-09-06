const tiptableTag = document.getElementsByClassName("tipTable")[0];
const menuTag = document.getElementById("menu");




const aniTag = document.getElementsByClassName("aniText")[0];
aniTag.classList.add("aniTagClass");
const headTag = document.createElement("h3");
headTag.classList.add("headClass");

const allTagFun = () => {
 const allTag = 
 `
     <table class="table table1">
  <thead>
    <tr>
      
      <th scope="col">FeatureMatch(3-9-2023)</th>
      <th scope="col">Odds</th>
      <th scope="col">Choice</th>
     
    </tr>
  </thead>
  <tbody class="textWord">
     <h3>Special Choice Of TipsterKing</h3>
    <tr>
    <tr  class="legContainer">
    <td class="legColor"colspan="3">EPL(10:00PM)</td>
     </tr>
      
      
      <td>Arsenal Vs Man U</td>
      <td>(1+70)(H)</td>
      <td class="choice">Arsenal</td>
      <tr class= "resultContainer">
      <td class="resultColor"colspan="4">Result 3-1(+100 Win)</td>
       </tr>
       </tr>
       
   
  </tbody>

  <tbody class="textWord">
  
 <tr>
 <tr  class="legContainer">
 <td class="legColor"colspan="3">Spain Laliga(8:45PM)</td>
  </tr>
   
   
   <td>Mallorca Vs Bibao</td>
   <td>(-20)(A)</td>
   <td class="choice">Mallorca</td>
   <tr class= "resultContainer">
   <td class="resultColor"colspan="4">Result 0-0(+20 Win)</td>
    </tr>
    </tr>
    

</tbody>

<tbody class="textWord">

<tr>
<tr  class="legContainer">
<td class="legColor"colspan="3">Serie-A(11:00PM)</td>
</tr>
 
 
 <td>Inter Vs Fiorentina</td>
 <td>(1+50)(H)</td>
 <td class="choice">Fiorentina</td>
 <tr class= "resultContainer">
 <td class="resultColor"colspan="4">Result 3-0(-100 Win)</td>
  </tr>
  </tr>
  

</tbody>

<tbody class="textWord">

<tr>
<tr  class="legContainer">
<td class="legColor"colspan="3">Serie-A(11:00PM)</td>
</tr>
 
 
 <td>Torino Vs Genoa</td>
 <td>(-70)(H)</td>
 <td class="choice">Torino</td>
 <tr class= "resultContainer">
 <td class="resultColor"colspan="4">Result 1-0(+100 Win)</td>
  </tr>
  </tr>
  

</tbody>

  

  
  </table>
 
  `
  const tableDiv = document.createElement("div");
  tableDiv.classList.add("tableDivClass")
  tableDiv.innerHTML =  allTag;
  tiptableTag.append(tableDiv);
}






const marqueFun = () => {
  const marqueTag = `
<marquee class="marq2">ယနေ့ညအတွက်ရွေးချယ်မှုရှိပါမည်...Noti တက်လျှင်ကြည့်ရှုပေးပါ☎️09794731376</marquee>`

const marqueDiv = document.createElement("div")
marqueDiv.classList.add("marq2Class");
marqueDiv.innerHTML = marqueTag;
aniTag.append(marqueDiv);
marqueDiv.addEventListener("click",() => {
  console.log("hello");
  aniTag.innerHTML = "";
  
})
}

//allTagFun();
marqueFun();
menuTag.addEventListener('click' , (event) => {
   if(event.target.id === "0"){
   // tiptableTag.innerHTML = "";
   //aniTag.innerHTML = "";
   //allTagFun();
  }else if(event.target.id === "1"){
    console.log("world");
    window.location.href = "tiphistory.html";
    //return(tableDiv.innerHTML =  allTag)
  }
})

