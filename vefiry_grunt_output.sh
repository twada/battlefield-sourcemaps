#!/bin/sh

grunt --force grunt_espower &&
    grunt verify_grunt_espower &&
    grunt --force grunt_concat_espower &&
    grunt verify_grunt_concat_espower &&
    grunt --force grunt_espower_concat &&
    grunt verify_grunt_espower_concat &&
    grunt --force grunt_concatinline_espower &&
    grunt verify_grunt_concatinline_espower &&
    grunt --force grunt_coffee_espower &&
    grunt verify_grunt_coffee_espower &&
    grunt --force grunt_coffee_espower_concat &&
    grunt verify_grunt_coffee_espower_concat &&
    grunt --force grunt_coffee_concat_espower &&
    grunt verify_grunt_coffee_concat_espower &&
    grunt --force grunt_coffee_concatinline_espower &&
    grunt verify_grunt_coffee_concatinline_espower &&
    grunt --force grunt_ts_espower &&
    grunt verify_grunt_ts_espower &&
    grunt --force grunt_tsout_espower &&
    grunt verify_grunt_tsout_espower &&
    grunt --force grunt_ts_espower_concat &&
    grunt verify_grunt_ts_espower_concat &&
    grunt --force grunt_ts_concat_espower &&
    grunt verify_grunt_ts_concat_espower &&
    grunt --force grunt_ts_concatinline_espower &&
    grunt verify_grunt_ts_concatinline_espower
