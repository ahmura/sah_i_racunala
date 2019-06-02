<!DOCTYPE html>
<html>
<head>
<title>Chess Puzzles</title>
</head>

<body>
<h1>Please select your puzzle:</h1>
<form action="loader.php" method="post">
    <select name="puzzle">
        <option selected="selected">Choose puzzle</option>
        <?php
        $fileList = glob('D:\xampp\htdocs\chess_puzzles\js\puzzles\*');
        
        foreach($fileList as $filename){
        ?>

        <option name="puzzle" value="<?php echo basename($filename).PHP_EOL; ?>"><?php echo basename($filename, ".js").PHP_EOL; ?></option>
        
        <?php
        }
        ?>
    </select>
    <input type="submit" value="Select">
</form>

</body>

</html>
