import dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass);
import autoPrefixer from "gulp-autoprefixer";
import GulpCleanCss from "gulp-clean-css";

export const styles = () => {
    return app.gulp.src(app.path.src.styles)
        .pipe(sass().on('error', sass.logError))
        .pipe(autoPrefixer({
            grid: true,
            overrideBrowsersList: ["last 3 versions"],
            cascade: false
        }))
        // .pipe(app.gulp.dest(app.path.build.styles))
        .pipe(GulpCleanCss({compatibility: 'ie8'}))
        .pipe(app.plugins.rename({
            extname: ".min.css"
        }))
        .pipe(app.gulp.dest(app.path.build.styles))
        .pipe(app.plugins.browserSync.stream())
}