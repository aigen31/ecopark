$(function () {
	if ($(window).outerWidth() < 576) {
		AOS.init({
			disable: true
		});
	} else {
		AOS.init({
			once: true,
			offset: 60
		});
	}

	lightbox.option({
		'albumLabel': "Изображение %1 из %2",
		'disableScrolling': true
	})

	$('.s-plan__slider').slick({
		slidesToShow: 2,
		slidesToScroll: 2,
		responsive: [
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					prevArrow: '<button class="s-plan__slider-arrow s-plan__slider-arrow--left"></button>',
					nextArrow: '<button class="s-plan__slider-arrow s-plan__slider-arrow--right"></button>',
				}
			},
		]
	});

	const planData = [
		{
			id: 0,
			free: true,
			x: 23.68,
			y: 15.33,
			parameters: [
				{
					'Площадь': '87,0 м²',
				},
				{
					'Спальня': '3',
				},
				{
					'Санузел': '1',
				},
				{
					'Кадастровый №': '50:20:0041133:2329',
				},
				{
					'№ участка': '1',
				},
				{
					'Стоимость:': 'от 8 598 000 ₽',
				},
			],
		},
		{
			id: 1,
			free: true,
			x: 33.68,
			y: 13.05,
			parameters: [
				{
					'Площадь': '87,0 м²',
				},
				{
					'Спальня': '3',
				},
				{
					'Санузел': '1',
				},
				{
					'Кадастровый №': '50:20:0041133:2329',
				},
				{
					'№ участка': '1',
				},
				{
					'Стоимость:': 'от 8 598 000 ₽',
				},
			],
		},
		{
			id: 2,
			free: true,
			x: 44.19,
			y: 9.71,
			parameters: [
				{
					'Площадь': '92,8 м²',
				},
				{
					'Спальня': '3',
				},
				{
					'Санузел': '1',
				},
				{
					'Кадастровый №': '50:20:0041133:2329',
				},
				{
					'№ участка': '2',
				},
				{
					'Стоимость:': 'от 8 598 000 ₽',
				},
			],
		},
		{
			id: 3,
			free: true,
			x: 53.08,
			y: 7.44,
			parameters: [
				{
					'Площадь': '97,8 м²',
				},
				{
					'Спальня': '3',
				},
				{
					'Санузел': '1',
				},
				{
					'Кадастровый №': '50:20:0041133:2329',
				},
				{
					'№ участка': '3',
				},
				{
					'Стоимость:': 'от 8 598 000 ₽',
				},
			],
		},
		{
			id: 4,
			free: true,
			x: 62.39,
			y: 4.10,
			parameters: [
				{
					'Площадь': '102,8 м²',
				},
				{
					'Спальня': '3',
				},
				{
					'Санузел': '1',
				},
				{
					'Кадастровый №': '50:20:0041133:2329',
				},
				{
					'№ участка': '4',
				},
				{
					'Стоимость:': 'от 8 598 000 ₽',
				},
			],
		},
		{
			id: 5,
			free: true,
			x: 7.44,
			y: 39.30,
			parameters: [
				{
					'Площадь': '110,4 м²',
				},
				{
					'Спальня': '3',
				},
				{
					'Санузел': '1',
				},
				{
					'Кадастровый №': '50:20:0041133:2329',
				},
				{
					'№ участка': '5',
				},
				{
					'Стоимость:': 'от 8 598 000 ₽',
				},
			],
		},
		{
			id: 6,
			free: false,
			x: 26.24,
			y: 33.23,
			parameters: [
				{
					'Площадь': '87,0 м²',
				},
				{
					'Спальня': '3',
				},
				{
					'Санузел': '1',
				},
				{
					'Кадастровый №': '50:20:0041133:2329',
				},
				{
					'№ участка': '6',
				},
				{
					'Стоимость:': 'от 8 598 000 ₽',
				},
			],
		},
		{
			id: 7,
			free: true,
			x: 37.26,
			y: 29.74,
			parameters: [
				{
					'Площадь': '87,0 м²',
				},
				{
					'Спальня': '3',
				},
				{
					'Санузел': '1',
				},
				{
					'Кадастровый №': '50:20:0041133:2329',
				},
				{
					'№ участка': '7',
				},
				{
					'Стоимость:': 'от 8 598 000 ₽',
				},
			],
		},
		{
			id: 8,
			free: true,
			x: 48.12,
			y: 26.40,
			parameters: [
				{
					'Площадь': '87,0 м²',
				},
				{
					'Спальня': '3',
				},
				{
					'Санузел': '1',
				},
				{
					'Кадастровый №': '50:20:0041133:2329',
				},
				{
					'№ участка': '8',
				},
				{
					'Стоимость:': 'от 8 598 000 ₽',
				},
			],
		},
		{
			id: 9,
			free: true,
			x: 59.15,
			y: 22.91,
			parameters: [
				{
					'Площадь': '87,0 м²',
				},
				{
					'Спальня': '3',
				},
				{
					'Санузел': '1',
				},
				{
					'Кадастровый №': '50:20:0041133:2329',
				},
				{
					'№ участка': '9',
				},
				{
					'Стоимость:': 'от 8 598 000 ₽',
				},
			],
		},
		{
			id: 10,
			free: true,
			x: 68.38,
			y: 19.42,
			parameters: [
				{
					'Площадь': '87,0 м²',
				},
				{
					'Спальня': '3',
				},
				{
					'Санузел': '1',
				},
				{
					'Кадастровый №': '50:20:0041133:2329',
				},
				{
					'№ участка': '10',
				},
				{
					'Стоимость:': 'от 8 598 000 ₽',
				},
			],
		},
		{
			id: 11,
			free: true,
			x: 7.44,
			y: 51.29,
			parameters: [
				{
					'Площадь': '87,0 м²',
				},
				{
					'Спальня': '3',
				},
				{
					'Санузел': '1',
				},
				{
					'Кадастровый №': '50:20:0041133:2329',
				},
				{
					'№ участка': '11',
				},
				{
					'Стоимость:': 'от 8 598 000 ₽',
				},
			],
		},
		{
			id: 12,
			free: false,
			x: 27.52,
			y: 43.85,
			parameters: [
				{
					'Площадь': '87,0 м²',
				},
				{
					'Спальня': '3',
				},
				{
					'Санузел': '1',
				},
				{
					'Кадастровый №': '50:20:0041133:2329',
				},
				{
					'№ участка': '12',
				},
				{
					'Стоимость:': 'от 8 598 000 ₽',
				},
			],
		},
		{
			id: 13,
			free: true,
			x: 38.97,
			y: 39.30,
			parameters: [
				{
					'Площадь': '87,0 м²',
				},
				{
					'Спальня': '3',
				},
				{
					'Санузел': '1',
				},
				{
					'Кадастровый №': '50:20:0041133:2329',
				},
				{
					'№ участка': '13',
				},
				{
					'Стоимость:': 'от 8 598 000 ₽',
				},
			],
		},
		{
			id: 14,
			free: true,
			x: 50.51,
			y: 35.51,
			parameters: [
				{
					'Площадь': '87,0 м²',
				},
				{
					'Спальня': '3',
				},
				{
					'Санузел': '1',
				},
				{
					'Кадастровый №': '50:20:0041133:2329',
				},
				{
					'№ участка': '14',
				},
				{
					'Стоимость:': 'от 8 598 000 ₽',
				},
			],
		},
		{
			id: 15,
			free: true,
			x: 61.71,
			y: 30.96,
			parameters: [
				{
					'Площадь': '87,0 м²',
				},
				{
					'Спальня': '3',
				},
				{
					'Санузел': '1',
				},
				{
					'Кадастровый №': '50:20:0041133:2329',
				},
				{
					'№ участка': '15',
				},
				{
					'Стоимость:': 'от 8 598 000 ₽',
				},
			],
		},
		{
			id: 16,
			free: true,
			x: 72.48,
			y: 27.47,
			parameters: [
				{
					'Площадь': '87,0 м²',
				},
				{
					'Спальня': '3',
				},
				{
					'Санузел': '1',
				},
				{
					'Кадастровый №': '50:20:0041133:2329',
				},
				{
					'№ участка': '16',
				},
				{
					'Стоимость:': 'от 8 598 000 ₽',
				},
			],
		},
		{
			id: 17,
			free: true,
			x: 6.50,
			y: 81.64,
			parameters: [
				{
					'Площадь': '87,0 м²',
				},
				{
					'Спальня': '3',
				},
				{
					'Санузел': '17',
				},
				{
					'Кадастровый №': '50:20:0041133:2329',
				},
				{
					'№ участка': '1',
				},
				{
					'Стоимость:': 'от 8 598 000 ₽',
				},
			],
		},
		{
			id: 18,
			free: true,
			x: 31.11,
			y: 70.71,
			parameters: [
				{
					'Площадь': '87,0 м²',
				},
				{
					'Спальня': '3',
				},
				{
					'Санузел': '18',
				},
				{
					'Кадастровый №': '50:20:0041133:2329',
				},
				{
					'№ участка': '1',
				},
				{
					'Стоимость:': 'от 8 598 000 ₽',
				},
			],
		},
		{
			id: 19,
			free: true,
			x: 44.19,
			y: 63.73,
			parameters: [
				{
					'Площадь': '87,0 м²',
				},
				{
					'Спальня': '3',
				},
				{
					'Санузел': '1',
				},
				{
					'Кадастровый №': '50:20:0041133:2329',
				},
				{
					'№ участка': '19',
				},
				{
					'Стоимость:': 'от 8 598 000 ₽',
				},
			],
		},
		{
			id: 20,
			free: true,
			x: 57.26,
			y: 59.18,
			parameters: [
				{
					'Площадь': '87,0 м²',
				},
				{
					'Спальня': '3',
				},
				{
					'Санузел': '1',
				},
				{
					'Кадастровый №': '50:20:0041133:2329',
				},
				{
					'№ участка': '20',
				},
				{
					'Стоимость:': 'от 8 598 000 ₽',
				},
			],
		},
		{
			id: 21,
			free: true,
			x: 69.91,
			y: 53.57,
			parameters: [
				{
					'Площадь': '87,0 м²',
				},
				{
					'Спальня': '3',
				},
				{
					'Санузел': '1',
				},
				{
					'Кадастровый №': '50:20:0041133:2329',
				},
				{
					'№ участка': '21',
				},
				{
					'Стоимость:': 'от 8 598 000 ₽',
				},
			],
		},
		{
			id: 22,
			free: true,
			x: 69.91,
			y: 53.57,
			parameters: [
				{
					'Площадь': '87,0 м²',
				},
				{
					'Спальня': '3',
				},
				{
					'Санузел': '1',
				},
				{
					'Кадастровый №': '50:20:0041133:2329',
				},
				{
					'№ участка': '22',
				},
				{
					'Стоимость:': 'от 8 598 000 ₽',
				},
			],
		},
	]

	const card = $('.plan-map__card')

	for (i = 0; i < planData.length; i++) {
		$('.plan-map__list').append(`<div class="plan-map__point" data-index="${planData[i].id}" style="top: ${planData[i].y}%; left: ${planData[i].x}%;" ></div>`)

		$('.plan-map__point').eq(i).attr('data-index', i)

		if (!planData[i].free) {
			$('.plan-map__point').eq(i).addClass('non-free')
		}
	}

	$('.plan-map__point').click(function () {
		const index = $(this).attr('data-index')
		card.empty()

		planData[index].parameters.forEach(parameter => {
			const key = Object.keys(parameter)
			const value = Object.values(parameter)
			const wrapper = `
			<div class="plan-map__card-info">
				<div class="plan-map__card-key">
					${key}
				</div>

				<div class="plan-map__card-value">
					${value}
				</div>
			</div>
			`

			card.append(wrapper);
		});

		const statusWrapper = `
			<div class="plan-map__card-info">
				<div class="plan-map__card-key">
					Статус
				</div>

				<div class="plan-map__card-value ${planData[index].free ? 'is-active' : 'not-active'}">
					${planData[index].free ? 'Свободен' : 'Занят'}
				</div>
			</div>
			`
		card.append(statusWrapper);

		function cardPosition() {
			if (planData[index].x < 30) {
				return '--left'
			} else if (planData[index].x > 70) {
				return '--right'
			}
		}

		card.removeClass('--left --right')

		card.addClass(cardPosition)

		card.css('bottom', `${100 - planData[index].y}%`).css('left', `${planData[index].x}%`)

		card.fadeIn(300)
	})

	$(document).click(function (event) {
		const target = event.target

		if (!(($(target).closest('.plan-map__card').length > 0) || ($(target).closest('.plan-map__point').length > 0))) {
			card.fadeOut(300)
		}


	})

	$('.s-modal').click(function (event) {
		const target = event.target

		if (!(($(target).closest('.s-modal__wrapper').length > 0) || ($(target).closest('.btn--callback').length > 0))) {
			$('.s-modal').fadeOut(300)
		}
	})

	//SVG Fallback
	if (!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function () {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function () { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function () {
			alert("Thank you!");
			setTimeout(function () {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if ($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch (err) {

	};

	$("img, a").on("dragstart", function (event) { event.preventDefault(); });

	$('#header__hamburger').click(function () {
		$(this).find('#hamburger').toggleClass('is-active')
		$('.header__menu').toggleClass('active')
	})

	$('.s-faq__item').click(function () {
		$(this).find('.s-faq__footer').slideToggle(300)
		$(this).toggleClass('active')
	})

	$('input[type="tel"]').inputmask({ "mask": "+7 (999) 999-9999" });

	$('.btn--callback').click(function () {
		$('.s-modal').fadeIn(300)
	})
});

// $(window).load(function() {

// 	$(".loader_inner").fadeOut();
// 	$(".loader").delay(400).fadeOut("slow");

// });
