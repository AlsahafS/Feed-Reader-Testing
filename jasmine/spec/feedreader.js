/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('allFeeds variable has been defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('allFeeds hav URL defined and that the URL is not empty', function() {
            for (let i in allFeeds) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url).not.toBe(null);
                expect(allFeeds[i].url).toContain("http://");
              console.log(allFeeds[i]);
            }

        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
    it('allFeeds have  name defined and that the name is not empty', function(){
        for (let i in allFeeds) {
    expect(allFeeds[i].name).toBeDefined();
    expect(allFeeds[i].name).not.toBe(null);
}
 });

 });// End allFeeds suite

    /* TODO: Write a new test suite named "The menu" */


    describe('The Menu',function(){
        let body=document.body;
       


        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
it('The menue element is hidden', function(){
    
    expect(body.classList.contains('menu-hidden')).toBe(true);


});
         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
         it('The menu display when clicked andhidden when clicked again', function(){
            let menuClicked= document.getElementsByClassName("menu-icon-link")[0];
        menuClicked.click();
        expect(body.classList.contains('menu-hidden')).toBe(false);
      // second expect
        menuClicked.click();
        expect(body.classList.contains('menu-hidden')).toBe(true);
        
        });
        
        });// End the menu suite
    
    /* TODO: Write a new test suite named "Initial Entries" */
describe('Initial Entries', function(){



        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

        beforeEach(function(done) {
            loadFeed(0, done);
        });


let feed=document.querySelector('.feed');
let entry=feed.querySelectorAll('.entry');
it('it has at least a single .entry element within the .feed container', function(){
expect(entry.length).not.toBe(null);
s
}  );

    }); // Initial Entries End




    /* TODO: Write a new test suite named "New Feed Selection" */
describe('New Feed Selection', function(){


        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */


let feedsBefore;
let changedFeeds;

beforeEach(function(done){
loadFeed(0, function(){
    feedsBefore=document.querySelector('.feed').innerHTML;
loadFeed(1, function(){
changedFeeds=document.querySelector('.feed').innerHTML;
done();


});
});
});

it('loadFeed function that the content actually changes', function(done){
   
    expect(feedsBefore).not.toBe(changedFeeds);
    done();
    
});

});//end "New Feed Selection"
}());
