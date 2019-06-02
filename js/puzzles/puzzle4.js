var onChange = function(oldPos, newPos) {
  if(ChessBoard.objToFen(newPos) === 'k7/1pK5/8/8/8/R7/8/8'){
    alert("Correct!");
    window.history.back();
  }
  else {
    board = ChessBoard('board', cfg);
  }
};

var cfg = {
  onChange: onChange,
  showNotation: false,
  draggable: true,
  moveSpeed: 'slow',
  snapbackSpeed: 500,
  snapSpeed: 100,
  position: 'k7/1pK5/8/8/8/7R/8/8'
};

var board = ChessBoard('board', cfg);