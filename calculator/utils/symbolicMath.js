


function isNum(val) {
  const res = val === null ? false : !isNaN(Number(val));
  return res;
}

function parenthesis (eq, startingPos) {
  let pos = startingPos;

  while (pos < eq.length-2) {

    if (eq[pos] === "(") {
      solve(eq, pos+1);
      eq[pos] = eq[pos+1];
      eq[pos+1] = null;
    }
    pos += 1;
  }

}


function negate(eq, startingPos) {

  let pos = startingPos;
  let lastTermPos = pos-1;

  while (pos < eq.length - 1) {

    // negate element if applicable
    if (eq[pos] === "-") {
      if (lastTermPos < startingPos || !isNum(eq[lastTermPos])) {
        eq[pos] = -1 * Number(eq[pos+1]);
        eq[pos+1] = null;
      }
    } else if (eq[pos] === ")") {
      break;
    }
    
    // increment pointers
    lastTermPos = eq[pos] ? pos : lastTermPos;
    pos += 1
  }

  return;
}


function multiplyAndDivide(eq, startingPos) {

  let currPos = startingPos+1;
  let lastTermPos = startingPos;

  while (currPos < eq.length - 1) {

    if (eq[currPos] === "*" || eq[currPos] === "/") {
      eq[lastTermPos] = eq[currPos] === "*"
        ? Number(eq[lastTermPos]) * Number(eq[currPos+1])
        : Number(eq[lastTermPos]) / Number(eq[currPos+1]);
      eq[currPos] = null;
      eq[currPos+1] = null;
      currPos += 2;
    } else if (isNum(eq[currPos])) {
      lastTermPos = currPos;
    } else if (eq[currPos] === ")") {
      break;
    }
    currPos += 1;
  }

  return;
}

function addAndSubtract(eq, startingPos) {

  let currPos = startingPos+1;
  let lastTermPos = startingPos;

  while (currPos < eq.length - 1) {
    if (eq[currPos] === "+" || eq[currPos] === "-") {
      eq[lastTermPos] = eq[currPos] === "+"
        ? Number(eq[lastTermPos]) + Number(eq[currPos+1])
        : Number(eq[lastTermPos]) - Number(eq[currPos+1]);
      eq[currPos] = null;
      eq[currPos+1] = null;
      //currPos += 2;
    } else if (isNum(eq[currPos])) {
      lastTermPos = currPos;
    } else if (eq[currPos] === ")") {
      eq[currPos] = null;
      break;
    }
    currPos += 1;
  }
}




function solve(eq, startingPos=0) {

  parenthesis(eq, startingPos)
  negate(eq, startingPos);
  multiplyAndDivide(eq, startingPos);
  addAndSubtract(eq, startingPos);
}

console.log(my_eq);
solve(my_eq);
console.log(my_eq);
