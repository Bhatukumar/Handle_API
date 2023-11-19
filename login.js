
// Post Login_id and password and gets access_token

function setAccessToken(token) {
  localStorage.setItem('accessToken', token);
}


function submitLogin() {
  var loginId = $("#username").val();
  var password = $("#password").val();
  // const proxyUrl = "https://cors-anywhere.herokuapp.com/";
  const targetUrl =
    "https://qa2.sunbasedata.com/sunbase/portal/api/assignment_auth.jsp";
  // const apiUrl = proxyUrl + targetUrl;

  var data = {
    login_id: loginId,
    password: password,
  };

  console.log("Submitted data:", data);

  $.ajax({
    url: targetUrl,
    type: "POST",
    contentType: "application/json",
    data: JSON.stringify(data),
    success: function (responseData) {
      console.log("API Response:", responseData);
      // accessToken = responseData.access_token;
      // console.log(accessToken);
      setAccessToken(responseData.access_token);
      // if(responseData.success){
      //   window.location.href = "C:\Users\Admin\Desktop\Internshaala\SunBase\Customer_details.html";
      // }
      // Add logic to handle the response data as needed

      console.log(localStorage.getItem('accessToken'));
    },
    error: function (xhr, textStatus, errorThrown) {
      console.error("Error during fetch:", errorThrown);
      console.log("HTTP error! Status:", xhr.status);
      // Add logic to handle errors
    },
  });
}

// export {accessToken};


