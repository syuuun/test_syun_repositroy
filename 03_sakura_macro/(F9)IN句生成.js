/*

INãÂê∂ê¨É}ÉNÉç

*/


Editor.InsText('IN( \r\n');
for(var i = 0 ; i < GetLineCount(0)-1; i++){
	Editor.GoLineTop();
	Editor.InsText('\'');
	Editor.GoLineEnd();
	Editor.InsText('\'');
	if(i < GetLineCount(0)-2){
		Editor.InsText(',');
	}
	Editor.GoLineTop();
	Editor.Down();
}

Editor.InsText(')');
 