// CREATE A GENERAL CONTACT OBJECT
// CREATE AN EVENT HANDLER THAT CREATES NEW CONTACT OBJECT
// ALLOW USERS TO VIEW CONTACTS AS LINKS
// WHEN LINK IS CLICKED, DISPLAY CONTACT INFO IN DIV

$(document).ready(function(event){

$('#add-button').on('click', function(event){
	$('.show-contact').hide();
	event.preventDefault();
	addContact();
	clearTextField();
	})

	// $("body").on('click', '', function(event){

	// })



/*-------- VARIABLES --------*/
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

		contactList.push(contact);
//
		$('.name-list').empty();
		for (var i = 0; i < contactList.length; i++) {
			$('.name-list').append('<li>' + contactList[i].firstName + ' ' + contactList[i].lastName + '</li>');
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

// FUNCTION THAT APPENDS NEW CONTACT OBJECT AS A LINK IN A LIST



// // FUNCTION THAT DISPLAY CONTACT INFO IN show-contact DIV


	// $('.contact-links').on('click', 'li', function(event) {

// // data attributes - HTML 5 concept
//  		$(this).(contact.firstName)
//  	})

});











