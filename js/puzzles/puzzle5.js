var onChange = function(oldPos, newPos) {
  if(ChessBoard.objToFen(newPos) === 'rn4r1/1pn2p1k/2p1pPp1/7R/8/1P5P/Pq4P1/1B4RK'){
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
  position: 'rn4r1/1pn2p1k/2p1pPp1/4R3/8/1P5P/Pq4P1/1B4RK'
};

var board = ChessBoard('board', cfg);