const https = require('https');

function calldependance(actionName) {
    return new Promise((resolve, reject) => {
        const options = {
            hostname: 'us-east1-mon-projet-test-gp6.cloudfunctions.net',
            path: `/TDD-deploy2/hotelGet?actionName=${actionName}`,
            method: 'GET'
        };

        const req = https.request(options, res => {
            let data = '';

            res.on('data', chunk => {
                data += chunk;
            });

            res.on('end', () => {
                if (res.statusCode >= 200 && res.statusCode < 300) {
                    resolve(data);
                } else {
                    reject(new Error(`Request failed with status code ${res.statusCode}`));
                }
            });
        });

        req.on('error', error => {
            reject(error);
        });

        req.end();
    });
}

module.exports = { calldependance };
