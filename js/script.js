$(document).ready(function(event){

	// Hides contact details div
	$('.show-contact').hide();

	// Adds contact 
	$('#add-button').on('click', function(event){
		event.preventDefault();	
		addContact();			
		clearTextField();			
	});	

	displayContactInfo();

	$('body').on('click','#add-number-button',function(event){	
		event.preventDefault();
		addPhoneNumber();
	});

/*----------- VARIABLES -----------*/

	// Object that contacts added will inherit from
	var contactInfo = {
		firstName: '',
		lastName: '',
		phoneNumber: '',
		street: '',
		city: '',
		state: ''
	};

	// Array to store contact objects
	var contactList = [];


/*------------- FUNCTIONS -------------*/

// Creates new contact object and pushes to array
	function addContact() {

		var contact = Object.create(contactInfo);

		if ($('#first-name').val() === '' || $('#phone-number').val() === '') {	
			alert('Please enter First Name and Phone Number');
			return false;

		} else {
			contact.firstName = $('#first-name').val();
			contact.lastName = $('#last-name').val();
			contact.phoneNumber = $('#phone-number').val();
			contact.street = $('#street').val();
			contact.city = $('#city').val();
			contact.state= $('#state').val();

			contactList.push(contact);

			// Empty previous list and display updated list
			$('.name-list').empty();
			for (var i = 0; i < contactList.length; i++) {
				$('.name-list').append('<li data-index="' +i + '">' + contactList[i].firstName + ' ' + contactList[i].lastName + '</li>');
			}
		}
	}

// Add new phone number input
	function addPhoneNumber() {
		('#phone-number').clone.append('#phone-number');
	}

// Add new street, city, and state input


// Clears form after adding new contact
	function clearTextField() {

		$('#first-name').val('');
		$('#last-name').val('');
		$('#phone-number').val('');
		$('#street').val('');
		$('#city').val('');
		$('#state').val('');
	}

// Displays contact details when name is clicked
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
			$('#detail-Address').append('Address: ');
			$('#detail-Address-List').append('<li>' + contact.street + ', ' + contact.city + ', ' + contact.state + '</li>');

			$('.show-contact').show();
		});
	}
});