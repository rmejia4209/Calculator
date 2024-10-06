
/**
 * Recursive function that returns a list of elements that represent a
 * singular term. Base case is met when offset is equal to 0 or the stack
 * length is equal to 0.
 * 
 * @param {Array<string>} stack   - Stack of elements used to build a term
 * @param {number} offset - The offset of parenthesis in the term.
 *                          Base case is reached when the offset is equal to 0.
 * 
 * @returns {Array<string>} - returns an array of elements composing a term
 */
function getTerm(stack, offset=0) {
  const term = [stack.pop(-1)]; 
  if (term[0] === "\\right)" || term[0] === ")") offset++;
  else if (term[0] === "\\left(" || term[0] === "(") offset--
  

  // Keep adding to term if offset !== 0 and more terms are available
  if (term[0] === "-") term.push(...getTerm(stack, offset))
  else if(offset && stack.length) term.push(...getTerm(stack, offset));
  return term;
}


/**
 * Returns a stack of Latex valid representations based on input tokens.
 * 
 * @param {Array<string>} rawEquation - Array of elements added by client
 * @param {string} cursor - Cursor to display where edits are being made
 * 
 * @returns {string} - Stack of LaTex representation of input equation
 */
export function buildLaTexStack(equation) {

  const latexStack = [];
  const tokens = [...equation].reverse();
  let parenthesisOffset = 0  // used to manage number of missing parenthesis

  // pop tokens and determine what needs to be added to stack
  while (tokens.length) {
    let token = tokens.pop(-1)
    switch (token) {
      case "(":
        latexStack.push("\\left(")
        parenthesisOffset++
        break;
      
      case ")":
        latexStack.push("\\right)")
        parenthesisOffset--
        break;
      
      case "÷":
        let lastTerm = getTerm(latexStack).reverse().join("");
        let nextTerm = buildLaTexStack(getTerm(tokens)).join("") || "";
        latexStack.push(`\\frac{${lastTerm}}{${nextTerm}}`);
        break;

      case "x":
        latexStack.push(`\\times`);
        break;

      default:
        // +, -, =, numbers
        latexStack.push(token);
        break;
    }
  }

  // add empty brackets to make latex valid
  for (let i = 0; i < parenthesisOffset; i++) {
    latexStack.push("\\right.");
  }

  return latexStack;
}


/**
 * Places a pipe character in the most appropriate location.
 * 1. Inside of empty brackets {|}
 * 2. Between a closing phantom right bracket and a closing bracket \\right|}
 * 3. Between a negative sign and a closing bracket -|}
 *  
 * @param {string} element - string representation of last element where
 *                           cursor needs to be placed
 * @returns {string} - string with cursor placed in the appropriate location
 *
 */
function insertCursor(element) {

  const cursor = "|";
  const elementArray = element.split("");
  for (let pos = 0; pos < elementArray.length; pos++) {
    let char = elementArray[pos];
    let nextChar = elementArray[pos+1];
    // Acceptable locations
    // At the very end, between empty brackets, between "\\right." and "}"
    if (!nextChar || (["{", ".", "-"].includes(char) && nextChar === "}")
    ) {  
      elementArray.splice(pos+1, 0, cursor);
      break;
    }
  }

  return elementArray.join("");
}


/**
 * Return a valid LaTex string representations of the given stack. The first
 * string contains a | as the cursor while the second string contains a
 * phantom character to control the height/width of the equation.
 * 
 * @param {Array<string>} equation - Array of LaTex valid terms
 * 
 * @returns {Array<string>} - array with two strings
 *                            (a valid cursor and invisible cursor)
 */
function convertLaTexStackToString(equation) {
  
  // Return cursor only if list has a zero length or the last element is null
  if (!equation.length || equation[equation.length - 1] == null) {
    return ["|", "\\phantom{|}"]
  }

  // Find the last valid element & insert the cursor
  for (let i = equation.length-1; i >= 0; i--) {
    if (equation[i] !== "\\right.") {
      equation[i] = insertCursor(equation[i]);
      break;
    }
  }

  // Join the stack and return array of strings
  const equationString = equation.join("");
  return [equationString, equationString.replace("|", "\\phantom{|}")];
}


/**
 * Return the LaTex representation of the input equation tokens.
 * 
 * @param {Array<string>} equation
 * 
 * @returns {Array<string>} - array with two strings (w/ & w/o cursor)
 */
export function buildLaTexString(equation) {
  const latexStack = buildLaTexStack(equation);
  return convertLaTexStackToString(latexStack);
}

