#!/bin/sh
phantomjs sud.js > cmd.sql
sqlite3 -init readsql sud.sqlite
