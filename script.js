var s =  document.createElement("img");
s.className = "storm";

function stormTrans(){
    s.setAttribute("src", "assets/storm.gif");
    s.setAttribute("width", "cover");
    s.setAttribute("height", "100%");
    document.body.appendChild(s);
}

var c = document.createElement("img");
c.className = "bluesky";

function cloudTrans(){
    c.setAttribute("src", "assets/blueSky.gif");
    c.setAttribute("width", "cover");
    c.setAttribute("height", "100%");
    document.body.appendChild(c);
}

var y =  document.createElement("img");
y.className = "snow";

function powderTrans(){
    y.setAttribute("src", "assets/original.gif");
    y.setAttribute("width", "cover");
    y.setAttribute("height", "auto");
    document.body.appendChild(y);    
}

var x =  document.createElement("img");
x.className = "flakes";

function flakesTrans(){
    x.setAttribute("src", "assets/snow-transparent.gif");
    x.setAttribute("width", "cover");
    x.setAttribute("height", "auto");
    document.body.appendChild(x);
}

var b =  document.createElement("img");
b.className = "birds";

function birdsTrans(){
    x.setAttribute("src", "assets/pop.gif");
    x.setAttribute("width", "cover");
    x.setAttribute("height", "71%");
    document.body.appendChild(b);
}

function clearSky() {
    document.body.removeChild(c);
}


function clearSnow() {
    document.body.removeChild(y);
}

function clearFlakes() {
    document.body.removeChild(x);
}

function clearStorm() {
    document.body.removeChild(s);
}

function clearBirds() {
    document.body.removeChild(b);
}

function birdsCollector() {
    setTimeout(function(){birdsTrans()}, 10500);
    setTimeout(function(){birdsCollector()}, 10000);
    setTimeout(function(){clearBirds()}, 12000);
}

function snowCollector() {
    setTimeout(function(){powderTrans()}, 0);
    setTimeout(function(){snowCollector()}, 5000);
    setTimeout(function(){clearSnow()}, 5000)
}

function flakesCollector() {
    setTimeout(function(){flakesTrans()}, 0);
    setTimeout(function(){flakesCollector()}, 5000);
    setTimeout(function(){clearFlakes()}, 4000)
}

function stormCollector() {
    setTimeout(function(){stormTrans()}, 11000);
    setTimeout(function(){stormCollector()}, 10000);
    setTimeout(function(){clearStorm()}, 13000)
}

function skyCollector() {
    setTimeout(function(){cloudTrans()}, 2500);
    setTimeout(function(){skyCollector()}, 5000);
    setTimeout(function(){clearSky()}, 7500);
}


snowCollector()
flakesCollector()
stormCollector()
skyCollector()
birdsCollector()
//Above this Line is the background loop


let city = document.querySelector("#city")

let state = document.querySelector("#state")

function dig(){
    
    
    let url = `https://api.airvisual.com/v2/city?city=${city.value}&state=${state.value}&country=USA&key=e2ee8a72-da61-4070-8742-674bfccd638f`
    
    fetch(url, {
            method: 'GET'
    })
        .then((results) => {
            return results.json();
        })

        .then((json) => {
            console.log(json);
            console.log(json.data.current.weather.tp);
            displayTemp(json.data.current.weather.tp);
            displayWind(json.data.current.weather.ws);
            displayHumid(json.data.current.weather.hu);
            console.log(json.data.current.weather.ic)
        })
    
}

dig()
        
function displayTemp(e) {
    let far = ((e / 5) * 9) + 32;
    tempdoc = document.querySelector("#temp")
    tempdoc.innerHTML = `${far}`
}

function displayWind(e){
    winddoc = document.querySelector("#windy")
    winddoc.innerHTML = `${e}`
}

function displayHumid(e){
    humdoc = document.querySelector("#hum")
    humdoc.innerHTML = `${e}%`
}

let sb = document.querySelector("#submitButton") 

sb.onclick = () =>{
    dig();
}

