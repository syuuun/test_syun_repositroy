





/*************************
�����������t�@�����X�͂�������Q��
http://www.geocities.jp/maru3128/SakuraMacro/

���������}�N���e���v���[�g

//�������p�����[�^���o��
Editor.SearchNext( '&' , 000101); 
Editor.Right();
Editor.InsText('\r\n');


//������1�`100�܂ŘA��
for(var i = 0 ; i < 100 ; i++){
	Editor.InsText(i);
	Editor.InsText('\r\n');
}



//�u��
Editor.ReplaceAll("= 'NYC'" , " IN('NYS' , 'SWF' , 'NWS' , 'EWR' , 'NBP' , 'LGA' , 'JFK')");
Editor.ReplaceAll("= 'SAN'" , " IN('SDM' , 'SEE' , 'SAN' , 'NZY' , 'NKX' , 'MYF' , 'CLD')");


//�������ꊇgrep
var str = [
'sss',
'ffff'
 ];

for(var i = 0 ; i < str.length ; i++){
	Editor.Grep(
	//����������
	str[i],
	//�����Ώۃt�@�C��
	'*',
	//�����Ώۃt�H���_
	'C:\\Users\\funazaki\\Desktop\\tmp'
	,10000100
	);
}


//��������̑}��
Editor.InsText(text);
//���O������
Editor.SearchNext( '\\' , 000101);

//���������
Editor.SearchPrev( '\\' , 000101);
//���s���Ɉړ�
Editor.GoLineEnd();
//���s���Ɉړ�
Editor.GoLineTop();

//���폜
Editor.Delete();

*/