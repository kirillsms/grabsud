#!/bin/sh
phantomjs sud.js > cmd.sql
sqlite -init readsql sud.sqlite
