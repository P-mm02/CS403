function BuyPage() {
	SwitchBuy.style.border = '0.2vw solid aquamarine'
    SwitchSell.style.border = '0'
    SwitchBuyPage.style.visibility = 'visible'
    SwitchSellPage.style.visibility = 'hidden'
}
function SellPage() {
	SwitchBuy.style.border = '0'
    SwitchSell.style.border = '0.2vw solid aquamarine'
    SwitchBuyPage.style.visibility = 'hidden'
    SwitchSellPage.style.visibility = 'visible'
}

let imgInput = document.querySelector("#selectImg1")
let previewImg =document.querySelector("#previewImg1")

imgInput.onchange = evt => {
	const[file] = imgInput.files
		if (file) {
			previewImg.src = URL.createObjectURL(file)
		}
	
}