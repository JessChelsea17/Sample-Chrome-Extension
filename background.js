  chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({color: '#3aa757'}, function() {
      console.log("The color is green.");
    });
  });

  chrome.identity.getAuthToken({ 'interactive': true }, getToken);

  function getToken(token) {
    
    console.log('this is the token: ', token);

      var params = {
        "range":"Sheet1!A1:B1",
        "majorDimension": "ROWS",
          "values": [
          ["Hi","Crush"]
        ],
      }
      let init = {
        method: 'PUT',
        async: true,
        // data: JSON.stringify(params),
        body: JSON.stringify(params),
        headers: {
          Authorization: 'Bearer ' + token,
          'Content-Type': 'application/json'
        }
      };
      fetch(
          "https://sheets.googleapis.com/v4/spreadsheets/1efS6aMlPFqHJJdG8tQw-BNlv9WbA21jQlufsgtMsUmw/values/Sheet1!A1:B1?valueInputOption=USER_ENTERED",
          init)
          .then((response) => console.log(response))

          let request = {
            method: 'GET',
            async: true,
            headers: {
              Authorization: 'Bearer ' + token,
              'Content-Type': 'application/json'
            },
          };
          fetch(
              "https://sheets.googleapis.com/v4/spreadsheets/1efS6aMlPFqHJJdG8tQw-BNlv9WbA21jQlufsgtMsUmw/values/Sheet1!A1:B1",
              request)
              .then((response) => response.json())
              .then(function(data) {
                console.log(data)
              });
  }


  


