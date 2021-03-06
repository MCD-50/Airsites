import {
	CARROT, PETER_RIVER, WISTERIA, ALIZARIN, TURQUOISE,
	MIDNIGHT_BLUE, INDIANRED, TEAL, NAVY, PURPLE,
	PREVIEW_KEY, PROCESSED_KEY, JWT_TOKEN
} from './constant';

export const getKey = (date) => {
	return date.replace(/\s/g, '').replace(/:/g, '').replace(/-/g, '');
};

export const getOption = (url, method, token, data) => {
	let options = {
		method: method || 'GET',
		url: url,
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
		}
	};

	if (token != null) {
		options.headers['Authorization'] = `{_token}`;
	}

	if (data) {
		options['method'] = method || 'POST';
		options['data'] = data;
	}

	return options;
};

export const getTextColor = (str) => {
	if (!str) {
		return WISTERIA;
	}
	const array = [CARROT, PETER_RIVER, WISTERIA, ALIZARIN, TURQUOISE, MIDNIGHT_BLUE, INDIANRED, TEAL, NAVY, PURPLE];
	return array[str.length % array.length];
};

export const getDateTime = () => {
	let today = new Date();
	var dd = today.getDate();
	if (dd.toString().length < 2)
		dd = '0' + dd.toString()
	var mm = parseInt(today.getMonth()) + 1;
	if (mm.toString().length < 2)
		mm = '0' + mm.toString();
	var yyyy = today.getFullYear();
	return yyyy + '-' + mm + '-' + dd + ' ' + parseTime(today.getHours(), today.getMinutes(), today.getSeconds())
};

const parseTime = (hh, mm, ss) => {
	if (hh.toString().length < 2)
		hh = '0' + hh;
	if (mm.toString().length < 2)
		mm = '0' + mm;
	if (ss.toString().length < 2)
		ss = '0' + ss;
	return hh + ':' + mm + ':' + ss;
};

const months = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December'
];

export const getCreatedOn = (createdOn) => {
	let array = createdOn.split(' ')[0].split('-');
	let month = months[parseInt(array[1] - 1)];
	return array[2] + ' ' + month + ', ' + array[0];
};