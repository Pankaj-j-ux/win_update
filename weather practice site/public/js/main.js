const cityName = document.getElementById('cityName');
const submit_btn =  document.getElementById('submit_btn');
const city_name = document.getElementById('city_name');



// 3a33aa0e75a03c627b86084ec50fb07f
// api.openweathermap.org/data/2.5/weather?q={city}&appid=3a33aa0e75a03c627b86084ec50fb07f


const getInfo = async(E) =>{
    E.preventDefault();

    let cityval = cityName.value;
    if(cityval === ""){
        city_name.innerText = "Plz write the city name befor you search.";
    }else{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&appid=3a33aa0e75a03c627b86084ec50fb07f` ;
            const res = await fetch(url); 
            const result = await res.json();
            console.log(result);
        }catch{
            city_name.innerText = "Plz write the correct city name";            
        }
    }
}

submit_btn.addEventListener('click', getInfo);
