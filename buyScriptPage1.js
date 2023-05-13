function BuyWindow11(){
    BuyWindowPage1.style.left = '30vw'
    BuyWindowPage1.style.visibility = 'visible'
}
function CloseBuyWindow11(){
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

    var mainContainer1 = document.getElementById("datePage11")
    const datePage11 = document.getElementById("datePage11")
    datePage11.innerHTML = "Registeration Time: <br>" + data[0].regisTime
   
    const pricePage11 = document.getElementById("pricePage11")
    pricePage11.innerHTML = data[0].price    

    var mainContainer2 = document.getElementById("datePage12")
    const datePage12 = document.getElementById("datePage12")
    datePage12.innerHTML = "Registeration Time: <br>" + data[1].regisTime
    
    const pricePage12 = document.getElementById("pricePage12")
    pricePage12.innerHTML = data[1].price

    mainContainer1.appendChild(datePage11)
    mainContainer2.appendChild(datePage12)
    
}

