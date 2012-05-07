OctoLayer
=========

Embed beautiful maps into octopress posts

Install
-------

* Copy all files from ``install/`` into your octopress dir
* Resolve possible conflicts with your existing configuration (e.g. ``source/_includes/custom/head.html``) manually
* Create posts with maps!

Use it!
-------

The general syntax is

{% map lat lon zoomLevel "markerTitle" "description" %}

For more information, just check out the

Demo Pages
----------

[Check them out.](http://mguentner.github.com/octolayer/)


Used third party software
-------------------------

[Openlayers](http://openlayers.org/)

besides, ``install/source/javascripts/OpenLayer.js``, the default GUI elements of OpenLayers have been used, sources can be found in ``svg``.

License
-------
This applies to all files without a specific license header and/or files that are not part of software mentioned in "Used third party software" (see above). 

(The MIT License)

Copyright © 2012 Maximilian Güntner

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the ‘Software’), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED ‘AS IS’, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
