/* <![CDATA[ */

// Jquery validate form booking
jQuery(document).ready(function(){

	$('#availability-form').submit(function(){

		var action = $(this).attr('action');

		$("#message-booking").slideUp(750,function() {
		$('#message-booking').hide();

 		$('#submit-booking')
			.after('<img src="images/ajax-loader.gif" class="loader" >')
			.attr('disabled','disabled');
			
		$.post(action, {
			check_in: $('#check_in').val(),
			check_out: $('#check_out').val(),
			guest: $('#guest').val(),
			child: $('#child').val(),
			rooms_type: $('#rooms_type').val(),
			name: $('#name').val(),
			last_name: $('#last_name').val(),
			email: $('#email').val(),
			phone_number: $('#phone_number').val(),
			verify_booking: $('#verify_booking').val()
		},
			function(data){
				document.getElementById('message-booking').innerHTML = data;
				$('#message-booking').slideDown('slow');
				$('#availability-form .loader').fadeOut('slow',function(){$(this).remove()});
				$('#submit-booking').removeAttr('disabled');
				if(data.match('success') != null) $('#availability-form').slideUp('slow');

			}
		);

		});

		return false;

	});
		});
		
// Jquery validate form contact
jQuery(document).ready(function(){

	$('#contact-form').submit(function(){

		var action = $(this).attr('action');

		$("#message-contact").slideUp(750,function() {
		$('#message-contact').hide();

 		$('#submit_contact')
			.after('<img src="images/ajax-loader.gif" class="loader" >')
			.attr('disabled','disabled');
			
		$.post(action, {
			name_contact: $('#name_contact').val(),
			last_name_contact: $('#last_name_contact').val(),
			email_contact: $('#email_contact').val(),
			phone_number_contact: $('#phone_number_contact').val(),
			message_contact: $('#message_contact').val(),
			verify_contact: $('#verify_contact').val()
		},
			function(data){
				document.getElementById('message-contact').innerHTML = data;
				$('#message-contact').slideDown('slow');
				$('#contact-form .loader').fadeOut('slow',function(){$(this).remove()});
				$('#submit_contact').removeAttr('disabled');
				if(data.match('success') != null) $('#contact-form').slideUp('slow');

			}
		);

		});

		return false;

	});
		});
	

  /* ]]> */