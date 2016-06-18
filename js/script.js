// CREATE A GENERAL CONTACT OBJECT
// CREATE AN EVENT HANDLER THAT CREATES NEW CONTACT OBJECT
// ALLOW USERS TO VIEW CONTACTS AS LINKS
// WHEN LINK IS CLICKED, DISPLAY CONTACT INFO IN DIV

$(document).ready(function(event){

$('.show-contact').hide(); //This class will later display contact details when a contact from a <li> is clicked
//Listen for submission, then call functions that follow
$('#add-button').on('click', function(event){
	event.preventDefault();
	addContact(); //creates new contact object
	clearTextField(); //clears input text field after the form is submitted
	});

	// $("body").on('click', '', function(event){
	// })

/*-------- VARIABLES --------*/

//This is the object prototype new contact objects will inherit from
	var contactInfo = {
		firstName: '',
		lastName: '',
		phoneNumber: '',
		street: '',
		city: '',
		state: ''
	};
	// Array to store contact objects, using a for loop to append First & Last name to <ul>
	var contactList = [];

/*---------- FUNCTIONS ----------*/

// FUNCTION THAT CREATES NEW CONTACT OBJECT INHERITED FROM contactInfo OBJECT
	function addContact() {
		//create new contact by getting value of input field
		var contact = Object.create(contactInfo);
		contact.firstName = $('#first-name').val();
		contact.lastName = $('#last-name').val();
		contact.phoneNumber = $('#phone-number').val();
		contact.street = $('#street').val();
		contact.city = $('#city').val();
		contact.state= $('#state').val();
//Push new object contact to the array containing all contacts
		contactList.push(contact);
//Clear the class of last contact and append new object with data attribute data-index
		$('.name-list').empty();
		for (var i = 0; i < contactList.length; i++) {
			$('.name-list').append('<li data-index="' +i + '">' + contactList[i].firstName + ' ' + contactList[i].lastName + '</li>');
		}
	}

// FUNCTION THAT CLEARS TEXT FIELD
	function clearTextField() {
		$('#first-name').val('');
		$('#last-name').val('');
		$('#phone-number').val('');
		$('#street').val('');
		$('#city').val('');
		$('#state').val('');
	}

// // FUNCTION THAT DISPLAY CONTACT INFO IN show-contact DIV

	$('.name-list').on('click', 'li', function(event) {
			var contactIndex = $(this).data("index")
			var contact = contactList[parseInt(contactIndex)]
			console.log(contact);
			$('.display-contact-info').empty();
			$('#detail-first').append(contact.firstName);
			$('#detail-last').append(contact.lastName);
			$('#detail-phone').append(contact.phoneNumber);
			$('#detail-address').append(contact.street + ', ' + contact.city + ', ' + contact.state);
			$('.show-contact').show();

// // data attributes - HTML 5 concept
//  		$(this).(contact.firstName)
	})

});











