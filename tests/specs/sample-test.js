'use strict';

describe( 'sample test', function () {
	beforeAll( function () {
		browser.url( 'http://www.google.com' );
	} );

	it( 'sample test', function () {

	    var title = browser.getTitle()
	    console.log(title);
	    expect(true);
	} );
} );
