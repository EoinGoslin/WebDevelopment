

<?php

// /opt/lampp/htdocs/Assignment_3
//   <button type="submit" onClick="location.href = "phpbash.php" name = "eoinEmail">Send Eoin an Email</button>
echo '
<html>
<head> 


<link rel = "stylesheet" type = "text/css" href = "styler.css"/>


</head>
<body>
<h1> QuickMail </h1>
<hr>
<br>
<div class = "buttonCenter">
<h3> For Quick Mail to work, 
the recipient must click enable when they recieve their first email through this service.</h3>


        <br>

        <form id = "formsu" action = "sendEmails.php" method = "POST" >
        
        From Email Adress: <input type = "text" name = "fromAddress">
        
        Password: <input type = "password" name = "password">
        <br>
        <br>
        To Email Adress: <input type = "text" name = "toAddress">
        
        Subject:   <input type = "text" name = "subject">
        <br><br>
        Enter Your Message:
        <br>
        <textarea name = "message" > </textarea>
        <br>
         <button type="submit" onClick="location.href = "phpbash.php" name = "emailwithAdress">Send Them an Email</button>
        </form>
       
</div>
<h5>Read more about SMPT<a class = "anchor anchorBtn" href="https://en.wikipedia.org/wiki/Simple_Mail_Transfer_Protocol">SimpleMailTransferProtocol</a></h5>

</body>
</html>
';
// how to change directories
$old_path = getcwd();
// echo $old_path;
chdir('/home/eoin/Desktop/bashscripts');
$old_path = getcwd();
// echo $old_path;
chdir('/opt/lampp/htdocs/PHPfun');
$old_path = getcwd();
// echo $old_path;


// $output = shell_exec('ls');
// echo "<pre>$output</pre>";


// $output = shell_exec("./bash.sh", "getNumber");
// echo "<pre>$output</pre>";



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




?>