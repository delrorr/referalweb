
//jQuery time
var current_fs, next_fs, previous_fs; //fieldsets
var left, opacity, scale; //fieldset properties which we will animate
var animating; //flag to prevent quick multi-click glitches
var RWA_used=false;
var elementClicked = false;
var AgreeBtn = false;

$(".next").click(function(){
	if(animating) return false;
	animating = true;
	
	current_fs = $(this).parent();
	next_fs = $(this).parent().next();

	// console.log("current: "+$("fieldset").index(current_fs));
	// console.log("next: "+$("fieldset").index(next_fs));
	// // var AgreeBtn = document.getElementById('agreeBtn').checked;
	// console.log("checkbox: "+AgreeBtn);

	//activate next step on progressbar using the index of next_fs
	if($("fieldset").index(current_fs)==0 && $("fieldset").index(previous_fs)==2)
	{	
		//when next button pressed from "REFERRAL SENDER" GUI
		//special case, as progress bar remains on same step
		RWA_used = true;
		$("#progressbar li").eq($("fieldset").index(current_fs)-4).addClass("active");
	}
	else if($("fieldset").index(current_fs)==2 && $("fieldset").index(previous_fs)==2)
	{	
		//when next button pressed from "Search ORTHODONTISTS" GUI
		//special case, as progress bar remains on same step

		if($('.left-col h1').text() == "REFERRAL WEB")
		{
			current_fs = $(this).parent().prev();
			next_fs = $(this).parent();
			alert("Please first select a doctor to proceed");
		}
		else
		{
			$("#progressbar li").eq($("fieldset").index(next_fs)-2).addClass("active");
		}
	}
	else if($("fieldset").index(current_fs)==2 && $("fieldset").index(previous_fs)==1)
	{	
		//when next button pressed from "Search ORTHODONTISTS" GUI
		//special case, when previous button pressed and again search button pressed
		
		if($('.left-col h1').text() == "REFERRAL WEB")
		{
			current_fs = $(this).parent().prev();
			next_fs = $(this).parent();
			alert("Please first select a doctor to proceed");
		}
		else
		{
			$("#progressbar li").eq($("fieldset").index(next_fs)-2).addClass("active");
		}
	}
	else if($("fieldset").index(next_fs)==0)	//highlight number 1
	{	
		next_fs = next_fs.next();
		$("#progressbar li").eq($("fieldset").index(next_fs)-1).addClass("active");
	}
	else if($("fieldset").index(next_fs)==1)
	{
		next_fs = next_fs.prev();
	}
	else if($("fieldset").index(next_fs)==2) //highlight number 2
	{
		if($('.left-col h1').text() == "REFERRAL WEB")
		{
			current_fs = $(this).parent().prev();
			next_fs = $(this).parent();
			alert("Please first select a doctor to proceed");
		}
		else
		{
			next_fs = next_fs.next();
			$("#progressbar li").eq($("fieldset").index(next_fs)-2).addClass("active");
		}
	}
	else if($("fieldset").index(next_fs)==3) //highlight number 3
	{
		$("#progressbar li").eq($("fieldset").index(next_fs)-1).addClass("active");
	}
	else if($("fieldset").index(next_fs)==6) //highlight number 2
	{
		if(AgreeBtn == false)
		{
			current_fs = $(this).parent().prev();
			next_fs = $(this).parent();
			alert("Please first Check \"This has been reviewed by Referral Sender\"");
		}
	}
	else
	{
		$("#progressbar li").eq($("fieldset").index(next_fs)-2).addClass("active");
	}
	
	
	//show the next fieldset
	next_fs.show(); 
	//hide the current fieldset with style
	current_fs.animate({opacity: 0}, {
		step: function(now, mx) {
			//as the opacity of current_fs reduces to 0 - stored in "now"
			//1. scale current_fs down to 80%
		// scale = 1 - (1 - now) * 0.2;
			scale = 1;
			//2. bring next_fs from the right(50%)
			// left = (now * 50)+"%";
			//3. increase opacity of next_fs to 1 as it moves in
			opacity = 1 - now;
			current_fs.css({
        'transform': 'scale('+scale+')',
        'position': 'relative'
      });
			next_fs.css({'left': left, 'opacity': opacity});
		}, 
		duration: 10, 
		complete: function(){
			current_fs.hide();
			animating = false;
		}, 
		//this comes from the custom easing plugin
		//easing: 'easeInOutBack'
	});
});

$(".previous").click(function(){
	if(animating) return false;
	animating = true;
	elementClicked = false;
	
	current_fs = $(this).parent();
	previous_fs = $(this).parent().prev();
	// console.log($("fieldset").index(current_fs));
	// console.log("current: "+$("fieldset").index(current_fs));
	// console.log("previous: "+$("fieldset").index(previous_fs));

	//de-activate current step on progressbar
	if(RWA_used && $("fieldset").index(current_fs)==3 && $("fieldset").index(previous_fs)==2)
	{
		//Back button to REFERRAL SENDER GUI
		RWA_used = false;
		$("#progressbar li").eq($("fieldset").index(current_fs)-2).removeClass("active");
	 	previous_fs = previous_fs.prev();
	 	$('.logo-wrapper img').attr('src',"assets/referal-logo1.png");
		$('.left-col h1').text("REFERRAL WEB");
	}
	
	else if($("fieldset").index(current_fs)==0)
	{	
		$("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
	}
	else if($("fieldset").index(current_fs)==1) // back to sign-in from 1
	{	
		location.reload();
		$("#progressbar li").eq($("fieldset").index(current_fs)-1).removeClass("active");
		previous_fs = previous_fs.prev();
		// $('.logo-wrapper img').attr('src',"assets/referal-logo1.png");
		// $('.left-col h1').text("REFERRAL WEB");
	}
	else if($("fieldset").index(current_fs)==2) //bach to refferrel from search 
	{
		$("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
		$('.logo-wrapper img').attr('src',"assets/referal-logo1.png");
		$('.left-col h1').text("REFERRAL WEB");
	}
	else if($("fieldset").index(current_fs)==3) //back to 1 from 2
	{
		//to skip search ORTHODONTISTS on previous button
		previous_fs = previous_fs.prev();
		$("#progressbar li").eq($("fieldset").index(current_fs)-2).removeClass("active");
		$('.logo-wrapper img').attr('src',"assets/referal-logo1.png");
		$('.left-col h1').text("REFERRAL WEB");
	}
	else
	{
		$("#progressbar li").eq($("fieldset").index(current_fs)-2).removeClass("active");
	}
	

	//show the previous fieldset
	previous_fs.show(); 
	//hide the current fieldset with style
	current_fs.animate({opacity: 0}, {
		step: function(now, mx) {
			//as the opacity of current_fs reduces to 0 - stored in "now"
			//1. scale previous_fs from 80% to 100%
		// scale = 0.8 + (1 - now) * 0.2;
			scale = 1;
			//2. take current_fs to the right(50%) - from 0%
			// left = ((1-now) * 50)+"%";
			//3. increase opacity of previous_fs to 1 as it moves in
			opacity = 1 - now;
			current_fs.css({'left': left});
			previous_fs.css({'transform': 'scale('+scale+')', 'opacity': opacity});
			if($("fieldset").index(current_fs)==1)
			{	
				// to remove transformation on if previous button is for signup page
				$(".signup-field-wrapper").removeAttr("style");
			}
		}, 
		duration: 10, 
		complete: function(){
			current_fs.hide();
			animating = false;
		}, 
		//this comes from the custom easing plugin
		//easing: 'easeInOutBack'
	});
});

$('.anothe-ref').on('click', function (e) {
	if(animating) return false;
		animating = true;
	elementClicked = false;
	AgreeBtn = false;
	$('.logo-wrapper img').attr('src',"assets/referal-logo1.png");
	$('.left-col h1').text("REFERRAL WEB");
	$("#agreeBtn").removeClass("checked");
	$("#agreeBtn").checked = false;
	// .removeClass("active");
	$("#progressbar li").eq(3).removeClass("active");
	$("#progressbar li").eq(2).removeClass("active");
	$("#progressbar li").eq(1).removeClass("active");
	current_fs = $(this).parent();
	previous_fs = $(this).parent().prev().prev().prev().prev().prev();
	
	//show the previous fieldset
	previous_fs.show(); 
	//hide the current fieldset with style
	current_fs.animate({opacity: 0}, {
		step: function(now, mx) {
			//as the opacity of current_fs reduces to 0 - stored in "now"
			//1. scale previous_fs from 80% to 100%
		// scale = 0.8 + (1 - now) * 0.2;
			scale = 1;
			//2. take current_fs to the right(50%) - from 0%
			// left = ((1-now) * 50)+"%";
			//3. increase opacity of previous_fs to 1 as it moves in
			opacity = 1 - now;
			current_fs.css({'left': left});
			previous_fs.css({'transform': 'scale('+scale+')', 'opacity': opacity});
			if($("fieldset").index(current_fs)==1)
			{	
				// to remove transformation on if previous button is for signup page
				$(".signup-field-wrapper").removeAttr("style");
			}
		}, 
		duration: 10, 
		complete: function(){
			current_fs.hide();
			animating = false;
		}, 
		//this comes from the custom easing plugin
		//easing: 'easeInOutBack'
	});
});

$(".submit").click(function(){
	return false;
})

function toggleCheck()
{
	if(AgreeBtn == false)
		AgreeBtn = true;
	else
		AgreeBtn = false;
}