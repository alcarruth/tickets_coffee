// Generated by CoffeeScript 2.4.1
(function() {
  //!/usr/bin/env coffee
  // -*- coding: utf-8 -*-
  var DB_ORM, DB_Object, db, db_obj, db_schema, error, pg_options;

  ({DB_ORM, DB_Object} = require('web-worm'));

  ({db_schema} = require('./db_schema'));

  ({pg_options} = require('./settings'));

  try {
    db_obj = new DB_Object(pg_options);
    db = new DB_ORM(db_obj, db_schema);
    db.init_tables();
    module.exports = db;
  } catch (error1) {
    error = error1;
    console.log("Failed to create db.");
    console.log(error);
  }

}).call(this);