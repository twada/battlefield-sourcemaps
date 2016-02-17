#!/bin/sh

GRUNT=$(npm bin)/grunt

$GRUNT --force grunt_espower &&
    $GRUNT verify_grunt_espower &&
    $GRUNT --force grunt_concat_espower &&
    $GRUNT verify_grunt_concat_espower &&
    $GRUNT --force grunt_espower_concat &&
    $GRUNT verify_grunt_espower_concat &&
    $GRUNT --force grunt_concatinline_espower &&
    $GRUNT verify_grunt_concatinline_espower &&
    $GRUNT --force grunt_coffee_espower &&
    $GRUNT verify_grunt_coffee_espower &&
    $GRUNT --force grunt_coffee_espower_concat &&
    $GRUNT verify_grunt_coffee_espower_concat &&
    $GRUNT --force grunt_coffee_concat_espower &&
    $GRUNT verify_grunt_coffee_concat_espower &&
    $GRUNT --force grunt_coffee_concatinline_espower &&
    $GRUNT verify_grunt_coffee_concatinline_espower &&
    $GRUNT --force grunt_ts_espower &&
    $GRUNT verify_grunt_ts_espower &&
    $GRUNT --force grunt_tsout_espower &&
    $GRUNT verify_grunt_tsout_espower &&
    $GRUNT --force grunt_ts_espower_concat &&
    $GRUNT verify_grunt_ts_espower_concat &&
    $GRUNT --force grunt_ts_concat_espower &&
    $GRUNT verify_grunt_ts_concat_espower &&
    $GRUNT --force grunt_ts_concatinline_espower &&
    $GRUNT verify_grunt_ts_concatinline_espower
