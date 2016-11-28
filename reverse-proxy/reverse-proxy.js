var HTTPMaster = require('http-master');
var httpMaster = new HTTPMaster();
httpMaster.init({
	watchConfig: true,
	logging: true,
	ports: {
		8109: {
			router: {
//				'138.197.198.117': 8108,
//				'tylerbauer.info': 8108,
//				'*.tylerbauer.info': 8108
				'*': 'redirect -> https://[1]'
			}
		},
		8409: {
			router: {
				'138.197.198.117': 8108,
				'tylerbauer.info': 8108,
				'*.tylerbauer.info': 8108
			},
			ssl: {
				key: '/home/master/letsencrypt/config/live/tylerbauer.info/privkey.pem',
				cert: '/home/master/letsencrypt/config/live/tylerbauer.info/cert.pem',
				ca: '/home/master/letsencrypt/config/live/tylerbauer.info/chain.pem'
			}
		}
	}
}, function(e) {
	console.log('Initialized');
});
