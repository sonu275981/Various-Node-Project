const dns = require('dns');  
dns.lookup('www.google.co.in', (err, addresses, family) => {  
  console.log('addresses:', addresses);  
  console.log('family:',family);  
});  