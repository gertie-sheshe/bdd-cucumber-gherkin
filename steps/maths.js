const defineSupportCode = require('cucumber').defineSupportCode;

defineSupportCode(function({Given, Then, When}) {
    Given('I start with {int}', function (int, callback) {

        callback(null, 'pending');
    });

    When('I add {int}', function(int, callback) {

        callback(null, 'pending');
    });

    Then('I end up with {int}', function(int, callback) {

        callback(null, 'pending');
    });
});