const input = document.getElementById("searchinput");
const output = document.querySelector("#output");
let outputDivs;
console.log(output.innerHTML);

import fetchData from "./random.js";

input.addEventListener("keypress", async (e) => {
  if (e.key === "Enter") {
    output.innerHTML = `
      <div id="loadingdiv">
        <div class="circle"></div>
      </div>
    `;
    const data = await fetchData(e.target.value);
    let i = 0;
    if (data.sector) {
      output.innerHTML = `   
        <div id="detailwraper"> 
            <div id="sector">Sector:  
            </div>
            <span></span>
            <div id="shareout">Share Outstanding:  
            </div>
            <span></span>
            <div id="marketvalue">Market Value: 
            </div>
            <span></span>
            <div id="perchange">% Change:  
            </div>
            <span></span>
            <div id="eps">EPS 
            </div>
            <span></span>
            <div id="peRatio">P/E Ratio: 
            </div>
            <span></span>
            <div id="bookvalue">Book Value: 
            </div>
            <span></span>
            </div>
            
      `;
      outputDivs = document.querySelectorAll("#detailwraper > div");
    } else {
      output.innerHTML = `
        <div id="errordivholder">
          <p>Error getting data....</p>
        </div>
      `
    }
    for (const topic in data) {
      const span = outputDivs[i].nextElementSibling;
      span.textContent = data[`${topic}`];
      span.id = topic;
      i++;
    }
  }
});
