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
			source: 'https://github.com/akibkhone/Gemini-Ai-Clone',
		},
		{
			title: 'Sundown Studio Clone',
			image: '/Images/Sundown.png',
			description:
				"Explore this clone of Sundown Studio, replicating its design and functionality. Built with HTML, CSS, and JavaScript, this project demonstrates your ability to recreate a sleek and responsive website. Discover the work, services, and about sections, echoing the original site's simplicity and elegance.",
			link: 'https://sundown-studio-clone.onrender.com',
			source: 'https://github.com/akibkhone/Sundown-Studio-Clone',
		},
		{
			title: 'Employee Management System',
			image: '/Images/Employee.jpeg',
			description:
				'Developed an Employee Management System integrating Spring Boot, MongoDB, and ReactJS, featuring core functionalities like Add, Update, and View Employee, showcasing full-stack development expertise with seamless backend-frontend integration and CRUD operations for efficient employee data management.',
			link: 'https://employee-management-system-frontend.onrender.com/',
			source: 'https://github.com/akibkhone/Employee-Management-System-Backend',
		},
		{
			title: 'Simple Music Player ',
			image: '/Images/Music.jpg',
			description:
				'Crafted a responsive music player using HTML, CSS, and JavaScript, offering users a seamless audio exploration experience. Designed with a minimalist interface, the player adapts gracefully across different screen sizes, showcasing adeptness in front-end development.',
			link: 'https://simple-music-player.onrender.com/',
			source: 'https://github.com/akibkhone/Simple-Music-Player',
		},
		{
			title: 'Random Advice Generator',
			image: '/Images/Advice.jpeg',
			description:
				'Developed a React application that dynamically fetches and showcases random pieces of advice quotes by integrating an external API, providing real-time updates. Implemented with a responsive design to ensure optimal display across various devices.',
			link: 'https://random-advice-generator.onrender.com/',
			source: 'https://github.com/akibkhone/Random-Advice-Generator',
		},
		{
			title: 'Fashion Agency Landing Page',
			image: '/Images/Agency.jpeg',
			description:
				'Created a responsive landing page for a fashion agency using HTML and CSS. The layout and design were optimized for various screen sizes to ensure a seamless user experience.',
			link: 'https://fashion-agency-landing-page.onrender.com',
			source: 'https://github.com/akibkhone/Fashion-Agency-Landing-Page',
		},
	];

	projects.forEach((project) => {
		const slide = document.createElement('div');
		slide.classList.add('swiper-slide');

		const content = `
        <div class="card">
  			<div class="card__img">
 				<img class="project-image" src="${project.image}" alt="${project.title}" /></div>
 			 <div class="card__descr-wrapper">
 			   <p class="card__title"> ${project.title} </p>
 			 <p class="card__descr">  ${project.description} </p>
  			<div class="card__links">
				    <div>
 					     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" class="svg">&lt;<path d="M562.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L405.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C189.5 251.2 196 330 246 380c56.5 56.5 148 56.5 204.5 0L562.8 267.7zM43.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C57 372 57 321 88.5 289.5L200.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C416.5 260.8 410 182 360 132c-56.5-56.5-148-56.5-204.5 0L43.2 244.3z"></path></svg>
 					     <a class="link" href="${project.link}">Preview</a>
 					</div>
   				  <div>
   				    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" class="svg"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
   				   <a class="link" href="${project.source}">Code</a>
   					</div>
 			 </div>
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
