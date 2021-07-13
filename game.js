var upgrades = {
  employee: {
    cps: 1,
    cost: 10
  },
  Oven: {
    clickModifier: 1,
    cost: 25
  },
  grandma: {
    cps: 5,
    cost: 25
  }
  chocolateBar: {
    clickModifier: 5,
    cost: 100
  }
}




let cookies = 0;
function mine() {

  cookies++
  return console.log("Cookie")

}

document.getElementById("cookiePic").addEventListener("click", mine);


function purchase(cost,(clickModifier || cps)) {
  document.getElementById(price, upgrade).
}