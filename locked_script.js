(function(_0x548b4d,_0xbfe2b1){const _0x2a966d=_0x2933,_0x4a0538=_0x548b4d();while(!![]){try{const _0x5a7cfd=parseInt(_0x2a966d(0x205))/0x1+parseInt(_0x2a966d(0x20e))/0x2*(-parseInt(_0x2a966d(0x22c))/0x3)+-parseInt(_0x2a966d(0x1fb))/0x4+-parseInt(_0x2a966d(0x21b))/0x5+-parseInt(_0x2a966d(0x1d7))/0x6*(-parseInt(_0x2a966d(0x1fa))/0x7)+-parseInt(_0x2a966d(0x1e4))/0x8+parseInt(_0x2a966d(0x220))/0x9*(parseInt(_0x2a966d(0x247))/0xa);if(_0x5a7cfd===_0xbfe2b1)break;else _0x4a0538['push'](_0x4a0538['shift']());}catch(_0x14d7dc){_0x4a0538['push'](_0x4a0538['shift']());}}}(_0x3a86,0x6a345));async function login(){const _0x588029=_0x2933;let _0x243927=document[_0x588029(0x1b0)](_0x588029(0x1ec))[_0x588029(0x240)],_0x15c2ea=document[_0x588029(0x1b0)](_0x588029(0x1e3))[_0x588029(0x240)];if(!_0x243927||!_0x15c2ea){alert('Please\x20fill\x20missing\x20input');return;}await fetch(_0x588029(0x208),{'method':'POST','headers':{'Accept':_0x588029(0x210),'Content-Type':_0x588029(0x210),'Authorization':_0x588029(0x221)+sessionStorage[_0x588029(0x20c)](_0x588029(0x1e0))},'body':JSON[_0x588029(0x203)]({'username':_0x243927,'password':_0x15c2ea})})[_0x588029(0x1ba)](_0x133a21=>_0x133a21[_0x588029(0x1e5)]())[_0x588029(0x1ba)](_0x5a9643=>{const _0x5cdc71=_0x588029;if(_0x5a9643[_0x5cdc71(0x1c5)]=='OK')alert(_0x5cdc71(0x1da)),sessionStorage[_0x5cdc71(0x1cd)](_0x5cdc71(0x1e0),_0x5a9643[_0x5cdc71(0x1e0)]),sessionStorage[_0x5cdc71(0x1cd)](_0x5cdc71(0x1f7),_0x5a9643['name']),location['replace'](_0x5cdc71(0x244));else{alert(_0x5cdc71(0x1cb));return;}});}async function getActivities(){const _0x32f69=_0x2933;fetch(_0x32f69(0x22a))[_0x32f69(0x1ba)](_0x58ce55=>_0x58ce55[_0x32f69(0x1e5)]())['then'](_0x359c13=>{const _0x1b0962=_0x32f69;let _0x147d5b='';acts=document[_0x1b0962(0x1b0)](_0x1b0962(0x1c8))[_0x1b0962(0x226)];let _0x432a3c=0x1;for(const _0x3c50d3 of _0x359c13){_0x432a3c%0x3==0x1&&(_0x147d5b+='<div\x20class=\x22row\x20mt-4\x22>'),_0x147d5b+='<div\x20class=\x22col-md-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card\x22\x20style=\x22width:\x20100%;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20class=\x22card-img-top\x22\x20src=\x22'+_0x3c50d3[_0x1b0962(0x1ac)]+_0x1b0962(0x234)+_0x3c50d3[_0x1b0962(0x1dc)]+_0x1b0962(0x1b1)+_0x3c50d3[_0x1b0962(0x1c7)]+_0x1b0962(0x1ad),_0x432a3c%0x3==0x0&&(_0x147d5b+=_0x1b0962(0x1f1)),_0x432a3c++;}document[_0x1b0962(0x1b0)](_0x1b0962(0x1c8))['innerHTML']=_0x147d5b;});}editActivities=[];async function editgetActivities(){const _0x4694d8=_0x2933;fetch(_0x4694d8(0x22a))['then'](_0x2fca75=>_0x2fca75[_0x4694d8(0x1e5)]())[_0x4694d8(0x1ba)](_0x49ab75=>{const _0x4a8d49=_0x4694d8;editActivities=_0x49ab75;let _0x33cf5c='';acts=document[_0x4a8d49(0x1b0)](_0x4a8d49(0x1c8))[_0x4a8d49(0x226)];let _0x340823=0x1;for(const _0x3f1f3e of _0x49ab75){_0x340823%0x3==0x1&&(_0x33cf5c+='<div\x20class=\x22row\x20mt-4\x22>'),_0x33cf5c+=_0x4a8d49(0x1d2)+_0x3f1f3e['image_url']+_0x4a8d49(0x234)+_0x3f1f3e[_0x4a8d49(0x1dc)]+_0x4a8d49(0x1b1)+_0x3f1f3e[_0x4a8d49(0x1c7)]+_0x4a8d49(0x222)+_0x3f1f3e[_0x4a8d49(0x24f)]+'\x27)\x22\x20\x20data-bs-toggle=\x22modal\x22\x20data-bs-target=\x22#myModal\x22>EDIT</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22delete_button\x22\x20onclick=\x22deleteActivity(\x27'+_0x3f1f3e[_0x4a8d49(0x24f)]+'\x27)\x22>DELETE</a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div></div>',_0x340823%0x3==0x0&&(_0x33cf5c+=_0x4a8d49(0x1f1)),_0x340823++;}document['getElementById'](_0x4a8d49(0x1c8))[_0x4a8d49(0x226)]=_0x33cf5c;});}async function getObjectives(){const _0x4f0669=_0x2933;fetch('http://18.138.58.216:8080/icons/objectives')['then'](_0x3dca19=>_0x3dca19[_0x4f0669(0x1e5)]())[_0x4f0669(0x1ba)](_0x2a1ea5=>{const _0x4c120b=_0x4f0669;document['getElementById'](_0x4c120b(0x239))[_0x4c120b(0x226)]=_0x2a1ea5[_0x4c120b(0x1c7)];});}async function createActivity(){const _0x518d43=_0x2933;image_url=document[_0x518d43(0x1b0)](_0x518d43(0x1ac))[_0x518d43(0x240)],title=document[_0x518d43(0x1b0)](_0x518d43(0x1dc))[_0x518d43(0x240)],text=document[_0x518d43(0x1b0)](_0x518d43(0x1c7))[_0x518d43(0x240)],page_text=document['getElementById'](_0x518d43(0x23d))['value'],await fetch(_0x518d43(0x22a),{'method':_0x518d43(0x1d0),'headers':{'Accept':_0x518d43(0x210),'Content-Type':'application/json','Authorization':_0x518d43(0x221)+sessionStorage['getItem'](_0x518d43(0x1e0))},'body':JSON['stringify']({'image_url':image_url,'title':title,'text':text,'page_text':page_text})})[_0x518d43(0x1ba)](_0x5c039f=>_0x5c039f[_0x518d43(0x1e5)]())[_0x518d43(0x1ba)](_0x3d0648=>{const _0x514fc0=_0x518d43;_0x3d0648[_0x514fc0(0x1c5)]=='OK'&&(alert(_0x514fc0(0x248)),location[_0x514fc0(0x1d6)]());});}async function deleteActivity(_0x55cf07){const _0x2473e2=_0x2933;await fetch(_0x2473e2(0x1b4)+_0x55cf07,{'method':_0x2473e2(0x228),'headers':{'Accept':_0x2473e2(0x210),'Content-Type':_0x2473e2(0x210)}})[_0x2473e2(0x1ba)](_0x4ef0f8=>_0x4ef0f8[_0x2473e2(0x1e5)]())[_0x2473e2(0x1ba)](_0x64d6c2=>{const _0x3c9064=_0x2473e2;_0x64d6c2[_0x3c9064(0x1c5)]=='OK'&&(alert(_0x3c9064(0x1bb)),editgetActivities());});}let activities_array=[];async function setUserActivities(){const _0x568261=_0x2933;fetch(_0x568261(0x22a))['then'](_0x2b1fb9=>_0x2b1fb9['json']())['then'](_0x24c30e=>{const _0x41653c=_0x568261;let _0x59c14a='',_0x1c1a44='';acts=document[_0x41653c(0x1b0)]('activities')[_0x41653c(0x226)];let _0x2037b3=0x1;activities_array=_0x24c30e;for(const _0x37fad3 of _0x24c30e){_0x2037b3%0x3==0x1&&(_0x59c14a+='<div\x20class=\x22articles\x22>'),_0x59c14a+=_0x41653c(0x1ab)+_0x37fad3[_0x41653c(0x24f)]+'\x27)\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22'+_0x37fad3[_0x41653c(0x1ac)]+'\x22></a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h4\x20class=\x22act-title\x22>'+_0x37fad3['title']+_0x41653c(0x232)+_0x37fad3['text']+'</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>',_0x2037b3%0x3==0x0&&(_0x59c14a+=_0x41653c(0x1f1)),_0x2037b3++;}document[_0x41653c(0x1b0)](_0x41653c(0x1c8))[_0x41653c(0x226)]=_0x59c14a;});}function _0x2933(_0x36999c,_0x496350){const _0x3a86c2=_0x3a86();return _0x2933=function(_0x2933ac,_0x100bfd){_0x2933ac=_0x2933ac-0x1ab;let _0x579be4=_0x3a86c2[_0x2933ac];return _0x579be4;},_0x2933(_0x36999c,_0x496350);}async function getGallery(){const _0x5a6130=_0x2933;fetch(_0x5a6130(0x22a))[_0x5a6130(0x1ba)](_0x3c02ff=>_0x3c02ff[_0x5a6130(0x1e5)]())[_0x5a6130(0x1ba)](_0x1b3eb3=>{const _0x3aa54c=_0x5a6130;let _0x131803=_0x3aa54c(0x23b);acts=document['getElementById'](_0x3aa54c(0x1c8))[_0x3aa54c(0x226)];let _0x47f350=0x1;for(const _0x48aa63 of _0x1b3eb3){_0x131803+=_0x3aa54c(0x224)+_0x48aa63[_0x3aa54c(0x1ac)]+_0x3aa54c(0x234)+_0x48aa63[_0x3aa54c(0x1dc)]+_0x3aa54c(0x1db)+_0x48aa63[_0x3aa54c(0x1c7)]+'</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x20btn-primary\x22>EDIT</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x20btn-danger\x22\x20onclick=\x22deleteActivity(\x27'+_0x48aa63[_0x3aa54c(0x24f)]+_0x3aa54c(0x236),_0x47f350%0x3==0x0&&(_0x131803+=_0x3aa54c(0x246));}document[_0x3aa54c(0x1b0)](_0x3aa54c(0x1c8))[_0x3aa54c(0x226)]=_0x131803;});}async function homeStartup(){const _0x490105=_0x2933;getActivities(),getObjectives(),adminName=sessionStorage[_0x490105(0x20c)](_0x490105(0x1f7)),document[_0x490105(0x1b0)](_0x490105(0x1f7))[_0x490105(0x226)]=adminName,document[_0x490105(0x1b0)](_0x490105(0x1b7))['innerHTML']=adminName['0'];}async function sendEmail(){const _0x4a3261=_0x2933,_0x265f05=document['getElementById'](_0x4a3261(0x225))['value'],_0x29409a=document[_0x4a3261(0x1b0)](_0x4a3261(0x229))[_0x4a3261(0x240)],_0x3b807c=document['getElementById'](_0x4a3261(0x1c5))[_0x4a3261(0x240)];if(!_0x265f05||!_0x29409a||!_0x3b807c){alert(_0x4a3261(0x1bf));return;}const _0x39c6fc={'email':_0x265f05,'subject':_0x29409a,'message':_0x3b807c};await fetch(_0x4a3261(0x241),{'method':'POST','headers':{'Accept':_0x4a3261(0x210),'Content-Type':_0x4a3261(0x210),'Authorization':'Bearer\x20'+sessionStorage['getItem']('token')},'body':JSON[_0x4a3261(0x203)](_0x39c6fc)})[_0x4a3261(0x1ba)](_0x190612=>_0x190612[_0x4a3261(0x1e5)]())[_0x4a3261(0x1ba)](_0x50c6d3=>{const _0x5b5d44=_0x4a3261;_0x50c6d3['message']=='OK'&&(alert(_0x5b5d44(0x24d)),location[_0x5b5d44(0x1d6)]());});}async function setObjectives(){const _0x41a2a9=_0x2933;fetch(_0x41a2a9(0x1fc))[_0x41a2a9(0x1ba)](_0x56108e=>_0x56108e['json']())[_0x41a2a9(0x1ba)](_0x11a655=>{const _0x321f0c=_0x41a2a9;document[_0x321f0c(0x1b0)](_0x321f0c(0x230))['value']=_0x11a655[_0x321f0c(0x1c7)],document[_0x321f0c(0x1b0)](_0x321f0c(0x1ef))[_0x321f0c(0x226)]=_0x11a655[_0x321f0c(0x1c7)];});}async function editObjectives(){const _0x50020d=_0x2933,_0x1e8ab5={'text':document[_0x50020d(0x1b0)]('edit_objectives')[_0x50020d(0x240)]};await fetch(_0x50020d(0x1fc),{'method':_0x50020d(0x219),'headers':{'Accept':_0x50020d(0x210),'Content-Type':_0x50020d(0x210),'Authorization':_0x50020d(0x221)+sessionStorage[_0x50020d(0x20c)]('token')},'body':JSON[_0x50020d(0x203)](_0x1e8ab5)})[_0x50020d(0x1ba)](_0x19c6a7=>_0x19c6a7[_0x50020d(0x1e5)]())[_0x50020d(0x1ba)](_0x4b3574=>{const _0x41022c=_0x50020d;_0x4b3574[_0x41022c(0x1c5)]=='OK'&&(alert(_0x41022c(0x243)),location['reload']());});}async function userGetGallery(){const _0x28252b=_0x2933;fetch(_0x28252b(0x216))[_0x28252b(0x1ba)](_0xc3604f=>_0xc3604f['json']())[_0x28252b(0x1ba)](_0x3469fc=>{const _0x3ece3d=_0x28252b;let _0x264eea='',_0x53023e='',_0x12bf02='',_0x5b4fba=0x1;acts=document[_0x3ece3d(0x1b0)](_0x3ece3d(0x1c8))['innerHTML'];for(const _0x183c89 of _0x3469fc){_0x264eea+=_0x3ece3d(0x204)+_0x5b4fba+'\x22>';const _0x550b9b=_0x5b4fba==0x1?'s1':'';_0x53023e+=_0x3ece3d(0x1ee)+_0x550b9b+'\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22'+_0x183c89[_0x3ece3d(0x1ac)]+_0x3ece3d(0x1f8),_0x12bf02+=_0x3ece3d(0x22b)+_0x5b4fba+_0x3ece3d(0x24a),_0x5b4fba+=0x1;}document[_0x3ece3d(0x1b0)](_0x3ece3d(0x1f4))[_0x3ece3d(0x226)]=_0x264eea+_0x53023e+(_0x3ece3d(0x1c9)+_0x12bf02+_0x3ece3d(0x1bc));});}async function blogsStartup(){setUserActivities(),userGetGallery();}async function adminGalleryStartup(){getPictures();}async function getPictures(){const _0x5d5471=_0x2933;fetch('http://18.138.58.216:8080/icons/gallery')['then'](_0x4212c6=>_0x4212c6[_0x5d5471(0x1e5)]())[_0x5d5471(0x1ba)](_0x5324f5=>{const _0x4818e1=_0x5d5471;let _0x381cd6='',_0xd292a3=0x1;for(const _0x6b8c3b of _0x5324f5){_0x381cd6+=_0x4818e1(0x1b3)+_0xd292a3+_0x4818e1(0x1b6)+_0x6b8c3b[_0x4818e1(0x24f)]+_0x4818e1(0x24e)+_0x6b8c3b[_0x4818e1(0x1ac)]+_0x4818e1(0x22d),_0xd292a3+=0x1;}document[_0x4818e1(0x1b0)](_0x4818e1(0x22e))['innerHTML']=_0x381cd6;});}async function deletePicture(_0x3a412d){const _0x550c89=_0x2933;await fetch(_0x550c89(0x227)+_0x3a412d,{'method':_0x550c89(0x228),'headers':{'Accept':_0x550c89(0x210),'Content-Type':_0x550c89(0x210),'Authorization':_0x550c89(0x221)+sessionStorage['getItem'](_0x550c89(0x1e0))}})[_0x550c89(0x1ba)](_0x454c0a=>_0x454c0a['json']())[_0x550c89(0x1ba)](_0x372616=>{_0x372616['message']=='OK'&&(alert('Picture\x20has\x20been\x20deleted\x20successfully'),getPictures());});}async function addPicture(){const _0x41efcb=_0x2933,_0x491ce8={'image_url':document[_0x41efcb(0x1b0)](_0x41efcb(0x20b))[_0x41efcb(0x240)]};await fetch(_0x41efcb(0x216),{'method':_0x41efcb(0x1d0),'headers':{'Accept':_0x41efcb(0x210),'Content-Type':_0x41efcb(0x210),'Authorization':_0x41efcb(0x221)+sessionStorage[_0x41efcb(0x20c)]('token')},'body':JSON['stringify'](_0x491ce8)})[_0x41efcb(0x1ba)](_0x1ba380=>_0x1ba380[_0x41efcb(0x1e5)]())['then'](_0x5b2cec=>{const _0x3e9397=_0x41efcb;_0x5b2cec[_0x3e9397(0x1c5)]=='OK'&&(alert(_0x3e9397(0x1c4)),location[_0x3e9397(0x1d6)]());});}let global_messages=[];async function getMessages(){const _0x312fbb=_0x2933;await fetch(_0x312fbb(0x241))[_0x312fbb(0x1ba)](_0x49e09b=>_0x49e09b[_0x312fbb(0x1e5)]())[_0x312fbb(0x1ba)](_0x3d674d=>{const _0x6eea49=_0x312fbb;let _0x2d8bf4='',_0x1caa60=0x1,_0xcf0719=_0x3d674d[_0x6eea49(0x206)]();global_messages=_0xcf0719;});}show_unread_only=0x0;async function toggleUnread(){const _0x169790=_0x2933;show_unread_only+=0x1;show_unread_only==0x3&&(show_unread_only=0x0);toggle_button=document[_0x169790(0x1b0)]('toggle_button');if(show_unread_only==0x2)await fetch(_0x169790(0x241))['then'](_0x54f782=>_0x54f782['json']())[_0x169790(0x1ba)](_0x550423=>{const _0x14419c=_0x169790;let _0x10f8c1=_0x550423['reverse']();_0x10f8c1=_0x10f8c1[_0x14419c(0x21d)](_0x173253=>_0x173253[_0x14419c(0x1e7)]==![]),global_messages=_0x10f8c1;}),toggle_button[_0x169790(0x226)]=_0x169790(0x23a);else show_unread_only==0x1?(await fetch(_0x169790(0x241))[_0x169790(0x1ba)](_0x4d2135=>_0x4d2135[_0x169790(0x1e5)]())[_0x169790(0x1ba)](_0x62f5b9=>{const _0x1ab5fa=_0x169790;let _0x151ce1=_0x62f5b9[_0x1ab5fa(0x206)]();global_messages=_0x151ce1;}),toggle_button[_0x169790(0x226)]=_0x169790(0x201)):(await fetch(_0x169790(0x241))['then'](_0x4facf8=>_0x4facf8[_0x169790(0x1e5)]())[_0x169790(0x1ba)](_0x40ffdb=>{const _0x2ba5b4=_0x169790;let _0x46918a=_0x40ffdb[_0x2ba5b4(0x206)]();_0x46918a=_0x46918a['filter'](_0x322f7d=>_0x322f7d[_0x2ba5b4(0x1e7)]==!![]),global_messages=_0x46918a;}),toggle_button['innerHTML']='SHOW\x20ALL\x20MESSAGES');show_unread_only==0x3&&(show_unread_only=0x0),changePage(current_page);}async function getUnreadMessages(){const _0x34fc45=_0x2933;fetch(_0x34fc45(0x241))[_0x34fc45(0x1ba)](_0x488ec6=>_0x488ec6[_0x34fc45(0x1e5)]())[_0x34fc45(0x1ba)](_0x58c072=>{const _0x3d7128=_0x34fc45;let _0x453365='',_0x25bdd2=0x1,_0x112588=_0x58c072[_0x3d7128(0x206)]();_0x112588=_0x112588[_0x3d7128(0x21d)](_0x5ea3b4=>_0x5ea3b4['read']==![]),global_messages=_0x112588;for(const _0x5238dc of _0x112588){_0x453365+=_0x3d7128(0x1f3)+(_0x5238dc[_0x3d7128(0x1e7)]?_0x3d7128(0x1ca):_0x3d7128(0x1ae))+';\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-header\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'+(_0x5238dc[_0x3d7128(0x1e7)]?'':_0x3d7128(0x1ea))+'\x20'+_0x5238dc[_0x3d7128(0x1df)]+'\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h5\x20class=\x22card-title\x22>'+_0x5238dc[_0x3d7128(0x242)]+_0x3d7128(0x233)+_0x5238dc[_0x3d7128(0x225)]+_0x3d7128(0x218)+_0x5238dc[_0x3d7128(0x1c5)]+_0x3d7128(0x1d1)+_0x5238dc[_0x3d7128(0x24f)]+_0x3d7128(0x231)+_0x5238dc[_0x3d7128(0x225)]+_0x3d7128(0x245)+_0x5238dc['subject']+_0x3d7128(0x1cc)+_0x5238dc[_0x3d7128(0x1c5)]+_0x3d7128(0x1eb)+_0x5238dc[_0x3d7128(0x24f)]+_0x3d7128(0x20f)+(_0x5238dc[_0x3d7128(0x1e7)]?_0x3d7128(0x1dd):_0x3d7128(0x23c))+_0x3d7128(0x215)+_0x5238dc[_0x3d7128(0x24f)]+_0x3d7128(0x21c),_0x25bdd2+=0x1;}document['getElementById'](_0x3d7128(0x1b8))['innerHTML']=_0x3d7128(0x200)+_0x453365;});}function viewMessage(_0x364faa){const _0x453c48=_0x2933;let _0x52a1e2=global_messages[_0x453c48(0x21d)](_0x50d802=>_0x50d802[_0x453c48(0x24f)]==_0x364faa)[0x0];document[_0x453c48(0x1b0)](_0x453c48(0x1bd))[_0x453c48(0x226)]=_0x52a1e2[_0x453c48(0x225)],document[_0x453c48(0x1b0)]('message_subject')[_0x453c48(0x226)]=_0x52a1e2[_0x453c48(0x242)],document[_0x453c48(0x1b0)](_0x453c48(0x21e))[_0x453c48(0x226)]=_0x52a1e2[_0x453c48(0x1c5)];}async function getActivityPage(_0x3fd617){const _0x366530=_0x2933;var _0x4386c6=activities_array[_0x366530(0x21d)](function(_0x201af3){const _0x29f2a1=_0x366530;return _0x201af3[_0x29f2a1(0x24f)]==_0x3fd617;})[0x0];sessionStorage[_0x366530(0x1cd)]('page_title',_0x4386c6[_0x366530(0x1dc)]),sessionStorage['setItem'](_0x366530(0x217),_0x4386c6[_0x366530(0x1ac)]),sessionStorage['setItem'](_0x366530(0x23d),_0x4386c6[_0x366530(0x209)]),location['replace'](_0x366530(0x1cf));}async function loadPageDetails(){const _0x58cdad=_0x2933;document[_0x58cdad(0x1b0)]('page_title')[_0x58cdad(0x226)]=sessionStorage[_0x58cdad(0x20c)](_0x58cdad(0x237)),document[_0x58cdad(0x1b0)](_0x58cdad(0x217))['src']=sessionStorage['getItem'](_0x58cdad(0x217)),document['getElementById']('page_text')[_0x58cdad(0x226)]=sessionStorage['getItem']('page_text');}async function updateMessage(_0x1a8a8c,_0x44e408){const _0xe8180c=_0x2933,_0x5ba898={'read':_0x44e408};await fetch(_0xe8180c(0x1c6)+_0x1a8a8c,{'method':_0xe8180c(0x219),'headers':{'Accept':_0xe8180c(0x210),'Content-Type':_0xe8180c(0x210),'Authorization':_0xe8180c(0x221)+sessionStorage['getItem'](_0xe8180c(0x1e0))},'body':JSON[_0xe8180c(0x203)](_0x5ba898)})[_0xe8180c(0x1ba)](_0x4de875=>_0x4de875['json']())['then'](_0x5c2bd5=>{const _0x1fbab3=_0xe8180c;_0x5c2bd5[_0x1fbab3(0x1c5)]=='OK'&&(alert(_0x1fbab3(0x1ed)+(_0x44e408?_0x1fbab3(0x202):_0x1fbab3(0x1d3))),show_unread_only=!show_unread_only,toggleUnread());});}async function deleteMessage(_0x3cffe3){const _0x49ee06=_0x2933;await fetch(_0x49ee06(0x1c6)+_0x3cffe3,{'method':_0x49ee06(0x228),'headers':{'Accept':'application/json','Content-Type':_0x49ee06(0x210),'Authorization':_0x49ee06(0x221)+sessionStorage[_0x49ee06(0x20c)](_0x49ee06(0x1e0))}})[_0x49ee06(0x1ba)](_0x431202=>_0x431202[_0x49ee06(0x1e5)]())[_0x49ee06(0x1ba)](_0x290b53=>{const _0x236be4=_0x49ee06;_0x290b53[_0x236be4(0x1c5)]=='OK'&&(alert(_0x236be4(0x1be)),show_unread_only=!show_unread_only,toggleUnread());});}function setBlogsModal(_0x168424){const _0x86f69f=_0x2933;var _0x3e53f5=editActivities[_0x86f69f(0x21d)](function(_0x1d6a39){const _0x13471e=_0x86f69f;return _0x1d6a39[_0x13471e(0x24f)]==_0x168424;})[0x0];console[_0x86f69f(0x1af)](_0x3e53f5),console['log'](_0x3e53f5['page_text']),document['getElementById'](_0x86f69f(0x1de))[_0x86f69f(0x240)]=_0x3e53f5[_0x86f69f(0x1dc)],document['getElementById'](_0x86f69f(0x223))['value']=_0x3e53f5[_0x86f69f(0x1c7)],document[_0x86f69f(0x1b0)](_0x86f69f(0x1b5))[_0x86f69f(0x240)]=_0x3e53f5[_0x86f69f(0x1ac)],document[_0x86f69f(0x1b0)]('blog_page_content_edit')[_0x86f69f(0x240)]=_0x3e53f5['page_content'],document['getElementById'](_0x86f69f(0x1f0))[_0x86f69f(0x21a)]('onclick','saveNewActivity(\x27'+_0x168424+'\x27)');}async function saveNewActivity(_0x1ae48e){const _0x21089c=_0x2933,_0x2d8cc5={'title':document['getElementById'](_0x21089c(0x1de))[_0x21089c(0x240)],'text':document[_0x21089c(0x1b0)](_0x21089c(0x223))['value'],'image_url':document['getElementById'](_0x21089c(0x1b5))[_0x21089c(0x240)],'page_content':document[_0x21089c(0x1b0)](_0x21089c(0x1e6))[_0x21089c(0x240)]};await fetch(_0x21089c(0x1b4)+_0x1ae48e,{'method':_0x21089c(0x219),'headers':{'Accept':_0x21089c(0x210),'Content-Type':_0x21089c(0x210),'Authorization':'Bearer\x20'+sessionStorage[_0x21089c(0x20c)](_0x21089c(0x1e0))},'body':JSON[_0x21089c(0x203)](_0x2d8cc5)})['then'](_0xadf62c=>_0xadf62c['json']())[_0x21089c(0x1ba)](_0x4764ba=>{const _0x9d224a=_0x21089c;_0x4764ba[_0x9d224a(0x1c5)]=='OK'&&(alert('Succesfully\x20Updated\x20Activity'),location['reload']());}),location[_0x21089c(0x1fd)](_0x21089c(0x1d4));}var current_page=0x1,records_per_page=0xa;function _0x3a86(){const _0x35597d=['true)\x22>Mark\x20as\x20Read</a>','page_text','<h1>There\x20is\x20current\x20no\x20available\x20content\x20for\x20this\x20program.</h1>','\x27>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Reply</a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<a\x20class=\x22read_button\x22\x20onclick=\x22updateMessage(\x27','value','http://18.138.58.216:8080/icons/contact','subject','Updated\x20Succesfully','./home.html','&su=','</div>\x20<div\x20class=\x22row\x22>','8800WmygGO','Successfully\x20Added\x20a\x20New\x20Activity',')</h5>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22card-text\x22>','\x22\x20class=\x22bar\x22></label>','page_total','page','Successfully\x20sent\x20a\x20message.\x20Thank\x20you','\x27)\x22>DELETE</a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</h1>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20class=\x22mx-auto\x20img-fluid\x22\x20style=\x22height:\x20300px;\x20width:600px;\x22\x20src=\x22','_id','<div\x20class=\x22act\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<a\x20onclick=\x22getActivityPage(\x27','image_url','</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div></div>','700','log','getElementById','</h5>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22card-text\x22\x20style=\x22text-align:\x20justify;\x22>','http://18.138.58.216:8080/icons/programs','<div\x20class=\x22item\x20text-center\x20mt-5\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h1>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>Picture\x20','http://18.138.58.216:8080/icons/activities/','blog_url_edit','</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x20btn-danger\x20btn-sm\x20delete_button\x22\x20onclick=\x22deletePicture(\x27','admin_prefix','messages','\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22px-6\x20py-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22font-bold\x20text-xl\x20mb-2\x22>','then','Deleted\x20Successfully','\x20</div>','message_author','Message\x20has\x20been\x20deleted\x20successfully','Please\x20fill\x20in\x20all\x20required\x20fields','h-56',';\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-header\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','ceil','description','Successfully\x20Added\x20a\x20New\x20Picture','message','http://18.138.58.216:8080/icons/contact/','text','activities','\x20<div\x20class=\x22navigation\x22\x20id=\x22navigation\x22>\x20','normal','Invalid\x20Username\x20or\x20Password','&body=RE:\x20','setItem','</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<a\x20class=\x22delete_button\x22\x20onclick=\x22deleteMessage(\x27','./detail-page.html','POST','</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<a\x20class=\x22delete_button\x22\x20onclick=\x22deleteMessage(\x27','<div\x20class=\x22col-md-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card\x22\x20style=\x22width:\x20100%;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20class=\x22card-img-top\x22\x20src=\x22','Unread','./blogs.html','hidden','reload','669006CgmqxK','btn_prev','<div\x20class=\x22max-w-sm\x20rounded\x20overflow-hidden\x20shadow-lg\x20mt-8\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<a\x20onclick=\x22getProgramPage(\x27','Successfully\x20logged\x20in\x20as\x20Admin','</h5>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22card-text\x22>','title','false)\x22>Mark\x20as\x20Unread</a>','blog_title_edit','created','token','program_content','\x22\x20alt=\x22','password','6874592Kkpmcx','json','blog_page_content_edit','read','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>','add','<i\x20class=\x22bi\x20bi-circle-fill\x22\x20style=\x22color:\x20red\x22></i>','\x27>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Reply</a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<a\x20class=\x22read_button\x22\x20onclick=\x22updateMessage(\x27','username','Message\x20has\x20been\x20marked\x20as\x20','<div\x20class=\x22slide\x20','objectives_current','editActivitiesSaveButton','</div>','</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22text-gray-700\x20text-base\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','<div\x20class=\x22card\x20mt-4\x22\x20style=\x22font-weight:\x20','slidesContent','length','\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22px-6\x20py-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22font-bold\x20text-xl\x20mb-2\x22>','admin_name','\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>','<div\x20class=\x22max-w-sm\x20rounded\x20overflow-hidden\x20shadow-lg\x20mt-8\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<a\x20onclick=\x22goToProgramContentPage(\x27','7zybEVI','225452oUazHz','http://18.138.58.216:8080/icons/objectives','replace','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>','programs','<a\x20class=\x22delete_button\x22\x20style=\x22margin:\x200\x20auto;\x22\x20onclick=\x22getMessages()\x22>Show\x20All</a>','SHOW\x20UNREAD\x20MESSAGES','Read','stringify','<input\x20type=\x22radio\x22\x20name=\x22r\x22\x20id=\x22r','104025QgcxdN','reverse','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h5\x20class=\x22card-title\x22>','http://18.138.58.216:8080/icons/admins','page_content','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<a\x20class=\x22view_button\x22\x20onclick=\x22viewMessage(\x27','add_picture','getItem','btn_next','29346lIOjmC','\x27,\x20','application/json','</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22text-gray-700\x20text-base\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','program_id','./programs.html','\x27)\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20class=\x22w-full\x22\x20src=\x22','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<a\x20class=\x22view_button\x22\x20onclick=\x22viewMessage(\x27','http://18.138.58.216:8080/icons/gallery','page_image',')</h5>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22card-text\x22>','PATCH','setAttribute','645210AJectA','\x27)\x22\x20data-bs-toggle=\x22modal\x22\x20data-bs-target=\x22#messageModal\x22>\x20View\x20Full</a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>','filter','message_content','style','14130jBWGTk','Bearer\x20','</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22edit_button\x22\x20onclick=\x22setBlogsModal(\x27','blog_desc_edit','<div\x20class=\x22card\x22\x20style=\x22width:\x2018rem;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20class=\x22card-img-top\x22\x20src=\x22','email','innerHTML','http://18.138.58.216:8080/icons/gallery/','DELETE','name','http://18.138.58.216:8080/icons/activities','<label\x20for=\x22r','24IEQwiF','\x22\x20alt=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>','con','\x27)\x22\x20data-bs-toggle=\x22modal\x22\x20data-bs-target=\x22#messageModal\x22>\x20View\x20Full\x20Message</a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>','edit_objectives','\x27)\x22>Remove</a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<a\x20class=\x22reply_button\x22\x20target=\x22_blank\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20href=\x27https://mail.google.com/mail/?view=cm&fs=1&to=','</h4>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22line2\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22act-desc\x22>','\x20-\x20(','\x22\x20alt=\x22Card\x20image\x20cap\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h5\x20class=\x22card-title\x22>','visibility','\x27)\x22>DELETE</a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>','page_title','visible','objectives_text','SHOW\x20READ\x20MESSAGES','<div\x20class=\x22row\x22>'];_0x3a86=function(){return _0x35597d;};return _0x3a86();}function prevPage(){current_page>0x1&&(current_page--,changePage(current_page));}function nextPage(){current_page<numPages()&&(current_page++,changePage(current_page));}async function changePage(_0x1e2ccf){const _0x338c99=_0x2933;var _0x568ae8=document[_0x338c99(0x1b0)](_0x338c99(0x20d)),_0x2286a9=document[_0x338c99(0x1b0)](_0x338c99(0x1d8)),_0x269603=document[_0x338c99(0x1b0)](_0x338c99(0x1b8)),_0xd89880=document['getElementById'](_0x338c99(0x24c)),_0x54dce0=document[_0x338c99(0x1b0)](_0x338c99(0x24b));if(_0x1e2ccf<0x1)_0x1e2ccf=0x1;if(_0x1e2ccf>numPages())_0x1e2ccf=numPages();_0x269603[_0x338c99(0x226)]='';for(var _0x23c252=(_0x1e2ccf-0x1)*records_per_page;_0x23c252<_0x1e2ccf*records_per_page;_0x23c252++){const _0x27da74=global_messages[_0x23c252];if(!_0x27da74)break;_0x269603[_0x338c99(0x226)]+=_0x338c99(0x1f3)+(_0x27da74[_0x338c99(0x1e7)]?'normal':'700')+_0x338c99(0x1c1)+(_0x27da74[_0x338c99(0x1e7)]?'':_0x338c99(0x1ea))+'\x20'+_0x27da74['created']+_0x338c99(0x207)+_0x27da74['subject']+'\x20-\x20('+_0x27da74['email']+_0x338c99(0x249)+_0x27da74[_0x338c99(0x1c5)]+_0x338c99(0x1ce)+_0x27da74[_0x338c99(0x24f)]+'\x27)\x22>Remove</a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<a\x20class=\x22reply_button\x22\x20target=\x22_blank\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20href=\x27https://mail.google.com/mail/?view=cm&fs=1&to='+_0x27da74[_0x338c99(0x225)]+_0x338c99(0x245)+_0x27da74[_0x338c99(0x242)]+_0x338c99(0x1cc)+_0x27da74['message']+_0x338c99(0x23f)+_0x27da74['_id']+_0x338c99(0x20f)+(_0x27da74[_0x338c99(0x1e7)]?_0x338c99(0x1dd):'true)\x22>Mark\x20as\x20Read</a>')+_0x338c99(0x20a)+_0x27da74[_0x338c99(0x24f)]+_0x338c99(0x22f);}_0xd89880['innerHTML']=_0x1e2ccf,_0x54dce0[_0x338c99(0x226)]=numPages(),_0x1e2ccf==0x1?_0x2286a9[_0x338c99(0x21f)]['visibility']=_0x338c99(0x1d5):_0x2286a9['style'][_0x338c99(0x235)]=_0x338c99(0x238),_0x1e2ccf==numPages()?_0x568ae8[_0x338c99(0x21f)][_0x338c99(0x235)]=_0x338c99(0x1d5):_0x568ae8['style'][_0x338c99(0x235)]=_0x338c99(0x238);}function numPages(){const _0x3ed35d=_0x2933;return Math[_0x3ed35d(0x1c2)](global_messages[_0x3ed35d(0x1f5)]/records_per_page);}programs=[];async function getPrograms(){const _0x4e9d2d=_0x2933;fetch(_0x4e9d2d(0x1b2))['then'](_0x16187e=>_0x16187e[_0x4e9d2d(0x1e5)]())[_0x4e9d2d(0x1ba)](_0x1670b5=>{const _0x3276f7=_0x4e9d2d;programs=_0x1670b5;let _0x4663fe='';for(const _0x5cd04a of _0x1670b5){_0x4663fe+=_0x3276f7(0x1f9)+_0x5cd04a[_0x3276f7(0x24f)]+_0x3276f7(0x214)+_0x5cd04a[_0x3276f7(0x1ac)]+_0x3276f7(0x1e2)+_0x5cd04a[_0x3276f7(0x1dc)]+_0x3276f7(0x1b9)+_0x5cd04a[_0x3276f7(0x1dc)]+_0x3276f7(0x211)+_0x5cd04a['description']+_0x3276f7(0x1fe);}document['getElementById'](_0x3276f7(0x1ff))['innerHTML']=_0x4663fe;});}async function aboutStartup(){await getObjectives(),await getPrograms();}async function getProgramPage(_0x28dc93){const _0x2c3dce=_0x2933;var _0x228618=programs[_0x2c3dce(0x21d)](function(_0x5d19b4){const _0x36c16b=_0x2c3dce;return _0x5d19b4[_0x36c16b(0x24f)]==_0x28dc93;})[0x0];sessionStorage[_0x2c3dce(0x1cd)]('page_title',_0x228618[_0x2c3dce(0x1dc)]),sessionStorage[_0x2c3dce(0x1cd)](_0x2c3dce(0x217),_0x228618[_0x2c3dce(0x1ac)]),sessionStorage[_0x2c3dce(0x1cd)]('page_text',_0x228618[_0x2c3dce(0x209)]),location[_0x2c3dce(0x1fd)](_0x2c3dce(0x1cf));}function goToProgramContentPage(_0x13241b){const _0x39eb7f=_0x2933;sessionStorage['setItem'](_0x39eb7f(0x212),_0x13241b),location[_0x39eb7f(0x1fd)](_0x39eb7f(0x213));}async function getProgramContents(){const _0x20932d=_0x2933;fetch('http://18.138.58.216:8080/icons/programs/'+sessionStorage[_0x20932d(0x20c)](_0x20932d(0x212)))['then'](_0x5114af=>_0x5114af['json']())[_0x20932d(0x1ba)](_0xbc75b0=>{const _0x38079d=_0x20932d;console[_0x38079d(0x1af)](_0xbc75b0),programs=_0xbc75b0;let _0x38405f='';for(const _0x25617c of _0xbc75b0){_0x38405f+=_0x38079d(0x1d9)+_0x25617c[_0x38079d(0x24f)]+'\x27)\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20class=\x22w-full\x22\x20src=\x22'+_0x25617c['image_url']+_0x38079d(0x1e2)+_0x25617c[_0x38079d(0x1dc)]+_0x38079d(0x1f6)+_0x25617c[_0x38079d(0x1dc)]+_0x38079d(0x1f2)+_0x25617c[_0x38079d(0x1c3)]+_0x38079d(0x1e8);}_0xbc75b0[_0x38079d(0x1f5)]==0x0&&(_0x38405f=_0x38079d(0x23e),document['getElementById'](_0x38079d(0x1e1))['classList'][_0x38079d(0x1e9)](_0x38079d(0x1c0))),document['getElementById'](_0x38079d(0x1e1))[_0x38079d(0x226)]=_0x38405f;});}