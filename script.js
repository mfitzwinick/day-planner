$(document).ready(function () {
    //set date at the top of the page//
    const m = moment()
    console.log(m);
    dateDisplay = m.format("dddd" + ", " + "MMMM" + " " + "Do" + " " + "YYYY");
    $("#currentDay").text(dateDisplay)

    //set variable for current hour//
    const h = m.format("H");
    console.log(h)
    //create an array to compare hour integers from moment to hour integers inside of the planner//
    let blockHour = []
    for (let i = 9; i < 18; i++) {

        blockHour.push($(`#${i}`))
    }

    let timeSlot = blockHour.map(x => parseInt(x.attr("id")))

    for (let i = 0; i < timeSlot.length; i++) {
        console.log(timeSlot[i])
        if (timeSlot[i] < parseInt(h)) {
            $(`.hour${i}`).addClass("past")
        } else if (timeSlot[i] == parseInt(h)) {
            $(`.hour${i}`).addClass("present")
        } else {
            $(`.hour${i}`).addClass("future")
        }
    };
 
//create an event listener to place value of input into local storage//
    $(".rightDiv").on("click", function () {
        var hour = $(this).attr("data-hour");
        localStorage.setItem(hour, $(`#${hour}`).val())
    })

//function that will pull inputs from local storage when reloading page//
    function reloadInfo() {
        for (let i = 9; i < 18; i++) {
            $(`#hour${i}`).val(localStorage.getItem(`hour${i}`))
        };

    }

    reloadInfo()

});