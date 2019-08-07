#!/usr/bin/env coffee
# -*- coding: utf-8 -*-
#
#  tickets_rmi_local_client.coffee
# 

{ local_client } = require('./tickets_rmi')

app = local_client()

if module?.parent
  # imported into parent module
  exports.app = app

else
  # invoked from command line start REPL
  app.start()
  repl = require('repl')
  repl.start('tickets> ').context.app = app
