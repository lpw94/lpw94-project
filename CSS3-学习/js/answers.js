var ans=new Array();
var scores=new Array();
scores[0]=new Array(3,1,2,4);
scores[1]=new Array(2,4,3,1);
scores[2]=new Array(2,1,4,3);
scores[3]=new Array(4,1,3,2);
scores[4]=new Array(4,2,1,3);
scores[5]=new Array(1,4,2,3);

var answers=new Array();
answers[0]=new Array("־��");
answers[1]=new Array("����");
answers[2]=new Array("����");
answers[3]=new Array("��");
answers[4]=new Array("Сӣ");
answers[5]=new Array("����");
answers[6]=new Array("����");
answers[7]=new Array("ľҶ��");

function getQueryString(name) {
   var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)","i");
   var r = window.location.search.substr(1).match(reg);
   if (r!=null) return (r[2]); 
   return null;
}	
var myScores=function(){
	var myScore=0;
	for(var i=0;i<6;i++){
		myScore+=scores[i][ans[i]];
	}
	return myScore;
};
var getMsg=function(myScore){
	var id=1;
	switch(true){
		case myScore<8:
			id=1;
			break;
		case myScore<10:
			id=2;
			break;
		case myScore<13:
			id=3;
			break;
		case myScore<16:
			id=4;
			break;
		case myScore<19:
			id=5;
			break;
		case myScore<21:
			id=6;
			break;
		case myScore<23:
			id=7;
			break;
		default:
			id=8;
			break;
	}
	g("myRole").innerHTML=answers[id-1];
	$("#msg"+id).css("display","block");
}
var currentUrl="http://hyrz.qq.com/cp/a20160324hyfools/p.htm";

//amsSubmit(45796,242605)
amsCfg_242605 = {
	'iAMSActivityId' : '45796', // AMS���
	'activityId' : '141116', // ģ��ʵ����
	"sData":{						
			'appid' : 'wx82dd7436af5db835'
			},
	'onBeginGetGiftEvent' : function(){
		return 0; // �齱ǰ�¼�������0��ʾ�ɹ�
	},
	'onGetGiftFailureEvent' : function(callbackObj){// �齱ʧ���¼�
		if(600==callbackObj.iRet){
			alert(callbackObj.sMsg);
			$("#getBtn").removeClass("").addClass("btn_lq btn off");
			$('#getBtn').attr('href', 'javascript:');
			milo.cookie.set('iGet',1);
		}	
	},
	'onGetGiftSuccessEvent' : function(callbackObj){// �齱�ɹ��¼�
		if(!callbackObj.sPackageName){
			LotteryManager.alert(callbackObj.sMsg);
			return;
		}
		$("#getBtn").removeClass("").addClass("btn_lq btn off");
		$('#getBtn').attr('href', 'javascript:');
		milo.cookie.set('iGet',1);
		popShow('tc_lq');
		return;
	}
};
//amsSubmit(45796,243062);">�������� ��ѯ [
amsCfg_243062 = {
		"iActivityId": 45796, //�id	
		"iFlowId":    243062, //����id
		"sData":{						
			'appid' : 'wx82dd7436af5db835'
			},
		"fFlowSubmitEnd": function(res){
			if(1==res.sOutValue1*1){
				milo.cookie.set('iGet',1);
				$("#getBtn").removeClass("").addClass("btn_lq btn off");
				$('#getBtn').attr('href', 'javascript:');
			}
			return;
		}           
	};
	/*
milo.ready(function(){
	need(["biz.roleselector"],function(RoleSelector){
		var roleobj = cloneClass(RoleSelector);
		roleobj.init({
			'type' : 'html','gameId' : 'hyrz','isQueryRole' : true,
			'area1ContentId' : 'area1ContentId', //���Ϊ2�����������ֵ��������
			'areaContentId' : 'areaContentId',
			'channelContentId' : 'channelContentId', // ����ò�������ɾ��
			'systemContentId' : 'systemContentId',   // ����ò�������ɾ��
			'roleContentId' : 'roleContentId',
			'confirmButtonId' : 'myGiftMainBtnId',
			'submitEvent' : function(roleObj){
				var sData = {
					'appid' : 'wx82dd7436af5db835',
					"sArea": roleObj.submitData.areaid,
					"sPartition": roleObj.submitData.sPartition,
					"sRoleId": roleObj.submitData.roleid,
					"sServiceType" : roleObj.gameId,
					"sRoleName" : roleObj.submitData.rolename,
					"md5str" : roleObj.submitData.md5str,
					"ams_checkparam" : roleObj.submitData.checkparam,
					"checkparam" : roleObj.submitData.checkparam,
					'sPlatId':roleObj.submitData.sPlatId
				};
				//д��cookie
				milo.cookie.set('sArea',roleObj.submitData.areaid);
				milo.cookie.set('sPartition',roleObj.submitData.sPartition);
				milo.cookie.set('sPlatId',roleObj.submitData.sPlatId);
				milo.cookie.set('sRoleId',roleObj.submitData.roleid);
				milo.cookie.set('sServiceType',roleObj.gameId);
				milo.cookie.set('sRoleName',roleObj.submitData.rolename);
				milo.cookie.set('md5str',roleObj.submitData.md5str);
				milo.cookie.set('ams_checkparam',roleObj.submitData.checkparam);
				milo.cookie.set('checkparam',roleObj.submitData.checkparam);
				showDialog.hide();
				amsCfg_242605.sData=sData;
				amsSubmit(45796,242605);
			}
		});
		roleobj.show();
   });
});

//ҳ����Ҫ����
var myCallback = function(){},appid;
*/
/*  |xGv00|11ee49e5f20950371c5a5faa5509b157 */