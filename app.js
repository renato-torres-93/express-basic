const express = require ('express')
const app = express ()
const port = 3000

function isAuthorized (req, res, next)
{
  const auth = req.headers.authorization

  if (auth === 'pass')
    next ()
  else
  {
    res.status (401)
    res.send ('Unauthorized.')
  }
}

app.get ('/', (req, res) => res.send ('I\'m not a teapot.'))

app.get ('/user', isAuthorized, (req, res) =>
{
  res.json ([{
    id: 1,
    name: 'Stock Manager'
  }])
})

app.get ('/products', (req, res) =>
{
  const products = [
    {
      id: 1,
      name: 'guitar',
      price: 480,
      stock: 2
    },
    {
      id: 2,
      name: 'microphone',
      price: 159.90,
      stock: 5
    },
    {
      id: 3,
      name: 'amp head',
      price: 200,
      stock: 1
    },
    {
      id: 4,
      name: 'amp cabinet 4x12',
      price: 629.99,
      stock: 1
    }
  ]

  res.json (products)
})

app.listen (port, () => console.log (`Listening on port ${port}...`))