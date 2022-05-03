var express = require("express")
var app = express()

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const user = require("./services/user")
const job = require("./services/job")

var HTTP_PORT = 8001

// Start server
app.listen(HTTP_PORT, () => {
    console.log("Server running on port %PORT%".replace("%PORT%",HTTP_PORT))
});

app.get("/all/:type", async (req, res, next) => {
    try {
        const result = req.params.type=="user" ? (await user.all()) : (await job.all());
        res.json({
            message: "success",
            data: result
        });
    } catch (err) {
        next(err);
    }
});


