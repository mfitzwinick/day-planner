$(document).ready(function(){ 
// window.onload()= function () {
//     if (localStorage!==null)
//     $("#scheduledItem9").html(scheduledItem); 
// }

const m=moment()
console.log(m);
dateDisplay=m.format("dddd"+","+ "MMMM"+" "+"Do"+" "+"YYYY");
$("#currentDay").text(dateDisplay)
const h=m.format("H");
console.log(h)

// function color() {
//     for(i=9; i<9-1; i++);
//     var row=("#").val()
//     if ($(row==h) {
//         addClass("past")
//     };
// };
//     else if (row<h) {
//     addClass("past");
// }
// else {
//     addClass("future")
// }
// }


var storage=[];
$(".rightDiv").on("click", function(){
//     var hour = $(this).val();
// var letters=$("#" + hour).val();
// storage.push({
//     time: hour,
//     scheduled: letters
// });
localStorage.setItem("text: ",JSON.stringify(storage))
console.log(letters);
});


// function reloadInfo () {
// //     for (let i=0; localStorage.length; i++) {
//         var scheduledItem=JSON.parse(localStorage.getItem("text: "))
//         $("#" + scheduledItem.time).text(scheduledItem);
//       console.log(scheduledItem);
// };


//     }
// //     if ($("scheduledItem9")!==null) {
//         location.reload();
//     }
// reloadInfo ();



// #Pseudo Code------------------------
//1. pull out the hour from the time - WHERE FROM????
    // - do I put time into local storage as an object?

//2. parse out the info with JSON and create a 
//variable to represent currentHour

//3. use if statements to compare Hour variable to Row TIME string
        // code for each individual row?
//if a match, change color ie: (.attr("class" ".past"))

//5. on reload - check for local storage and re-populate

//--------------------------------------------------
// function color() {
//     if()
// }

// Splice ( )
// Used for adding/removing elements from array.
// Returns an array of removed elements.
// Changes the array.
// For adding elements: array.splice (index, number of elements, element)
// For removing elements: array.splice (index, number of elements)
// Can only be used for arrays.



// var currentDay = new Date($.now());
// $("#currentDay").html(currentDay);
// var dayContent = JSON.parse(localStorage.getItem("input"));
// if(dayContent === null){
//     dayContent = ["","","","","","","","","","","",""];
// }
// for(i = 9; i < 22; i++){
//     $("#"+i.toString()).html(dayContent[i-9])
//     if(i === currentDay.getHours()){
//         $("#"+i.toString()).attr("class","form-control present");
//     }
//     if(i < currentDay.getHours()){
//         $("#"+i.toString()).attr("class","form-control past");
//     }
//     if(i > currentDay.getHours()){
//         $("#"+i.toString()).attr("class","form-control future");
//     }
// }
// $(".saveBtn").on("click", function(event){
//     var input = $("#" + event.target.value).val();
//     dayContent.splice((event.target.value-9), 1, input)
//     localStorage.setItem("input", JSON.stringify(dayContent)) 
// })
//__________________________________________________________
// $.ajax({
// url: queryURL,
// method: "GET"
// }).then(function(response) {
//     console.log(response)
// });