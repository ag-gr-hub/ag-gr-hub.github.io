// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("toDoList").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

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