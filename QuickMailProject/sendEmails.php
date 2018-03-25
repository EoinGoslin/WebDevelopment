<?php



$fromaddress = $_POST['fromAddress'];
$toaddress = $_POST['toAddress'];
$subject = $_POST['subject'];
$message = $_POST['message'];
$password = $_POST['password'];
// echo $message;

// how to change directories
// $old_path = getcwd();
// // echo $old_path;
// chdir('/home/eoin/Desktop/bashscripts');
// $old_path = getcwd();
// // echo $old_path;
// chdir('/opt/lampp/htdocs/PHPfun');
// $old_path = getcwd();
// echo $old_path;




function runBashFunction($bashfile, $bashfunction) {
    $descriptorspec = array(
         0 => array("pipe", "r"),    // stdin is a pipe that the child will read from
         1 => array("pipe", "w"),    // stdout is a pipe that the child will write to
         2 => array("pipe", "w") // stderr is a pipe too
    );

    $cwd = '.';
    $env = array();

    $process = proc_open('bash', $descriptorspec, $pipes, $cwd, $env);

    if (is_resource($process)) {
            fwrite($pipes[0], "source $bashfile\n");
            fwrite($pipes[0], "$bashfunction\n");
            fclose($pipes[0]);

            $output = stream_get_contents($pipes[1]);
            $error = stream_get_contents($pipes[2]);
            fclose($pipes[1]);
            fclose($pipes[2]);

            // It is important that you close any pipes before calling
            // proc_close in order to avoid a deadlock
            //

            $return_value = proc_close($process);
            //note, $error and $return_value are discarded
            return $output;
    }
    return null;
}


if(isset($_REQUEST['emailwithAdress'])) 
{
    $value = runBashFunction("bash.sh", "emailP '$fromaddress' '$subject' '$toaddress' '$password' '$message'");
    header("Location:phpbash.php");
 
}



?>