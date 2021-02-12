const randomUser = 'https://randomuser.me/api/?results=12';
const employeeProfilesContainer = document.getElementById('employee-profiles');
const profileDivs = document.getElementsByClassName('employee-info');
const closeButton = document.getElementById('modal-close');
const overlay = document.getElementById('overlay');
let employees = [];


function fetchRandomUser(url) {
	fetch(url)
		.then(response => response.json())
		.then(userJSON => userJSON.results)
		.then(generateEmployeeProfile)
		.catch(e => console.log(e))
};


function generateEmployeeProfile(json) {
	
	employees = json;
	
	employees.forEach((employee, index) => {
		let thumbnail = employee.picture.thumbnail								
		let employeeName = employee.name.first + ' ' + employee.name.last
		let email = employee.email
		let city = employee.location.city
		const profile = document.createElement('div');
		employeeProfilesContainer.appendChild(profile);
		profile.className = 'employee-info';
		profile.innerHTML = 
			`
			<img src=${thumbnail}>
			<h3 class="employee-name">${employeeName}</h3>
			<p class="email">${email}</p>
			<p class="city">${city}</p>
			`;
	
		profile.addEventListener('click', () => {
			overlay.classList.remove('hidden');
			let profileImg = document.getElementById('profile-pic');
			let name = document.getElementById('employee-name');
			let address = document.getElementById('employee-address');
			let employeeCity = document.getElementById('employee-city');
			let employeeEmail = document.getElementById('employee-email');
			let dob = document.getElementById('employee-birthday');
			let cellPhone = document.getElementById('employee-cell-phone');
			let birthday = new Date(employees[index].dob.date);


			profileImg.src = employee.picture.large
			name.innerHTML = employee.name.first + ' ' + employee.name.last;
			employeeCity.innerHTML = employee.location.city
			address.innerHTML = employee.location.street.number + ' ' + employee.location.street.name + ' ' + employee.location.city + ', ' + employee.location.state + ' ' + employee.location.postcode;
			employeeEmail.innerHTML = employee.email
			dob.innerHTML = birthday.getMonth() + '/' + birthday.getDate() + '/' + birthday.getFullYear()
			cellPhone.innerHTML = employee.cell
				});
		});
	};


		closeButton.addEventListener('click', () => {
			overlay.classList.add('hidden');
		});


fetchRandomUser(randomUser);



