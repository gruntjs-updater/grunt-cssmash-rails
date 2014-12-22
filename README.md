# grunt-cssmash-rails

> Mash CSS class names

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-cssmash-rails --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-cssmash-rails');
```

## The "cssmash" task

### Overview
In your project's Gruntfile, add a section named `cssmash` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  cssmash: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.locale_path
Type: `String`
Default value: `'config/locales'`

The path to your locales folder where the YML file should be generated

#### options.locale
Type: `String`
Default value: `'cssmash'`

The language namespace to use for the CSS class translation.  It's recommended that you choose a name that does not collide with national language, to avoid conflicts.

### Usage Examples

The default locale path will be automatically detected by rails.  In order to use it in your application, your view code will look like this:

    <div class="<%=t :main, locale: :cssmash %>">
        <!-- ... -->
    </div>

Where `:cssmash` is the locale you chose for your class map.  The output will look like this:

    <div class="a">
        <!-- ... -->
    </div>


## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).
