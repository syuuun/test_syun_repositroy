//p[^æèoµ
Editor.SearchPrev( '&' , 101000); 
Editor.Right();
Editor.Delete();
Editor.Left();



/*************************
http://www.geocities.jp/maru3128/SakuraMacro/

}Nev[g

//p[^æèoµ
Editor.SearchNext( '&' , 000101); 
Editor.Right();
Editor.InsText('\r\n');


//1`100ÜÅAÔ
for(var i = 0 ; i < 100 ; i++){
	Editor.InsText(i);
	Editor.InsText('\r\n');
}



//u·
Editor.ReplaceAll("= 'NYC'" , " IN('NYS' , 'SWF' , 'NWS' , 'EWR' , 'NBP' , 'LGA' , 'JFK')");
Editor.ReplaceAll("= 'SAN'" , " IN('SDM' , 'SEE' , 'SAN' , 'NZY' , 'NKX' , 'MYF' , 'CLD')");


//êgrep
var str = [
'sss',
'ffff'
 ];

for(var i = 0 ; i < str.length ; i++){
	Editor.Grep(
	//õ¶ñ
	str[i],
	//õÎÛt@C
	'*',
	//õÎÛtH_
	'C:\\Users\\funazaki\\Desktop\\tmp'
	,10000100
	);
}


//¶ñÌ}ü
Editor.InsText(text);
//Oûõ
Editor.SearchNext( '\\' , 000101);

//ãûõ
Editor.SearchPrev( '\\' , 000101);
//sÉÚ®
Editor.GoLineEnd();
//sªÉÚ®
Editor.GoLineTop();

//í
Editor.Delete();

*/