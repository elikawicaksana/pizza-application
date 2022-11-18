var menup = 0,
    sizep = 0,
    toppingp = 0

function handleChangeMenu(menu) {
    menup = parseInt(menu.value)
    switch (menu.id) {
        case "peperoni" :
            updateToppingMenu1()
            break
        case "neapolitan" :
            updateToppingMenu2()
            break
        default : 
            updateToppingMenu3()
            break
    }
    toppingp = 0
    sizep = 0
    document.getElementById("medium").checked = true
    updatePrice()
}

function handleChangeSize(size) {
    sizep = parseInt(size.value)
    console.log(sizep)
    updatePrice()
}

function handleChangeTopping(topping) {
    if (topping.checked == true) {
        toppingp = toppingp + parseInt(topping.value)
    } else {
        toppingp = toppingp - parseInt(topping.value)
    }
    updatePrice()
}

function updateToppingMenu1() {
    document.getElementById("avocado").disabled = false
    document.getElementById("lobster").disabled = true
    document.getElementById("bacon").disabled = true
    document.getElementById("broccoli").disabled = false
    document.getElementById("oyster").disabled = true
    document.getElementById("duck").disabled = true
    document.getElementById("onions").disabled = false
    document.getElementById("salmon").disabled = true
    document.getElementById("ham").disabled = false
    document.getElementById("zucchini").disabled = false
    document.getElementById("tuna").disabled = false
    document.getElementById("sausage").disabled = true
    resetCheckedToppings()
}
function updateToppingMenu2() {
    document.getElementById("avocado").disabled = true
    document.getElementById("lobster").disabled = false
    document.getElementById("bacon").disabled = false
    document.getElementById("broccoli").disabled = false
    document.getElementById("oyster").disabled = false
    document.getElementById("duck").disabled = true
    document.getElementById("onions").disabled = false
    document.getElementById("salmon").disabled = false
    document.getElementById("ham").disabled = false
    document.getElementById("zucchini").disabled = false
    document.getElementById("tuna").disabled = true
    document.getElementById("sausage").disabled = true
    resetCheckedToppings()
}
function updateToppingMenu3() {
    document.getElementById("avocado").disabled = true
    document.getElementById("lobster").disabled = true
    document.getElementById("bacon").disabled = false
    document.getElementById("broccoli").disabled = false
    document.getElementById("oyster").disabled = true
    document.getElementById("duck").disabled = false
    document.getElementById("onions").disabled = false
    document.getElementById("salmon").disabled = true
    document.getElementById("ham").disabled = false
    document.getElementById("zucchini").disabled = false
    document.getElementById("tuna").disabled = false
    document.getElementById("sausage").disabled = false
    resetCheckedToppings()
}

function resetCheckedToppings() {
    document.getElementById("avocado").checked = false
    document.getElementById("lobster").checked = false
    document.getElementById("bacon").checked = false
    document.getElementById("broccoli").checked = false
    document.getElementById("oyster").checked = false
    document.getElementById("duck").checked = false
    document.getElementById("onions").checked = false
    document.getElementById("salmon").checked = false
    document.getElementById("ham").checked = false
    document.getElementById("zucchini").checked = false
    document.getElementById("tuna").checked = false
    document.getElementById("sausage").checked = false
}

function updatePrice() {
    document.getElementById("total").innerHTML = "Rp " + (menup + sizep + toppingp).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}