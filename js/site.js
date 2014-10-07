function demo1()
{
	MsgPop.closeAll();
	MsgPop.open({
		Type:"success",
		Content:"Your transaction was a success!"
	});
}

function demo2()
{
	MsgPop.closeAll();
	MsgPop.open({
		Type:"message",
		Content:"You have to click the close button",
		AutoClose: false,
		ClickAnyClose:false
	});
}

function demo3()
{	
	MsgPop.closeAll({ClearEvents:true});
	MsgPop.displaySmall = false;

	MsgPop.open({
		Type:"error",
		Content:"Your transaction failed! Here is the big message to prove it!",
		AutoClose:false,
		AfterClose: function(){
			MsgPop.displaySmall = true;
		}
	});
}
function resetDemo()
{
	MsgPop.closeAll();
	$("#liveDemo").html("When the button above is clicked this text will be replaced with HTML from liveDemo.json.");
}
function liveDemo()
{
	$.ajax({
		dataType: "json",
		url: "json/liveDemo.json",
		success: function(data){
			$("#liveDemo").html(data.content);
		}
	});
}
