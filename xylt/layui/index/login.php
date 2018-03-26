<?php
require("public.php");
$username = $_POST["username"];
$password = $_POST["password"];
$select = "select * from username where '$username'=username and '$password'=password";
$result = mysqli_query($sql,$select);
if(mysqli_num_rows($result)===0)
{
	echo "no";
}
else
{
	echo "yes";
}