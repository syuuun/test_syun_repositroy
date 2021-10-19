
for(var i = 0 ; i < 100 ; i++){
	Editor.InsText(i);
	Editor.InsText('\r\n');
}

 
 
/*************************

マクロテンプレート

//文字列の挿入
Editor.InsText(text);


//一括grep
var str = [
'sss',
'ffff'
 ];

for(var i = 0 ; i < str.length ; i++){
	Editor.Grep(
	//検索文字列
	str[i],
	//検索対象ファイル
	'*',
	//検索対象フォルダ
	'C:\\Users\\funazaki\\Desktop\\tmp'
	,10000100
	);
}


*/