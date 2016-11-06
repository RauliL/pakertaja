"use strict";
const gulp = require("gulp");
const uglify = require("gulp-uglify");
const sourcemaps = require("gulp-sourcemaps");
const rename = require("gulp-rename");
const pump = require("pump");

gulp.task("compress", function (cb) {
  pump(
    [
      gulp.src("pakertaja.js"),
      sourcemaps.init(),
      uglify(),
      rename("pakertaja.min.js"),
      sourcemaps.write("."),
      gulp.dest(".")
    ],
    cb
  );
});

gulp.task("watch", ["compress"], function () {
  gulp.watch("pakertaja.js", ["compress"]);
});

gulp.task("default", ["compress"]);
