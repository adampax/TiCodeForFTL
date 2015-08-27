## TiCodeForFTL

This is the demo app for the Joint Code for Fort Lauderdale - South Florida Titanium Developers meetup held on August 26th, 2015.

* [Code for Fort Lauderdale Meetup](http://www.meetup.com/Code-for-FTL/events/224690760/)
* [South Florida Titanium Dev Meetup](http://www.meetup.com/South-Florida-Titanium-Developers/events/220993485/)
* [Meetup Slide Deck](http://www.slideshare.net/adampax/intro-to-appcelerator-titanium-code-for-fort-lauderdale-2015-52131273)

### Before You build

##### Get a Meetup.com API key:

One of the tabs shows an example of fetching data from a remote api and populating a tableview. For this, we're getting Code-For-FTL's meetup.com schedule via their api.

You'll need to get your api key [here](https://secure.meetup.com/meetup_api/key/) and replace the string for API_URL at the top of: `app/controllers/meetups/meetupsHome.js`

##### For Android - Get a Map API Key

In order to use Google Maps on Android, Google requires the presence of Google Play Services and an API Key, so it is a bit of a pain, at least initially.  

Follow the steps [here](http://docs.appcelerator.com/platform/latest/#!/guide/Google_Maps_v2_for_Android) to get set up. Note that if you don't add a key, the map will be blank.

### About The App

This is a basic app, but it shows some ways to do some common tasks for mobile devs, 
like fetching and displaying remote data, and navigation with tabs and detail windows.

* Projects Tab shows a simple animation and a link to some data used by a 
[Code for FTL mapping project](https://github.com/CodeForFtL/ftlviz). You also see 
how quickly we can get a mapview added and displaying data
* Meetups Tab uses the Meetup.com API to fetch the Code-For-FTL events, then it stores the data in a Backbone Collection that binds to a TableView. We've also wired up a click event that will open the selected Meetup in a detail window
* We've built our own simple HttpClient library called xhr.js to handle our network 
requests. 
* We have also done some simple styling for iOS (in app.tss) as well as created a 
custom Material Theme for Android (in platform/android/res/values)

### About Me

* [@adampax](http://twitter.com/adampax)
* [Polanco Media, LLC](http://polancomedia.com)
* [Titanium South Florida Meetup Group](http://bit.ly/tisofla)

License: MIT
