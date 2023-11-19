function getAccessToken() {
  return localStorage.getItem("accessToken");
}

document.addEventListener("DOMContentLoaded", function () {
    // Fetch customer list when the page is loaded
    getCustomerDetail();
});

function getCustomerDetail(){
    const accessToken = getAccessToken();
    const url2 = "https://qa2.sunbasedata.com/sunbase/portal/api/assignment.jsp";
    
    const params = {
        cmd: "get_customer_list",
        // Add other parameters as needed
    };
    const urlwithParams =  url2 +"?"+ $.param(params);


    $.ajax({
        url:urlwithParams,
        type: "GET",
        headers: {
            'Authorization': "Bearer " + accessToken,
        },
        success: function (data) {
            displayCustomerList(data);
        },
        error: function (xhr, textStatus, errorThrown) {
            console.log("Error during Fetch:", errorThrown);
            console.log("HTTP error! Status:", xhr.status);
        },
    });
}

function displayCustomerList(customerList) {
    const container = document.getElementById("customerListContainer");

    if (Array.isArray(customerList) && customerList.length > 0) {
        // Iterate through the customer list and create HTML elements
        customerList.forEach(customer => {
            const customerElement = document.createElement("div");
            customerElement.innerHTML = `
                <p><strong>First Name:</strong> ${customer.first_name}</p>
                <p><strong>Last Name:</strong> ${customer.last_name}</p>
                <p><strong>Street:</strong> ${customer.street}</p>
                <p><strong>Address:</strong> ${customer.address}</p>
                <p><strong>City:</strong> ${customer.city}</p>
                <p><strong>State:</strong> ${customer.state}</p>
                <p><strong>Email:</strong> ${customer.email}</p>
                <p><strong>Phone:</strong> ${customer.phone}</p>
                <hr>
            `;
            container.appendChild(customerElement);
        });
    } else {
        container.innerHTML = "<p>No customers found.</p>";
    }
}