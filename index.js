function foundWord() {
  let Word = document.getElementById("word1").value;
  // document.getElementById("display").innerHTML = Word;
  const word = Word.toUpperCase();
  const grid = [
    ["P", "S", "U", "W", "H", "A", "T", "S"],
    ["L", "P", "A", "C", "K", "A", "G", "E"],
    ["N", "Y", "O", "L", "R", "D", "V", "L"],
    ["F", "I", "N", "G", "E", "Z", "B", "M"],
    ["I", "R", "E", "H", "Q", "N", "J", "O"],
    ["A", "T", "B", "V", "G", "Y", "E", "S"],
    ["J", "D", "U", "W", "U", "E", "S", "T"],
    ["P", "S", "T", "I", "C", "K", "E", "Y"],
  ];
  const WordCheck = (grid, row, col, word, direction) => {
    let x = 0;
    let count = 0;
    const length = word.length;
    switch (true) {
      case direction == 0:
        for (
          let a = row, b = col;
          b < 8 && x < length;
          b++ //check the col forward
        ) {
          if (word[x++] != grid[a][b]) return false;
          else count++;
        }
        if (count == length) return true;
        else return false;

      case direction == 1:
        for (
          let a = row, b = col;
          b >= 0 && x < length;
          b-- //check the col backward
        ) {
          if (word[x++] != grid[a][b]) return false;
          else count++;
        }
        if (count == length) return true;
        else return false;

      case direction == 2:
        for (
          let a = row, b = col;
          a < 8 && x < length;
          a++ //check the row forward
        ) {
          if (word[x++] != grid[a][b]) return false;
          else count++;
        }
        if (count == length) return true;
        else return false;
      case direction == 3:
        for (
          let a = row, b = col;
          a >= 0 && x < length;
          a-- //check the row backward
        ) {
          if (word[x++] != grid[a][b]) return false;
          else count++;
        }
        if (count == length) return true;
        else return false;
      case direction == 4:
        for (
          let a = row, b = col;
          a < 8 && b < 8 && x < length;
          a++, b++ //check downward diagnoal
        ) {
          if (word[x++] != grid[a][b]) return false;
          else count++;
        }
        if (count == length) return true;
        else return false;

      case direction == 5:
        for (
          let a = row, b = col;
          a >= 0 && b >= 0 && x < length;
          a--, b-- //check the backward diagonal
        ) {
          if (word[x++] != grid[a][b]) return false;
          else count++;
        }
        if (count == length) return true;
        else return false;

      case direction == 6:
        for (
          let a = row, b = col;
          a < 8 && b >= 0 && x < length;
          a++, b-- //check the down backward diagnoal
        ) {
          if (word[x++] != grid[a][b]) return false;
          else count++;
        }
        if (count == length) return true;
        else return false;
      case direction == 7:
        for (
          let a = row, b = col;
          a >= 0 && b < 8 && x < length;
          a--, b++ //check the up forward diagonal
        ) {
          if (word[x++] != grid[a][b]) return false;
          else count++;
        }
        if (count == length) return true;
        else return false;
    }
  };
  const FirstFound = (grid, word, row, col) => {
    for (let direction = 0; direction < 8; direction++) {
      if (WordCheck(grid, row, col, word, direction)) {
        //first direction=0,then it increarse upto 7
        return true;
      }
    }
    return false;
  };
  const CrossWord = (grid, word) => {
    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 8; col++) {
        if (grid[row][col] == word[0] && FirstFound(grid, word, row, col)) {
          //checks the first letter
          return true;
        }
      }
    }
  };
  if (CrossWord(grid, word)) {
    document.getElementById("display").innerHTML = "CORRECT ANSWER";
  } else {
    document.getElementById("display").innerHTML = "WRONG ANSWER";
  }
}
