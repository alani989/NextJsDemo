var express = require('express');
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');
var cors = require('cors')
var bodyParser = require('body-parser');

var schema = buildSchema(`
  type Query {
    hello: String
  }
`);


var root = { hello: () => 'Hello world!' };

var app = express();
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

const result = {
  name: 'Mark',
  Age: 4
}

app.get('/test', (req, res) => {
  res.json(result)
})

app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));
