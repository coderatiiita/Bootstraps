const mongoose = require("mongoose");
const WidgetModel = mongoose.model("widget");
const ObjectId = require("mongodb").ObjectID;

module.exports.getWidgetById = async ({ id }) => {
  const matchedWidget = await WidgetModel.findById(ObjectId(id)).lean();

  if (!matchedWidget) {
    let error = new Error();
    error.code = 404;
    error.msg = "Widget not found";
    throw error;
  }

  return matchedWidget;
};

module.exports.getWidgetByName = async ({ name }) => {
  const getquery = {
    name,
  };
  getquery.removed = { $ne: true };

  const matchedWidget = await WidgetModel.findOne(getquery).lean();
  if (!matchedWidget) {
    let error = new Error();
    error.code = 404;
    error.msg = "Widget not found";
    throw error;
  }
  return matchedWidget;
};

module.exports.getAllWidgets = async () => {
  const response = await WidgetModel.find({
    active: true,
  });
  return response.map((widget) => ({
    ...widget._doc,
  }));
};

module.exports.addWidget = async ({ name }) => {
  const matchedWidget = await WidgetModel.findOne({
    name,
    removed: { $ne: true },
  }).lean();
  if (matchedWidget) {
    let error = new Error();
    error.code = 409;
    error.msg = "Widget already exists";
    throw error;
  }

  const addQuery = {
    name,
  };
  return WidgetModel.create(addQuery);
};

module.exports.updateWidget = async ({ id, name }) => {
  const matchedWidget = await WidgetModel.findById(ObjectId(id)).lean();
  if (!matchedWidget) {
    let error = new Error();
    error.code = 404;
    error.msg = "Widget not found";
    throw error;
  }
  const updateQuery = {
    name,
    __v: matchedWidget.__v + 1,
  };

  return WidgetModel.findOneAndUpdate(
    {
      _id: id,
    },
    updateQuery,
    {
      new: true,
    }
  ).lean();
};

module.exports.removeWidget = async ({ id }) => {
  const matchedWidget = await WidgetModel.findById(ObjectId(id)).lean();

  if (!matchedWidget) {
    let error = new Error();
    error.code = 404;
    error.msg = "Widget not found";
    throw error;
  }
  if (matchedWidget.removed) {
    let error = new Error();
    error.code = 400;
    error.msg = "Widget is already removed";
    throw error;
  }

  const removeQuery = {
    _id: id,
    removed: true,
  };
  return WidgetModel.findOneAndUpdate(removeQuery, {
    new: true,
  }).lean();
};

module.exports.deleteWidget = async ({ id }) => {
  const matchedWidget = await WidgetModel.findById(ObjectId(id)).lean();

  if (!matchedWidget) throw new Error("Widget not found");

  const deleteQuery = {
    _id: id,
  };
  return WidgetModel.findOneAndDelete(deleteQuery).lean();
};
