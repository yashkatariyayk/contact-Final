const express = require("express");
const app = express();
const contactRoutes = express.Router();
const mongoose = require("mongoose");

let contactModel = require("../model/model");

// To Add New contact
contactRoutes.route("/addcontact").post(function(req, res) {
  const contact = new contactModel({
    FirstName: req.body.FirstName,
    LastName: req.body.LastName,
    Email: req.body.Email,
    Phone: req.body.Phone,
    Password: req.body.Password,
    ConfirmPassword: req.body.ConfirmPassword
  });

  contact
    .save()
    .then(result => {
      console.log(result);
      res.status(200).json({
        contact: "contact Added Successfully"
      });
    })
    .catch(err => {
      res.status(400).send("Something Went Wrong");
    });
});

// To Get List Of contact
contactRoutes.route("/").get(function(req, res) {
  contactModel.find(function(err, contact) {
    if (err) {
      console.log(err);
    } else {
      res.json(contact);
    }
  });
});

// To Get contact Details By contact ID
contactRoutes.route("/").get(function(req, res) {
  let id = req.params.id;
  contactModel.findById(id, function(err, contact) {
    res.json(contact);
  });
});

// Defined edit route
contactRoutes.route("/edit/:id").get(function(req, res) {
  let id = req.params.id;
  contactModel.findById(id, function(err, contact) {
    res.json(contact);
  });
});

// To Update The contact Details
contactRoutes.route("/update/:id").post(function(req, res, next) {
  contactModel.findById(req.params.id, function(err, contact) {
    // let contact = new contactModel(req.body);
    if (!contact) return next(new Error("Unable To Find contact With This Id"));
    else {
      console.log(contact);
      console.log(req.body);
      (contact.FirstName = req.body.FirstName),
        (contact.LastName = req.body.LastName),
        (contact.Email = req.body.Email),
        (contact.Phone = req.body.Phone),
        (contact.Password = req.body.Password),
        (contact.ConfirmPassword = req.body.ConfirmPassword);

      contact
        .save()
        .then(contact => {
          res.json({ contact: "contact Updated Successfully" });
        })
        .catch(err => {
          res.status(400).send("Unable To Update contact");
        });
      res.send(contact);
    }
  });
});

// To Delete The contact
contactRoutes.route("/delete/:id").get(function(req, res) {
  contactModel.findByIdAndRemove({ _id: req.params.id }, function(
    err,
    contact
  ) {
    if (err) res.json(err);
    else res.json("contact Deleted Successfully");
  });
});

// Defined as Favorite list
contactRoutes.route("/favorite").get(function(req, res) {
  contactModel.find({ isFavorite: true }, function(err, contacts) {
    if (err) res.json(err);
    else res.json(contacts);
  });
});

//add as favorite
contactRoutes.route("/favorite/:id").put(function(req, res) {
  let id = req.params.id;
  let isFavorite = req.body.isFavorite;

  contactModel.findByIdAndUpdate(id, { isFavorite }, function(err, contact) {
    if (err) res.json(err);
    else res.json(contact);
  });
});

module.exports = contactRoutes;
