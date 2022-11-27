const app = require("./app");

require("./src/models");

const widgetsRouter = require("./src/modules/widgets/router");
const usersRouter = require("./src/modules/users/router");

app.use("/widgets", widgetsRouter);
app.use("/auth", usersRouter);

const PORT = process.env.PORT || 6502;

app.listen(PORT, () => {
  console.log("Server started on port " + PORT);
});
