/**
 * UC 1 : Ability to create a Address Book
 *        Contact with first and last names,
 *        address, city, state, zip, phone number
 *        and email...
 * 
 * @author Krunal Lad
 * @since 26-07-2021
 */

// importing another class file to this class file
const ContactDetails = require("./ContactDetails.js");
const prompt = require('prompt-sync')();

// ability to add details to ContactDetails class
var contactInfo = new ContactDetails("Krunal","Lad","Dahanu","Mumbai","Maharshtra","405605","8975466584"
                  ,"kunallad6789@yahoo.com");

console.log(contactInfo.toString());


contactInfo.firstName = "Rahul";
contactInfo.lastName = "Sharma";
contactInfo.address = "Dadra";
contactInfo.city = "Dadra";
contactInfo.state = "Gujarat";
contactInfo.zip = "456895";
contactInfo.phoneNumber = "9875658624";
contactInfo.email = "rahulsharma34@gmail.com";
console.log(contactInfo.toString());

//Ability to add user-defined values to the PersonInfoData
contactInfo.firstName = prompt("Enter First Name : "); 
contactInfo.lastName = prompt("Enter Last Name : "); 
contactInfo.address = prompt("Enter Address : "); 
contactInfo.city = prompt("Enter City : "); 
contactInfo.state = prompt("Enter State : "); 
contactInfo.zip = prompt("Enter Zip : "); 
contactInfo.phoneNumber = prompt("Enter Phone Number : "); 
contactInfo.email = prompt("Enter Email : "); 
console.log(contactInfo.toString());