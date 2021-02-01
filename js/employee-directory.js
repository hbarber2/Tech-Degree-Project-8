const randomUser = 'https://randomuser.me/api/?results=12';
const employeeProfilesContainer = document.getElementById('employee-profiles');
const profileDivs = document.getElementsByClassName('employee-info');
const closeButton = document.getElementById('modal-close');
const overlay = document.getElementById('overlay');
let employees = [];


function fetchRandomUser(url) {
	fetch(url)
		.then(response => response.json())
		.then(userJSON => {
			for(i = 0; i < 12; i++){
					generateEmployeeProfile(userJSON.results[i], i)
					employees.push(userJSON.results[i])
			}
		})
		.catch(e => console.log(e));
};


function generateEmployeeProfile(json, index) {
	const profile = document.createElement('div');
	employeeProfilesContainer.appendChild(profile);
	profile.className = 'employee-info';
	profile.innerHTML = 
			`
			<img src=${json.picture.thumbnail}>
			<h3 class="employee-name">${json.name.first} ${json.name.last}</h3>
			<p class="email">${json.email}</p>
			<p class="city">${json.location.city}</p>
			`;
	
		profile.addEventListener('click', () => {
			let profileImg = document.getElementById('profile-pic');
			let name = document.getElementById('employee-name');
			let address = document.getElementById('employee-address');
			let city = document.getElementById('employee-city');
			let email = document.getElementById('employee-email');
			let dob = document.getElementById('employee-birthday');
			let cellPhone = document.getElementById('employee-cell-phone');
			let employee = employees[index];
			let birthday = new Date(employees[index].dob.date);

			overlay.classList.remove('hidden');
			profileImg.src = employee.picture.large
			name.innerHTML = employee.name.first + ' ' + employee.name.last;
			city.innerHTML = employee.location.city
			address.innerHTML = employee.location.street.number + ' ' + employee.location.street.name + ' ' + employee.location.city + ', ' + employee.location.state + ' ' + employee.location.postcode;
			email.innerHTML = employee.email
			dob.innerHTML = birthday.getMonth() + '/' + birthday.getDate() + '/' + birthday.getFullYear()
			cellPhone.innerHTML = employee.cell
	})
	
};

closeButton.addEventListener('click', () => {
	overlay.classList.add('hidden');
});



fetchRandomUser(randomUser);


	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	







