//////////////////////////////////////////////////////////////////////
//                       SCRH Shortener 1.0                         //
//     Tool to shorten Scratch user page links in JavaScript        //
//////////////////////////////////////////////////////////////////////

// Create a function that returns a promise that resolves with the element
function waitForElement(selector) {
  return new Promise(resolve => {
    // If the element already exists, resolve the promise
    if (document.querySelector(selector)) {
      return resolve(document.querySelector(selector));
    }
    // Otherwise, create a mutation observer and observe the document body
    const observer = new MutationObserver(mutations => {
      // Loop through the mutations
      for (let mutation of mutations) {
        // Check if the mutation added nodes
        if (mutation.addedNodes.length) {
          // Loop through the added nodes
          for (let node of mutation.addedNodes) {
            // Check if the node matches the selector
            if (node.matches && node.matches(selector)) {
              // Resolve the promise with the node and disconnect the observer
              resolve(node);
              observer.disconnect();
              return;
            }
          }
        }
      }
    });
    // Start observing the document body with childList option
    observer.observe(document.body, {childList: true});
  });
}

waitForElement("#nojs").then(element => {
  document.getElementById("nojs").style.display = "none";
});

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
