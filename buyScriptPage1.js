function BuyWindow1(){
    BuyWindowPage1.style.left = '30vw'
    BuyWindowPage1.style.visibility = 'visible'
}
function CloseBuyWindow1(){
    BuyWindowPage1.style.visibility = 'hidden'
}
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
    var mainContainer = document.getElementById("BuyWindowPage1")  
    var spanTime = document.createElement("span")
    spanTime.innerHTML = "Registeration Time: <br>" + data[0].regisTime
    mainContainer.appendChild(spanTime)

    var spanName = document.createElement("span")
    spanName.innerHTML = "Name: <br>" + data[0].name    
    mainContainer.appendChild(spanName)

    var spanGameName = document.createElement("span")
    spanGameName.innerHTML = "Game: <br>" + data[0].gameName    
    mainContainer.appendChild(spanGameName)
    
    var spanPrice = document.createElement("span")
    spanPrice.innerHTML = "Price: <br>" + data[0].price    
    mainContainer.appendChild(spanPrice)

    var spanAddress = document.createElement("span")
    spanAddress.innerHTML = "Address: <br>" + data[0].address    
    mainContainer.appendChild(spanAddress)
}
