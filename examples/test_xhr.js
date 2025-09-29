import * as os from 'os';
import * as std from 'std';
import { XMLHttpRequest } from "xhr";


var xhr = new XMLHttpRequest();
xhr.open('GET', 'http://www.baidu.com', true);
xhr.responseType = 'text';
xhr.onload = () => {
	if (xhr.status >= 200 && xhr.status < 300) {
		console.log('OK ', xhr.status, xhr.response);
	} else {
		console.log('HTTP', xhr.status, xhr.statusText);
	}
};
xhr.onerror = () => console.log('network error');
xhr.send(); 
