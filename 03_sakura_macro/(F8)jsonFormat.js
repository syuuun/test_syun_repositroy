// TextBeautifier.js
// (�e�L�X�g���`�c�[��)
( function(){
  var $ = {},
    INDENT_PATTERN = 2,
    METHODS = [ "dummy", "xml", "json", "css", "sql" ];

  // JSON�I�u�W�F�N�g�擾
  var html = new ActiveXObject( 'htmlfile' );
  html.write( '<meta http-equiv="x-ua-compatible" content="IE=11" />' );
  $.JSON = html.parentWindow.JSON;
  html.close();
  html = null;

  // vkbeautify.js
!function(){function S(e){var r=String.fromCharCode(160),c=Array(5).join(r);c=isNaN(parseInt(e))?e:Array(e+1).join(r);var a=["\n"];for(ix=0;ix<100;ix++)a.push(a[ix]+c);return a}function e(){this.step="\t",this.shift=S(this.step)}e.prototype.xml=function(e,r){var c=e.replace(/>\s{0,}</g,"><").replace(/</g,"~::~<").replace(/\s*xmlns\:/g,"~::~xmlns:").replace(/\s*xmlns\=/g,"~::~xmlns=").split("~::~"),a=c.length,p=!1,l=0,s="",i=0,n=r?S(r):this.shift;for(i=0;i<a;i++)-1<c[i].search(/<!/)?(s+=n[l]+c[i],p=!0,(-1<c[i].search(/-->/)||-1<c[i].search(/\]>/)||-1<c[i].search(/!DOCTYPE/))&&(p=!1)):-1<c[i].search(/-->/)||-1<c[i].search(/\]>/)?(s+=c[i],p=!1):/^<\w/.exec(c[i-1])&&/^<\/\w/.exec(c[i])&&/^<[\w:\-\.\,]+/.exec(c[i-1])==/^<\/[\w:\-\.\,]+/.exec(c[i])[0].replace("/","")?(s+=c[i],p||l--):-1<c[i].search(/<\w/)&&-1==c[i].search(/<\//)&&-1==c[i].search(/\/>/)?s=s+=p?c[i]:n[l++]+c[i]:-1<c[i].search(/<\w/)&&-1<c[i].search(/<\//)?s=s+=p?c[i]:n[l]+c[i]:-1<c[i].search(/<\//)?s=s+=p?c[i]:n[--l]+c[i]:-1<c[i].search(/\/>/)?s=s+=p?c[i]:n[l]+c[i]:-1<c[i].search(/<\?/)?s+=n[l]+c[i]:-1<c[i].search(/xmlns\:/)||-1<c[i].search(/xmlns\=/)?s+=n[l]+c[i]:s+=c[i];return"\n"==s[0]?s.slice(1):s},e.prototype.json=function(e,r){var c=$.JSON,a="\r\n";r=r||this.step;if(e&&"string"==typeof e){var p=e.split(/\r\n|\n/),l=[];for(var s in p)l.push(c.stringify(c.parse(p[s]),null,r));return l.join(a)+a}return e},e.prototype.css=function(e,r){var c=e.replace(/\s{1,}/g," ").replace(/\{/g,"{~::~").replace(/\}/g,"~::~}~::~").replace(/\;/g,";~::~").replace(/\/\*/g,"~::~/*").replace(/\*\//g,"*/~::~").replace(/~::~\s{0,}~::~/g,"~::~").split("~::~"),a=c.length,p=0,l="",s=0,i=r?S(r):this.shift;for(s=0;s<a;s++)/\{/.exec(c[s])?l+=i[p++]+c[s]:/\}/.exec(c[s])?l+=i[--p]+c[s]:(/\*\\/.exec(c[s]),l+=i[p]+c[s]);return l.replace(/^\n{1,}/,"")},e.prototype.sql=function(e,r){var c,a,p,l=e.replace(/\s{1,}/g," ").replace(/\'/gi,"~::~'").split("~::~"),s=l.length,i=[],n=0,g=this.step,t=0,E="",N=0,o=r?S(r):this.shift;for(N=0;N<s;N++)i=N%2?i.concat(l[N]):i.concat((c=l[N],a=g,c.replace(/\s{1,}/g," ").replace(/ AND /gi,"~::~"+a+a+"AND ").replace(/ BETWEEN /gi,"~::~"+a+"BETWEEN ").replace(/ CASE /gi,"~::~"+a+"CASE ").replace(/ ELSE /gi,"~::~"+a+"ELSE ").replace(/ END /gi,"~::~"+a+"END ").replace(/ FROM /gi,"~::~FROM ").replace(/ GROUP\s{1,}BY/gi,"~::~GROUP BY ").replace(/ HAVING /gi,"~::~HAVING ").replace(/ IN /gi," IN ").replace(/ JOIN /gi,"~::~JOIN ").replace(/ CROSS~::~{1,}JOIN /gi,"~::~CROSS JOIN ").replace(/ INNER~::~{1,}JOIN /gi,"~::~INNER JOIN ").replace(/ LEFT~::~{1,}JOIN /gi,"~::~LEFT JOIN ").replace(/ RIGHT~::~{1,}JOIN /gi,"~::~RIGHT JOIN ").replace(/ ON /gi,"~::~"+a+"ON ").replace(/ OR /gi,"~::~"+a+a+"OR ").replace(/ ORDER\s{1,}BY/gi,"~::~ORDER BY ").replace(/ OVER /gi,"~::~"+a+"OVER ").replace(/\(\s{0,}SELECT /gi,"~::~(SELECT ").replace(/\)\s{0,}SELECT /gi,")~::~SELECT ").replace(/ THEN /gi," THEN~::~"+a).replace(/ UNION /gi,"~::~UNION~::~").replace(/ USING /gi,"~::~USING ").replace(/ WHEN /gi,"~::~"+a+"WHEN ").replace(/ WHERE /gi,"~::~WHERE ").replace(/ WITH /gi,"~::~WITH ").replace(/ ALL /gi," ALL ").replace(/ AS /gi," AS ").replace(/ ASC /gi," ASC ").replace(/ DESC /gi," DESC ").replace(/ DISTINCT /gi," DISTINCT ").replace(/ EXISTS /gi," EXISTS ").replace(/ NOT /gi," NOT ").replace(/ NULL /gi," NULL ").replace(/ LIKE /gi," LIKE ").replace(/\s{0,}SELECT /gi,"SELECT ").replace(/\s{0,}UPDATE /gi,"UPDATE ").replace(/ SET /gi," SET ").replace(/~::~{1,}/g,"~::~").split("~::~")));for(s=i.length,N=0;N<s;N++){p=i[N],t=t-(p.replace(/\(/g,"").length-p.replace(/\)/g,"").length),/\s{0,}\s{0,}SELECT\s{0,}/.exec(i[N])&&(i[N]=i[N].replace(/\,/g,",\n"+g+g)),/\s{0,}\s{0,}SET\s{0,}/.exec(i[N])&&(i[N]=i[N].replace(/\,/g,",\n"+g+g)),/\s{0,}\(\s{0,}SELECT\s{0,}/.exec(i[N])?E+=o[++n]+i[N]:/\'/.exec(i[N])?(t<1&&n&&n--,E+=i[N]):(E+=o[n]+i[N],t<1&&n&&n--)}return E=E.replace(/^\n{1,}/,"").replace(/\n{1,}/g,"\n")},e.prototype.xmlmin=function(e,r){return(r?e:e.replace(/\<![ \r\n\t]*(--([^\-]|[\r\n]|-[^\-])*--[ \r\n\t]*)\>/g,"").replace(/[ \r\n\t]{1,}xmlns/g," xmlns")).replace(/>\s{0,}</g,"><")},e.prototype.jsonmin=function(e){return"undefined"==typeof JSON?e:JSON.stringify(JSON.parse(e),null,0)},e.prototype.cssmin=function(e,r){return(r?e:e.replace(/\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*+\//g,"")).replace(/\s{1,}/g," ").replace(/\{\s{1,}/g,"{").replace(/\}\s{1,}/g,"}").replace(/\;\s{1,}/g,";").replace(/\/\*\s{1,}/g,"/*").replace(/\*\/\s{1,}/g,"*/")},e.prototype.sqlmin=function(e){return e.replace(/\s{1,}/g," ").replace(/\s{1,}\(/,"(").replace(/\s{1,}\)/,")")},$.vkbeautify=new e}();

  // menu
  var selected = 2;

  // �I��͈͂�prettify����
  if ( selected ){
    var text = Editor.GetSelectedString( 0 );
    if ( text ) {
      var modified = $.vkbeautify[ METHODS[ 2] ]( text, INDENT_PATTERN );
      if ( modified === text ) {
        Editor.ErrorMsg( "���`�Ɏ��s���܂����B" );
      } else {
        Editor.InsText( modified );
      }
    }
  }
} )();