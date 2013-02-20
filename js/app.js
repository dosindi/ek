/**
 * @author Duncan Nyakundi
 * @version 1.0.0
 */
/*
var CREATE_TABLE_SURVEYS = "CREATE TABLE IF NOT EXISTS surveys (id INTEGER PRIMARY KEY AUTOINCREMENT, first TEXT, last TEXT, email TEXT, date DATE NOT NULL, uploaded BOOLEAN NOT NULL, photo_path TEXT )";
var CREATE_TABLE_QUESTIONS = "CREATE TABLE IF NOT EXISTS questions (id INTEGER PRIMARY KEY AUTOINCREMENT, question_type INTEGER NOT NULL, question TEXT NOT NULL);";
var CREATE_TABLE_ANSWERS = "CREATE TABLE IF NOT EXISTS answers (id INTEGER PRIMARY KEY AUTOINCREMENT, answer TEXT NOT NULL);";
var CREATE_TABLE_QUESTIONS_ANSWERS_REL = "CREATE TABLE IF NOT EXISTS questions_answers_rel (questions_id INTEGER NOT NULL, answers_id INTEGER NOT NULL);";
var CREATE_TABLE_RESPONSES = "CREATE TABLE IF NOT EXISTS responses (id INTEGER PRIMARY KEY AUTOINCREMENT, survey_id INTEGER NOT NULL, questions_id INTEGER NOT NULL, answers_id INTEGER);";

var GET_SURVEYS = "SELECT * FROM surveys ORDER BY id DESC";
var GET_QUESTION = "SELECT * FROM questions WHERE id = =id";
var GET_QUESTIONS = "SELECT * FROM questions";
var GET_ANSWERS_FOR_QUESTION_ID = "SELECT * FROM answers WHERE id IN (SELECT answers_id FROM questions_answers_rel WHERE questions_id = =id)";
var GET_LAST_INSERT_ROWID = "SELECT last_insert_rowid()";
var GET_NUMBER_OF_COMPLETED_SURVEYS = "SELECT COUNT(id) FROM SURVEYS";
var GET_NUMBER_OF_UPLOADED_SURVEYS = "SELECT COUNT(id) FROM SURVEYS WHERE uploaded=1";
var GET_QUESTIONS_AND_RESPONSES_FOR_SURVEY_ID = "SELECT q.question_type,q.question,a.answer FROM questions q, responses r
LEFT OUTER JOIN answers a on r.answers_id = a.id WHERE r.questions_id = q.id AND r.survey_id = =id";
var GET_RESPONSES_FOR_QUESTION = "SELECT a.answer,r.answers_id FROM answers a,responses r WHERE r.answers_id = a.id AND r.questions_id = =id ORDER BY r.answers_id";

var INSERT_INTO_SURVEYS = "INSERT INTO surveys (first, last, email, date, uploaded) VALUES ( first, last, email, date, uploaded )";
var INSERT_INTO_RESPONSES = "INSERT INTO responses (survey_id, questions_id, answers_id) VALUES (?, ?, ?)";
var INSERT_INTO_ANSWERS = "INSERT INTO answers (answer) VALUES (?)";

var UPDATE_SURVEY_PHOTO_PATH = "UPDATE surveys SET photo_path = ? WHERE id = ?";
*/

//SQL QUERIES

//SubOption queries


//Subtitile queries

var CREATE_TABLE_SUBTITLE = "CREATE TABLE IF NOT EXISTS subtitle (id )";

var DROP_SUBTITLE_TABLE = "DROP TABLE subtitle";

var GET_SUBTITLE = "SELECT * subtitle";

var INSERT_INTO_SUBTITLE = "INSERT INTO subtitle () VALUES ()";

//Survey_visit_queries
var CREATE_SURVEY_VISIT_TABLE = "CREATE TABLE IF NOT EXISTS survey_visit (id INTEGER PRIMARY KEY AUTOINCREMENT, enum_id TEXT, sv_code TEXT, coordinates TEXT, adp TEXT, createdon TEXT, fk_module_id TEXT)";

var DROP_SURVEY_VISIT_TABLE="DROP TABLE survey_visit";

var GET_SURVEY_VISIT = "SELECT * FROM survey_visit ORDER BY id DESC";

var GET_SURVEY_VISIT_COUNT = "SELECT COUNT(sv_code) AS CNT FROM survey_visit ";

var GET_SURVEY_VISIT_JOIN = "SELECT a.sv_code,a.createdon, b.module , c.adp FROM survey_visit a, module_tb b, tb_programs c WHERE a.adp = c.id AND  a.fk_module_id = b.m_id";

var GET_1SURVEY_VISIT = "SELECT a.sv_code,a.createdon, b.module , c.adp FROM survey_visit a, module_tb b, tb_programs c WHERE sv_code LIKE ? AND a.adp = c.id AND  a.fk_module_id = b.m_id";

var INSERT_INTO_SURVEY_VISIT = "INSERT INTO survey_visit (enum_id , sv_code, coordinates, adp, createdon, fk_module_id" +
    ") VALUES(?,?,?,?,?,?)";

//Survey queries
var CREATE_SURVEYS_TABLE="CREATE TABLE IF NOT EXISTS surveys(id INTEGER PRIMARY KEY AUTOINCREMENT, o_id TEXT, sv_code TEXT,indicator_id VARCHAR(30),  icode VARCHAR(50), type TEXT, option TEXT, skip VARCHAR(50),response TEXT )";

var DROP_SURVEYS_TABLE = 'DROP TABLE surveys';

var GET_SURVEYS = 'SELECT * FROM surveys ORDER BY id DESC';

var GET_CURRENT_SURVEYS= 'SELECT * FROM surveys WHERE sv_code LIKE ? ORDER BY id ASC';

var UPDATE_SURVEYS= 'UPDATE surveys SET response=? WHERE sv_code=? AND o_id=?';

var INSERT_INTO_SURVEYS = 'INSERT INTO surveys( o_id, sv_code, indicator_id,icode, type, option, skip) VALUES(?,?,?,?,?,?,?)';

//Mainmodel queries
var CREATE_MAINMODEL_TABLE = 'CREATE TABLE IF NOT EXISTS tb_mainmodel (id INTEGER PRIMARY KEY AUTOINCREMENT, i_id TEXT, icode TEXT, indicator TEXT,comments TEXT, type TEXT, o_id TEXT, option TEXT, skip TEXT,suboption TEXT)';

var DROP_MAINMODEL_TABLE = 'DROP TABLE tb_mainmodel';

var GET_INDICATORS = "SELECT * FROM tb_mainmodel";

var GET_DISTINCT_INDICATORS = "SELECT DISTINCT i_id, indicator FROM tb_mainmodel WHERE i_id = ?";

var GET_OPTIONS = "SELECT "

var INSERT_INTO_MAINMODEL ="INSERT INTO tb_mainmodel(i_id, icode, indicator,comments, type, o_id, option, skip, suboption) VALUES (?,?,?,?,?,?,?,?,?)"

//Modules queries
var CREATE_MODULE_TABLE= "CREATE TABLE IF NOT EXISTS module_tb (id INTEGER PRIMARY KEY AUTOINCREMENT," + "m_id TEXT, fk_module_type VARCHAR(10), module VARCHAR(100), createdby TEXT, modulecode TEXT, instructions TEXT)";

var DROP_MODULE_TABLE = "DROP TABLE module_tb ";

var GET_MODULE = "SELECT * FROM module_tb ";

var SELECT_WHERE_MODULE = "SELECT * FROM module_tb WHERE m_id LIKE ?";

var INSERT_INTO_MODULE = "INSERT INTO module_tb (m_id, fk_module_type, module, createdby, modulecode,instructions) VALUES(?,?,?,?,?,?)";

//models queries
var CREATE_MODEL_TABLE = "CREATE TABLE IF NOT EXISTS model(id INTEGER PRIMARY KEY AUTOINCREMENT, targeted_adp TEXT, createdon VARCHAR(50), start_date TEXT, end_date TEXT, created_by TEXT, module_code TEXT)";

var GET_MODEL = 'SELECT * model';

var INSERT_INTO_MODEL = "INSERT INTO model (targeted_adp, created_by,createdon, module_code, start_date, end_date) VALUES(?,?,?,?,?,?)";

var DROP_MODEL_TABLE = "DROP TABLE model";

//Program queries
var CREATE_PROGRAMS_TABLE = "CREATE TABLE IF NOT EXISTS tb_programs ( id INTEGER PRIMARY KEY AUTOINCREMENT, " + "location VARCHAR(100), " + "adp VARCHAR(100), " + "support_office VARCHAR(50), " + "district VARCHAR(50), " + "traditional_authority VARCHAR(100))";

var GET_PROGRAMS = "SELECT * FROM tb_programs";

var SELECT_WHERE_PROGRAMS = "SELECT * FROM tb_programs WHERE id LIKE ?";

var DROP_PROGRAMS_TABLE = 'DROP TABLE tb_programs';

var INSERT_INTO_PROGRAMS = 'INSERT INTO tb_programs (location ,adp ,support_office ,district,traditional_authority) VALUES (?,?,?,?,?)';

//user queries
var CREATE_USERS_TABLE = "CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT, useremail TEXT)";

var GET_USERS = "SELECT * FROM users";

var VALIDATE_USERS= "SELECT * FROM users WHERE username LIKE ? AND useremail LIKE ?";

var INSERT_INTO_USERS = "INSERT INTO users (username, useremail) VALUES (?, ?)";

var UPDATE_USERS_TABLE= "UPDATE users SET username = ?, useremail = ? WHERE id=?";

var DELETE_USERS= "DELETE FROM users WHERE id=?";

var DROP_USERS_TABLE = "DROP TABLE users";


// Open SQLite Database

var dataset;

var DataType;

//var path =  "http://localhost:8085/eka/server/";
//var path ="http://wvimobile.j.layershift.co.uk/";
//var path = "http://kuldun.eu01.aws.af.cm/server/";

var path = "http://ekalo.jelastic.servint.net/";

var url_model = path+ "get_models.php";

var url_module = path+"get_module.php";

var url_users = path+"get_users.php";

var url_mainmodel = path+"get_mainmodel.php";

var url_programs = path+"get_programs.php";

var url_post_surveys = path+"post_surveys.php";

var url_post_survey_visits = path+"post_survey_visits.php";

//headings
var hd1 = "Harmonized Monitoring tool";
var hd2 = "Caregiver survey tool";
var hd3 = "Youth behavior survey tool";
var hd4 = "Functional literacy assessment tool (FLAT)";
var hd5 = "Growth Monitoring Tool";


var db = openDatabase("wvmodelDB", "1.0", "wvmDB", 200000);

//SELECT icode, o_id, option_name, COUNT(response) AS RESP FROM `survey_cg` WHERE response NOT LIKE '%null%' AND sv_code LIKE '%ADP5%' AND icode LIKE 'Z%' GROUP BY o_id ORDER BY o_id ASC;
//SELECT COUNT(*) FROM `survey_cg` WHERE option_name LIKE '%Boy%' AND sv_code LIKE '%ADP5%';

//SELECT icode,o_id,option_name,COUNT(response) AS RESP  FROM `survey_cg` WHERE response NOT LIKE '%null%'  GROUP BY o_id ORDER BY o_id ASC;

function init(){
    document.addEventListener("deviceready", phonegapLoaded, false);
}

function phonegapLoaded(){
    $(function(){
        $.mobile.changePage("content_id",{showLoadMsg:true});
    });
}

function startFunc() {

    //TODO Duplicate Selected mainmodel=>module to surveys

    db.transaction(function(tx){

       tx.executeSql(GET_INDICATORS,[],function(tx, result){

           dataset = result.rows;

           if(dataset.length==0){

               alert("No indicators have been set for this Survey tool");

           }else{

               for(i=0;i<dataset.length;i++){

                   var row = dataset.item(i);

                   //insert into Surveys :: o_id, sv_code, icode, type, option, skip

                   tx.executeSql(INSERT_INTO_SURVEYS,[row['o_id'],sessionStorage.sv_code,row['i_id'],row['icode'],row['type'],row['option'],row['skip']],function(tx, result){

                   }, onError);

               }

               //Select 1st indicator
               db.transaction(function(tx){

                   var x = 1;

                   tx.executeSql("SELECT DISTINCT i_id, icode,indicator, type FROM tb_mainmodel WHERE id = '"+x+"'", [], querySuccess, onError);

               }, onError);

           }

       },onError);

    });



}

function nextFunc(id) {

	var rd = document.getElementById('vad').innerHTML;

    var orr= document.getElementById('opt_rows_returned').innerHTML;

    var ity = document.getElementById('i_type').innerText;

    var i_idn = document.getElementById('i_id').innerText;

	//console.log("Answer:" + ity);

    valid=false;

    //Check return type

    if(ity.trim()==1){

        if(rd.length!=0){

            valid=true;

        }

    }else if (ity.trim()==2){

        for(i=0;i<orr;i++)

        {

            var txt = $('#txt'+i+'').val();

            if(txt.length!=0){

                valid=true;

            }

            console.log("text Input: "+txt);

        }

    }else if(ity.trim()==3){

        for(i=0;i<orr;i++)

        {
            var q = $('#dat'+i+'').val();

            console.log(q);

            if(q.length!=0){

                valid=true;

            }

        }

    }else if (ity.trim()==4){

    }else if(ity.trim()==5){

            if(rd.length!=0){

                valid=true;

            }

    }

	if(valid==false) {

        if(ity==1||ity==5){

            alert("Please Select an option to proceed");

        }else{

            alert("Please Input values to proceed");

        }

	} else {

		//Save data code here
        if(ity.trim()==1){

            str ="";

                $('#ph2 input:checked').each(function(){

                    str = (this).id;

                });

            console.log("Save R=>"+str);

            updateSurvey(str);

        }else if(ity.trim()==2){

            txts = [];

            for(i = 0;i<orr;i++){

                txts[i] = $('#txt'+i+'').val();

                console.log("Save txt=>"+$('#txt'+i+'').val());

            }

            console.log("Save txt object=>"+txts);

            updateSurvey(txts);

        }else if (ity.trim()==3){

            dats =[];

            for(i = 0;i<orr;i++){

                dats[i] = $('#dat'+i+'').val();

                console.log("Save dat=>"+$('#dat'+i+'').val());

            }

            updateSurvey(dats);

        }else if(ity.trim()==4){

        }else if(ity.trim()==5){

            str ="";

            $('#ph2 input:checked').each(function(){

                str = (this).id;

            });

            console.log("Save R2=>"+str);

            updateSurvey(str);

        }

		//reset validation
		document.getElementById('vad').innerHTML = "";

		var value = Number(document.getElementById(id).innerHTML);

		value++;

		console.log("next_val: " + value);

		if(value > 1) {

			$("#previous-btn").hide("slow");

		}

		//Get indicator
		db.transaction(function(tx) {

			tx.executeSql('SELECT DISTINCT i_id,icode, indicator, type FROM tb_mainmodel WHERE i_id ="' + value + '"', [], function querySuccess(tx, results) {

				console.log("Num. INDIC_Rows Returned = " + results.rows.length);

				if(results.rows.length != 0) {

                   var len = results.rows.length;

                    emp = [];

                    var q;

                    for( i = 0; i < len; i++) {

							emp[i] = results.rows.item(i);

                    }

                        //console.log("END:" + emp[0]["indicator"]);
					$('#ph1').html("<blockquote><p><h4 class='help' > "+emp[0]['icode']+"<label id='id' hidden='hidden'>" + value + "</label></h4> " + emp[0]["indicator"] + "</p></blockquote>");

                    sessionStorage.opt_type = emp[0]['type'];

                } else {

					$("#previous-btn").hide("slow");
					$("#next-btn").hide("slow");
					$("#view-report-btn").show("slow");
					$("#ph1").html("");
					$("#ph2").html("");
					$("#valid").html("");

				}

			}, onError);
		}, onError);
		//get options
		var l = "<br/>";
		db.transaction(function(tx) {
			var sql_opt = 'SELECT id, i_id, indicator, type, o_id, option, skip, suboption FROM tb_mainmodel WHERE i_id LIKE ?';
			tx.executeSql(sql_opt, ['%' + value + '%'], function querySuccess(tx, results) {
                //reset option rows returned
                $("#opt_rows_returned").html("");
                $("#i_type").html("");
                $("#i_id").html("");
				console.log("Num. OPT_Rows Returned = " + results.rows.length);
                $("#opt_rows_returned").html(results.rows.length);
				if(results.rows.length != 0) {
					var len = results.rows.length;
					emp = [];
                    opt = [];
					var q;

					for( i = 0; i < len; i++) {
						emp[i] = results.rows.item(i);
						console.log("OPTIONS: " + emp[i]["option"]);
						console.log("TYPE:" + emp[i]["type"]);

                        opt[i] = emp[i]["o_id"];

                        $("#i_type").html(emp[i]["type"]);
                        $("#i_id").html(emp[i]["i_id"]);




						if(emp[i]["type"] == 1) {
							console.log("radio");
                            l = l + "<label for='" + emp[i]["option"] + "'>" + emp[i]["option"] + "</label><br/><input type='radio' name='radio' id='radio" + i + "'  value='" + emp[i]["option"] + "'/><br/>";

                        } else if(emp[i]["type"] == 2) {
							console.log("textinput");
							l = l + "<label for='" + emp[i]["option"] + "'>" + emp[i]["option"] + "</label><br/><input type='text' name='text' id='txt" + i+ "'  value=''/><br/>";

						} else if(emp[i]["type"] == 3) {
							console.log("date");
							l = l + "<label for='" + emp[i]["option"] + "'>" + emp[i]["option"] + "</label><br/><input type='date' name='" + emp[i]["option"] + "' id='dat"+i+"' value='' /><br/>";
						}else if(emp[i]["type"]==4){
                            console.log("txtarea");
                        }else if(emp[i]["type"]==5) {
                            console.log("opt 5==>"+emp[i]["option"]);

                            x1 = i/2;
                            z1 =((x1.toString().length)-1);
                            y1 = x1.toString().charAt(z1-1);
                            if(y1.trim()=="."){
//                                console.log(i+"> My odd numbers: "+x1);
                                l = l + "</br><label for='" + emp[i]["option"] + "'>" + emp[i]["option"] + "</label><br/>" +
                                    "<input type='radio' name='radio' id='radio" + i + "'  value='" + emp[i]["option"] + "'/><br/>";

                            }else{
                                l = l + "<label class='help' for='"+emp[i]["suboption"]+"'>"+emp[i]["suboption"]+"</label></br><label for='" + emp[i]["option"] + "'>" + emp[i]["option"] + "</label><br/>" +
                                    "<input type='radio' name='radio' id='radio" + i + "'  value='" + emp[i]["option"] + "'/><br/>";

                            }
                        }

					}
                    sessionStorage.opts_id = opt;
					console.log(opt+" <= getOptions:" + l);
					$('#ph2').html("<fieldset data-role='controlgroup'>" + l + "</fieldset>");

				}


			}, onError);
		}, onError);
		console.log(l);
	}

}

function previousFunc(id) {

	var value = Number(document.getElementById(id).innerHTML);
	value--;
	console.log("previous_val: " + value);
	if(value < 2) {
		$("#previous-btn").hide("slow");
	}
	$('#ph1').html("<blockquote><p><h4 class='help' > ZBF<label id='id'>" + value + "</label></h4></p></blockquote>");

}

function querySuccess(tx, results) {

	console.log("Rows Affected = " + results.rowAffected);

	console.log("Num. Rows Returned = " + results.rows.length);

    var len = results.rows.length;

	emp = [];


    for( i = 0; i < len; i++) {

			emp[i] = results.rows.item(i);

	}

	$('#ph1').html("<blockquote><p><h4 class='help' > "+emp[0]['icode']+"<label id='id' hidden='hidden'>1</label></h4> " + emp[0]["indicator"] + "</p></blockquote>");

    sessionStorage.opt_type = emp[0]['type'];

    $("#previous-btn").hide("slow");

    $("#next-btn").show("slow");

    $("#view-report-btn").hide("slow");

	//Get OPTIONS When click START
	//get options
	var l = "<br/>";

    var value = 1;

    db.transaction(function(tx) {

			var sql_opt = 'SELECT id, i_id, indicator, type, o_id, option, skip FROM tb_mainmodel WHERE i_id LIKE ?';

        tx.executeSql(sql_opt, ['%' + value + '%'], function querySuccess(tx, results) {


				console.log("Num. OPT_Rows Returned = " + results.rows.length);

            var len = results.rows.length;

            //Set trackers
            document.getElementById('opt_rows_returned').innerHTML= len;


            emp = [];

            opt = [];
            var q;

			for( i = 0; i < len; i++) {
				emp[i] = results.rows.item(i);

                opt[i] = emp[i]["o_id"];
				console.log("OPTIONS: " + emp[i]["option"]);
				console.log("TYPE:" + emp[i]["type"]);

                document.getElementById('i_type').innerText= emp[i]["type"];
                document.getElementById('i_id').innerText =emp[i]["i_id"];

				if(emp[i]["type"] == 1) {
					console.log("radio");
                    l = l + "<label for='" + emp[i]["option"] + "'>" + emp[i]["option"] + "</label><br/><input type='radio' name='radio' id='radio" + i + "'  value='" + emp[i]["option"] + "'/><br/>";

                } else if(emp[i]["type"] == 2) {
					console.log("textinput");
                    l = l + "<label for='" + emp[i]["option"] + "'>" + emp[i]["option"] + "</label><br/><input type='text' name='" + emp[i]["option"] + "' id='txt"+i+ "' value=''/><br/>";

				} else if(emp[i]["type"] == 3) {
					console.log("calendar");
					l = l + "<label for='" + emp[i]["option"] + "'>" + emp[i]["option"] + "</label><br/><input type='date' name='" + emp[i]["option"] + "' id='dat" +i+ "' value=''/><br/>";

				}else if(emp[i]["type"]==4){
                    l = l + "<label for='" + emp[i]["option"] + "'>" + emp[i]["option"] + "</label><br/><input type='textarea' name='" + emp[i]["option"] + "' id='txt"+i+ "' value=''/><br/>";

                }else if(emp[i]["type"]==5){
                    l = l + "<label for='" + emp[i]["option"] + "'>" + emp[i]["option"] + "</label><br/><input type='radio' name='radio' id='radio" + i + "'  value='" + emp[i]["option"] + "'/><br/>";

                }

			}
			console.log(opt+" <= getOptions4Start:" + l);
            sessionStorage.opts_id = opt;
			$('#ph2').html("<fieldset data-role='controlgroup'>" + " <legend>Choose:</legend>" + l + "</fieldset>");

		}, onError);
	}, onError);
	$('#valid').html("<br/><label>0</label>");




	//Retrieve checked radio button
	$("#ph2").change(function() {
		var str = "";
		$("fieldset input:checked").each(function() {//select option:selected
			str += $(this).val() + " ";
		});
		$("#valid").html("Selected Option: <strong id='vad'>" + str + "</strong>");
	}).change();
}

function loadHeader(h) {
	console.log(h);

	if(h == 1) {
		$("#hd1").text();
		document.getElementById('hd1').innerHTML = hd1.toUpperCase();
	} else if(h == 2) {
		document.getElementById('hd1').innerHTML = hd2.toUpperCase();
	} else if(h == 3) {
		document.getElementById('hd1').innerHTML = hd3.toUpperCase();
	} else if(h == 4) {
		$("#hd1").text(hd4.toUpperCase());
		// document.getElementById('hd1').innerHTML = hd4.toUpperCase();
	} else if(h == 5) {

		$("#hd1").html("<h1>" + hd5.toUpperCase() + "</h1>");
	}

}

function initDatabase()// Function Call When Page is ready.

{

	try {

		if(!window.openDatabase)// Check browser is supported SQLite or not.

		{

			alert('Databases are not supported in this browser.');

		} else {

			createTable();
			// If supported then call Function for create table in SQLite

		}

	} catch (e) {

		if(e == 2) {

			// Version number mismatch.

			console.log("Invalid database version.");

		} else {

			console.log("Unknown error " + e + ".");

		}

		return;

	}

}

function createTable() {

	db.transaction(function(tx) {
		tx.executeSql(CREATE_MAINMODEL_TABLE);
        tx.executeSql(CREATE_SURVEY_VISIT_TABLE);
		tx.executeSql(CREATE_PROGRAMS_TABLE);
		tx.executeSql(CREATE_MODULE_TABLE);
        tx.executeSql(CREATE_SURVEYS_TABLE);
        tx.executeSql(CREATE_MODEL_TABLE);
        tx.executeSql(CREATE_USERS_TABLE, [], showRecords, onError);

	});
	//insert dummy data
	showPrograms();
	showSurveytooltype();
    showIndicators();
}

function insertRecord()// Get value from Input and insert record . Function Call when Save/Submit Button Click..

{

	var usernametemp = $('input:text[id=username]').val();
	var useremailtemp = $('input:text[id=useremail]').val();
	console.log(usernametemp + " " + useremailtemp);
	db.transaction(function(tx) {
		tx.executeSql(INSERT_INTO_USERS, [usernametemp, useremailtemp], loadAndReset, onError);
	});
}

function validateCredentials() {

    //Validate login credentials

	$.mobile.showPageLoadingMsg();

	var usern = $('input:text[id=username1]').val();
	var passwd = $('input:text[id=password1]').val();
	if(usern.length == 0 || passwd == 0) {
		$("#requiredFields").html("<p class='requiredFields'>*Username or Password required</p>");
	} else {

		db.transaction(function(tx) {
			tx.executeSql(VALIDATE_USERS, [usern, passwd], function(tx, result) {
				dataset = result.rows;
				if(dataset.length == 0) {
					$('#requiredFields').html("<p class='requiredFields'>Invalid username or password.Try again.</p>");
				} else if(dataset.length == 1) {
					// var usr = usern.toUpperCase;
					$.mobile.changePage("#home-page", {
						transition : "slideup"
					});
					$("#usr").html(usern.toUpperCase());
					$("#usrId").html(dataset.item(0)['id']);

                    sessionStorage.enumID = dataset.item(0)['id'];
                    sessionStorage.enum = usern.toUpperCase();

					resetLoginForm();
				} else if(dataset.length > 1) {
					alert("many records by:" + dataset.length);
				}

			}, onError);
		});
	}
}



function updateSurvey(txt){
    db.transaction(function(tx){

        var opt_ids = sessionStorage.opts_id;

        var opt_type = sessionStorage.opt_type;

        var sv_code = sessionStorage.sv_code;

        ops = opt_ids.split(',');

        if(opt_type=='1'||opt_type=='5'){
            rad = [];
            rad = txt.split('radio');

            tx.executeSql(UPDATE_SURVEYS, ["1", sv_code, ops[rad[1]]],function(tx, result){
                console.log('Radio selected for option : '+ops+" is :"+txt+" Now UPDATE :"+ops[rad[1]]);
            }, onError);


        }else{
            for( i=0;i<ops.length;i++){
                tx.executeSql(UPDATE_SURVEYS, [txt[i],sv_code,ops[i]],function(tx, result){
//                console.log("=>>>"+ops[i]+" updated to "+txt[i]);
                }, onError);
            }
        }


    });
}

function resetLoginForm() {//Reset login variables
	$("#requiredFields").html("");
	$("#username1").val("");
	$("#password1").val("");
}

function deleteRecord(id)// Get id of record . Function Call when Delete Button Click..

{

	var iddelete = id.toString();

	db.transaction(function(tx) {
		tx.executeSql(DELETE_USERS, [id], showRecords, onError);
		alert("Delete Successfully");
	});
	resetForm();

}

function updateRecord()// Get id of record . Function Call when Delete Button Click..

{

	var usernameupdate = $('input:text[id=username]').val().toString();

	var useremailupdate = $('input:text[id=useremail]').val().toString();

	var useridupdate = $("#id").val();

	db.transaction(function(tx) {
		tx.executeSql(UPDATE_USERS_TABLE, [usernameupdate, useremailupdate, Number(useridupdate)], loadAndReset, onError);
	});
}

function dropTable()// Function Call when Drop Button Click.. Table will be dropped from database.

{

	db.transaction(function(tx) {
		tx.executeSql(DROP_USERS_TABLE, [], showRecords, onError);
		tx.executeSql(DROP_MAINMODEL_TABLE, [], null, onError);
		tx.executeSql(DROP_PROGRAMS_TABLE);
        tx.executeSql(DROP_MODULE_TABLE);
        tx.executeSql(DROP_MODEL_TABLE);
        tx.executeSql(DROP_SURVEY_VISIT_TABLE);
        tx.executeSql(DROP_SURVEYS_TABLE);

	});
	resetForm();

	initDatabase();

}

function alterTable() {
	db.transaction(function(tx) {
		tx.executeSql(alterStatement);

	});
	alert("user table altered");
}

function loadRecord(i)// Function for display records which are retrieved from database.

{

	var item = dataset.item(i);
    console.log(i+'>>>>'+item['username']);
	$("#username").val((item['username']).toString());

	$("#useremail").val((item['useremail']).toString());

	$("#id").val((item['id']).toString());

}

function resetForm()// Function for reset form input values.

{

	$("#username").val("");

	$("#useremail").val("");

	$("#id").val("");

}

function loadAndReset()//Function for Load and Reset...

{

	resetForm();

	showRecords()

}

function onError(tx, error)// Function for rendering Error...

{

	alert(error.message);

}

function showRecords()// Function For Retrieving data from Database Display records as list

{

	$("#results").html('')

	db.transaction(function(tx) {

		tx.executeSql(GET_USERS, [], function(tx, result) {
			dataset = result.rows;
			if(dataset.length == 0) {
				//insert dummy data
				tx.executeSql(INSERT_INTO_USERS, ["enum", "enum"], null, onError);
			}
			for(var i = 0, row = null; i < dataset.length; i++) {
				row = dataset.item(i);

				var linkeditdelete = '<li>' + row['username'] + ' , ' + row['useremail'] + ' ' + '<a href="#" onclick="loadRecord(' + i + ');">edit</a>' + ' ' + '<a href="#" onclick="deleteRecord(' + row['id'] + ');">delete</a></li>';

				$("#results").append(linkeditdelete);

			}

		});
	});
}


function showSurveys(h){


    db.transaction(function(tx){

        if(h.length==1){

            //Get total surveys
            tx.executeSql(GET_SURVEY_VISIT_COUNT,[], function(tx, result){
                dataset = result.rows;
                $("#total_surveys").html("Total Surveys Done: "+dataset.item(0)['CNT']);
            },onError);

            tx.executeSql(GET_SURVEY_VISIT_JOIN,[], function(tx, result){
                        dataset = result.rows;
                        if(dataset.length==0){
                            alert("Survey Visits not found");
                        }
                        $('#surveyList').empty();
                        var lister = "";
                        $.each(dataset, function(index){

                            var row = dataset.item(index);
                            lister += "<li><a href='#'><h3 class='ui-li-heading'>"+row['module']+"</h3><p class='ui-li-desc'>"+row['createdon']+"</p><span class='ui-li-count ui-btn-up-c ui-btn-corner-all'>"+row['adp']+"</span></a></li>";


                        });
                console.log("here")
                        $('#surveyList').append(lister);
                        $('#surveyList').listview();

                    });


        }else{

            tx.executeSql(GET_1SURVEY_VISIT,[h], function(tx, result){
                dataset = result.rows;
                if(dataset.length==0){
                    alert("Survey Visits not found");
                }
                $('#surveyList').empty();
                var lister ='';
                $.each(dataset, function(index){
                    var row = dataset.item(index);
                    lister = "<li><a href='#'><h3 class='ui-li-heading'>"+row['module']+"</h3><p class='ui-li-desc'>"+row['createdon']+"</p><span class='ui-li-count ui-btn-up-c ui-btn-corner-all'>"+row['adp']+"</span></a> </li>";

                });
                $('#surveyList').append(lister);
                $('#surveyList').listview();
            });
            $("#sv_table").html('');

            $("#sv_table").html("<table id='deviceinfo'>"+
                "<tr spancol='2'>"+
                "  <th colspan='2' align='center'>Report Summary</th>"+
                "   </tr>");
            tx.executeSql(GET_CURRENT_SURVEYS, [sessionStorage.sv_code], function(tx, result){
                dataset = result.rows;
                if(dataset.length>0){

                    var svlis ='';
                    for(i=0;i<dataset.length;i++){
                        var row = dataset.item(i);
                        //o_id, sv_code, icode, type, option, skip
                        console.log(">>"+row['o_id']+" :: "+row['icode']);
                        if(row['response']!=null){
                            svlis+=( "<tr id='deviceinfo' align='center' style='width: 100%'>"+
                                "  <td>"+(i+1)+"</td>"+
                                "  <td>"+row['icode']+"</td>"+
                                "  <td>"+row['option']+"</td>"+
                                "  <td class='alt'>"+row['response']+"</td>"+
                                "</tr>");

                        }


                    }
                    $("#sv_table").append(svlis+"</table>");
                    $("#sv_table").listview();
                }else{
                    console.log("No data");
                }
            },onError);



        }

    });
}



function showSurveytooltype() {
	db.transaction(function(tx) {
		tx.executeSql(GET_MODULE, [], function(tx, result) {
			dataset = result.rows;
			if(dataset.length == 0) {
                //m_id, fk_module_type, module, createdby, modulecode
                syncData();
//                tx.executeSql(INSERT_INTO_MODULE,['1', '2',' 0 to 5 months Module','1','Z',"NONE"],null,onError);
//                tx.executeSql(INSERT_INTO_MODULE,['2', '2',' 6 to 23 months Module','1','Z',"NONE"],null,onError);
//                tx.executeSql(INSERT_INTO_MODULE,['3', '2',' 24 to 59 months Module','1','Z',"NONE"],null,onError);
//                tx.executeSql(INSERT_INTO_MODULE,['4', '2',' Adult HIV and AIDS Module','1','Z',"NONE"],null,onError);
//                tx.executeSql(INSERT_INTO_MODULE,['5', '2',' Child participation and protection Module','1','Z',"NONE"],null,onError);
//                tx.executeSql(INSERT_INTO_MODULE,['6', '2',' Economic Development Module','1','Z',"NONE"],null,onError);
//                tx.executeSql(INSERT_INTO_MODULE,['7', '2',' Education and Early Childhood Development Module','1','Z',"NONE"],null,onError);
//                tx.executeSql(INSERT_INTO_MODULE,['8', '2',' Food Security Module','1','Z',"NONE"],null,onError);
//                tx.executeSql(INSERT_INTO_MODULE,['9', '2',' Health Demographic Module','1','Z',"NONE"],null,onError);
//                tx.executeSql(INSERT_INTO_MODULE,['10', '2',' WASH Module','1','Z',"NONE"],null,onError);
//                tx.executeSql(INSERT_INTO_MODULE,['11', '2',' Women Module ','1','Z',"NONE"],null,onError);
//
//
//				console.log("inserted cg modules");
			}

			$('#surveytooltypeList').empty();

			$.each(dataset, function(index) {

				var row = dataset.item(index);
				$('#surveytooltypeList').append("<option id=" + row['m_id'] + ">" + row['module'] + "</option>");
				console.log(row['module']);
			});

			$('#surveytooltypeList').listview();
		});
	});
}

function showIndicators(){
    db.transaction(function(tx){
        tx.executeSql(GET_INDICATORS,[],function(tx, result){
            dataset = result.rows;
            if(dataset.length==0){
//                tx.executeSql(INSERT_INTO_MAINMODEL,["1","ZBI01","Is the child a boy or a girl? ","NONE","1","1","Girl","0","0"],null,onError);
//                tx.executeSql(INSERT_INTO_MAINMODEL,["1","ZBI01","Is the child a boy or a girl? ","NONE","1","2","Boy","0","0"],null,onError);
//                tx.executeSql(INSERT_INTO_MAINMODEL,["2","ZBI02","What is (NAME\'s) date of birth? ","NONE","3","3","Date","0","0"],null,onError);
//                tx.executeSql(INSERT_INTO_MAINMODEL,["2","ZBI02","What is (NAME\'s) date of birth? ","NONE","3","4","Date","0","0"],null,onError);
//                tx.executeSql(INSERT_INTO_MAINMODEL,["3","ZBF01","Has (NAME) ever been breastfed? ","NONE","1","5","Yes","0","0"],null,onError);
//                tx.executeSql(INSERT_INTO_MAINMODEL,["3","ZBF01","Has (NAME) ever been breastfed? ","NONE","1","6","No","0","0"],null,onError);
//                tx.executeSql(INSERT_INTO_MAINMODEL,["3","ZBF01","Has (NAME) ever been breastfed? ","NONE","1","7","Dont Know/No Response ","0","0"],null,onError);


                syncData();
            }
        });
    });
}

function getdistinctindicators(x){
    db.transaction(function(tx){
        tx.execute(GET_DISTINCT_INDICATORS,[x], function(tx, result){
            dataset = result.rows;
            console.log("distinct indic: =>"+dataset.length);
        });
    });
}
function showPrograms() {
	db.transaction(function(tx) {
		tx.executeSql(GET_PROGRAMS, [], function(tx, result) {
			dataset = result.rows;
			if(dataset.length == 0) {
				//alert("inserting ADPS");

//				tx.executeSql("INSERT INTO tb_programs (id, location, adp, support_office, district, traditional_authority) VALUES (1, 'Centre', 'Chisepo', 'AUSTRALIA', 'Dowa', 'Kayembe')");
//				tx.executeSql("INSERT INTO tb_programs (id, location, adp, support_office, district, traditional_authority) VALUES (2, 'Centre', 'Chinguluwe', 'TAIWAN', 'Salima', 'Kalonga')");
//				tx.executeSql("INSERT INTO tb_programs (id, location, adp, support_office, district, traditional_authority) VALUES (3, 'Centre', 'Mlonyeni', 'CANADA', 'Mchinji', 'Mlonyeni')");
//				tx.executeSql("INSERT INTO tb_programs (id, location, adp, support_office, district, traditional_authority) VALUES (4, 'Centre', 'Bua', 'KOREA', 'Mchinji', 'Mavwere')");
//				tx.executeSql("INSERT INTO tb_programs (id, location, adp, support_office, district, traditional_authority) VALUES (5, 'Centre', 'Likasi', 'TAIWAN', 'Mchinji', 'Mavwere')");
//				tx.executeSql("INSERT INTO tb_programs (id, location, adp, support_office, district, traditional_authority) VALUES (6, 'Centre', 'kafulu', 'AUSTRALIA', 'Dowa', 'Kayembe')");
//				tx.executeSql("INSERT INTO tb_programs (id, location, adp, support_office, district, traditional_authority) VALUES (7, 'Centre', 'lipiri', 'NEW ZEALAND', 'Dowa', 'Kayembe')");
//				tx.executeSql("INSERT INTO tb_programs (id, location, adp, support_office, district, traditional_authority) VALUES (8, 'Centre', 'kasangadzi', 'KOREA', 'Dowa', 'Chakhaza')");
//				tx.executeSql("INSERT INTO tb_programs (id, location, adp, support_office, district, traditional_authority) VALUES (9, 'Centre', 'nkhoma', 'USA', 'Lilongwe', 'Mazengera & Chitekwele')");
//				tx.executeSql("INSERT INTO tb_programs (id, location, adp, support_office, district, traditional_authority) VALUES (10, 'Centre', 'chilenje', 'USA', 'Lilongwe', 'Mazengera')");
//				tx.executeSql("INSERT INTO tb_programs (id, location, adp, support_office, district, traditional_authority) VALUES (11, 'Centre', 'chigodi', 'NEW ZEALAND', 'Lilongwe', 'Mazengera')");
//				tx.executeSql("INSERT INTO tb_programs (id, location, adp, support_office, district, traditional_authority) VALUES (12, 'Centre', 'ngodzi', 'AUSTRALIA', 'Dedza & Salima', 'Kachindamoto & Kambalame')");
//				tx.executeSql("INSERT INTO tb_programs (id, location, adp, support_office, district, traditional_authority) VALUES (13, 'Centre', 'tchesa', 'KOREA', 'Dedza', 'Tambala')");
//				tx.executeSql("INSERT INTO tb_programs (id, location, adp, support_office, district, traditional_authority) VALUES (14, 'Centre', 'chitundu', 'AUSTRALIA', 'Dedza', 'Tambala')");
//				tx.executeSql("INSERT INTO tb_programs (id, location, adp, support_office, district, traditional_authority) VALUES (15, 'Centre', 'nthondo', 'USA', 'Ntchisi', 'Nthondo')");
//				tx.executeSql("INSERT INTO tb_programs (id, location, adp, support_office, district, traditional_authority) VALUES (16, 'Centre', 'mpherere', 'KOREA', 'Ntchisi', 'Kalumo')");
//				tx.executeSql("INSERT INTO tb_programs (id, location, adp, support_office, district, traditional_authority) VALUES (17, 'Centre', 'kalira', 'JAPAN', 'Ntchisi', 'Chikho and Vuso Jere')");
//				tx.executeSql("INSERT INTO tb_programs (id, location, adp, support_office, district, traditional_authority) VALUES (18, 'Centre', 'chinganda', 'USA', 'Salima', 'Makanjira')");
//				tx.executeSql("INSERT INTO tb_programs (id, location, adp, support_office, district, traditional_authority) VALUES (19, 'North', 'Muchenda', 'USA', 'Kasungu', 'Chulu')");
//				tx.executeSql("INSERT INTO tb_programs (id, location, adp, support_office, district, traditional_authority) VALUES (20, 'North', 'Mdunga Kasiya', 'CANADA', '', 'Phased')");
//				tx.executeSql("INSERT INTO tb_programs (id, location, adp, support_office, district, traditional_authority) VALUES (21, 'North', 'Katimbira', 'TAIWAN', 'Nkhota-kota', 'STA Kanyenda')");
//				tx.executeSql("INSERT INTO tb_programs (id, location, adp, support_office, district, traditional_authority) VALUES (22, 'North', 'Kayezi', 'UK', 'Mzimba', 'Mpherembe')");
//				tx.executeSql("INSERT INTO tb_programs (id, location, adp, support_office, district, traditional_authority) VALUES (23, 'North', 'Khuyu', 'JAPAN', 'Mzimba', 'Chindi')");
//				tx.executeSql("INSERT INTO tb_programs (id, location, adp, support_office, district, traditional_authority) VALUES (24, 'North', 'Mutendere', 'USA', 'Mzimba', 'mbelwa')");
//				tx.executeSql("INSERT INTO tb_programs (id, location, adp, support_office, district, traditional_authority) VALUES (25, 'North', 'Namatubi', 'CANADA', 'Chitipa', 'Phased')");
//				tx.executeSql("INSERT INTO tb_programs (id, location, adp, support_office, district, traditional_authority) VALUES (26, 'North', 'Mphompha', 'CANADA', 'Rumphi &  Mzimba', 'Mwankhunikila & Jalavikuwa')");
//				tx.executeSql("INSERT INTO tb_programs (id, location, adp, support_office, district, traditional_authority) VALUES (27, 'North', 'Wovwe', 'CANADA', 'Karonga', 'Wasambo & Mwirangombe')");
//				tx.executeSql("INSERT INTO tb_programs (id, location, adp, support_office, district, traditional_authority) VALUES (28, 'North', 'Sanga', 'KOREA', 'Nkhata-Bay', 'Mankhambira')");
//				tx.executeSql("INSERT INTO tb_programs (id, location, adp, support_office, district, traditional_authority) VALUES (29, 'North', 'Chikwina Mpamba', 'USA', 'Nkhata-Bay', 'Timbiri & STA Mnyaluwanga')");
//				tx.executeSql("INSERT INTO tb_programs (id, location, adp, support_office, district, traditional_authority) VALUES (30, 'South', 'Kunyinda', 'GERMANY', 'Chikwawa', 'Ngabu')");
//				tx.executeSql("INSERT INTO tb_programs (id, location, adp, support_office, district, traditional_authority) VALUES (31, 'South', 'Mphuka', 'GERMANY', 'Thyolo', 'Mphuka')");
//				tx.executeSql("INSERT INTO tb_programs (id, location, adp, support_office, district, traditional_authority) VALUES (32, 'South', 'Njema', 'HONG KONG', 'mulanje', 'njema')");
//				tx.executeSql("INSERT INTO tb_programs (id, location, adp, support_office, district, traditional_authority) VALUES (33, 'South', 'Kamwendo', 'GERMANY', 'mulanje', 'Nkanda')");
//				tx.executeSql("INSERT INTO tb_programs (id, location, adp, support_office, district, traditional_authority) VALUES (34, 'South', 'Mkhumba', 'GERMANY', 'mulanje', 'nkhumba')");
//				tx.executeSql("INSERT INTO tb_programs (id, location, adp, support_office, district, traditional_authority) VALUES (35, 'South', 'Mpama', 'CANADA', 'Chiradzuru', 'Mpama')");
//				tx.executeSql("INSERT INTO tb_programs (id, location, adp, support_office, district, traditional_authority) VALUES (36, 'South', 'Mikolongwe', 'NEW ZEALAND', 'Chiradzuru', 'Kadewere')");
//				tx.executeSql("INSERT INTO tb_programs (id, location, adp, support_office, district, traditional_authority) VALUES (37, 'South', 'Onga', 'NEW ZEALAND', 'Chiradzuru', 'STA Onga')");
//				tx.executeSql("INSERT INTO tb_programs (id, location, adp, support_office, district, traditional_authority) VALUES (38, 'South', 'Mpanda', 'GERMANY', 'blantyre', 'chigalu')");
//				tx.executeSql("INSERT INTO tb_programs (id, location, adp, support_office, district, traditional_authority) VALUES (39, 'South', 'Chingale', 'USA', 'Zomba', 'mulumbe')");
//				tx.executeSql("INSERT INTO tb_programs (id, location, adp, support_office, district, traditional_authority) VALUES (40, 'South', 'Namachete', 'UK', 'Zomba', 'Mwambo')");
//				tx.executeSql("INSERT INTO tb_programs (id, location, adp, support_office, district, traditional_authority) VALUES (41, 'South', 'Matope', 'HONG KONG', 'Neno', 'Saimoni')");
//				tx.executeSql("INSERT INTO tb_programs (id, location, adp, support_office, district, traditional_authority) VALUES (42, 'South', 'Midzemba', 'HONG KONG', 'Neno', 'Saimoni')");
//				tx.executeSql("INSERT INTO tb_programs (id, location, adp, support_office, district, traditional_authority) VALUES (43, 'South', 'Senzani', 'USA', 'Ntcheu/Balaka', 'STA Tsikulamowa')");
//				tx.executeSql("INSERT INTO tb_programs (id, location, adp, support_office, district, traditional_authority) VALUES (44, 'South', 'Nkaya', 'AUSTRALIA', 'Ntcheu/Balaka', 'STA nkaya')");
//				tx.executeSql("INSERT INTO tb_programs (id, location, adp, support_office, district, traditional_authority) VALUES (45, 'South', 'Nayuchi', 'AUSTRALIA', 'Machinga', 'kawinga/chikwewo')");
//				tx.executeSql("INSERT INTO tb_programs (id, location, adp, support_office, district, traditional_authority) VALUES (46, 'South', 'Mposa', 'CANADA', 'Machinga', 'mposa')");
//				tx.executeSql("INSERT INTO tb_programs (id, location, adp, support_office, district, traditional_authority) VALUES (47, 'South', 'Chamba Mulomba', 'CANADA', 'Machinga', 'Chamba')");

                syncData();
			}

			$('#adpList').empty();

			$.each(dataset, function(index) {

				var row = dataset.item(index);
				// console.log(row['adp']);
				$('#adpList').append("<option id=" + row['id'] + " value="+row['traditional_authority']+'::'+row['district']+">" + row['adp'] + "</option>");

			});

			$('#adpList').listview();

		});
	});
}

function cgSplitPage() {

    //create unique log
    var d = new Date();

    var enum_id = sessionStorage.enumID;

    if(enum_id!=undefined){

    //TODO retrieve coordinates and validate
    var hapa = "0.000000000,0.0000000";

    var adpID = document.getElementById('adpID').innerText;

    var modID = document.getElementById('modID').innerText;

    var sv_code = enum_id+"ADP"+adpID+"#"+Date.parse(d);

    sessionStorage.sv_code = sv_code;

  //  console.log(d.format("yyyy-mm-dd HH:MM:ss")+" Parsed: ADP" +enum_id+"#"+ Date.parse(d));

    if(enum_id==undefined){
        alert("Session has expired , Kindly Login");
        $.mobile.changePage("#login-page",{showLoadMsg:true});
    }
    if(hapa.length==0||modID.length==0||adpID==0){
     alert("*Module or ADP required");
    }else{
//        inserts to survey_visit table
        db.transaction(function(tx){
            var dat = d.format("yyyy-mm-dd HH:MM:ss");
            tx.executeSql(INSERT_INTO_SURVEY_VISIT,[enum_id, sv_code,hapa,adpID,dat,modID],function(tx,result){
                //enum_id , sv_code, coordinates, adp, createdon, fk_module_id

                $.mobile.changePage("#survey1a-page", {showLoadMsg:true}); //survey-page-cg
                //Set Header
                $("#hd_sv").text(hd2.toUpperCase());

                //TODO Select the first indicator

                startFunc();
                //TODO populate the options
            },onError);
        });

    }

    }else{
        alert ("Session has expired, Kindly login");
        $.mobile.changePage("#login-page",{showLoadMsg:true})
    }

}

function cgForm() {

    sessionStorage.moduleSelected = event.target.id;

	$.mobile.changePage("#survey2-page", {
		showLoadMsg : true
	});

    //Set person compiling report
    $("#person_id").text(sessionStorage.enum);
	showPrograms();
	showSurveytooltype();
}

function notsetForm(event) {

	var h = "";
	if(event.target.id=='hm'){
        h = hd1;
    }else if(event.target.id == "yb") {
		h = hd3;
	} else if(event.target.id == "gm") {
		h = hd5;
	} else if(event.target.id == "fl") {
		h = hd4;
	}

	var newPage = $('<div id="page0" data-role="page">' + '	<div data-role="header" data-theme="b">' + '		<h1 id="hd1">' + h.toUpperCase() + '</h1>' + '		<a href="#home-page" data-role="button" data-icon="home" id="add-button" class="ui-btn-right">Home</a>' + '	</div>' + '	<div data-role="content" class="api-div">' + '		<blockquote>' + '			<h2>Instructions</h2>' + '		</blockquote>' + '		<h4 class="help" ><strong>Sorry</strong> No modules have been set, Kindly contact your DME to set the module or go to the <a href="#home-page" data-role="button" data-icon="home" id="add-button">Home screen</a> and select a survery tool that has modules already set</h4>' + '	</div>' + '	<div data-role="footer" data-theme="b">' + '		<h4>Copyright &copy; SecureNET Technologies (k) Ltd</h4>' + '	</div>' + '</div>');

	//append it to the page container
	newPage.appendTo($.mobile.pageContainer);

	//go to it
	$.mobile.changePage(newPage);
}

$("#adpList").change(function() {
    var str = "";
    var str_id = "";

    str = document.getElementById('adpList').options;
    str_id = document.getElementById('adpList').selectedIndex;

    $("#adpID").text(str[str_id].index+1);
    $("#TA").text(str[str_id].value);
});

$("#surveytooltypeList").change(function(){
    var mod = "";
    var mod_id = "";

    mod = document.getElementById('surveytooltypeList').options;
    mod_id = document.getElementById('surveytooltypeList').selectedIndex;

    $("#modID").text(mod[mod_id].index+1);
    $("#mod").text(mod[mod_id].value);

});
function getSurveys(){

    $.mobile.changePage('#page8', {showLoadMsg:true});

    showSurveys("T");
    $("#sv_table").remove();
}
function postSurvey_visits(){

    var svv = '';

    db.transaction(function(tx){

        tx.executeSql(GET_SURVEY_VISIT,[],function(tx,result){

            dataset = result.rows;

            if(dataset.length>0){

                for(i=0;i<dataset.length;i++){

                    var row = dataset.item(i);

                    svv += ("QQQ"+row['enum_id']+":::"+row['sv_code']+":::"+row['coordinates']+":::"+row['adp']+":::"+row['createdon']+":::"+row['fk_module_id']);

                }

                sessionStorage.svv_upload = svv;

                if(svv.length>0){

                    uploadsurveyvisitData({svv : svv+" "});

                }else{

                    console.log("No survey visit to post");

                }
            }
        }, onError);
    });
    return {svv : sessionStorage.svv_upload+" "};
}
function postSurvey (){

    var sv = '';

    //retrieve survey data in array
    db.transaction(function(tx){

        tx.executeSql(GET_SURVEYS,[],function(tx,result){

            dataset = result.rows;

            if(dataset.length>0){

                for(i=0;i<dataset.length;i++){

                    var row = dataset.item(i);

                    if(row['response']!=null){

                    sv+=("QQQ"+row['o_id']+":::"+row['sv_code']+":::"+row['indicator_id']+":::"+row['response']);

                    }
                }

                console.log(sv);


                if(sv.length>0){

                    uploadsurveyData({icode:sv+" "});

                }else{
                    console.log("No survey to post");
                }


            }else{
//                alert("Already synchronised,click close to proceed ");
                //Reset progress
                $('#progress_id').html("<label class='progress'>Already synchronised,click close to proceed</label>");
                $('#msg').html('');
            }


        },onError);

    });

    return;
 }


function uploadsurveyData(index){
    //survey data
    $.ajax({
        url:url_post_surveys,
        type:'POST',
        dataType:'json',
        data:index,
        success:function(data, textStatus, jqXHR){
           // if(data.error==0){
           //     alert("Error : "+data.message);
            //}else{
//                   alert("Successfully uploaded: \n "+data.message);
                if(data.success==1){
                    db.transaction(function(tx){
                        tx.executeSql(DROP_SURVEYS_TABLE);
                        tx.executeSql(CREATE_SURVEYS_TABLE);
                        //Reset progress
                        $('#progress_id').html("<label class='progress'>Updated successfully,<br/> click close to proceed</label>");
                        $('#msg').html('');

                    });

                }else{
                    alert("Server Error s: "+data.message);
                }
            //}


        },
        error:function(jqXHR,textStatus, errorThrown){
            alert(textStatus+" :: s "+errorThrown);
        }
    });
}


function uploadsurveyvisitData(index){
    //TODO upload application data
    //survey visit data
    $.ajax({
        url:url_post_survey_visits,
        type:'POST',
        dataType:'json',
        data:index,
        success:function(data, textStatus, jqXHR){

            if(data.error==0){
                alert("Error: "+data.message);
            }else{
//                alert("Successfully uploaded svv: \n"+data.message);
                if(data.success==1){
                    db.transaction(function(tx){
                        tx.executeSql(DROP_SURVEY_VISIT_TABLE);
                        tx.executeSql(CREATE_SURVEY_VISIT_TABLE);

                        sessionStorage.svv_upload ='';
                    });

                }
            }
            fin = true;
        },
        error:function(textStatus, jqXHR, errorThrown){
            alert("Upload failed, try later ::svv "+textStatus+" :: "+errorThrown);
        }
    });
}
function syncData(){

    postSurvey ();
    postSurvey_visits();

   var fin = false;

   if(fin==false){

    //Show Progress

    //$('#progress_id').html("<div class='activityIndicator'></div>");

    $('#progress_id').html("<label class='progress'>Uploading</label>");

    //TODO Synchronize data

    $.mobile.changePage("#home-page",{showLoadMsg:true});

    downloadingData();

   }else{
        //Reset progress
//        $('#progress_id').html("<label>Updated successfully</label>");
    }

}

function downloadingData(){

    //Download Programs
    $.ajax({
        url : url_programs,
        dataType : 'json',
        success : function(data, textStatus, jqXHR) {
            //     console.log( "==>"+ data.programs.length);
			if(data.success==1){
            if(data.programs.length>0){
				 //drop programs table
                db.transaction(function(tx){
                    tx.executeSql(DROP_PROGRAMS_TABLE);
                    tx.executeSql(CREATE_PROGRAMS_TABLE);

                    for(i= 0;i<data.programs.length;i++){
                        var row = data.programs[i];
                        // console.log(data.programs[i]['adp']);

                        tx.executeSql(INSERT_INTO_PROGRAMS,[row['location'],row['adp'],row['support_office'],row['district'],row['traditional_authority']],function(tx, result){
                            console.log("Programs=> updated");

                        },onError);


                    }

                });
				              
					}else{
						alert("No programs found");
					}
				}else{
					alert("Message: "+data.message);
				}
        },
        error : function(jqXHR, textStatus, errorThrown) {
            alert(textStatus + " :: PROGRAMS " + errorThrown)
        }

    });

    //mainmodel
    $.ajax({
        url:url_mainmodel,
        crossDomain: true,
        dataType:'json',
        success:function(data, textStatus, jqXHR){
            if(data.indicators.length>0){

                db.transaction(function(tx){
                    tx.executeSql(DROP_MAINMODEL_TABLE);
                    tx.executeSql(CREATE_MAINMODEL_TABLE);
                    for(i=0;i<data.indicators.length;i++){
                        var row = data.indicators[i];
                        //             console.log("=>"+row['indicator']);
                        tx.executeSql(INSERT_INTO_MAINMODEL,[row['i_id'],row['icode'],row['indicator'],	row['comments'],	row['type'],	row['o_id'],	row['text'],	row['skip_to_indicator_id'],'0'],function(tx, result){
				   console.log("Indicators => Updated");
                        },onError);
                    }
                });

            }else{
                alert("Indicators Not found");
            }
        }
    });

    //Users
    $.ajax({
        url:url_users,
        dataType:'json',
        success:function(data, textStatus,jqXHR){
            if(data.users.length>0){
                //    console.log(data.users.length);
                db.transaction(function(tx){
                    tx.executeSql(DROP_USERS_TABLE);
                    tx.executeSql(CREATE_USERS_TABLE);

                    for(i=0;i<data.users.length;i++){

                        row = data.users[i];
                        tx.executeSql(INSERT_INTO_USERS,[row['firstname'],row['password']],function(tx, result){
                            console.log("Users=>Updated");

                        },onError);
                    }
                });
            }else{
                alert("Users Not Found");
            }
        },
        error:function(e){
            alert("Error:"+ e.error());
        }
    });


    //Models
    $.ajax({
        url:url_model,
        dataType:'json',
        success:function(data,textStatus, jqXHR){
            if(data.models.length>0){
                db.transaction(function(tx){
                    tx.executeSql(DROP_MODEL_TABLE);
                    tx.executeSql(CREATE_MODEL_TABLE);

                    for(i=0;i<data.models.length;i++){
                        var row = data.models[i];//targeted_adp, created_by,createdon, module_code, start_date, end_date
//                            console.log(row);
                        tx.executeSql(INSERT_INTO_MODEL, [row['fk_programs'],row['fk_createdby'],row['createdon'],row['fk_module'],row['startdate'],row['enddate']], function(tx, result){
                            console.log("Models updated");
                        }, onError);
                    }
                });
            }else{
                alert("No models available");
            }
        },
        error:function(textStatus, jqXHR, errorThrown){
            alert(textStatus+" :: MODELS "+errorThrown);
        }
    });

    //module
    $.ajax({
        url:url_module,
        dataType:'json',
        success:function(data, textStatus, jqXHR){
            if(data.modules.length>0){
                db.transaction(function(tx){
                    tx.executeSql(DROP_MODULE_TABLE);
                    tx.executeSql(CREATE_MODULE_TABLE);

                    for(i=0;i<data.modules.length;i++){

                        row = data.modules[i];
//                        console.log(row);

                        tx.executeSql(INSERT_INTO_MODULE, [row['id'], row['module_type_id'], row['name'], row['fk_userid'], row['code'],row['instructions']],function(tx,result){
                            console.log("Module=>updated");
                        }, onError);
                    }

                });

            }else{
                alert("No Modules found");
            }
        }
    });
}
function getCurrentSurvey(){

    $.mobile.changePage("#page8", {showLoadMsg:true});

    showSurveys(sessionStorage.sv_code);

}


function goHomepage8(){

    $("#surveyList li").remove();

    $.mobile.changePage("#home-page", {showLoadMsg:true});

}



$(document).ready(function()// Call function when page is ready for load..

{
	$("body").fadeIn(2000);

	// Fade In Effect when Page Load..

	initDatabase();

	//Login action
	$("#login-button").click(validateCredentials);

	$("#submitButton").click(insertRecord);

	// Register Event Listener when button click.
	$("#btnUpdate").click(updateRecord);

	$("#btnReset").click(resetForm);

	$("#btnDrop").click(dropTable);

    $("#hm").click(notsetForm);

	$("#cg").click(cgForm);

	$("#yb").click(notsetForm);

	$("#gm").click(notsetForm);

	$("#fl").click(notsetForm);

	$("#start_cg_btn").click(cgSplitPage);

	$("#view_surveys_btn").click(getSurveys);

    $("#view-report-btn").click(getCurrentSurvey);

    $("#gohome-page8").click(goHomepage8);

    $("#upload_button").click(syncData);

    $(document).delegate('#upload_button', 'click', function() {
        $('<div>').simpledialog2({
            mode: 'blank',
            headerText: 'UPLOAD SECTION',
            headerClose: true,
            blankContent :
                "<div id='progress_id'><div class='activityIndicator'></div></div><ul data-role='listview'><li id='msg'>Please wait</li></ul>"+
                    // NOTE: the use of rel="close" causes this button to close the dialog.
                    "<a rel='close' data-role='button' href='#'>Close</a>"
        })
    });
});




