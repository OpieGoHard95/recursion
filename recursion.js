// Coded by Jared Smith
// Even determination recursive function from ch3
// Last work was done on Saturday

var isEven = function(number) {
  if (number == 0)
    return true;
  else if (number == 1)
    return false;
  else if (number > 0)
    return isEven(number - 2);
  else if (number < 0)
    return isEven(number + 2);
}
console.log(isEven(-1))
