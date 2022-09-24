const billInput = document.getElementById("billTotalInput");
const tipInput = document.getElementById("tipInput");
const NumberOfPeopleDiv = document.getElementById("numberOfPeople");
const perPersonTotalDiv = document.getElementById("perPersonTotal");

//number of people total from the div
let numberOfPeople = Number(NumberOfPeopleDiv.innerText);

const calculateBill = () => {
    const bill = Number(billInput.value)
    const tipPercent = Number(tipInput.value) / 100
    const tipAmount = bill * tipPercent
    const total = tipAmount + bill
    const perPersonTotal = total / numberOfPeople
    perPersonTotalDiv.innerText = `$${perPersonTotal.toFixed(2)}`
}

// ** Splits the bill between more people **
const increasePeople = () => {
    numberOfPeople += 1
    NumberOfPeopleDiv.innerText = numberOfPeople
    calculateBill()
}
const decreasePeople = () => {
    if (numberOfPeople <= 1) {
        return
      }
      numberOfPeople -= 1
      NumberOfPeopleDiv.innerText = numberOfPeople
      calculateBill()
}
console.log(perPersonTotalDiv)