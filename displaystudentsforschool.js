var schoolemaildsfs;
var schoolnamedsfs;

function displayschoolname(){
    // alert("hi");
     schoolemaildsfs=sessionStorage.getItem('schoolEmail');
     schoolnamedsfs=sessionStorage.getItem('schoolname');
    document.getElementById('schoolname').innerHTML=schoolemaildsfs;
   

    var schoolfindref=firebase.database().ref('students').child(schoolnamedsfs);
    schoolfindref.on('value',function(snapshot){
        alert(snapshot.numchildren());
    });


}


function displaystudentdetails(){
    alert("hi");
    var search_id=document.getElementById('search_student').value;

    var resultref=firebase.database().ref('NeetTest1');

    resultref.child(schoolnamedsfs).child(search_id).once('value',function(snapshot){
        document.getElementById('searched_studentname').innerHTML=snapshot.val().Email;
        document.getElementById('searched_studentid').innerHTML=snapshot.val().Id;
        document.getElementById('searched_studentresult_neet1_test1').innerHTML="NEET TEST 1"+" "+":"
        +snapshot.val().Result+" "+"out of 200";
    });
}