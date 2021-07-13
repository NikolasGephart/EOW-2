var upgrades = {
  employee: {
    cps: 0.1,
    cost: 10
  },
  Oven: {
    clickModifier: 1,
    cost: 25
  }
}




let cookies = 0;
function mine() {

  cookies++
  return console.log("Cookie")

}

document.getElementById("cookiePic").addEventListener("click", mine);


function test() {
  return console.log("That Works")
}

document.getElementById('ug').addEventListener('click', test)