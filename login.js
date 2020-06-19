var student_User;
var student_Userpassword;

var admail="r2seducation@gmail.com";
var adpswd="r2sr2s";

var curremailstudent;
var curr_pswd_student;

var email_login_student;
var pswd_login_student;
var id_login_student;

function loginadmin(){
var admin_email=document.getElementById('inputEmail_admin').value;
var admin_password=document.getElementById('inputPassword_admin').value;
alert(admin_email);
if((admin_email==admail) && (admin_password==adpswd)){
  console.log("hi");
  alert("welcome"+"  "+admin_email);
  window.location="admin.html";
}
else{
  alert("Invalid User");
}
}



// login student
function loginstudent()
{
  alert("hi");
var student_email=document.getElementById('inputEmail_studentlogin').value;
var student_pswd=document.getElementById('inputPassword_studentlogin').value;
var student_id=document.getElementById('inputaddress_studentlogin').value;
var student_school=document.getElementById('inputschool_studentlogin').value;
alert(student_email+" "+student_pswd);






var studentref=firebase.database().ref('students');
studentref.child(student_school).child(student_id).once('value').then(function(snapshot){
  if((student_email==snapshot.val().Email)&&(student_pswd==snapshot.val().password)&&
  (student_id==snapshot.val().Address)){
    alert("Welcome"+" "+snapshot.val().Email);
student_User=snapshot.val().Email;
student_Userid=snapshot.val().Address;
student_SchoolName=snapshot.val().school;
sessionStorage.setItem("User",student_User);
sessionStorage.setItem("Id",student_Userid);
sessionStorage.setItem("school",student_SchoolName);
document.getElementById('inputEmail_studentlogin').value=" ";
document.getElementById('inputPassword_studentlogin').value=" ";
document.getElementById('inputaddress_studentlogin').value="";
document.getElementById('inputschool_studentlogin').value="";
window.location="student.html"
  } 
  else{
      document.getElementById('inputEmail_studentlogin').value=" ";
    document.getElementById('inputPassword_studentlogin').value=" ";
    document.getElementById('inputaddress_studentlogin').value="";
    document.getElementById('inputschool_studentlogin').value="";
      alert("invalid user")
    }
   console.log(snapshot.val());
  console.log(snapshot.val().Email+" "+snapshot.val().password);
});
console.log(email_login_student+" "+pswd_login_student);
// if((email_login_student==student_email) && (pswd_login_student==student_pswd)&&(id_login_student==student_id)){
//   alert("Welcome"+" "+email_login_student);
// student_User=email_login_student;
// student_Userid=id_login_student;
// sessionStorage.setItem("User",student_User);
// sessionStorage.setItem("Id",student_Userid);
// document.getElementById('inputEmail_studentlogin').value=" ";
// document.getElementById('inputPassword_studentlogin').value=" ";
// document.getElementById('inputid_studentlogin').value="";
// window.location="student.html"
// }
// else{
//   document.getElementById('inputEmail_studentlogin').value=" ";
// document.getElementById('inputPassword_studentlogin').value=" ";
// document.getElementById('inputid_studentlogin').value="";
//   alert("invalid user")
// }
}

 


// login schbool
function loginschool(){
var school_email=document.getElementById('inputEmail_schoollogin').value;
var school_password=document.getElementById('inputPassword_schoollogin').value;
var school_id=document.getElementById('inputid_schoollogin').value;
alert(school_email+" "+school_password);

var schoolref=firebase.database().ref('school');
schoolref.child(school_id).once('value',function(snapshot){
  if((school_email==snapshot.val().Email)&&(school_password==snapshot.val().password)
  &&(school_id==snapshot.val().address)){
    alert("Welcome"+snapshot.val().school);
    document.getElementById('inputEmail_schoollogin').value="";
    document.getElementById('inputPassword_schoollogin').value="";
    document.getElementById('inputid_schoollogin').value="";
    window.location="school.html";
    sessionStorage.setItem("schoolEmail",snapshot.val().Email);
    sessionStorage.setItem("schoolpswd",snapshot.val().password);
    sessionStorage.setItem("schoolid",snapshot.val().address);
    sessionStorage.setItem('schoolname',snapshot.val().school);
  }
  else{
    alert("Invalid school Check the credentials");
    document.getElementById('inputEmail_schoollogin').value="";
    document.getElementById('inputPassword_schoollogin').value="";
    document.getElementById('inputid_schoollogin').value="";
  }
});
}

// register student
function adduserstudent(){
  var student_add_email=document.getElementById('inputEmailstudent').value;
  var student_add_paswword=document.getElementById('inputPasswordstudent').value;
  var student_add_address=document.getElementById('inputAddressstudent').value;
  var student_add_schoolname=document.getElementById('schoolnamestudent').value;
  var student_add_gender=document.getElementById('inputgenderstudent').value;
  var student_add_state=document.getElementById('inputStatestudent').value;
  var student_add_class=document.getElementById('inputclass').value;


    alert(student_add_email+" "+student_add_paswword);
  firebase.auth().createUserWithEmailAndPassword(student_add_email,student_add_paswword).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });
  alert(student_add_address+" "+student_add_class+" "+student_add_state+" "+student_add_gender);
  addstudentUserData(student_add_email,student_add_paswword,student_add_schoolname,student_add_address,student_add_gender,
    student_add_class,student_add_state);
  document.getElementById('inputEmailstudent').value=" ";
  document.getElementById('inputPasswordstudent').value=" ";
  document.getElementById('inputAddressstudent').value=" ";
  document.getElementById('schoolnamestudent').value=" ";
  document.getElementById('inputgenderstudent').value=" ";
  document.getElementById('inputStatestudent').value=" ";
  document.getElementById('inputclass').value=" ";
}


function addstudentUserData(email_student_add,pswd_student_add , schoolname_student_add,address_student_add,
  gender_student_add,class_student_add,state_student_add) {
    alert("hi");
  database.ref('students/').child(schoolname_student_add).child(address_student_add).set({
    Email: email_student_add,
    password: pswd_student_add,
    school : schoolname_student_add,
    Address: address_student_add,
    Gender:gender_student_add,
    Class:class_student_add,
    State:state_student_add
  })
  .then(function() {
    alert("s");
    console.log("Document successfully written!");
})
.catch(function(error) {
  alert(error);
    console.error("Error writing document: ", error);
});
alert("hi");
}




function adduserschool(){
  var school_add_email=document.getElementById('inputEmailschool').value;
  var school_add_paswword=document.getElementById('inputPasswordschool').value;
  var school_add_address=document.getElementById('inputAddressschool').value;
  var school_add_schoolname=document.getElementById('schoolname').value;
  var school_add_schoolType=document.getElementById('inputtypeschool').value;
  var school_add_state=document.getElementById('inputStateschool').value;

  alert(school_add_email+" "+school_add_paswword);
  firebase.auth().createUserWithEmailAndPassword(school_add_email,school_add_paswword).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });
  alert(school_add_address+" "+school_add_email+" "+school_add_paswword+" "+school_add_schoolType);
  addschoolUserData(school_add_email,school_add_paswword,school_add_schoolname,school_add_address,
    school_add_state,school_add_schoolType);
    document.getElementById('inputEmailschool').value=" ";
    document.getElementById('inputPasswordschool').value=" ";
    document.getElementById('inputAddressschool').value=" ";
    document.getElementById('schoolname').value=" ";
    document.getElementById('inputtypeschool').value=" ";
    document.getElementById('inputStateschool').value=" ";
  
}

function addschoolUserData(school_add_email,school_add_paswword,school_add_schoolname,school_add_address,
  school_add_state,school_add_schoolType) {
    alert("hi");
  database.ref('school/').child(school_add_address).set({
    Email: school_add_email,
    password: school_add_paswword,
    address:school_add_address,
    school : school_add_schoolname,
    State:school_add_state,
    Type:school_add_schoolType
  })
  .then(function() {
    alert("s");
    console.log("Document successfully written!");
})
.catch(function(error) {
  alert(error);
    console.error("Error writing document: ", error);
});
alert("hi");
}



$(function() {
  $('#WAButton').floatingWhatsApp({
    phone: '9384140170', //WhatsApp Business phone number International format-
    //Get it with Toky at https://toky.co/en/features/whatsapp.
    headerTitle: 'Chat with us on WhatsApp!', //Popup Title
    popupMessage: 'Hello, how can we help you?', //Popup Message
    showPopup: true, //Enables popup display
    buttonImage: '<img src="https://rawcdn.githack.com/rafaelbotazini/floating-whatsapp/3d18b26d5c7d430a1ab0b664f8ca6b69014aed68/whatsapp.svg" />', //Button Image
    //headerColor: 'crimson', //Custom header color
    //backgroundColor: 'crimson', //Custom background button color
    position: "right"    
  });
});

function loadevents(){
  // alert("hi");
  var eventref=firebase.database().ref('Event');
  eventref.once('value',function(snapshot){
      document.getElementById('event1').innerHTML=snapshot.val().eventone;
      document.getElementById('event2').innerHTML=snapshot.val().eventtwo;
      document.getElementById('event3').innerHTML=snapshot.val().eventthree;
      document.getElementById('event4').innerHTML=snapshot.val().eventfour;
      document.getElementById('event5').innerHTML=snapshot.val().eventfive;

  });

  var slideref=firebase.database().ref('slides');
  slideref.once('value',function(snapshot){
document.getElementById('slide1').src=snapshot.val().slide1;
document.getElementById('slide2').src=snapshot.val().slide2;
document.getElementById('slide3').src=snapshot.val().slide3;

  });
}