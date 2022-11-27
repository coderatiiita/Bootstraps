const express = require("express");
const modelService = require("./services");

const router = express.Router();
const { requestWrapper } = require("../utils/requestWrapper");

router.get(
  "/getModelById",
  requestWrapper(async (req, res) => {
    const { id } = req.query;
    const responseData = await modelService.getModelById({
      id,
    });
    res.status(200).send(responseData);
  })
);

router.get(
  "/getModelByName",
  requestWrapper(async (req, res) => {
    const { name } = req.query;
    const responseData = await modelService.getModelByName({
      name,
    });
    res.status(200).send(responseData);
  })
);

router.get(
  "/getAllModels",
  requestWrapper(async (req, res) => {
    const responseData = await modelService.getAllModels();
    res.status(200).send(responseData);
  })
);

router.post(
  "/addModel",
  requestWrapper(async (req, res) => {
    const { name } = req.body;
    const responseData = await modelService.addModel({
      name,
    });
    res.status(200).send(responseData);
  })
);

router.put(
  "/updateModel",
  requestWrapper(async (req, res) => {
    const { id, name } = req.body;
    console.log(id);
    const responseData = await modelService.updateModel({
      id,
      name,
    });
    res.status(200).send(responseData);
  })
);

router.delete(
  "/removeModel",
  requestWrapper(async (req, res) => {
    const { id } = req.query;
    const responseData = await modelService.removeModel({
      id,
    });
    res.status(200).send(responseData);
  })
);

router.delete(
  "/deleteModel",
  requestWrapper(async (req, res) => {
    const { id } = req.query;
    const responseData = await modelService.deleteModel({
      id,
    });
    res.status(200).send(responseData);
  })
);

module.exports = router;
