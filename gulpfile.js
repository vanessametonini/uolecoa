const { src, dest, parallel } = require('gulp'),
prettyHtml = require('gulp-pretty-html'),
cssbeautify = require('gulp-cssbeautify');

function html() {
  return src('dist/**/*.html')
    .pipe(prettyHtml({
      indent_size: 2,
      indent_char: ' ',
      unformatted: ['code', 'pre', 'em', 'strong', 'i', 'b', 'br']
    }))
    .pipe(dest('src/'));
}

function css() {
  return src('ugly/**/*.css')
          .pipe(cssbeautify())
          .pipe(dest('src/css'))
}

exports.css = css;
exports.html = html;
exports.default = parallel(html,css);