	
var credentials;
var secretKey;
var accessKey;
var sessionId;
var connect;
var qcList;
var selectedQC;
var selectedId;
var selectedArn;
var agentList;
var cfList;
var hopList;
var phoneList;
var spList, rpList, hgList;
var timerID;
var dlgSourceAccessKey, dlgSourceSecretKey, dlgSourceRegion, dlgInstanceId;
var secKey = "forsecuringc@@kies";

$( document ).ready(function() {
    if (!checkCookie()) {
        setAWSConfig(dlgSourceAccessKey, dlgSourceSecretKey, dlgSourceRegion);
        setupAll();
    } else {
        setupAll();
        $( "#configDialog" ).dialog( "open" );
    }
});

function setupAll() {
    loadConnectAPIs();
    $( "#createTabs" ).tabs();
    $("#strCondSrc").click(() => {        
        stringConditionSearch();
    });
    
        
    $("#btnCreateUser").click(() => {
        createNewUser();
    });
    
    $("#btnTagUser").click(() => {
        tagResourceARN();
    });
    
    $("#btnUnTagUser").click(() => {
        unTagResourceARN();
    });
    
    $("#btnStrCondDlg").click(() => {
        $( "#divStrDialog" ).dialog( "open" );
    });
    
    
    $("#btnSearchUser").click(() => {
        searchUserFromDialog();
    });
    
    $("#btnTagCondDlg").click(() => {
        $( "#divTagDialog" ).dialog( "open" );
    });
    
    $("#btnSearchUserByTags").click(() => {
        searchUserByTags();
    });
    
    $("#awsConfiguration").click(() => {
        $( "#configDialog" ).dialog( "open" );
    });
    
    $("#btnConfiguration").click(() => {
        if (saveCookie()) {
            $( "#configDialog" ).dialog( "close" );
        } else {
            $( "#configDialog" ).dialog( "open" );
        }
    });
       
    $("#dialog").dialog({
        autoOpen: false,
        modal: true
      });
    
    $("#divStrDialog").dialog({
        autoOpen: false,
        width: 700,
        modal: true,
        resizable: false,
        height: "auto"        
        
    });
    
     $("#divTagDialog").dialog({
        autoOpen: false,
        width: 800,
        modal: true,
        resizable: false,
        height: "auto"        
        
    });
    
    $("#resultDialog").dialog({
        autoOpen: false,
        modal: true
    });

    
    $('#configDialog').dialog({
        autoOpen: false,
        width: 850,
        modal: true,
        resizable: false,
        height: "auto"        
    });

    $( "#confirmDialog" ).dialog({
        autoOpen: false,
        resizable: false,
        height: "auto",
        width: 400,
        modal: true,
        buttons: {
          "Yes": function() {
            $( this ).dialog( "close" );
          },
          Cancel: function() {
            $( this ).dialog( "close" );
          }
        }
    });

    qcListTable = $('#qcListTable').DataTable({
        columnDefs: [
            {
                targets: -1,
                className: 'dt-body-right'
            }
          ],        
        columns: [{title: "Name"},{title: "Type"}],
        select: true,
        paging: false,
        info: false,
        searching: false
    });
    
    qcListTable.on( 'select', function ( e, dt, type, indexes ) {
        if ( type === 'row' ) {
            selectedQC = qcListTable.rows( indexes ).data()[0][0];
            $('#selectedQC').val(selectedQC);
            for (var i=0; i< agentList.UserSummaryList.length; i++) {
                if (selectedQC === agentList.UserSummaryList[i].Username) {
                    selectedId = agentList.UserSummaryList[i].Id;
                    selectedArn = agentList.UserSummaryList[i].Arn;
                    getUserInfo();
                    break;
                }
            }
        }
    });
    
    getAllUsers();
        
}

function tagCondition(tagName, tagValue, tagConditionOperator) {
	var sc = {};	
	sc['TagConditionOperator'] = tagConditionOperator;
	sc['TagKey'] = tagName;
	sc['TagValue'] = tagValue;	
	return sc;
}

async function searchUserByTags() {
try {
        handleWindow(true, '');
        var searchResponseType = $( "#sltSRT option:selected" ).text();
        var searchFilter = {};
        searchFilter['TagFilter'] = {};       
        var conditionType = $( "#sltCondition option:selected" ).text();
        var conditions = [];
                
        var tag = {};
        var tagKey = $( "#tagKeys1 option:selected" ).text();
        var tagValue = $( "#tagValues1 option:selected" ).text();
        if(tagValue != "-"  && tagKey != "-") {
			tag = tagCondition(tagKey, tagValue, $( "#tagCond1 option:selected" ).text());
			conditions.push(tag);
		}
        tagKey = $( "#tagKeys2 option:selected" ).text();
        tagValue = $( "#tagValues2 option:selected" ).text();
        if(tagValue != "-"  && tagKey != "-") {
			tag = tagCondition(tagKey, tagValue, $( "#tagCond2 option:selected" ).text());
			tag = {};
			conditions.push(tag);
		}	
        	
        searchFilter['TagFilter'][conditionType] = {};
        if(conditionType === 'OrConditions'){
			searchFilter['TagFilter'][conditionType] = [];
			searchFilter['TagFilter'][conditionType].push(conditions);	
		}        	
        else{
			searchFilter['TagFilter'][conditionType] = conditions;
		}
        	
        
        
        
        var user = await searchUsers(dlgInstanceId, null, 100, searchFilter, null, searchResponseType);
        console.log(user);
        formatJSON(user, '#rpFormatted');                
        handleWindow(false, '');
        $( "#divTagDialog" ).dialog( "close" );
    } catch(e) {
        console.log(e);        
        handleWindow(false, '');
        showResults(e);
    }
	
}

async function searchUserFromDialog() {
	try {
        handleWindow(true, '');
        var searchResponseType = $( "#sltSRT2 option:selected" ).text();
        var searchCriteria = {};        
        //searchCriteria = condition('StringCondition', 'firstname', '', 'ComparisonType', 'STARTS_WITH | CONTAINS | EXACT');
        var conditions = [];
        var firstName = $("#firstName").val();
        var lastName = $("#lastName").val();
        var rps = $( "#sltRPs option:selected" ).val();
        var sps = $( "#sltSPs option:selected" ).val();
        var uhg = $( "#sltUHG option:selected" ).val();
        
        var userName = $("#userName").val();
        var sc1 = {};        
        var cond2 = [];
        
        if(!isBlank(firstName) && !firstName.isEmpty())
        	cond2.push(condition('StringCondition', 'firstname', firstName, 'ComparisonType', 'EXACT'));
        if(!isBlank(lastName) && !lastName.isEmpty())
        	cond2.push(condition('StringCondition', 'lastname', lastName, 'ComparisonType', 'STARTS_WITH'));
        if(!isBlank(userName) && !userName.isEmpty())
        	cond2.push(condition('StringCondition', 'username', userName, 'ComparisonType', 'CONTAINS'));
  	
        sc1['OrConditions'] = cond2;
        if(cond2.length > 0)
        	conditions.push(sc1);
        	
        if(rps != '-')
        	conditions.push(condition('StringCondition', 'routingProfileId', rps, 'ComparisonType', 'EXACT'));
        
        if(sps != '-')
        	conditions.push(condition('StringCondition', 'securityProfileId', sps, 'ComparisonType', 'EXACT'));
        
        if(uhg != '-')
        	conditions.push(condition('HierarchyGroupCondition', null, uhg, 'HierarchyGroupMatchType', 'WITH_CHILD_GROUPS'));
        		
        searchCriteria['AndConditions'] = conditions;
        var user = await searchUsers(dlgInstanceId, null, 100, null, searchCriteria, searchResponseType);
        console.log(user);
        formatJSON(user, '#rpFormatted');     
        $( "#divStrDialog" ).dialog( "close" );           
        handleWindow(false, '');
    } catch(e) {
        console.log(e);        
        handleWindow(false, '');
        showResults(e);
    }
	
}

async function stringConditionSearch() {
	try {
        handleWindow(true, '');
        var searchCriteria = {};        
        //searchCriteria = condition('StringCondition', 'firstname', '', 'ComparisonType', 'STARTS_WITH | CONTAINS | EXACT');
        var conditions = [];
        conditions.push(condition('StringCondition', 'username', selectedQC, 'ComparisonType', 'EXACT'));
        searchCriteria['AndConditions'] = conditions;
        var user = await searchUsers(dlgInstanceId, null, 100, null, searchCriteria);
        console.log(user);
        formatJSON(user, '#rpFormatted');                
        handleWindow(false, '');
    } catch(e) {
        console.log(e);        
        handleWindow(false, '');
        showResults(e);
    }
}

function condition(cond, fieldName, fieldValue, type, typeDetails) {
	var sc = {};
	sc[cond] = {};
	if(fieldName)
		sc[cond]['FieldName'] = fieldName;
	sc[cond]['Value'] = fieldValue;
	sc[cond][type] = typeDetails;
	return sc;
}

async function getUserInfo() {
    try {
        handleWindow(true, '');
        var user = await describeUser(dlgInstanceId, selectedId);
        console.log(user);
        formatJSON(user, '#rpFormatted');                
        handleWindow(false, '');
    } catch(e) {
        console.log(e);        
        handleWindow(false, '');
        showResults(e);
    }
    
}


async function getAllUsers() {
    try {
        handleWindow(true, '');
        agentList = await listUsers(dlgInstanceId);
        console.log(agentList);

        formatJSON(agentList, '#rpFormatted');
        qcListTable.clear();
        for (var i=0; i< agentList.UserSummaryList.length; i++) {
            var value = agentList.UserSummaryList[i];
          	qcListTable.row.add([value.Username, 'User']);
        }
        qcListTable.draw();   
        rpList = await listRoutingProfiles(dlgInstanceId, null, 100);
        console.log(rpList);
        
	    for(var i=0; i < rpList.RoutingProfileSummaryList.length; i++){
	    	var j = rpList.RoutingProfileSummaryList[i];
	 		$('#sltRPs').append('<option selected value="' +  j.Id + '">' + j.Name +'</option>');
	    }
        spList = await listSecurityProfiles(dlgInstanceId, null, 100);
        console.log(spList);
        
	    for(var i=0; i < spList.SecurityProfileSummaryList.length; i++){
	    	var j = spList.SecurityProfileSummaryList[i];
	 		$('#sltSPs').append('<option selected value="' +  j.Id + '">' + j.Name +'</option>');
	    }
        hgList  = await listUserHierarchyGroups(dlgInstanceId, null, 100);
        console.log(hgList);
        
	    for(var i=0; i < hgList.UserHierarchyGroupSummaryList.length; i++){
	    	var j = hgList.UserHierarchyGroupSummaryList[i];
	 		$('#sltUHG').append('<option selected value="' +  j.Id + '">' + j.Name +'</option>');
	    } 
	    $("#sltRPs").val($("#sltRPs option:first").val());
	    $("#sltSPs").val($("#sltSPs option:first").val());
	    $("#sltUHG").val($("#sltUHG option:first").val()); 
        handleWindow(false, '');
    } catch(e) {
        console.log(e);        
        handleWindow(false, '');
        showResults(e);
    }
    
}

async function createNewUser() {
    try {
        handleWindow(true, '');
        var userName = 'mwallace1';
        var password = 'Connect@123';
        var identityInfo = {};
        identityInfo['FirstName'] = 'Mike2';
        identityInfo['LastName'] = 'Mike2';
        identityInfo['Email'] = 'Mike2@mike.com';
        var phoneConfig = {};
        phoneConfig['PhoneType'] ='SOFT_PHONE';
        phoneConfig['AutoAccept'] =true;
        phoneConfig['DeskPhoneNumber'] =null;
        phoneConfig['AfterContactWorkTimeLimit'] =0;
        var directoryUserId = null;
        var securityProfileIds= [];
        securityProfileIds.push('7bc4e607-9f1b-43ca-8bfc-4556f905be74');
        var routingProfileId = '14c4271a-5429-4a91-98be-ec61091cb5f7';
        var hierarchyGroupId ='0af1d36a-09d2-416a-b117-03cc3b4e1b52'
        var tags;
        var tag = {'BPO' : 'USA', 'Sensitive' : 'True'};        
        tags = tag; 	
        var user = await createUser(dlgInstanceId, userName, password, identityInfo, phoneConfig, directoryUserId, securityProfileIds,	routingProfileId, hierarchyGroupId, tags);
        console.log(user);

        formatJSON(user, '#rpFormatted');
        handleWindow(false, '');
    } catch(e) {
        console.log(e);        
        handleWindow(false, '');
        showResults(e);
    }
	
}

async function tagResourceARN() {
	   try {
        handleWindow(true, '');
  
	    var tag = {'Location' : 'USA', 'Sensitive' : 'True'};
	    var arn = selectedArn;
	    var tuser = await tagResource(arn, tag);
        console.log(tuser);

        formatJSON(tuser, '#rpFormatted');
        handleWindow(false, '');
    } catch(e) {
        console.log(e);        
        handleWindow(false, '');
        showResults(e);
    }
	    
}

async function unTagResourceARN() {
	   try {
        handleWindow(true, '');
  
	    var tag = ['BPO','Location', 'Sensitive'];
	    var arn = selectedArn;
	    var tuser = await untagResource(arn, tag);
        console.log(tuser);

        formatJSON(tuser, '#rpFormatted');
        handleWindow(false, '');
    } catch(e) {
        console.log(e);        
        handleWindow(false, '');
        showResults(e);
    }
	    
}
const searchUsers = (instanceId, nextToken, maxResults, searchFilter, searchCriteria, responseType) => {
    return new Promise((resolve,reject) => {
           var params = {InstanceId : instanceId, NextToken : nextToken, MaxResults : maxResults,
           				SearchFilter : searchFilter, SearchCriteria : searchCriteria, ResponseType : responseType};       
           console.log(params);
           connect.searchUsers(params, function (err, res) {        
                if (err) 
                     reject(err);
                 else 
                    resolve(res);
            });
        });
    }


const tagResource = (resourceArn, tags) => {
    return new Promise((resolve,reject) => {
           var params = {resourceArn : resourceArn, tags : tags};       
           console.log(params);
           connect.tagResource(params, function (err, res) {        
                if (err) 
                     reject(err);
                 else 
                    resolve(res);
            });
        });
    }

const untagResource = (resourceArn, tagKeys) => {
    return new Promise((resolve,reject) => {
           var params = {resourceArn : resourceArn, tagKeys : tagKeys};       
           console.log(params);
           connect.untagResource(params, function (err, res) {        
                if (err) 
                     reject(err);
                 else 
                    resolve(res);
            });
        });
    }

const listRoutingProfiles = (instanceId, nextToken, maxResults) => {
    return new Promise((resolve,reject) => {
           var params = {InstanceId : instanceId, NextToken : nextToken, MaxResults : maxResults};       
           console.log(params);
           connect.listRoutingProfiles(params, function (err, res) {        
                if (err) 
                     reject(err);
                 else 
                    resolve(res);
            });
        });
    }
const listSecurityProfiles = (instanceId, nextToken, maxResult) => {
    return new Promise((resolve,reject) => {
           var params = {InstanceId : instanceId, NextToken : nextToken, MaxResults : maxResult};       
           console.log(params);
           connect.listSecurityProfiles(params, function (err, res) {        
                if (err) 
                     reject(err);
                 else 
                    resolve(res);
            });
        });
    }
const listUserHierarchyGroups = (instanceId,  nextToken, maxResult) => {
    return new Promise((resolve,reject) => {
           var params = {InstanceId : instanceId, NextToken : nextToken, MaxResults : maxResult};       
           console.log(params);
           connect.listUserHierarchyGroups(params, function (err, res) {        
                if (err) 
                     reject(err);
                 else 
                    resolve(res);
            });
        });
    }
    
const listUsers = (instanceId) => {
    return new Promise((resolve,reject) => {
           var params = {InstanceId : instanceId};       
           console.log(params);
           connect.listUsers(params, function (err, res) {        
                if (err) 
                     reject(err);
                 else 
                    resolve(res);
            });
        });
    }

const describeUser = (instanceId, userId) => {
    return new Promise((resolve,reject) => {
           var params = {InstanceId : instanceId, UserId : userId};       
           console.log(params);
           connect.describeUser(params, function (err, res) {        
                if (err) 
                     reject(err);
                 else 
                    resolve(res);
            });
        });
    }

const createUser = (instanceId, userName, password, identityInfo, phoneConfig, directoryUserId, securityProfileIds,	routingProfileId, hierarchyGroupId, tags) => {
    return new Promise((resolve,reject) => {
           var params = {InstanceId : instanceId, Username : userName, Password : password, IdentityInfo : identityInfo, 
           PhoneConfig : phoneConfig, DirectoryUserId : directoryUserId, SecurityProfileIds : securityProfileIds,
           RoutingProfileId : routingProfileId, HierarchyGroupId : hierarchyGroupId, Tags : tags};       
           console.log(params);
           connect.createUser(params, function (err, res) {        
                if (err) 
                     reject(err);
                 else 
                    resolve(res);
            });
        });
    }

function showResults(message){
    $('#resultSpan').text(message);
    $("#resultDialog").dialog("open");
}

function loadConnectAPIs() {
	var Service = AWS.Service;
	var apiLoader = AWS.apiLoader;
	apiLoader.services['connect'] = {};
	AWS.Connect = Service.defineService('connect', ['2017-08-08']);
	Object.defineProperty(apiLoader.services['connect'], '2017-08-08', {
	    get: function get() {
	        var model = connectServiceJSON;
	        model.paginators = {};
	        return model;
	    },
	    enumerable: true,
	    configurable: true
	});
	connect = new AWS.Connect({ region: "us-west-2", endpoint: "https://91am9nwnzk.execute-api.us-west-2.amazonaws.com/Prod" }, {apiVersion: '2017-08-08'});
	//connect = new AWS.Connect({ region: "us-west-2", endpoint: "https://1i6i97swl3.execute-api.us-west-2.amazonaws.com/Prod" }, {apiVersion: '2017-08-08'});
	//connect = new AWS.Connect({ region: dlgSourceRegion});
}


function handleWindow(openClose, text) {
    if(openClose == true) {
        $( "#dialog" ).dialog( "open" );
    } else {
        $( "#dialog" ).dialog( "close" );
    }

    if(text.length>1) {
        $('#waitingSpan').text(text);
    } else {
        $('#waitingSpan').text('    Waiting for server to respond');
    }
}

function setAWSConfig(accessKey, secretKey, rgn) {

    AWS.config.update({
        accessKeyId: accessKey, secretAccessKey: secretKey, region: rgn
    });    
    AWS.config.credentials.get(function (err) {
        if (err)
            console.log(err);
        else {
            credentials = AWS.config.credentials;
            getSessionToken();
        }
    });
    
}

function formatJSON(data, element) {
    $(element).html(prettyPrintJson.toHtml(data));
}


function getSessionToken() {
    var sts = new AWS.STS();
    sts.getSessionToken(function (err, data) {
      if (err) console.log("Error getting credentials");
      else {
          secretKey = data.Credentials.SecretAccessKey;
          accessKey = data.Credentials.AccessKeyId;
          sessionId = data.Credentials.SessionToken;
      }
    });
}

function clear_form_elements(ele) {
    $(':input',ele)
      .not(':button, :submit, :reset')
      .val('')
      .prop('checked', false)
      .prop('selected', false);
}

const cipher = salt => {
    const textToChars = text => text.split('').map(c => c.charCodeAt(0));
    const byteHex = n => ("0" + Number(n).toString(16)).substr(-2);
    const applySaltToChar = code => textToChars(salt).reduce((a,b) => a ^ b, code);

    return text => text.split('')
      .map(textToChars)
      .map(applySaltToChar)
      .map(byteHex)
      .join('');
}

const decipher = salt => {
    const textToChars = text => text.split('').map(c => c.charCodeAt(0));
    const applySaltToChar = code => textToChars(salt).reduce((a,b) => a ^ b, code);
    return encoded => encoded.match(/.{1,2}/g)
      .map(hex => parseInt(hex, 16))
      .map(applySaltToChar)
      .map(charCode => String.fromCharCode(charCode))
      .join('');
}

function saveCookie() {
    dlgSourceAccessKey=$("#dlgSourceAccessKey").val();
    dlgSourceSecretKey=$("#dlgSourceSecretKey").val();
    dlgSourceRegion=$("#dlgSourceRegion").val();
    dlgInstanceId = $("#dlgInstanceId").val();
    if(!checkAllMandatoryFields()) {
		const myCipher = cipher(secKey);
				
        setCookie("dlgSourceAccessKey", myCipher(dlgSourceAccessKey),100);
        setCookie("dlgSourceSecretKey", myCipher(dlgSourceSecretKey),100 );
        setCookie("dlgSourceRegion", dlgSourceRegion,100);
        setCookie("dlgInstanceId", dlgInstanceId,100);
        $('#spnAWSMessage').text('');
        setAWSConfig(dlgSourceAccessKey, dlgSourceSecretKey, dlgSourceRegion);
        return true;
    }else{
        $('#spnAWSMessage').text('All fields are mandatory and cannot be whitespaces or null');        
        return false;
    }
}

function getCookie(c_name)
{
    var i,x,y,ARRcookies=document.cookie.split(";");
    for (i=0;i<ARRcookies.length;i++)
    {
      x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
      y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
      x=x.replace(/^\s+|\s+$/g,"");
      if (x===c_name)
        {
          return unescape(y);
        }
     }
}

function setCookie(c_name,value,exdays)
{
    var exdate=new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
    document.cookie=c_name + "=" + c_value;
}

function checkCookie()
{
	const myDecipher = decipher(secKey) 
    dlgSourceAccessKey=myDecipher(getCookie("dlgSourceAccessKey"));
    dlgSourceSecretKey=myDecipher(getCookie("dlgSourceSecretKey"));
    dlgSourceRegion=getCookie("dlgSourceRegion");
    dlgInstanceId=getCookie("dlgInstanceId");
    $('#dlgSourceAccessKey').val(dlgSourceAccessKey);
    $('#dlgSourceSecretKey').val(dlgSourceSecretKey);
    $('#dlgSourceRegion').val(dlgSourceRegion);
    $('#dlgInstanceId').val(dlgInstanceId);
    
    return checkAllMandatoryFields();
}

function checkAllMandatoryFields() {
    if(isBlank(dlgSourceAccessKey) || dlgSourceAccessKey.isEmpty() || 
            isBlank(dlgSourceSecretKey) || dlgSourceSecretKey.isEmpty() || 
            isBlank(dlgSourceRegion) || dlgSourceRegion.isEmpty() ||
            isBlank(dlgInstanceId) || dlgInstanceId.isEmpty()
            ) {
        return true;
    }else
        return false;
}

function isBlank(str) {
    return (!str || /^\s*$/.test(str));
}

String.prototype.isEmpty = function() {
    return (this.length === 0 || !this.trim());
};