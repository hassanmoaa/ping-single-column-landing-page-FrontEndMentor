const formEl = document.getElementById('form');
const email = document.getElementById('email');
const errorMsg = document.getElementById('error');

formEl.addEventListener('submit', (e) => {
	e.preventDefault(); // Prevents the default submit behavior

	validateEmail();
});

const validateEmail = () => {
	// Check if email is empty
	const regex = /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/;

	if (!email.value.match(regex)) {
		errorMsg.innerHTML = 'Please provide a valid email address..';
		errorMsg.style.color = 'red';
		email.style.borderColor = 'red';
		return false;
	} else {
		errorMsg.innerHTML = '';
		email.value = '';
		email.style.borderColor = 'green';
		return true;
	}
};
