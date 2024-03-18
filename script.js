function handleMenu() {
	let menuIcon = document.querySelector('#menu-icon');
	let navbar = document.querySelector('.navbar');
	let sections = document.querySelectorAll('section');
	let navLinks = document.querySelectorAll('header nav a');

	window.onscroll = () => {
		let scrollPosition = window.scrollY;

		sections.forEach((sec) => {
			let top = sec.offsetTop - 150;
			let bottom = top + sec.offsetHeight;
			let id = sec.getAttribute('id');

			if (scrollPosition >= top && scrollPosition < bottom) {
				navLinks.forEach((link) => {
					link.classList.remove('active');
					document.querySelector('header nav a [href*=' + id + ' ]').classList.add('active');
				});
			}
		});
	};
	menuIcon.onclick = () => {
		menuIcon.classList.toggle('bx-x');
		navbar.classList.toggle('active');
	};
}

function handleSwiper() {
	var slidesPerView;

	// Adjust slides per view based on screen width
	if (window.innerWidth < 480) {
		slidesPerView = 1;
	} else if (window.innerWidth <= 768) {
		slidesPerView = 2;
	} else {
		slidesPerView = 3;
	}
	var swiper = new Swiper('.swiper-container', {
		slidesPerView: slidesPerView,
		spaceBetween: 30,
		mousewheel: true,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
			renderBullet: function (index, className) {
				return '<span class="' + className + '">' + (index + 1) + '</span>';
			},
		},
	});
}

function addProject() {
	const projectsContainer = document.querySelector('.swiper-wrapper');

	const projects = [
		{
			title: 'Google Gemini AI Clone',
			image: '/Images/Gemini.jpeg',
			description:
				"Introducing a meticulously crafted React JS Gemini clone, faithfully replicating the renowned platform's design and functionality. Seamlessly responsive across all screen sizes, this project showcases the power of Google's Gemini AI API for dynamic text generation. Experience the full potential of a powerful language model in this faithful recreation.",
			link: 'https://gemini-ai-clone.onrender.com',
		},
		{
			title: 'Sundown Studio Clone',
			image: '/Images/Sundown.png',
			description:
				"Explore this clone of Sundown Studio, replicating its design and functionality. Built with HTML, CSS, and JavaScript, this project demonstrates your ability to recreate a sleek and responsive website. Discover the work, services, and about sections, echoing the original site's simplicity and elegance.",
			link: 'https://sundown-studio-clone.onrender.com',
		},
		{
			title: 'Employee Management System',
			image: '/Images/Employee.jpeg',
			description:
				'Developed an Employee Management System integrating Spring Boot, MongoDB, and ReactJS, featuring core functionalities like Add, Update, and View Employee, showcasing full-stack development expertise with seamless backend-frontend integration and CRUD operations for efficient employee data management.',
			link: 'https://employee-management-system-frontend.onrender.com/',
		},
		{
			title: 'Random Advice Generator',
			image: '/Images/Advice.jpeg',
			description:
				'Developed a React application that dynamically fetches and showcases random pieces of advice quotes by integrating an external API, providing real-time updates. Implemented with a responsive design to ensure optimal display across various devices.',
			link: 'https://random-advice-generator.onrender.com/',
		},
		{
			title: 'Fashion Agency Landing Page',
			image: '/Images/Agency.jpeg',
			description:
				'Created a responsive landing page for a fashion agency using HTML and CSS. The layout and design were optimized for various screen sizes to ensure a seamless user experience.',
			link: 'https://fashion-agency-landing-page.onrender.com',
		},
	];

	projects.forEach((project) => {
		const slide = document.createElement('div');
		slide.classList.add('swiper-slide');

		const content = `
        <div class="project">
            <a href="${project.link}" target="_blank">
                <img class="project-image" src="${project.image}" alt="${project.title}" />
            </a>
            <div class="project-text">
                <h4>${project.title}</h4>
                <p>${project.description}</p>
            </div>
        </div>
    `;

		slide.innerHTML = content;
		projectsContainer.appendChild(slide);
	});
}

addProject();
handleSwiper();
handleMenu();
