$(document).ready(function(){

		$('#mainHeading').click(function(){
			$('.circleDiv:nth-of-type(1)').css({visibility:'visible',transform:'scale(1)',transition:'transform 0.5s linear'})
			$('.circleDiv:nth-of-type(2)').css({visibility:'visible',transform:'scale(1)',transition:'transform 0.6s linear'})
			$('.circleDiv:nth-of-type(3)').css({visibility:'visible',transform:'scale(1)',transition:'transform 0.7s linear'})
			$('.circleDiv:nth-of-type(4)').css({visibility:'visible',transform:'scale(1)',transition:'transform 0.8s linear'})
			$('.circleDiv:nth-of-type(5)').css({visibility:'visible',transform:'scale(1)',transition:'transform 0.9s linear'})
			$('.circleDiv:nth-of-type(6)').css({visibility:'visible',transform:'scale(1)',transition:'transform 1s linear'})

		})

		$('.circleDiv').mouseenter(function(){

			$(this).css({transform:'scale(1.2)',transition:'transform 0.2s linear'})
		})
		$('.circleDiv').mouseleave(function(){
			
			$(this).css({transform:'scale(1)',transition:'transform 0.2s linear'})
		})

		
		var moveCircle = function(){
			var sides = ['left','right'];
			var randomSideIndex = Math.floor((Math.random() * 2) + 1)
			var randomSide = sides[randomSideIndex]
			var animateObject = {}
		
			var circle =".circleDiv:nth-of-type("+(Math.floor((Math.random() * 6) + 1))+")"
			randomPx = Math.floor((Math.random() * 80) + (-20))
			animateObject[randomSide]=randomPx;

			/*$(circle).animate(animateObject)*/
		}

		$('.circleDiv').click(function(){
			$('.circleDiv').css({color:'gold',border:'4px solid black'})
			$('.circleDiv').animate({marginLeft:'71%',width:'20%',height:'10%'})

			$('.circleDiv:nth-of-type(1)').animate({marginTop:'1%'})
			$('.circleDiv:nth-of-type(2)').animate({marginTop:'8%'})
			$('.circleDiv:nth-of-type(3)').animate({marginTop:'16%'})
			$('.circleDiv:nth-of-type(4)').animate({marginTop:'24%'})
			$('.circleDiv:nth-of-type(5)').animate({marginTop:'32%'})
			$('.circleDiv:nth-of-type(6)').animate({marginTop:'40%'})

			$('#popUpDiv').css({'visibility':'visible'});
			$('#mainHeading').css({'visibility':'hidden'});

		})
		
		setInterval(moveCircle,1000);

})