
const api_url = "https://restcountries.com/v3/all"

async function getDetails(url){
const data = await fetch(url).then((responce=> responce.json()));//.then((data) => console.log(data));
//const arrayOfLanguage = data[0].languages;
const arrayOfLanguage = data.forEach(languages);
return arrayOfLanguage;
// console.log(data)
};

console.log(getDetails(api_url));