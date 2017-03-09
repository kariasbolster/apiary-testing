'use strict';

describe( 'sample test', function () {
	beforeAll( function () {
		browser.url( 'http://www.google.com' );
	} );

	it( 'asdasdasd', function () {

	    var title = browser.getTitle()
	    console.log(title);
	    expect(true);
	} );
} );
