# Spotamuse (Work in Progress)   
#### Do you love music and wish you could add your own twist to your favorites? Speed up your songs, lower the pitch or organize your music to be more accessible with Spotamuse.

![displayImg!](Designs/spotaProgress.png)

**Stack:** *HTML, CSS, Javascript, Typescript*

#### **Objective 📈:** **Reconstruct and Improve a Web Application (Spotify)**

#### **Purpose:** 

This project will give you a glimpse of the everyday processes companies employ to improve their services. Everyday, developers are 
testing new features and brainstorming new ideas. In addition, you will learn to consume data from a database or API. It's the first step towards backend and becoming a Full Stack Developer, as well as working with a team. 

**Requirements** 🚦

• *Must look 90%+ Identical to Spotify*

• *Must utilize an API or work with data*

• *After implementing base features, you must add new features to enhance the experience*

**Requirement Issues:** 

&emsp; &emsp;After researching the Spotify API, I realized you must have the user logged in to use the API. They also have to log in every 60 minutes. I researched if you could just automatically refresh tokens but it wasn't allowed. 
This forced me to develop the application without an API, which is a bummer but not the end. Instead, I will probably use the faker API and auto generate playlists for these fake users or use firestore to store and consume data.

&nbsp;

# Roadmap 📜
*Current Goal: Convert Javascript into Typescript to ensure quality and improve current program.*

## Version 1: Launch 🌌

Sort Songs (most played, alphabetical, date created, date added) ✅

Last Played Personal Playlist (plays last 10 songs and updates with each song) ✅

Play a playlist backwards ✅

Create a playlist shuffle ✅

Listen to later tab. This can organize songs by priority, nonessential, eventually ✅

*Allow songs to replay if repeat cycle button is toggled*

## Version 2: Experience 🌌

Music Filters
• Slow down music or Speed it up
• Add an echo to a song (reverb)

&nbsp;

*Better queue grid*

&emsp; &emsp;• Make temporary playlists through the queue. Temporary Playlists can repeat if you create a button to cycle.

*Organization*

&emsp; &emsp;• Make breaks for Spotify playlists. (Breaks allow for random songs to be played within sections. EX you can’t play a song in section 2 if your skips aren’t broken. Max of 3 skips. Must hold to activate)

&emsp; &emsp;• temporary playlist through queue. It can repeat if you create a button to cycle. It’ll hit the button again and be signaled as the restart.
• Folders for Spotify 
• Sort Songs (most played, alphabetical, date created, date added)

&nbsp;

*Album Order*

&emsp; &emsp; • create a preferred order of albums. This button switches between original and the ones you just want to hear. 

*Folders for Spotify*

# Realizations ⌛️

• If there is an error in the HTML markup, your css grid will break. 

&nbsp;

&nbsp;

# Current Bugs & Problems 😎

*Note: M = Major, n = nothing serious*

*• M1: Playlist tracks can't be played if cover or song info is touched. | Messing with Z-index didn't solve this issue. Will have to research later.* 


&nbsp;

## Problems

• **(05/05/22) Restructure - Removing the musicLibrary object data from javascript and retrieving it locally isn't simple**

>JSON data must be uploaded on a remote server to be retrieved for security reasons. Another angle was importing javascript files but this is only an ES6 feature. We'll just have to finish version 1 with the musicLibrary embedded and then restructure with firebase database.

&nbsp;

&nbsp;


• **(05/10/22) Song Reference vs Copy - Playlist creation**

&emsp; &emsp;The music library is an array with objects with each object being a song. To create a new playlist, you'd have to either copy these objects into a new array or reference them but referencing them within javascript isn't simple. Even referencing an entire database for 1 song doesn't make sense, at least in Firestore. The funny part was I knew this would be an issue and wrote it in Big Questions before facing it

&nbsp;

>Attempt 1: Creating strings that reference an array and converting it

    if(chosenPlaylist.length > 1){
        song = new Audio(playlistShow[clickedTrack-1].track_mp3Url);
    }

    else{
        let current = musicLibrary[((window["'" + playlistName.textContent + "'"])[clickedTrack-1])];
        song = new Audio(current.track_mp3Url);
    }

The problem with this approach is string arrays can't be converted into references. I tried using window[] and an anonymous function to convert these strings but this only worked on primatives and functions. The reason might be in the way that they're stored. Objects are stored in the heap but primitives aren't. Functions are also stored in the heap but since they have pointers in the stack, they'll convert. 


>Attempt 2: Using number references

    (window["'" + playlistName.textContent + "'"]).push(clickedTrack-1);

&nbsp;


&emsp; &emsp;While it worked, it had limitations. My playback functions relied on indexes and these reference arrays didn't hold the song objects. For it to work,I'd have to create different toggles and rewrite similar functions to accomodate the difference. 

The other issue was track creation. The first playlist song would never be available because the creation of tracks and track modification happens at the same time. You can't go back to the 1st track or you'd create another track within the loop. In other words, the first track is never accessible and you'd  always have to skip it or repeat it. 


🔑 *Current Solution: Copying objects*
>(window["'" + playlistName.textContent + "'"]).push(musicLibrary[clickedTrack-1]);      /*copies objects*/


&nbsp;


&nbsp;


### 🔱 Big Questions during Development 🔱

• *How would you cache data downloaded files and avoid multiple api calls for each song?*

• *How can you make new playlists without duplicating data? Would you make a reference or would you duplicate each time (since firebase is noSQL and duplication is fine)?*

• *Is it bad design to reuse one element variable multiple times? I keep thinking of using a getter or a way to lock the variable so only functions can modify them*


&nbsp;


*Scraped Features*

   >Global Rewind and Shuffle
    
    Global rewind is a feature I'd love in Spotify. With global rewind, you'd be able to play the last song listened to from a previous playlist. To make a true global experience, I also wanted to make a global shuffle feature that allowed you to play a random song from all your playlists. 

    Reason for Removal: All created playlists are based on home library of MP3's. So playing a song from a random playlist is just playing a random from the home library.It just doesn't make sense to implement this feature. This reasoning also extends to the global shuffle. Instead, I'll just make a shuffle feature for the current playlist. 


*📚 Sources*


>Music metadata sources:

https://genius.com/

https://tunebat.com/

https://songdata.io/search
        
        
>Although there is this website that uses the spotify API with no auth, I don't want to risk safety. 

http://sixdegreesofkanyewest.com/699OTQXzgjhIYAHMy9RyPD


>Searches with no Log In's.

https://spotify-search-artist.glitch.me/


>Audiomack has auth points. Couldn't use


https://api.audiomack.com/v1/music/rap/trending (1003, 401)

https://audiomack.com/v1/search?q=the%20weeknd (1003, 401)

https://api.audiomack.com/v1/music/song/the-weeknd/song/save-your-tears (1003, 401)

https://api.audiomack.com/v1/playlist/trending (1003, 401)




>Song Settings: Vertical Dropdown Menu w/ Submenu Inspo

https://codepen.io/Wingedness/pen/dPByby

https://stackoverflow.com/questions/47403239/cannot-make-vertical-menu-horizontally