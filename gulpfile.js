// Import
import gulp from "gulp";
import { path } from "./gulp/config/path.js";
import { plugins } from "./gulp/config/plugins.js";

// Global variable
global.app = {
  path: path,
  gulp: gulp,
  plugins: plugins,
};

// Import tasks
import { reset } from "./gulp/tasks/reset.js";
import { styles } from "./gulp/tasks/styles.js";
import { serve } from "./gulp/tasks/serve.js";
import { scripts } from "./gulp/tasks/scripts.js";
import { images } from "./gulp/tasks/images.js";

// Watcher
function watcher() {
  gulp.watch("./index.html").on("change", plugins.browserSync.reload);
  gulp.watch(path.watch.styles, styles);
  gulp.watch(path.watch.scripts, scripts);
  gulp.watch(path.watch.images, images);
}
// Create a main task
const mainTasks = gulp.parallel(styles, scripts, images);

// Scripting
export const build = gulp.series(reset, mainTasks);
const dev = gulp.parallel(serve, watcher);
export default dev;
