#!/bin/sh
phantomjs sud.js
sqlite3 sud.sqlite < cmd.sql
