$(document).ready(function(event){

	// Hides contact details div
	$('.show-contact').hide();

	// Adds contact 
	$('#add-button').on('click', function(event){
		event.preventDefault();	
		addContact();			
		clearTextField();			
	});	

	// Display contact details to the right
		displayContactInfo();

	// Duplicate Phone Number field event
	$('body').on('click','#add-number-button',function(event){	
		event.preventDefault();
		addPhoneNumberInput();
	});

	// Duplicate Street, City, and State fields event
	$('body').on('click', '#add-address-button', function(event) {
    	event.preventDefault();
    	addAddressInput($('.address-div:first'));
  	});


	// Remove added phone number or address
	$('body').on('click','.remove-item', function(event){
		event.preventDefault();
		$(this).parent().remove();
	});	



/*----------- VARIABLES -----------*/
	// Address object 
	var fullAddress = {
		street: '',
		city: '',
		state: ''
	};

	// Object that contacts added will inherit from
	var contactInfo = {
		firstName: '',
		lastName: '',
		phoneNumber: [],
		address: [fullAddress]
	};

	// Array to store contact objects
	var contactList = [];




/*------------- FUNCTIONS -------------*/

// Creates new contact object and pushes to contacts array
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
			contactLink();
		}	
	}

// Displays contact list 
	function contactLink() {
		$('.name-list').empty();
			for (var i = 0; i < contactList.length; i++) {
				$('.name-list').append('<li data-index="' +i + '">' + contactList[i].firstName + ' ' + contactList[i].lastName + '</li>');
			}
	} 

// Adds new phone number inputs
	function addPhoneNumberInput() {

		$('#phone-numbers-container').append('<div class="phone-number-div"><input type="text" name="info" value=""><button class="remove-item">x</button>');
	}

// Adds new street, city, and state inputs
	function addAddressInput(element) {
		
    	var newAddress = "<fieldset id='address-container'><div class='address-div'><h3>Street</h3><input type='text' id='street' name='info' value=''><h3>City</h3><input type='text' id='city' name='info' value=''><h3>State</h3><input type='text' id='state' name='info' value=''><button class='remove-item'>x</button></div></fieldset>";
   		
   		element.append(newAddress);
  }


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