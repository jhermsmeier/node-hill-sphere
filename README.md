# Hill Sphere
[![npm](http://img.shields.io/npm/v/hill-sphere.svg?style=flat-square)](https://npmjs.com/hill-sphere)
[![npm downloads](http://img.shields.io/npm/dm/hill-sphere.svg?style=flat-square)](https://npmjs.com/hill-sphere)
[![build status](http://img.shields.io/travis/jhermsmeier/node-hill-sphere.svg?style=flat-square)](https://travis-ci.org/jhermsmeier/node-hill-sphere)

## Install via [npm](https://npmjs.com)

```sh
$ npm install hill-sphere
```

## Usage

```js
var hillSphere = require( 'hill-sphere' )
```

```js
// Mass of Earth in kg
var earth = 5.97219 * 1e24
// Mass of Sun in kg
var sun = 1.98855 * 1e30
// Distance between Earth & Sun in km
var distance = 149598261
// Earth's eccentricity
var eccentricity = 0.01671123
```

```js
// Calculate Earth's Hill Sphere radius in respect to the Sun
var radius = hillSphere( earth, sun, distance, eccentricity )
// -> 1471520.2387246473 (km)
```
