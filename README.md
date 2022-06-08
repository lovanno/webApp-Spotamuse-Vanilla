# Spotamuse
#### Do you love music and wish you could add your own twist to your favorite songs? With Spotamuse, you can speed up music, lower the pitch or organize your music to be more accessible to you.

![displayImg!](Designs/spotaProgress2%20(v1).png)

**Stack:** *HTML, CSS, Javascript*

#### **Objective 📈:** **Reconstruct and Improve an existing Web Application: Spotify**

#### **Purpose:** 

Every day, developers are testing and brainstorming new ideas. Through Spotamuse, I'll get a glimpse of different techniques companies use to not only improve their services but scale them. In addition, I'll master consuming data from an API.

&nbsp;

**Requirements** 🚦

• *Must look 90%+ Identical to Spotify*

• *Must utilize an API or work with data*

• *New and unique features must be added after the base version to enhance the experience*

**Requirement Issues:** 

&emsp; &emsp;After researching the Spotify API, I noticed users had to log in to access the API. They’d also have to log in every 60 minutes to continue using Spotamuse. From a data consumption view and a security standpoint, I can understand why Spotify requires this. Although there’s a way you could automatically refresh tokens, it'd violate Spotify’s terms of service and forcing users to log in would just resistance.

This pushed me to develop the application without an API and embed the music library. While upsetting, it’s far from the end. Instead, I will use the faker API and auto generate playlists for a fake users’ feed or use firestore to store the music library in the near future. 

&nbsp;

# Roadmap 📜

## Version 2: The Experience 🌌

*Music Filters (A new tab)*

• Slow down or speed up songs

• Add an echo to a song (reverb)

• Modify the pitch of a song

• Apply multiple filters with different adjustments and save them as presets

• Include 3 base filters for users to try

• Allow these base filters or any other filter to be deleted or modified

• Toggle on/off music filters in the music controls (playingNow section)

&nbsp;

*Queue Music*

• Add a song to the queue

• Reorganize songs in the queue 

• Allow users to make temporary playlists of songs through the queue that can also be repeated

&nbsp;

*Organization*

• Allow Spotify playlists to be segmented with breaks. Breaks can be placed anywhere in a playlist and will only play songs within a break’s range. This feature can be added or removed in the app settings. 

•  Allow playlists to be saved inside folders 

• Create a preferred order of albums. This button switches between the original track order and the unique order a user creates


# Realizations ⌛️

• If there is an error in the HTML markup, your css grid will break. 

• You can access dynamic arrays through the DOM window

>window["'" + playlistName.textContent + "'"]

•Functions or css  styles with one line can be placed on the same line to save space

• You can see the exact position someone clicked on a div with offsetX. 

>event.offsetX/element.clientWidth

• You can check playlist attributes with [attribute]

>function sortAlpha(list, _attribute){ list.sort((a, b) => {  if (a[_attribute] > b[_attribute])

&nbsp;

# Current Bugs & Problems 😎 

&nbsp;


## Past Problems

• **(05/05/22) Music Library JSON Restructure Attempt**
> Replacing the embedded musicLibrary with a JSON file and retrieving it locally requires a remote server. This is due to security reasons. 

&nbsp;


• **(05/10/22) Playlist creation - Song Reference vs Copying**

&emsp; &emsp;The music library is an array of objects with each object being a song. To create a new playlist, you'd have to either copy these objects into a new array or reference them but referencing them within javascript isn't simple. Even referencing an entire database for 1 song doesn't make sense, at least in Firestore. The funny part was I knew this would be an issue and wrote it down before I faced it.

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



*📚 Sources*


>Music metadata sources:

https://genius.com/

https://tunebat.com/

https://songdata.io/search
        
        
>Webapps that use Spotify’s API without Auth

http://sixdegreesofkanyewest.com/699OTQXzgjhIYAHMy9RyPD


>Spotify artist and song searches without API log In's.

https://spotify-search-artist.glitch.me/


>Song Settings: Vertical Dropdown Menu w/ Submenu Inspo

https://codepen.io/Wingedness/pen/dPByby

https://stackoverflow.com/questions/47403239/cannot-make-vertical-menu-horizontally