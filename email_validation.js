function validateEmail(){
    var productModel = document.forms["purchase_email"]["Product Model"].value;
    var size = document.forms["purchase_email"]["Size"].value;
    var quantity = document.forms["purchase_email"]["Quantity"].value;
    var firstName = document.forms["purchase_email"]["First Name"].value;
    var lastName = document.forms["purchase_email"]["Last Name"].value
    var phoneNumber = document.forms["purchase_email"]["Phone Number"].value;
    var street = document.forms["purchase_email"]["Street"].value;
    var city = document.forms["purchase_email"]["City"].value;
    var state = document.forms["purchase_email"]["State"].value;
    var zipCode = document.forms["purchase_email"]["Zip Code"].value;
    
    //checking the product model
    
 
    //checking the size
    if(!parseInt(size)>0)
    {
        alert("Enter a positive number for size");
        return (false);
    }

    //checking the quantity
    if(!parseInt(quantity)>0)
    {
        alert("Enter a positive number for quantity");
        return (false);
    }
    
    //checking the first name
    if(parseInt(firstName)>0)
    {
        alert("No number allowed in first name");
        return (false);
    }
    
    //checking the last name
    if(parseInt(lastName)>0)
    {
        alert("No number allowed in last name");
        return (false);
    }
    
    //checking the phone number***
    if(!parseInt(phoneNumber)>0)
    {
        alert("No number allowed in last name");
        return (false);
    }
    
    //checking the street
    //checking the city
    //checking the state
    //checking the zipcode
}
