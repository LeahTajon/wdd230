// Get year
document.getElementById('year').innerHTML = new Date().getFullYear();

// Last modified
document.getElementById('lastModified').innerHTML = `Last modified: ${document.lastModified}`;


window.onload = function() {
    var currentDate = new Date();
    document.getElementById("form-loaded-time").value = currentDate.toString();
}
  

