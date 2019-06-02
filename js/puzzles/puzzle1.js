var onChange = function(oldPos, newPos) {
  if(ChessBoard.objToFen(newPos) === '4k3/3nn3/3NN2K/8/8/8/8/8'){
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
  position: '4k3/1N1nn3/4N2K/8/8/8/8/8'
};

var board = ChessBoard('board', cfg);