  chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({color: '#3aa757'}, function() {
      console.log("The color is green.");
    });
  });

  chrome.identity.getAuthToken({ 'interactive': true }, getToken);

  function getToken(token) {
    
    console.log('this is the token: ', token);
  }

  function displayPath(fileEntry) {
    chrome.fileSystem.getDisplayPath(fileEntry, function(path) {
      console.log(path)
    });
  }

  


