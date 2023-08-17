const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

const { graphqlHTTP } = require("express-graphql");
var { buildSchema } = require("graphql");

const app = express();
const graphql = express();

const authen = require("./router/authenRouter");
const member = require("./router/memberRouter");

const uri_mongodb =
  "mongodb+srv://admin:Look123!@cluster01.ptic3fv.mongodb.net/member?retryWrites=true&w=majority";

mongoose
  .connect(uri_mongodb)
  .then(() => console.log("Connected!"))
  .catch((err) => console.log(`Connected DataBase Fail! : ${err} `));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));

app.use("/authen", authen);
app.use("/member", member);

graphql.use(morgan("dev"));

// var schema = buildSchema(`
//   type Query {
//     hello: String,
//     meen: String
//   },
// `);

// var root = {
//   hello: () => {
//     return "Hello world!";
//   },
//   meen: () => {
//     return "Meen";
//   },
// };

// graphql.use(
//   "/graphql",
//   graphqlHTTP({
//     schema: schema,
//     rootValue: root,
//     graphiql: true,
//   })
// );

app.listen(3000);
graphql.listen(4000);
