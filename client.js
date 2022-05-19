const http = require ('http')

http.get ({
  port: 3000,
  hostname: 'localhost',
  path: '/user',
  headers: {authorization: 'pass'}
}, (res) =>
{
  console.log ('Connected.')

  res.on ('data', (data) => 
  {
    console.log ('Data:' + data)
  })
  res.on ('end', () =>
  {
    console.log ('Data received successfully.')
  })
  res.on ('close', () =>
  {
    console.log ('Disconnected.')
  })
})