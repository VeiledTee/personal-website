async function getDate() {
    var currentDate = new Date();
    document.getElementById('date-accessed').innerHTML = 'Date accessed: ' + currentDate.toDateString()
};

getDate();