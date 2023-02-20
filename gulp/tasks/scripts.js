import gulpConcat from "gulp-concat";
import GulpUglify from "gulp-uglify";

export const scripts = () => {
    return app.gulp.src(app.path.src.scripts)
    .pipe(gulpConcat("scripts.min.js"))
    .pipe(GulpUglify())
    .pipe(app.gulp.dest(app.path.build.scripts))
    .pipe(app.plugins.browserSync.stream())
}