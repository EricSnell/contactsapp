'use strict'

$(document).ready(function(event){

// HIDE CONTACT DETAILS DIV (SHOW WHEN CONTACT NAME IS CLICKED)
	$('.show-contact').hide();
	$('.alternate').hide();
	$('.email').hide();

// EVENT HANDLER THAT ADDS NEW CONTACT AND CLEARS TEXT INPUTS
	$('#add-button').on('click', function(event){
		event.preventDefault();
		addContact();
		clearTextField();
		console.log(contactList);
	});

	displayContactInfo();

// EVENT HANDLER THAT ADDS ANOTHER PHONE NUMBER
	$('#add-phone').click(function() {
		if ($('#first-name').val() === '' || $('#last-name').val() === '' || $('#phone-number').val() === '') {
			alert('Please enter First Name, Last Name,  and Phone Number');
		} else {
			$('.alternate').show();}
	});

// EVENT HANDLER THAT ADDS EMAIL
$('#add-email').click(function() {
		$('.email').show();
	});

/*----------- VARIABLES -----------*/

	// OBJECT THAT ADDED CONTACTS WILL INHERIT FROM
	var contactInfo = {
		firstName: '',
		lastName: '',
		phoneNumber: '',
		street: '',
		city: '',
		state: ''
	};

// ARRAY TO STORE CONTACTS
	var contactList = [];

/*------------- FUNCTIONS -------------*/

// FUNCTION THAT CREATES NEW CONTACT OBJECT INHERITED FROM contactInfo OBJECT
	function addContact() {
			var contact = Object.create(contactInfo);
			//create new contact by getting value of input field
// VALIDATE REQUIRED FORM FIELDS
		if ($('#first-name').val() === '' || $('#last-name').val() === '' || $('#phone-number').val() === '') {
			alert('Please enter First Name, Last Name,  and Phone Number');
		} else {
			contact.firstName = $('#first-name').val();
			contact.lastName = $('#last-name').val();
			contact.phoneNumber = $('#phone-number').val();
			contact.street = $('#street').val();
			contact.city = $('#city').val();
			contact.state= $('#state').val();
			contact.alternateNumber = $('#alternate-phone').val();
		 	contact.email = $('#email-address').val();
		 	// console.log('add second phone');

			// Push new object contact to the array containing all contacts
			contactList.push(contact);

			$('.alternate').hide();
			$('.email').hide();

			// Clear the class of last contact and append new object with data attribute data-index
			$('.name-list').empty();
			for (var i = 0; i < contactList.length; i++) {
				$('.name-list').append('<li data-index="' +i + '">' + contactList[i].firstName + ' ' + contactList[i].lastName + '</li>');
			}
		}
	}

// CLEARS TEXT FIELD
	function clearTextField() {
		$('#first-name').val('');
		$('#last-name').val('');
		$('#phone-number').val('');
		$('#alternate-phone').val('');
		$('#email-address').val('');
		$('#street').val('');
		$('#city').val('');
		$('#state').val('');
	}

// DISPLAY CONTACT INFO IN show-contact DIV
	function displayContactInfo() {
		$('.name-list').on('click', 'li', function(event){
			var contactIndex = $(this).data("index")
			var contact = contactList[parseInt(contactIndex)]

			$('.display-contact-info').empty();
			$('.display-contact-name').empty();
			$('.display-contact-name').append(contact.firstName + ' ' + contact.lastName);
			$('#detail-First').append('First Name:  ' + contact.firstName);
			$('#detail-Last').append('Last Name:  ' + contact.lastName);
			$('#detail-Phone').append('Phone Number:  ' + contact.phoneNumber);
			$('#detail-Address-List').append('<li>' + contact.street + ' ' + contact.city + ' ' + contact.state + '</li>');
			$('#detail-Alternate-Phone').append('Alternate Number:  ' + contact.alternateNumber);
			$('#detail-Email-Address').append('Email Address:  ' + contact.email);
			$('#detail-Address').append('Address: ');
			$('.show-contact').show();
		});
	}
});











