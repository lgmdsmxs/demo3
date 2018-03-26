<?php
require("public.php");
$username = $_POST["username"];
$password = $_POST["password"];
$insert = "insert into username(username,password) values('$username','$password')";
if(mysqli_query($sql,$insert))
{
	echo "yes";
}
else
{
	echo "no";
}