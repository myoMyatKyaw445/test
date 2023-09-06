const tiptableTag = document.getElementsByClassName("tipTable")[0];

const allTagFun = () => {
    const allTag = 
    `
        <table class="table table1">
     <thead>
       <tr>
         
         <th scope="col">FeatureMatch(14,8,2023)</th>
         <th scope="col">Odds</th>
         <th scope="col">Choice</th>
        
       </tr>
     </thead>
     <tbody class="textWord">
        <h3>Special Choice Of TipsterKing</h3>
       <tr>
       <tr  class="legContainer">
       <td class="legColor"colspan="3">Sweden Allsvenskan(11:30PM)</td>
        </tr>
         
         
         <td>Varnamo Vs Degefors</td>
         <td>(1+20)(H)</td>
         <td class="choice">Degefors</td>
         <tr class= "resultContainer">
         <td class="resultColor"colspan="4">Result 0-1(Win)</td>
          </tr>
          </tr>
          
      
     </tbody>
     </table>
     <table class="table table1">
     <thead>
       <tr>
         
         <th scope="col">FeatureMatch(17,8,2023)</th>
         <th scope="col">Odds</th>
         <th scope="col">Choice</th>
        
       </tr>
     </thead>
     <tbody class="textWord">
        <h3>Special Choice Of TipsterKing</h3>
       <tr>
       <tr  class="legContainer">
       <td class="legColor"colspan="3">USL Championship(7:30AM)</td>
        </tr>
         
         
         <td> Antonio Vs Grande Valley</td>
         <td>(1-20)(H)</td>
         <td class="choice">Grande Valley</td>
         <tr class= "resultContainer">
         <td class="resultColor"colspan="4">Result 2-1(+20 win)</td>
          </tr>
          </tr>
           </tbody>
     
     </table>
     <table class="table table1">
     <thead>
       <tr>
         
         <th scope="col">FeatureMatch(18,8,2023)</th>
         <th scope="col">Odds</th>
         <th scope="col">Choice</th>
        
       </tr>
     </thead>
     <tbody class="textWord">
        <h3>Special Choice Of TipsterKing</h3>
       <tr>
       <tr  class="legContainer">
       <td class="legColor"colspan="3">Korea League1(5:00PM)</td>
        </tr>
         
         
         <td> Suwon Samsung Vs Jeju Utd</td>
         <td>(-20)(H)</td>
         <td class="choice">Suwon Samsung</td>
         <tr class= "resultContainer">
         <td class="resultColor"colspan="4">Result 1-0(win)</td>
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
 
   allTagFun();