// Question 2

const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";

 /*const proxy = "https://noroffcors.herokuapp.com/";

const corsFix = proxy + url;*/

const resultsContainer = document.querySelector(".container"); 

async function makeApiCall() {
    try {
        const response = await fetch(url);

        const retrieved = await response.json()

       // console.log(results.results);

       //grabbing array with info stored from object given by api
        const info = retrieved.results;

        //string that information from array will be appended to and added using innerHTML
        text = "";

        //looping through array given by api 
        for (var i = 0; i < info.length; i++){

            //appending name, rating, and # of tags from api array to text string
            text += '<div class="results">' + "<p>" + "name: " + info[i].name + "</p>" + "<p>" + "rating: " + info[i].rating + "</p>" + "<p>" + "number of tags: " + info[i].tags.length + "</p>" + "</div>";

            if(i === 7){
                break;
            }
        }

        //sending finalized text string with info to html
        resultsContainer.innerHTML = text;
        console.log(info);

    } catch (error) {
        console.log(error);
        resultsContainer.innerHTML = alert("error", error);
        
     } 
}

makeApiCall();


// alert function for failed call

function alert(alertType="success", message = ""){
    return '<div class="alert ${alertType}"> ${message}</div>'; 
}