$(document).ready(function() {
    //set date at the top of the page//
    const m = moment()
    console.log(m);
    dateDisplay = m.format("dddd" + ", " + "MMMM" + " " + "Do" + " " + "YYYY");
    $("#currentDay").text(dateDisplay)

    //set variable for current hour//
    const h = m.format("H");
    console.log(h)

    let blockHour = []
    for (let i = 9; i < 18; i++) {

        blockHour.push($(`#$ { i }`))
    }

    let timeSlot = blockHour.map(x => parseInt(x.attr("id")))

    for (let i = 0; i < timeSlot.length; i++) {
        console.log(timeSlot[i])
        if (timeSlot[i] < parseInt(h)) {
            $(`.hour$ { i }`).addClass("past")
        } else if (timeSlot[i] == parseInt(h)) {
            $(`.hour$ { i }`).addClass("present")
        } else {
            $(`.hour$ { i }`).addClass("future")
        }
    };
    // for (let i = 0; i < 9; i++) {
    //     $(`hour${i}`).value = localStorage.getItem([i])
    // }
    // $("hour0").value = localStorage.getItem('btn9')
    //     if (localStorage!==null)
    //     $("#scheduledItem9").html(scheduledItem); 
    // }

    // $(".rightDiv").on("click", function() {
    //             var storage = [];
    //             var hour = $(this.attr("id"));
    //             console.log(hour)
    //                 //var letters = $(`#
    //                 // $ { hour }
    //             `).val();
    //             // storage.push({
    //             //     time: hour,
    //             //     scheduled: letters
    //             // });
    //         localStorage.setItem({
    //             text: (#midDiv.valu),
    //             id: (this.id),
    //         });


    //         // function reloadInfo () {
    //         // //     for (let i=0; localStorage.length; i++) {
    //         //         var scheduledItem=JSON.parse(localStorage.getItem("text: "))
    //         //         $("#" + scheduledItem.time).text(scheduledItem);
    //         //       console.log(scheduledItem);
    //         // };


    //         //     }
    //         // //     if ($("scheduledItem9")!==null) {
    //         //         location.reload();
    //         //     }
    //         // reloadInfo ();



    //         // #Pseudo Code------------------------
    //         //1. pull out the hour from the time - WHERE FROM????
    //         // - do I put time into local storage as an object?

    //         //2. parse out the info with JSON and create a 
    //         //variable to represent currentHour

    //         //3. use if statements to compare Hour variable to Row TIME string
    //         // code for each individual row?
    //         //if a match, change color ie: (.attr("class" ".past"))

    //         //5. on reload - check for local storage and re-populate

    //         //--------------------------------------------------
    //   

    //         // Splice ( )
    //         // Used for adding/removing elements from array.
    //         // Returns an array of removed elements.
    //         // Changes the array.
    //         // For adding elements: array.splice (index, number of elements, element)
    //         // For removing elements: array.splice (index, number of elements)
    //         // Can only be used for arrays.


    //         // var currentDay = new Date($.now());
    //         // $("#currentDay").html(currentDay);
    //         // var dayContent = JSON.parse(localStorage.getItem("input"));
    //         // if(dayContent === null){
    //         //     dayContent = ["","","","","","","","","","","",""];
    //      
    //         // }
    //         // $(".saveBtn").on("click", function(event){
    //         //     var input = $("#" + event.target.value).val();
    //         //     dayContent.splice((event.target.value-9), 1, input)
    //         //     localStorage.setItem("input", JSON.stringify(dayContent)) 
    //         // })

});