'use strict';

describe( 'sample test should', function () {
	beforeAll( function () {
		browser.url( 'http://www.google.com' );
	} );

	it( 'sample test it', function () {

	    var title = browser.getTitle()
	    console.log(title);
	    expect(true);
	} );
} );
