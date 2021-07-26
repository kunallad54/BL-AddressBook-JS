/**
 * UC 2 : Ability to ensure Valid Contacts are added.
 *        - First Name and Last Name should start with Capital and Minimum 3 Characters
 *        - Address, City and State should also have minimum 4 characters
 *        - Zip, Phone and Email should be valid as done in the Pattern Exercise
 *        - Throw Error if the RegEx test fails
 * 
 * @author Krunal Lad
 * @since 26-07-2021
 */

// importing another class file to this class file
const ContactDetails = require("./ContactDetails.js");
const prompt = require('prompt-sync')();


//Ability to add user-defined values to the PersonInfoData
try {
    let contactInfo = new ContactDetails();
    contactInfo.fName = prompt("Enter First Name : ");
    contactInfo.lName = prompt("Enter Last Name : ");
    contactInfo.addressName = prompt("Enter Address : ");
    contactInfo.cityName = prompt("Enter City : ");
    contactInfo.stateName = prompt("Enter State : ");
    contactInfo.zipNumber = prompt("Enter Zip : ");
    contactInfo.phoneNo = prompt("Enter Phone Number : ");
    contactInfo.emailID = prompt("Enter Email : ");
    console.log(contactInfo.toString());
} catch (e) {
    console.error(e);
}
