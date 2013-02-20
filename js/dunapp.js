/**
 * Created with JetBrains WebStorm.
 * User: Duncan Nyakundi
 * Date: 1/22/13
 * Time: 9:47 AM
 * To change this template use File | Settings | File Templates.
 */
 
var db = openDatabase("wvmodelDB", "1.0", "wvmDB", 200000);
 
var hd1 = "CARE GIVER  SURVEY TOOL";
var controller = {
	data : []
};

controller.init = function() {
	var url = "js/indicator.json";
	this.rootView = {
		title : hd1,
		backLabel : "Back",
		view : $("<div id='rootView'><div class='activityIndicator'></div></div>")
	};
	$.ajax({
		url : url,
		dataType : 'json',
		success : function(data, textStatus, jqXHR) {
			controller.rootData = data;
			controller.renderDefaultView();

		},
		error : function(jqXHR, textStatus, errorThrown) {
			alert(textStatus + " :: " + errorThrown)
		}
	});
	return;
};

//Indicator List
controller.renderDefaultView = function() {
	this.rootView.view.children().remove();
	html = "<ul>";

	for(var i = 0; i < controller.rootData.indicator.length; i++) {
		var ind = controller.rootData.indicator[i];
		//			console.log(ind);
		html += "<li id='" + ind.id + "' onclick='controller.renderDetails(\"" + i + "\")'>" + ind.indicator + "</li>";
	}
	html += "</ul>";
	this.rootView.view.html(html);
	setTimeout(function() {
		window.splitViewNavigator.sidebarViewNavigator.refreshScroller();
	}, 10);
};
//render Ind. Details
controller.renderDetails = function(index) {
	var ind = controller.rootData.indicator[index];
	// console.log(index);
	window.splitViewNavigator.hideSidebar();
	window.splitViewNavigator.sidebarViewNavigator.content.find("li").each(function(index) {
		$(this).removeClass("listSelected");
	});
	if(ind == null) {

		alert("End of survey ");
		
	} else {
		$("#" + ind.id).addClass("listSelected");
	}
	//Loop through the indicator JSON object
	var html = "<div id='detail'>";
	html += "<strong><h1 id='code_id'>" + ind.code + "</h1></strong>";
	html += "<p>" + ind.indicator + "</p>";
	html += "<p style='font-style: italic'> " + ind.comments + "</p>";
	html += "<h6 id='type_id' hidden='hidden' >" + ind.type + "</h6>";
	html += "<div id='ph2'>";
	//Get type
	if(ind.type == 1) {
		//radio
		for(var i = 0; i < ind.options.length; i++) {
			html += "<li><input type='radio' id='radio" + i + "' name='radio' /><label for='radio1'>" + ind.options[i].suboption + "</label></li>";
		}

	} else if(ind.type == 2) {
		//Text input
		valid = "";
		for(var i = 0; i < ind.options.length; i++) {
			html += "<li>" + ind.options[i].suboption + "<input type='text' id='val" + i + "'/><div id='valid'" + i + "></div></li>";
			valid += "val" + ind.options[i].subid + ",";
		}

	} else if(ind.type == 3) {
		//date
		html += "<li>" + ind.options[0].suboption + "<input type='date' id='dat0'/></li>";

	}
	html += "</div";
	html += "<li><input type='button' value='Previous'/><input type='button' onclick='saveVal(" + index + ");' value='Next'/></li></div>";
	var viewDescriptor = {
		title : ind.code,
		view : $(html)
	};

	window.splitViewNavigator.replaceBodyView(viewDescriptor);

}
function saveVal(index) {

	var co = document.getElementById('code_id').innerHTML;
	var ty = document.getElementById('type_id').innerHTML;
	//TODO Validate
	if(ty == 1) {
		//Retrieve checked radio button
		var str = "";
		$("#ph2 input:checked").each(function() {//select option:selected
			str += this.id;
		});
		if(str.length == 0) {
			//Alert
			alert("Kindly select an option to proceed for indicator: " + co);

		} else {
			//TODO Save response for type1
			console.log(str);
			controller.renderDetails(index + 1);

		}

	} else if(ty == 2) {
		var val0 = $('#val0').val();
		var val1 = $('#val1').val();
		console.log(val1 + "::" + val2);
		if(val1.length != 0 && val0.length != 0) {
			//TODO Save response for type2

		}
	} else if(ty == 3) {
		var dat = $('#dat0').val();
		if(dat.length == 0) {
			alert("Kindly select date to proceed");
		} else {
			//TODO Save response for type3
			console.log(dat);

			controller.renderDetails(index + 1);
		}
	}

}


$(document).ready(function() {

    //TODO Create login on the defaultView
    //TODO track login user state login& logout
	controller.init();

	var defaultView = {
		title : hd1,
		view : $("<div id='defaultView'><img src='images/wvm.png' height='80px' width='120px'/></div>")
	};

	//Setup the ViewNavigator
	new SplitViewNavigator('body', "Indicators");
	window.splitViewNavigator.pushSidebarView(controller.rootView);
	window.splitViewNavigator.pushBodyView(defaultView);

});
