// CREATE A GENERAL CONTACT OBJECT
// CREATE AN EVENT HANDLER THAT CREATES NEW CONTACT OBJECT
// ALLOW USERS TO VIEW CONTACTS AS LINKS
// WHEN LINK IS CLICKED, DISPLAY CONTACT INFO IN DIV

$(document).ready(function(event){

$('#add-button').on('click', function(event){
	event.preventDefault();
	addContact();
	})

	// $("body").on('click', '', function(event){

	// })



/*-------- VARIABLES --------*/
	var contactInfo = {
		firstName: 'john',
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
		for (var i = 0; i < contactList.length; i++){
		}

		var contact = Object.create(contactInfo);

		contact.firstName = $('#first-name').val();
		contact.lastName = $('#last-name').val();
		contact.phoneNumber = $('#phone-number').val();
		contact.street = $('#street').val();
		contact.city = $('#city').val();
		contact.city = $('#state').val();

		contactList.push(contact);

		for(var prop in contactList[0]) {
		console.log(contact[prop]);
	}


		//assign unique name to each contact oject
	}

// FUNCTION THAT APPENDS NEW CONTACT OBJECT AS A LINK IN A LIST
	function contactLink() {

	}

// FUNCTION THAT DISPLAY CONTACT INFO IN show-contact DIV
	function displayContact() {

	}


});
