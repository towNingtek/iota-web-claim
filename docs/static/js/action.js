function submit_data() {
  // Set header
  var key = document.getElementById("key").value;

  // Get data
  var input_data = document.getElementById("message").value;
  var message = {"message": input_data}

  // Submit
  var request = new XMLHttpRequest();
  request.onreadystatechange= function () {
    if (request.readyState==4) {
      // handle response
      // alert(request.responseText);
      console.log(request.responseText);
      document.getElementById("responseText").innerHTML = request.responseText;
    }
  }
  request.open("POST", "https://poe.townway.com.tw/iota/message", true);
  request.setRequestHeader("Authorization", key);
  request.setRequestHeader("Accept","application/json");
  request.send(JSON.stringify(message));
}
