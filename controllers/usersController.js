const fs = require("fs");

exports.getAllUsers = (req, res) => {
  res.status(200).json({
    status: "success",
    message: "users",
  });
};

exports.createUser = (req, res) => {
  res.status(201).json({
    status: "success",
    message: "users",
  });
};

exports.getUser = (req, res) => {
  const id = req.params.id * 1;

  res.status(200).json({
    status: "success",
    message: "users",
  });
};

exports.updateUser = (req, res) => {
  const id = req.params.id * 1;

  if (!user) {
    return res.status(404).json({
      status: "fail",
      message: "Invalid ID",
    });
  }

  res.status(200).json({
    status: "success",
    data: {
      user: "<Updated user here...>",
    },
  });
};

exports.deleteUser = (req, res) => {
  const id = req.params.id * 1;

  if (!user) {
    return res.status(404).json({
      status: "fail",
      message: "Invalid ID",
    });
  }

  res.status(204).json({
    status: "success",
    data: null,
  });
};
