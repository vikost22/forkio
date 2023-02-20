const buildFolder = './dist';
const srcFolder = './src';

export const path = {
    build: {
        styles: `${buildFolder}/css/`,
        scripts: `${buildFolder}/js/`,
        images: `${buildFolder}/img/`
    },
    src: {
        styles: `${srcFolder}/scss/style.scss`,
        scripts: `${srcFolder}/js/**/*.js`,
        images: `${srcFolder}/img/**/*.*`
    },
    watch: {
        styles: `${srcFolder}/scss/**/*.scss`,
        scripts: `${srcFolder}/js/**/*.js`,
        images: `${srcFolder}/img/**/*.*`
    }, 
    clean: buildFolder,
    buildFolder: buildFolder, 
    srcFolder: srcFolder,
}