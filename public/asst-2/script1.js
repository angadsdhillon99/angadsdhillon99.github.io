fetch("/api", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
}).then(blob => blob.json())
    .then(data => food.push(...data));

    const searchInput=document.querySelector(".textInput");
    const suggestions=document.querySelector(".suggestions");
    searchInput.addEventListener('keyup',displaymatches);

    const food=[];

    function findMatches(wordToMatch, food){
        return food.filter((place)=>{
            const regex= new RegExp(wordToMatch, "gi");
            return place.name.match(regex) || place.category.match(regex);

        });

    }

    function displaymatches(){   
         const matchArray = findMatches(this.value, food);   
          const html = matchArray.map(place => {      
                return `      
                  <li>          
                    <span class="name">${place.name}</span>       
                 <span class="category">${place.category}</span>      
                  <span class="city">${place.city}</span>       
                   </li>      
                     `;   
             }).join('');   
              suggestions.innerHTML = html;}