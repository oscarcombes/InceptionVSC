function renderMovie(movie){
    document.getElementById("movieTitle").innerHTML = movie.title;
    document.getElementById("mainImage").innerHTML = movie.image;
    document.getElementById("movieParagraph").innerHTML = movie.paragraph;

    // for (let index = 0; index < movie.list.length; index++) {


    //     let liItem = document.createElement("li");
    //     let node = document.createTextNode(movie.list[index]);
    //     liItem.appendChild(node);

    //     document.getElementById("castList").appendChild(liItem);
    // } OBS!!! Detta bortkommenterade kodblock är ger samma utfall som att lösa övningen som vi gjort nedan. Nedan får vi dock resultatet som en HTML-sträng, medan vi här fortfarande får vårt resultat som en faktiskt lista men koden blir mycket längre!

    let actorList="";
    for (let index = 0; index < movie.list.length; index++) {

        actorList += "<li>" + movie.list[index] + "</li>"; //Här skapar vi en html-sträng genom att lägga ihop tre listplatser/element från arrayen movie.list! += kör vi för att INTE bara få den sista listplatsen utskriven (till följd av att detta är en array) 
        
    }
    document.getElementById("castList").innerHTML = actorList;
    
  }

  renderMovie(movieData);