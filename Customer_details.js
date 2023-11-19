
function getAccessToken() {
  return localStorage.getItem('accessToken');
}


function submitCustomerDetail() {
  const accessToken = getAccessToken();

  var firstName = $("#firstName").val();
  var lastName = $("#lastName").val();
  var street = $("#street").val();
  var address = $("#address").val();
  var city = $("#city").val();
  var state = $("#state").val();
  var email = $("#email").val();
  var phone = $("#phone").val();

  var data = {
      first_name: firstName,
      last_name: lastName,
      street: street,
      address: address,
      city: city,
      state: state,
      email: email,
      phone: phone,
  };

  // Include parameters in the URL or data object based on your requirements
  const url2 = "https://qa2.sunbasedata.com/sunbase/portal/api/assignment.jsp";
  const params = {
      cmd: "create",
      // Add other parameters as needed
  };

  const urlwithParams =  url2 +"?"+ $.param(params);
  console.log("Data to be sent:", data);
  console.log("Access Token:", accessToken);

  $.ajax({
      url: urlwithParams,
      type: "POST",
      contentType: "application/json",
      data: JSON.stringify(data),
      headers: {
          'Authorization': "Bearer " + accessToken,
      },
      success: function (response) {
          console.log("API Response:", response);
          console.log("Success");
      },
      error: function (xhr, textStatus, errorThrown) {
          console.log("Error during Fetch:", errorThrown);
          console.log("HTTP error! Status:", xhr.status);
      },
  });
}

  