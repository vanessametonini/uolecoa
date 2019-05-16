const { src, dest, parallel, watch, series } = require('gulp'),
prettyHtml = require('gulp-pretty-html'),
cssbeautify = require('gulp-cssbeautify'),
csslint = require('gulp-csslint'),
concatCss = require('gulp-concat-css');

function html() {
  return src('dist/**/*.html')
    .pipe(prettyHtml({
      indent_size: 2,
      indent_char: ' ',
      unformatted: ['em', 'strong', 'i', 'b', 'br']
    }))
    .pipe(dest('src/'));
}

function csslindo() {
  return src('src/original/css/*.css')
    .pipe(cssbeautify({indent: '  '}))
    .pipe(dest('src/css'))
}

function cssfeio() {
  return src('src/css/*.css')
    .pipe(concatCss("causa.css"))
    .pipe(dest('src/assets/css'))
}

function csslinter() {
  return src('src/css/*.css')
    .pipe(csslint())
    .pipe(csslint.formatter());
}

watch('src/css', series(cssfeio));

exports.csslinter = csslinter;
exports.csslindo = csslindo;
exports.cssfeio = cssfeio;
exports.html = html;
exports.default = html