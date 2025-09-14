const basket1 = { name: "Basket 1", hasFruit: false };
const basket2 = { name: "Basket 2", hasFruit: true };
const basket3 = { name: "Basket 3", hasFruit: false };

function checkBasket(basketNumber) {
  if (basketNumber === 1) {
    if (basket1.hasFruit) {
      return "backet1 has fruit";
    } else {
      return "basket1 is empty";
    }
  } else if (basketNumber === 2) {
    if (basket2.hasFruit) {
      return "backet2 has fruit";
    } else {
      return "basket2 is empty";
    }
  } else if (basketNumber === 3) {
    if (basket1.hasFruit) {
      return "backet3 has fruit";
    } else {
      return "basket3 is empty";
    }
  } else {
    return "invalid basket number!";
  }
}

console.log(checkBasket);
