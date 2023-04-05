//////////////////////////////////////////////////////////////////////
//                       SCRH Shortener 1.0                         //
//     Tool to shorten Scratch user page links in JavaScript        //
//////////////////////////////////////////////////////////////////////

// Hide the "nojs" div at the start
document.getElementById("nojs").style.display = "none";

// Get the username from the current URL using a regular expression
let username = window.location.pathname.match(/\/([^\/]+)$/)[1];

// If the username is empty, show an alert and go back
if (!username) {
  alert("Couldn't extract this account's username.");
  window.history.back();
} else {
  // Redirect to the Scratch user page
  window.location.replace(`https://scratch.mit.edu/users/${username}`);
}
