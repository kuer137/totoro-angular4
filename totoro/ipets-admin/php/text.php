<?php
	$con = mysqli_connect("localhost","root","root","datasdome");  //链接数据库
	$con -> query("set names 'utf8'");  //设置数据格式
	echo "链接成功";
	echo "<br/>";
	// 插入数据
	$con ->query("INSERT INTO formition (name,description,cover) VALUES ('kuer','hahahahaha','234234234')");
	echo "导入数据成功";
	echo "<br/>";

	//读取数据  LIMIT 5 代表读5行
	$results = $con -> query("SELECT name,description,cover FROM formition ORDER BY id LIMIT 5");

	if($results)
	{
		while ($row = mysqli_fetch_array($results)) {
			echo "name = " . $row['name'] . "; description=" . $row['description'] . "; cover=" . $row['cover'];
			echo "<br/>";
		}
		mysqli_free_result($results);
	}
	echo "读取数据成功";
	echo "<br />";

	//根据特定搜索条件读取数据
	$selectd = $con ->query("SELECT name,description,cover FROM formition WHERE id=16 OR id=17");
	if($selectd)
	{
		while ($row = mysqli_fetch_array($selectd)) {
			echo "name = " . $row['name'] . "; description=" . $row['description'] . "; cover=" . $row['cover'];
			echo "<br/>";
		}
		mysqli_free_result($selectd);
	}
	echo "搜索id=16和 id=17的数据成功！";
	echo "<br />";


	//删除数据
	$con -> query("DELETE FROM formition WHERE name='kuer'");
	echo "删除数据成功！";

	//更新数据
	$con -> query("UPDATE formition set name='酷儿' WHERE id=17");
	echo "更新数据成功";

	mysqli_close($con);
	?>