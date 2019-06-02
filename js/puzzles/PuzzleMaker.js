var puzzleState = '8/8/8/8/8/8/8/8';
var puzzleSolution = '8/8/8/8/8/8/8/8';
var flag = 0;

var onChange = function(oldPos, newPos) {
  if(flag == 1)
  {
    puzzleSolution = ChessBoard.objToFen(newPos);
    alert("Puzzle saved, press create file to generate download link!");
    saveDonePuzzle(puzzleState, puzzleSolution);
  }
};

var save = function() {

};

var cfg = {
  draggable: true,
  dropOffBoard: 'trash',
  sparePieces: true,
  onChange: onChange
};

var board = ChessBoard('board', cfg);

function clickSavePositionBtn() {
  puzzleState = board.fen();
  alert("Position saved, now do the solution move!");
  flag = 1;
}

function saveDonePuzzle(puzzleState, puzzleSolution) {
  var textFile = null,
  makeTextFile = function (text) {
    var data = new Blob([text], {type: 'text/plain'});

    if (textFile !== null) {
      window.URL.revokeObjectURL(textFile);
    }
    textFile = window.URL.createObjectURL(data);
    return textFile;
  };

  var create = document.getElementById('create');

  create.addEventListener('click', function () {
    var link = document.getElementById('downloadlink');
    link.href = makeTextFile(
      `var onChange = function(oldPos, newPos) {
        \r\n  if(ChessBoard.objToFen(newPos) === '${puzzleSolution}'){
        \r\n    alert("Correct!");
        \r\n    window.history.back();
        \r\n  }
        \r\n  else{
        \r\n    board = ChessBoard('board', cfg);
        \r\n  }
        \r\n};
        \r\n
        \r\nvar cfg = {
        \r\n  onChange: onChange,
        \r\n  showNotation: false,
        \r\n  draggable: true,
        \r\n  moveSpeed: 'slow',
        \r\n  snapbackSpeed: 500,
        \r\n  snapSpeed: 100,
        \r\n  position: '${puzzleState}'
        \r\n};
        \r\n
        \r\nvar board = ChessBoard('board', cfg);`
      );
    link.style.display = 'block';
    alert("Save your puzzle by clickind download!");
  }, false);
}

$('#savePositionBtn').on('click', clickSavePositionBtn);
$('#clearBtn').on('click', board.clear);