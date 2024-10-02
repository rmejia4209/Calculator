
class Node {
  constructor(pos, operation, value) {
    this._pos = pos;
    this._operation = operation;
    this._left = null;
    this._right = null;
    this._value = value;
  }

  get pos() {
    return this._pos;
  }

  get value() {
    switch (this._operation) {
      case "add":
        return this._left.value + this._right.value;
      case "subtract":
        return this._left.value - this._right.value;
      case "multiply":
        return this._left.value * this._right.value;
      case "divide":
        return this._left.value / this._right.value;
      case "negate":
        return -1 * this._right.value;
      default:
        return Number(this._value);
    }
  }

  addNode(newNode) {
    if (newNode.pos < this._pos) {
      this._left ?  this._left.addNode(newNode) : this._left = newNode;
    } else {
      this._right ? this._right.addNode(newNode) : this._right = newNode;
    }
  }

}


function addOperation(operationStack, layer, pos, operation, value) {

  // Add empty list until operations has correct number of layers
  while (layer > operationStack.length - 1) {
    operationStack.push([]);
  }
  operationStack[layer].push(new Node(pos, operation, value));
}


function mergeStacks(stacks) {

  const maxDepth = stacks.reduce(
    (max, subStack) => Math.max(max, subStack.length), 0
  );
  const flattenStack = [];
  
  for (let layer = 0; layer < maxDepth; layer++) {
    stacks.forEach((subStack) => {
      if (layer < subStack.length) flattenStack.push(...subStack[layer]);
    });
  }

  return flattenStack;
}


function orderOfOperations(equation) {

  const additionStack = [];
  const multiplicationStack = [];
  const negationStack = [];
  const terminalStack = [];
  let layer = 0;
  for (let pos = equation.length-1; pos >= 0; pos--) {
    switch (equation[pos]) {
      case ")":
        layer++;
        break;
      case "(":
        layer--;
        break;
      case "+":
        addOperation(additionStack, layer, pos, "add");
        break
      case "-":
        pos === 0 || isNaN(equation[pos-1])
        ? addOperation(negationStack, layer, pos, "negate")
        : addOperation(additionStack, layer, pos, "subtract");
        break
      case "x":
        addOperation(multiplicationStack, layer, pos, "multiply");
        break;
      case "/":
        addOperation(multiplicationStack, layer, pos, "divide");
        break;
      default:
        addOperation(terminalStack, layer, pos, null, Number(equation[pos]));
    }
  }

  negationStack.forEach((subStack) => subStack.reverse());

  return mergeStacks(
    [
      additionStack,
      multiplicationStack,
      negationStack,
      terminalStack,
    ]
  );

}


function buildTree(equation) {

  const operationStack = orderOfOperations(equation);
  const operationTree = operationStack[0];

  for (let i = 1; i < operationStack.length; i++) {
    operationTree.addNode(operationStack[i]);
  }

  return tree.value;
}


/* 
["1", "+", "-", "(", "3", "x", "(", "6", "-", "4", ")", ")"] ans=-5
*/

console.log(buildTree());