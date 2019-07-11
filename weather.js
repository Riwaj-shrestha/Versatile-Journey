fetch("http://api.openweathermap.org/data/2.5/weather?q=Bhaktapur,np&units=metric&APPID=42e3f02cc9f814aa93cc76b3bd523671").then(
data =>{
    return data.json()
}
).then(
    data2 =>{
        // console.log(data2.name)
        // console.log(data2.main.temp)
        // console.log(data2.weather[0].description)
        document.getElementById("cityname").innerHTML=`${data2.name}`
        document.getElementById("temp").innerHTML=`${data2.main.temp}`
        document.getElementById("desc").innerHTML=`${data2.weather[0].description}`

        if (data2.weather[0].description=="moderate rain") {
        	document.getElementById("bkt").setAttribute("src","moderate-rain.png")
        }

        
    }
)


fetch("http://api.openweathermap.org/data/2.5/weather?q=Banepa,np&units=metric&APPID=42e3f02cc9f814aa93cc76b3bd523671").then(
data =>{
	
    return data.json()
}
).then(
    data2 =>{
        // console.log(data2.name)
        // console.log(data2.main.temp)
        // console.log(data2.weather[0].description)
        document.getElementById("cityname1").innerHTML=`${data2.name}`
        document.getElementById("temp1").innerHTML=`${data2.main.temp}`
        document.getElementById("desc1").innerHTML=`${data2.weather[0].description}`
    }
)

fetch("http://api.openweathermap.org/data/2.5/weather?q=Kathmandu,np&units=metric&APPID=42e3f02cc9f814aa93cc76b3bd523671").then(
data =>{
    return data.json()
}
).then(
    data2 =>{
        // console.log(data2.name)
        // console.log(data2.main.temp)
        // console.log(data2.weather[0].description)
        document.getElementById("cityname2").innerHTML=`${data2.name}`
        document.getElementById("temp2").innerHTML=`${data2.main.temp}`
        document.getElementById("desc2").innerHTML=`${data2.weather[0].description}`
    }
)