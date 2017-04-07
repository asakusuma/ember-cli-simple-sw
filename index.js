/* eslint-env node */
'use strict';
var path = require('path');
var fs = require('fs');
var Funnel = require('broccoli-funnel');
var BroccoliMergeTrees = require('broccoli-merge-trees');

module.exports = {
  name: 'ember-cli-simple-sw',
  isDevelopingAddon() {
    return true;
  },
  contentFor(type, config) {
    if (type === 'body-footer'){ 
      return '<script>' + fs.readFileSync(path.join(__dirname, 'lib/register.js'), 'utf8') + '</script>';
    } 
  },
  treeForPublic() {
    var origin = this._super.treeForPublic.apply(this, arguments);
    var swFiles = new Funnel(path.join(__dirname, 'lib'), {
      files: ['sw.js', 'sw-polyfills.js']
    });
    var trees = [swFiles];
    if (origin) {
      trees.push(origin);
    }
    return new BroccoliMergeTrees(trees);
  },
};