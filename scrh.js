//////////////////////////////////////////////////////////////////////
//                       SCRH Shortener 1.0                         //
//     Tool to shorten Scratch user page links in JavaScript        //
//////////////////////////////////////////////////////////////////////

// Get the username from the current URL using a regular expression
let username = window.location.pathname.match(/\/([^\/]+)$/)[1];

function urlExists(url) {
  // Create a new XMLHttpRequest object
  let http = new XMLHttpRequest();
  // Open a HEAD request to the url
  http.open("HEAD", url, false);
  // Send the request
  http.send();
  // Check the status code
  if (http.status != 404) {
    // The page exists
    return true;
  } else {
    // The page does not exist
    return false;
  }
}

// If the username is empty, show an alert and go back
if (!username) {
  alert("Couldn't extract this account's username.");
  window.history.back();
} else {
  // Validate if the account actually exists
  if (urlExists(`https://scratch.mit.edu/users/${username}`)) {
    // Redirect to the Scratch user page
    window.location.replace(`https://scratch.mit.edu/users/${username}`);
  } else {
    window.location.replace(`https://hackercat-mod.github.io/srch/oops_im_not_real_sorry?username=${username}`);
  }
}
