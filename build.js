'use strict'

const metalsmith  = require('metalsmith'),
      ifThen      = require('metalsmith-if'),
      argv        = require('optimist').argv,
      ghpages     = require('gh-pages'),
      path        = require('path'),
      metadata    = require('./config/metadata'),
      sass        = require('./config/sass'),
      layouts     = require('./config/layouts'),
      permalinks  = require('./config/permalinks'),
      markdown    = require('./config/markdown'),
      browsersync = require('./config/browsersync')

metalsmith(__dirname)
  .source('src')
  .use(metadata)
  .use(sass)
  .use(markdown)
  .use(permalinks)
  .use(layouts)
  .use(ifThen(
    argv.watch,
    browsersync
  ))
  .destination('dist')
  .build(err => {
    if (err) throw err

    if (argv.build)
      ghpages.publish(path.join(__dirname, 'dist'), err => {
        if (err) throw err

        console.log('Website is published on GH pages branch!')
      })
  })
