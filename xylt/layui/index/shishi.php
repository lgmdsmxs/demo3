<?php 
require("public.php");
$username = $_POST['username'];
$select = "select username from username where '$username'=username";
$result = mysqli_query($sql,$select);
if(mysqli_num_rows($result)===0)
{
	echo "no";
}
else
{
	echo "yes";
}
