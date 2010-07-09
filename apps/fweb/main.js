// ==========================================================================
// Project:   Fweb
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Fweb */

// This is the function that will start your app running.  The default
// implementation will load any fixtures you have created then instantiate
// your controllers and awake the elements on your page.
//
// As you develop your application you will probably want to override this.
// See comments for some pointers on what to do next.
//
Fweb.main = function main() {

  // Step 1: Instantiate Your Views
  // The default code here will make the mainPane for your application visible
  // on screen.  If you app gets any level of complexity, you will probably 
  // create multiple pages and panes.  
  Fweb.getPath('mainPage.mainPane').append() ;

  // TODO: Set the content property on your primary controller
  // ex: Fweb.contactsController.set('content',Fweb.contacts);

	// function that load user data and nested store in userController
	Fweb.userController.loadUser();
	
	// load orders data 
	Fweb.ordersController.set('content',Fweb.store.find(Fweb.Order));
	
	// show welcome pane
	Fweb.welcomeController.showWelcomePane();
	
	// only for debug
	var test1 = '';

} ;

function main() { Fweb.main(); }
