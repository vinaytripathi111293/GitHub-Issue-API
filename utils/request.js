const request = require('request'); 
module.exports.createIssue = (token, subPath, data, cb) => {
    var options = {
        method: 'POST',
        url: `https://api.github.com/repos/${subPath}/issues`,
        headers: {
          'Accept': 'application/vnd.github.v3+json',
          'Authorization': `token ${token}`,
          'Content-Type': 'application/json',
          'User-Agent': 'PostmanRuntime/7.29.0'
        },
        body: JSON.stringify(data)
      
    };
    request(options, cb);
}
