//Query Selector list 
const gifForm = document.querySelector("form");


//Global Constants 
const APIkey = "J7XAaCLZcttMIHalMMPEKKAcErMGGrrm"; 
const limit = 20;
const rating = "pg-13";

//control submit behavior with JS
gifForm.addEventListener("submit", getResults); 

async function getResults(event) {
    event.preventDefault();
    const gifInput = event.target.gif; 
    const gifsearch = gifInput.value;
    const apiUrl = "http://api.giphy.com/v1/gifs/search?api_key=" + APIkey + "&q=" + gifsearch + "&rating=" + rating;

    //grab the info after the form has been submitted
    const response = await fetch(apiUrl);
    const JSONresponse = await response.json();
    
    console.log(JSONresponse)
}