function validateBrackets() {
  const inputString = document.getElementById("inputString").value;
  const resultDiv = document.getElementById("result");

  resultDiv.innerHTML = isValid(inputString) ? "True" : "False";
}

function isValid(s) {
  const stack = [];
  const map = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (map[char]) {
      stack.push(map[char]);
    } else {
      if (char !== stack.pop()) {
        return false;
      }
    }
  }

  return stack.length === 0;
}
