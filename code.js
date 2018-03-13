function renderMovie(data){
    $("#movieInfo h1").text(data.title);
    $("#movieInfo p").text(data.paragraph);
    $("#mainImage").attr("src", data.image);
  
    $("#movieInfo ul").empty();
    for(let i=0; i<data.list.length; i++){
      $("#movieInfo ul").append("<li>" + data.list[i] + "</li>");
    }
  }
  
  function changeStarRating(rating){
    $(".filled").removeClass("filled");
    for(let i=1; i<=rating; i++){
      $("[data-rating-id=" + i + "]").addClass("filled");
    }
  }
  
  $(".stars").on("click", "span", function(e){
    let star = $(e.target);
    let rating = parseInt(star.attr("data-rating-id"));
    changeStarRating(rating);
  });
  
  renderMovie(movieData);

  changeStarRating(3);


  // function renderMovie(movie){
//     document.getElementById("movieTitle").innerHTML = movie.title;
//     document.getElementById("mainImage").innerHTML = movie.image;
//     document.getElementById("movieParagraph").innerHTML = movie.paragraph;

//     // for (let index = 0; index < movie.list.length; index++) {


//     //     let liItem = document.createElement("li");
//     //     let node = document.createTextNode(movie.list[index]);
//     //     liItem.appendChild(node);

//     //     document.getElementById("castList").appendChild(liItem);
//     // } OBS!!! Detta bortkommenterade kodblock är ger samma utfall som att lösa övningen som vi gjort nedan. Nedan får vi dock resultatet som en HTML-sträng, medan vi här fortfarande får vårt resultat som en faktiskt lista men koden blir mycket längre!

//     let actorList="";
//     for (let index = 0; index < movie.list.length; index++) {

//         actorList += "<li>" + movie.list[index] + "</li>"; //Här skapar vi en html-sträng genom att lägga ihop tre listplatser/element från arrayen movie.list! += kör vi för att INTE bara få den sista listplatsen utskriven (till följd av att detta är en array) 
        
//     }
//     document.getElementById("castList").innerHTML = actorList;
    
//   }

  //NEDAN BORTKOMMENTERADE KOD ÄR I JS! ÄNNU LÄNGRE NED ÄR DETSAMMA REFAKTORISERAT I jQuery!
//   function changeStarRating(rating){
//     for(let i=1; i<=5; i++){
//       let star = document.getElementById("star" + i);
//       if (i <= rating){ //så länge rating är lika med eller mindre än i så kommer vi skriva ut en stjärna.
//         star.classList.add("filled"); //Här skapar vi upp klassen filled och lägger till den till vår nya nod "star".
//       } else {
//         star.classList.remove("filled");
//       }
//     }
//   } 


  //Nedan är i JS. Ännu längre ner är i jQuery. Nedan sätter vi fem event-lyssnare, dvs en per stjärna! Det görs i vilket fall! Ifyllnaden av dessa eventlyssnare sker först i changeStarRating.
//   for(let i=1; i<=5; i++){
//     let star = document.getElementById("star" + i);
//     star.addEventListener("click", function(){
//       changeStarRating(i);
//     });
//   }