$(document).ready(function(){ 

    const now=moment();
console.log(now);
$("#currentDay").text(now)
console.log(now); 

// var d=newDate();
// $("#leftDiv").text(getHours())

$("#rightDiv").on("click", function(){
var letters=$("#scheduledItem9").val()
localStorage.setItem("text: ", letters)
console.log(letters);
});


function reloadInfo () {
//     for (let i=0; localStorage.length; i++) {
        const scheduledItem=localStorage.getItem("letters")
        $("#scheduledItem9").innerHTML='${scheduledItem9}<br/>';
//     }
// //     if ($("scheduledItem9")!==null) {
//         location.reload();
//     }
};
reloadInfo();

//1. pull out the hour from the time - WHERE FROM????
//2. parse out the info with JSON
//3. use if statements to compare Hour string to Row TIME string
//4. if a match, change color
//5. on reload - check for local storage and re-populate


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
});
