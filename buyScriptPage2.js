function BuyWindow2(){
    BuyWindowPage2.style.left = '30vw'
    BuyWindowPage2.style.visibility = 'visible'

    fetch('buyData.json')
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        appenData(data)
    })
    .catch(function(err){
        console.log('error: ' + err)
    })

    function appenData(data){
        var mainContainer2 = document.getElementById("BuyWindowPage2")  
        var spanTime2 = document.createElement("span")
        spanTime2.innerHTML = "Registeration Time: <br>" + data[0].regisTime
        mainContainer2.appendChild(spanTime2)
    
        var spanName2 = document.createElement("span")
        spanName2.innerHTML = "Name: <br>" + data[0].name    
        mainContainer2.appendChild(spanName2)
    
        var spanGameName2 = document.createElement("span")
        spanGameName2.innerHTML = "Game: <br>" + data[0].gameName    
        mainContainer2.appendChild(spanGameName2)
        
        var spanPrice2 = document.createElement("span")
        spanPrice2.innerHTML = "Price: <br>" + data[0].price    
        mainContainer2.appendChild(spanPrice2)
    
        var spanAddress2 = document.createElement("span")
        spanAddress2.innerHTML = "Address: <br>" + data[0].address    
        mainContainer2.appendChild(spanAddress2)
    }
}
function CloseBuyWindow2(){
    BuyWindowPage2.style.visibility = 'hidden'    
}



