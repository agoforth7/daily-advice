var date = new Date();
var day = date.getDay();
var month = date.getMonth();
var hour = date.getHours();

console.log('Hello! Here is some advice for the day:');

if (hour >= 0 && hour <= 8) {
	console.log('Start every day with a moment of meditation.');
} else if (hour > 8 && hour <= 16) {
	console.log('Meeting friends for a meal can brighten any day!');
} else if (hour > 16 && hour <= 23) {
	console.log('Make sure your evening activities are restful.');
}

if (day >= 0 && day <= 3) {
	console.log('Start your week with a positive outlook!');
} else if (day > 3 && day <= 5) {
	console.log('It\'s almost the weekend! Plan accordingly.');
} else if (day > 5 && day <= 6) {
	console.log('Go out and have some fun!');
}

if (month >= 0 && month <= 2) {
	console.log('Flannel-lined jeans are a thing!')
	if (hour >= 0 && hour <= 8) {
		console.log('Its a cold morning!');
	} else {
		console.log('Bundle up and stay warm!');
	}
} else if (month > 2 && month <= 5) {
	console.log('Keep an umbrella handy.');
	if (hour >= 16 && hour <=23) {
		console.log('Set your alarm clock; you don\'t want to be late!')
	} else {
		console.log('Stop and smell the flowers, but take your allergy meds first.');
	}
} else if (month > 5 && month <= 8) {
	console.log('It\'s hurricane season! Do you own a kayak?');
	if (hour > 12 && hour <= 18) {
		console.log('Dont forget to hydrate');
	} else {
		console.log('Put some shorts on; it\'s hot!');
	}
} else if (month > 8 && month <=11) {
	console.log('Thanksgiving is my favorite holiday.');
	if (hour >14 && hour <= 18) {
		console.log('Get the rake out of the shed!');
	} else {
		console.log('Enjoy the changing leaves!');
	}
}