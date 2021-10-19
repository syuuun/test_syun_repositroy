





/*************************
★★★★リファレンスはこちらを参照
http://www.geocities.jp/maru3128/SakuraMacro/

★★★★マクロテンプレート

//★★★パラメータ取り出し
Editor.SearchNext( '&' , 000101); 
Editor.Right();
Editor.InsText('\r\n');


//★★★1～100まで連番
for(var i = 0 ; i < 100 ; i++){
	Editor.InsText(i);
	Editor.InsText('\r\n');
}



//置換
Editor.ReplaceAll("= 'NYC'" , " IN('NYS' , 'SWF' , 'NWS' , 'EWR' , 'NBP' , 'LGA' , 'JFK')");
Editor.ReplaceAll("= 'SAN'" , " IN('SDM' , 'SEE' , 'SAN' , 'NZY' , 'NKX' , 'MYF' , 'CLD')");


//★★★一括grep
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


//☆文字列の挿入
Editor.InsText(text);
//☆前方検索
Editor.SearchNext( '\\' , 000101);

//☆後方検索
Editor.SearchPrev( '\\' , 000101);
//☆行末に移動
Editor.GoLineEnd();
//☆行頭に移動
Editor.GoLineTop();

//☆削除
Editor.Delete();

*/