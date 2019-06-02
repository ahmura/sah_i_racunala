var onChange = function(oldPos, newPos) {
  if(ChessBoard.objToFen(newPos) === 'R5k1/5ppp/8/8/8/6P1/5PK1/8'){
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
  position: '6k1/5ppp/8/8/8/6P1/5PK1/R7'
  };

  var board = ChessBoard('board', cfg);