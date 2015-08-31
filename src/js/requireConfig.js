var require = {
  baseUrl: 'src/js',

  paths: {
    'spec': '../spec',

    'jquery':     '../lib/jquery-2.1.4/jquery',
    'marionette': '../lib/marionette-2.4.2/backbone.marionette',
    'backbone':   '../lib/backbone-1.2.2/backbone',
    'underscore': '../lib/underscore-1.8.3/underscore',
    'bootstrap':  '../lib/bootstrap-3.3.5/js/bootstrap',

    'syphon':     '../lib/backbone.syphon-0.4.1/amd/backbone.syphon',
    'text':       '../lib/requirejs-2.1.20/text',
    'tpl':        '../lib/underscore-1.8.3/underscore-tpl',

    'sinon':           '../lib/sinon',
    'jasmine':         '../lib/jsamine-2.3.4/jsamine',
    'jsamine-html':    '../lib/jsamine-2.3.4/jasmine-html',
    'jsamine-jquery':  '../lib/jsamine-2.3.4/jasmine-jquery'
  },

  shim: {
    'marionette': {
      deps: ['backbone'],
      exports: 'Marionette'
    },
    'backbone': {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    'underscore': {
      exports: '_'
    },

    'syphon': ['backbone'],

    'jasmine': {
      exports: 'jasmine'
    },
    'sinon': {
      exports: 'sinon'
    },
    'jasmine-html': ['jasmine'],
    'jasmine-jquery': ['jasmine']
  }
}
