const mongoose = require('mongoose');
const dbPath = `mongodb+srv://xfaradayx:a8e3b98fd77@cluster0-eowfp.mongodb.net/test?retryWrites=true&w=majority`;

mongoose.connect(dbPath, {
    useNewUrlParser: true,
});

const db = mongoose.connection;
db.on("error", () => {
    console.log("> error occurred from the database");
});
db.once("open", () => {
     console.log("> successfully opened the database");
});

module.exports = mongoose;
