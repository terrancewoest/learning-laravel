const mix = require('laravel-mix');
require('dotenv').config();

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css');

mix.sass('resources/sass/email/ija.scss', 'public/css/email')

if (process.env.MIX_BROWSERSYNC || false) {
    mix.browserSync({
        proxy: process.env.MIX_BROWSERSYNC_PROXY || 'homestead.test',
        open: (process.env.MIX_BROWSERSYNC_OPEN == 'true'),
    });
}