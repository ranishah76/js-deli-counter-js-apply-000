var katzDeli = []

function takeANumber(line, name) {
  line.push(name)
return `Hello, ${name}. You are number ${line.length} in line.`
}


function nowServing() {
  if (line.length == 0) {
    return "There is nobody waiting to be served!"
  }

return `Currently serving ${line.shift()}`
}

function currentLine (line) {
const numbersandNames = []

  if (line == 0) {
    return "The line is currently empty.";
  }

for (var i = 0; i < line.length; i++) {
  lineNum.push('${i+1}.${line[i]}')
}

    return "The line is currently:" + lineNum
};
  }
}
