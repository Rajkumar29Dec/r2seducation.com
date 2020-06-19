function testportion(){
    document.getElementById('display_studentuserid').innerHTML=sessionStorage.getItem("User");



    var resultreffortest=firebase.database().ref('NeetTest1');
    resultreffortest.child(sessionStorage.getItem("school"))
    .child(sessionStorage.getItem("Id")).once('value',function(snapshot){

        if(!isNaN(snapshot.val().Result)){
            alert("You already take the test :"+" "+snapshot.val().Result);

            document.getElementById('neet1').style.backgroundColor="red";
            document.getElementById('neet1').style.display='none';
        }
    
    });
}


function physics_testportionNeet(){
    alert("Physics");
    window.open("NeetTest1.html","Testseries1/neet","toolbar=no,menubar=no,close=no");
}

function addmeetingid(){
    var meetingref=firebase.database().ref('meetingid');

    var meetinglink=document.getElementById('meetingid_link').value;
    meetingref.child('meeting').set({
        meeting_via:meetinglink
    });
    document.getElementById('meetingid_link').value=" ";
}





// function test_series(){
//     alert("HI");
//     alert(questions__Test_1[0].question);
//     for(var i=0;i<questions__Test_1.length;){
//         document.getElementById('qn').innerHTML=questions__Test_1[i].question;
//         i++;

//     }
// }


