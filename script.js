$(function() {

///INPUT SECTION 


	var apologies = {
		food: "stealing your food",

		drunk: "contacting you when I was wasted",

		birthday: "forgetting your birthday",

		debasement: "insulting your basic character and principles",

		boyfriend: "hooking up with your boyfriend and/or girlfriend",
		
		mooning: "mooning you",

		pyramidScheme: "inviting you to take part in a pyramid scheme centered around multiple off-shore banking accounts and a series of insecure investment portfolios",

		upstagingThem: "overshadowing you",	
		
		bieber: "missing more than just your body",

	};


	var relation = {
		friend: "friends" ,

		coworker: "co-workers",

		relative: "relatives",

		partner: "partners",

		stranger: "complete strangers who have basically never spoken",

	};

	var happenAgain = {
		yes: "This might come up again at some point",
		no: "You have my utmost assurances that this won't happen again",

	};

	$("form").on("submit", function(e){
		e.preventDefault();

		var apologyGiver = $("#apologyGiver").val();
		// console.log(apologyGiver);

		var apologyRecipient = $("#apologyRecipient").val();
		// console.log(apologyRecipient);

		var apologySubjectChoice = $('input[name=apologies]:checked').val();
		subjectOfApology = apologies[apologySubjectChoice];
		console.log(subjectOfApology);

		var relationshipChoice = $('input[name=relation]:checked').val();
		relationship = relation[relationshipChoice];
		console.log(relationship);

		var frequencyChoice = $('input[name=happenAgain]:checked').val();
		frequency = happenAgain[frequencyChoice];
		console.log(frequency);

		var toneOfApology = $('input[name=sorry]:checked').val();
		console.log(toneOfApology);


		var sorry = {
			normalApology: [],
			passiveAggressive: [],
			absolutelyDevastated: [],
			enjoyingIt: []
		};

		var normalApology1 = "<p>Hey " + apologyRecipient + ",</p>" + "<p> It has come to my attention that I may have upset you when I was " + subjectOfApology + ", and I realize that this may have made you uncomfortable. " + frequency + " but, regardless, I hope this doesn’t affect our relationship as " + relationship + ".</p>" + "<p>If you feel like there is anything you would like to go over, I would be happy to talk you about it sometime in person.</p>" + "<p>Sincerely,</p> " + "<p>" + apologyGiver + "</p>";

		var normalApology2 = "<p>Hi " + apologyRecipient + ",</p>" + "<p>I realize that I may have offended you when I was " + subjectOfApology + ", " + "and I just wanted to address the problem outright.</p> <p> Given our relationship as " + relationship + ", it seems important for me to at least acknowledge as much to you.</p><p>" + frequency + ", and I think it’s important to bear this in mind going forward.</p> <p> Feel free to give me a call if you'd like.</p>" + "<p>" + apologyGiver + "</p>";

		var normalApology3 = "<p>Hi " + apologyRecipient + ",</p><p> I just wanted to say sorry for " + subjectOfApology + ".</p> <p>I think it’s unfortunate that this has left such a bad taste in both of our mouths. " + frequency  + ". Hopefully this doesn’t affect our relationship as " + relationship + ".</p>" + "<p>Best wishes, </p>" + "<p>" + apologyGiver + "</p>"; 

		var passiveAggressive1 = "<p>Hiii " + apologyRecipient + "!!!</p>" + "<p>Someone just told me that you may be a little “upset” with me for " + subjectOfApology + ", so I thought I should “apologize”, given that we’re " + relationship + " or whatever.</p> <p> Obviously, this isn't really a big deal, but I guess I can’t say that I’m surprised that this bothered you so much, knowing how sensitive you are. " + frequency + ". But I really hope this at least helps you get some sleep tonight …</p>" + "<p>K bye bye!</p> " + "<p>" +apologyGiver + "</p>";

    	var passiveAggressive2 = "<p>Hi " + apologyRecipient + "!</p>" + "<p>I’m so sorry it took me so long to get back to your message - I’ve been really busy! I just wanted to apologize for " + subjectOfApology + ", because you’re T-O-T-A-L-L-Y right that this is something that shouldn’t happen between " + relationship + ".</p> <p>It seems really weird that you've been so broken up about such a minor event, so I think it’s probably best for both of us to just move on with our lives.</p>" + "<p>Ciao, </p>" + "<p>" + apologyGiver + "</p>";  

    	var passiveAggressive3 = "<p>" + apologyRecipient + ",</p>" + "<p>I really don’t think that " + subjectOfApology + " is THAT big of a deal, but sorry if you got your feelings hurt bye - " + apologyGiver + "</p>";

		var passiveAggressive4 = "<p>Wooowwww, " + apologyRecipient + ".</p><p>Real mature. I'm sorry for " + subjectOfApology + ", but I really think you're blowing this out of proportion ...</p>" + "<p> - " + apologyGiver + "</p>";

    	var absolutelyDevastated1 = "<p>My dearest " + apologyRecipient + ",</p>" + "<p>All I do is think about how " +  subjectOfApology + " was the worst mistake I’ve ever made.</p> <p>The man at the movie theater says I can't come back anymore because I cry too much.</p>" + "<p>This is my fifteenth letter.</p>" + "<p>Love, </p>" + "<p>" + apologyGiver + "</p>"

    	var absolutelyDevastated2 = "<p>My dearest " + apologyRecipient + ",</p>" + "<p>Did you get the flowers I left you?</p> <p> I stuffed them through the door-slot. </p> <p>I'm so sorry for " +  subjectOfApology + ".</p>" + "<p>Love,</p>" + "<p>" + apologyGiver + "</p>"; 

    	var absolutelyDevastated3 = "<p>My dearest " + apologyRecipient + ",</p>" + "<p>“What's in a name? That which we call a rose / By any other name would smell as sweet.”</p>" + "<p> Also, I'm sorry for " + subjectOfApology + ".</p>" + "<p> Hopefully, you still want to be " + relationship  + ".</p>" + "<p> Love,</p>"+ "<p>" + apologyGiver + "</p>";

		var absolutelyDevastated4 = "<p>My dearest sweet angel " + apologyRecipient + ",</p>" + "<p>I cannot fathom the fact that I was " + subjectOfApology + ". " + frequency + ".</p> <p>Your voicemail was full. Please call me back. </p><p>Can't we just go back to being " + relationship + "?</p><p>It was all so simple then ... </p>" + "<p>Yours in servitude,</p>" + "<p>" + apologyGiver + "</p>";

		var absolutelyDevastated5 = "<p>My sweet sugar-plum " + apologyRecipient + ",</p><p>I'm so sorry for " + subjectOfApology + ".</p><p>I wasn't thinking clearly - I must have been overheated.</p><p>You're one of my favourite " + relationship + ".</p> <p>The mailman returned the fruit basket I sent you :'( </p><p>" + apologyGiver + "</p>";    

    	var enjoyingIt1 = "<p>Namaste, motherfucker!</p>" + "<p> You're damn right I enjoyed " + subjectOfApology + ", and I plan on doing it again.</p>" + "<p>See you in hell, " + apologyRecipient + ".</p>"; 

    	var enjoyingIt2 = "<p>Take a hike, " + apologyRecipient + ".</p>" + "<p> I loved " + subjectOfApology + " and I'd do it again in a heartbeat.</p>" + "<p> - " + apologyGiver + "</p>";

    	var enjoyingIt3 = "<p>Suck a bag of lemons, " + apologyRecipient + ".</p>" + "<p>I hope " + subjectOfApology + " put some things in perspective for you.</p>" + "<p>" + apologyGiver + " OUT</p>";

    	var enjoyingIt4 = "<p>" + apologyRecipient + ",</p>" + "<p>I'm only writing this because my mom made me.</p> <p>I'm not sorry for " + subjectOfApology + ", and I told everyone you smell weird.</p>" + "<p>- " + apologyGiver + "</p>";

    	var enjoyingIt5 = "<p>Hey " + apologyRecipient + ",</p>" + "<p>Sorry for " + subjectOfApology + ", but you got what you deserved.</p> <p> Our relationship as " + relationship + " is over.</p>" + "<p> Peace, motherfucker. </p>" + "<p>" + apologyGiver + "</p>";

		sorry.normalApology.push(normalApology1, normalApology2, normalApology3);
		sorry.passiveAggressive.push(passiveAggressive1, passiveAggressive2, passiveAggressive3, passiveAggressive4);
		sorry.absolutelyDevastated.push(absolutelyDevastated1,absolutelyDevastated2,absolutelyDevastated3, absolutelyDevastated4, absolutelyDevastated5);
		sorry.enjoyingIt.push(enjoyingIt1, enjoyingIt2, enjoyingIt3, enjoyingIt4,enjoyingIt5);

		// Randomly pick an apology 
		var finalSentences = sorry[toneOfApology];

		var randomNumber = Math.floor(Math.random() * finalSentences.length);
		console.log(randomNumber);
		console.log(finalSentences[randomNumber]);
		// https://www.youtube.com/watch?v=kffacxfA7G4


		$('.letterSection p').html(finalSentences[randomNumber]);
		$('.letterSection').show();


			$.smoothScroll( {
				scrollTarget: '#letterSection'
		});



		});	

		$('.apologyOptions label').on('click', function() {
			$('.apologyOptions label').removeClass('optionChanges'); 
			$(this).addClass('optionChanges');
		});

		$('.relationshipOptions label').on('click', function() {
			$('.relationshipOptions label').removeClass('optionChanges'); 
			$(this).addClass('optionChanges');
		});

		$('.happenAgain label').on('click', function() {
			$('.happenAgain label').removeClass('optionChanges'); 
			$(this).addClass('optionChanges');
		});

		$('.sorryTypes label').on('click', function() {
			$('.sorryTypes label').removeClass('optionChanges'); 
			$(this).addClass('optionChanges');
		});

		
		$('#printme').on('click', function(e){
		     e.preventDefault();
		     $('.generatedLetter').printMe();
		});


		
	});




