var gulp = require("gulp");
var sass = require("gulp-sass")(require("sass"));

gulp.task("compileCSS", () => {
  return gulp.src("./public/scss/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./public/css"))
})






