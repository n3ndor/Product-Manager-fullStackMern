const mongoose = require("mongoose");
const dbName = "products";

mongoose
    .connect(`mongodb://127.0.0.1/${dbName}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log(`Connected to the ${dbName} database!`))
    .catch((err) => console.log(err));
