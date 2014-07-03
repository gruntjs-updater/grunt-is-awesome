# grunt-is-awesome

> Grunt plugin for javascript-is-awesome

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the 
[Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a 
[Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with 
that process, you may install this plugin with this command:

```shell
npm install grunt-is-awesome --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks(‘grunt-is-awesome');
```

## The "awesome" task

### Overview
In your project's Gruntfile, add the task `awesome` right after important tasks like this:

```js
grunt.registerTask( 'watch', [ 'build', 'karma:unit', 'awesome', 'delta' ] );
```
