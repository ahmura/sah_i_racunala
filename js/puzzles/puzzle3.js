var onChange = function(oldPos, newPos) {
  if(ChessBoard.objToFen(newPos) === '8/8/2Q5/1K1k4/8/p7/8/B5q1'){
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
  position: '2Q5/8/8/1K1k4/8/p7/8/B5q1'
};

var board = ChessBoard('board', cfg);