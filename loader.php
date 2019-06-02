<!DOCTYPE html>
<html>
<head>
<title>Puzzle</title>
<link rel="stylesheet" href="css/chessboard-0.3.0.min.css">
<script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
<script src="js/chessboard-0.3.0.min.js"></script>
</head>
<body>

<div id="board" style="width: 60%"></div>
<input type="button" id="savePositionBtn" value="Save puzzle position" />
<input type="button" id="clearBtn" value="Clear" />
<button id="create">Create file</button>
<a download="puzzle.js" id="downloadlink" style="display: none">Download</a>
<script src="<?php echo $puzzleSelected = "js/puzzles/" . $_POST['puzzle']; ?>" ></script>


</body>
</html>
