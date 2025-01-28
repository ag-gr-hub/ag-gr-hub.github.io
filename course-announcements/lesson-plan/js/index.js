/**
 * Display today's date
 */
function displayDate() {
    // Create a new Date object
    var today = new Date();

    // Get the current date, month, and year
    var day = today.getDate();
    var month = today.getMonth();
    var year = today.getFullYear();
    var monthString = '';
    switch (month) {
        case 0:
            monthString = 'January';
            break;
        case 1:
            monthString = 'February';
            break;
        case 2:
            monthString = 'March';
            break;
        case 3:
            monthString = 'April';
            break;
        case 4:
            monthString = 'May';
            break;
        case 5:
            monthString = 'June';
            break;
        case 6:
            monthString = 'July';
            break;
        case 7:
            monthString = 'August';
            break;
        case 8:
            monthString = 'September';
            break;
        case 9:
            monthString = 'October';
            break;
        case 10:
            monthString = 'November';
            break;
        case 11:
            monthString = 'December';
            break;
        default:
            monthString = 'Date Error';
            break;
    }

    // Format the date as needed (e.g., dd/mm/yyyy)
    var formattedDate = `${monthString}, ${day} ${year}`

    // Update the HTML element with id "date" with the formatted date
    document.getElementById('date').innerText = formattedDate;
}
