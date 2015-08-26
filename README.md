## TiCodeForFTL

This is the demo app for the Joint Code for Fort Lauderdale - South Florida Titanium Developers meetup held on August 26th, 2015.

* [Code for Fort Lauderdale Meetup](http://www.meetup.com/Code-for-FTL/events/224690760/)
* [South Florida Titanium Dev Meetup](http://www.meetup.com/South-Florida-Titanium-Developers/events/220993485/)

### Building the App

##### Get a Meetup.com API key:

One of the tabs shows an example of fetching data from a remote api and populating a tableview. For this, we're getting Code-For-FTL's meetup.com schedule via their api.

You'll need to get your api key [here](https://secure.meetup.com/meetup_api/key/) and replace the string for API_URL at the top of: `app/controllers/meetups/meetupsHome.js`

#### For Android - Get a Map API Key

In order to use Google Maps on Android, Google requires the presence of Google Play Services and an API Key, so it is a bit of a pain, at least initially.  

Follow the steps [here](http://docs.appcelerator.com/platform/latest/#!/guide/Google_Maps_v2_for_Android) to get set up. Note that if you don't add a key, the map will be blank.


### About

Author: [@adampax](http://twitter.com/adampax) - [Polanco Media, LLC](http://polancomedia.com)

License: MIT
