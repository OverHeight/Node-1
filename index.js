const express = require("express");
const fileUpload = require("express-fileupload");
const ProductRoute = require("./routes/ProductRoute");

const app = express();

app.use(express.json());
app.use(fileUpload());
app.use(express.static("public"));
app.use(ProductRoute);
app.get("/", (req, res) => res.send("Hello World!"));

app.listen(8000, () => console.log(`Example app listening on port 8000!`));
