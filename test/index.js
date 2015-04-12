var assert = require( 'assert' )
var hillSphere = require( '..' )

// Masses is kg
var earthMass = 5.97219 * 1e24
var sunMass = 1.98855 * 1e30
// 149.6 million km
var distance = 149598261
// Earth's eccentricity
var eccentricity = 0.01671123
// ~1.5 million km
var expectedRadius = 1.47 * 1e6
var epsilon = 10e3

var radius = hillSphere( earthMass, sunMass, distance, eccentricity )

console.log( 'Hill Sphere radius:', radius )

assert.ok(
  radius > ( expectedRadius - epsilon ) &&
  radius < ( expectedRadius + epsilon )
)
