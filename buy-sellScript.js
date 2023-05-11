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