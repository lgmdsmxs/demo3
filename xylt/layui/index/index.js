layui.use(["jquery","element","form","carousel","form"],function(){
	var $ = layui.jquery;
	var elemet = layui.element;
	var form = layui.form;
	var carousel = layui.carousel;
	var form = layui.form;
	carousel.render({
		elem:"#carousel",
		interval:3000,
		arrow:"always",
		height:"400px"
	});
	form.verify({
			username:[/^[\S]{4,12}$/,"4到12字符"]
		});
	form.on("submit(login)",function(data){
		$.post("login.php",data.field,function(data,status)
		{
			if(data==="no")
			{
				layer.msg("账号密码错误!!!",{icon:5});
			}
			else
			{	
				location.href="index.html";
			}
		});
	});
	$("#shishi").on("input",function(){
		var value = $(this).val();
		$.post("shishi.php",{username:value},function(data,status){
			if(data==="no")
			{
				$("#text").text("该用户名可用").css("color","blue");
			}
			else
			{
				$("#text").text("该用户名重复").css("color","red");
			}
		});
	});
	form.on("submit(regist)",function(data){
		if($("#text").text()=="该用户名重复")
		{
			layer.msg("说了不能重复",{icon:5});
		}
		else
		{
			$.post("regist.php",data.field,function(data,status)
			{
				if(data==="yes")
				{
					layer.msg("注册成功!!!",{icon:1});
				}
				else
				{
					// locaStorage.setItem("username",data.field.username);
					layer.msg("注册失败",{icon:5});
				}
			});
		}
	});		
});