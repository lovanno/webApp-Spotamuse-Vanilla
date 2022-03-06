











/*  Tab Functionality  */
        const allTabs = document.querySelectorAll(".tab");
         document.body.addEventListener("click", function(event){
            const from = event.target;

            if(hasClass(from, "sideBarHeader")){
                allTabs.forEach(tabs => tabs.style.display = "none");

                const clickedTab = parseInt(from.className.slice(-1))-1;
                allTabs[clickedTab].style.display = "block";
            }
        });








/*                                                              Core Functionality                                                                */

        /*  Playback Buttons */
        const skipBackBtn = document.querySelector("button.songSkip.Setting.\\31");
        const pauseBtn = document.querySelector("button.songSkip.Setting.\\32");
        const skipForwardBtn = document.querySelector("button.songSkip.Setting.\\33");
        var songOrder = 0;  /*Grabs current playlist and is updated based on what song is playing*/


        /* Current songPlaying Info */
        const currentSong = document.querySelector("p.songPlayingName.\\31");
        const currentAlbum = document.querySelector("p.songPlayingAlbum.\\31");
        const currentAlbumCover = document.querySelector("div.songPlayingAlbum.Image.\\31");
        const currentSongTime = document.querySelector("p.songProgressSec");

        const currentSongDuration = document.querySelector("p.songProgressSec.total");  
        currentSongDuration.textContent = "0:30";


        



        /*                                              Playback Functions                                                      */



        const songsPlayed = [];         /*Used for playback functions and recently played playlist*/
        var playButtonToggle = 0;       /*Switch toggle for paused songs*/

        /*function stop(insertSong) {
            insertSong.pause();
            insertSong.currentTime = 0;
        }*/

        function stopAll() {
            songsPlayed.forEach(function(songs) {
                /*stop(songs);*/
                songs.pause();
                songs.currentTime = 0;
            });
        }


        function updateCurrentSongTime() {
            var currentInterval = setInterval(function() {

                if(Math.floor(songsPlayed[songsPlayed.length-1].currentTime % 60) < 10){
                    currentSongTime.textContent = "0:0" + Math.floor(songsPlayed[songsPlayed.length-1].currentTime % 60);
                }
                else {currentSongTime.textContent = "0:" + Math.floor(songsPlayed[songsPlayed.length-1].currentTime % 60);}


                if(Math.floor(songsPlayed[songsPlayed.length-1].currentTime % 60) == 30 || playButtonToggle !== 0){ clearInterval(currentInterval);}

            }, 0);
        }


        function updateCurrentPlaylistInfo(chosenPlaylist){
            playButtonToggle = 0;
            song = new Audio(chosenPlaylist[songOrder]);
            songsPlayed.push(song);
            stopAll();
                
            song.play();
            updateCurrentSongTime();
        }

        /* Updates Current songPlaying Info 

            musicLibrary.map((songs) => {
                if(songs.id == (songOrder) + 1){
                    currentSong.textContent = (songs.track_title);
                    currentAlbum.textContent = (songs.track_album);
                    currentAlbumCover.style.backgroundImage = "url(\"" + songs.track_coverUrl + "\")";
                }
            });

            albumLibrary.map((album) => {
                album.forEach(songs => {
                    if(songs.id == (songOrder) + 1){
                        currentSong.textContent = (songs.track_title);
                        currentAlbum.textContent = (songs.track_album);
                        currentAlbumCover.style.backgroundImage = "url(\"" + songs.track_coverUrl + "\")";
                    }
                })
            });*/

        function nowPlayingInfo(songData){
            currentSong.textContent = songData.track_title;
            currentAlbum.textContent = songData.track_album;
            currentAlbumCover.style.backgroundImage = "url(\"" + songData.track_coverUrl + "\")";
        }



        function updatePlaylistAudio(audioData){
            document.body.addEventListener("click", function(event){
                const from = event.target;

                if(hasClass(from, "newPlaylistSongs")){
                    var clickedTrack = parseInt(from.className.slice(17));
                    song = new Audio(audioData[clickedTrack-1].track_mp3Url);
                    songsPlayed.push(song);
                    stopAll();
                    song.play();

                    songOrder = clickedTrack-1;
                }
            })
        }

        


        /*document.body.addEventListener("click", function(event){
            const from = event.target;
          
        if(thisValue == 0){
            if(from == skipBackBtn){
                if(songOrder == 0){
                    songOrder = mp3UrlLibrary.length-1;
                }
                else{
                    songOrder--;
                }

                updateCurrentPlaylistInfo(mp3UrlLibrary);
            }


            if(from == pauseBtn){
                if(playButtonToggle == 0){
                    songsPlayed[songsPlayed.length-1].pause();
                    playButtonToggle++;
                }
                else{
                    songsPlayed[songsPlayed.length-1].play();
                    playButtonToggle = 0;
                    updateCurrentSongTime(mp3UrlLibrary);
                }
            }


            if(from == skipForwardBtn){
                if(songOrder == mp3UrlLibrary.length-1){
                    songOrder = 0;
                }
                else{
                    songOrder++;
                }

                updateCurrentPlaylistInfo(mp3UrlLibrary);
            }

        }
        else{
            if(from == skipBackBtn){
                if(songOrder == 0){
                    songOrder = totalPlaylists[totalPlaylists.length-1].length-1;
                }
                else{
                    songOrder--;
                }
                updateCurrentPlaylistInfo(totalPlaylists[totalPlaylists.length-1][0]);

            }


            if(from == pauseBtn){
                if(playButtonToggle == 0){
                    songsPlayed[songsPlayed.length-1].pause();
                    playButtonToggle++;
                }
                else{
                    songsPlayed[songsPlayed.length-1].play();
                    playButtonToggle = 0;
                    updateCurrentPlaylistInfo(totalPlaylists[totalPlaylists.length-1][0]);
                }
            }


            if(from == skipForwardBtn){
                if(songOrder == totalPlaylists[totalPlaylists.length-1].length-1){
                    songOrder = 0;
                }
                else{
                    songOrder++;
                }
                updateCurrentPlaylistInfo(totalPlaylists[totalPlaylists.length-1][0]);

            }


        }
        })*/



        function updatePlayback (chosenPlaylist){
    
        document.body.addEventListener("click", function(event){
            const from = event.target;
          
            if(from == skipBackBtn){
                if(songOrder == 0){
                    songOrder = chosenPlaylist.length-1;
                }
                else{
                    songOrder--;
                }

                updateCurrentPlaylistInfo(mp3UrlLibrary);
            }


            if(from == pauseBtn){
                if(playButtonToggle == 0){
                    songsPlayed[songsPlayed.length-1].pause();
                    playButtonToggle++;
                }
                else{
                    songsPlayed[songsPlayed.length-1].play();
                    playButtonToggle = 0;
                    updateCurrentSongTime(chosenPlaylist);
                }
            }


            if(from == skipForwardBtn){
                if(songOrder == chosenPlaylist.length-1){
                    songOrder = 0;
                }
                else{
                    songOrder++;
                }

                updateCurrentPlaylistInfo(chosenPlaylist);
            }
        })
        }





        /*                                                                            Created Elements                                                  */
        yourLibraryPlaylistCont = document.querySelector("div.yourLibrary.playlistCont.\\31");
        function createPlaylistBox(){ 
            const newPlaylistBox = document.createElement("button");
            newPlaylistBox.classList.add("yourLibrary", "playlistBtnCont", 2);
            yourLibraryPlaylistCont.appendChild(newPlaylistBox);

                    const newPlaylistCover = document.createElement("div");
                    newPlaylistCover.classList.add("yourLibrary", "playlistCover", 2)
                    newPlaylistBox.appendChild(newPlaylistCover);

                    const updatePlaylistName = document.createElement("div");
                    updatePlaylistName.classList.add("yourLibrary", "playlistName", 2);
                    updatePlaylistName.textContent = playlistName.textContent;
                    newPlaylistBox.appendChild(updatePlaylistName);
        }



        const allPlaylistTracksCont = document.querySelector("div.library.newPlaylistCont.\\31");
        var playlistTrackCount = 1;
        function createPlaylistTrack(interval){
            playlistTrackCount++;

            const newPlaylistSongCont = document.createElement("button");
            newPlaylistSongCont.classList.add("newPlaylistSongs", interval);
            allPlaylistTracksCont.appendChild(newPlaylistSongCont);


                    const trackOrderCont = document.createElement("div");
                    trackOrderCont.classList.add("playlistSong", "orderCont", + interval);
                    newPlaylistSongCont.appendChild(trackOrderCont);

                            const trackOrderNumber = document.createElement("p");
                            trackOrderNumber.classList.add("playlistSong", "trackOrder", + interval);
                            trackOrderNumber.textContent = interval;
                            trackOrderCont.appendChild(trackOrderNumber);

                            const trackCoverImg = document.createElement("div");
                            trackCoverImg.classList.add("playlistSong", "trackImage", + interval);
                            trackOrderCont.appendChild(trackCoverImg);

                            const trackInfoCont = document.createElement("div");
                            trackInfoCont.classList.add("playlistSong", "trackInfoCont", + interval);
                            trackOrderCont.appendChild(trackInfoCont);

                                    const trackTitle = document.createElement("p");
                                    trackTitle.textContent = "Track Title";
                                    trackTitle.classList.add("playlistSong", "trackTitle", + interval); 
                                    trackInfoCont.appendChild(trackTitle);

                                    const trackArtist = document.createElement("p");
                                    trackArtist.textContent = "Artist";
                                    trackArtist.classList.add("playlistSong", "trackArtist", + interval); 
                                    trackInfoCont.appendChild(trackArtist);

                                    
                    const trackAlbumCont = document.createElement("div");
                    trackAlbumCont.classList.add("playlistSongs", "albumCont", + interval);
                    newPlaylistSongCont.appendChild(trackAlbumCont);

                            const trackAlbum = document.createElement("p");
                            trackAlbum.textContent = "Album Name";
                            trackAlbum.classList.add("playlistSong", "albumTitle", interval);
                            trackAlbumCont.appendChild(trackAlbum);


                    const trackDateAddedCont = document.createElement("div");
                    trackDateAddedCont.classList.add("playlistSongs", "dateAddedCont", + interval);
                    newPlaylistSongCont.appendChild(trackDateAddedCont);

                            const dateAddedText = document.createElement("p");
                            dateAddedText.textContent = "Sep 4, 2021";
                            dateAddedText.classList.add("playlistSong", "dateAdded", interval);
                            trackDateAddedCont.appendChild(dateAddedText);
                    
                            
                    const trackDurationCont = document.createElement("div");
                    trackDurationCont.classList.add("playlistSongs", "durationCont", + interval);
                    newPlaylistSongCont.appendChild(trackDurationCont);

                            const trackDurationText = document.createElement("p");
                            trackDurationText.textContent = "0:00";
                            trackDurationText.classList.add("playlistSong", "durationTime", interval);
                            trackDurationCont.appendChild(trackDurationText);
        }





















        /* Home Library Set up */
        const mp3UrlLibrary = [];
        musicLibrary.map(songs => mp3UrlLibrary.push(songs.track_mp3Url));
        
        albumLibrary.map((album) => {
            album.forEach(songs => mp3UrlLibrary.push(songs.track_mp3Url));
        });

        const downloadedFilesData = []


        function createDownloadedPlaylist(){
                document.querySelector("div.playlistSong.trackImage.\\31").style.backgroundImage = "url(\"" + musicLibrary[0].track_coverUrl; + "\")";
                document.querySelector("p.playlistSong.trackTitle.\\31").textContent = musicLibrary[0].track_title;
                document.querySelector("p.playlistSong.trackArtist.\\31").textContent = musicLibrary[0].artist;
                document.querySelector("p.playlistSong.albumTitle.\\31").textContent = musicLibrary[0].track_album;
                document.querySelector("p.playlistSong.durationTime.\\31").textContent = musicLibrary[0].duration;
                
                createPlaylistData(musicLibrary[0], downloadedFilesData);

            for(let c = 0; c <mp3UrlLibrary.length-1; c++){
                createPlaylistTrack(playlistTrackCount);

                console.log(document.querySelector("div.playlistSong.trackImage.\\35"));
                console.log(document.querySelector("div.playlistSong.trackImage.\\3" + playlistTrackCount));
               

                if(playlistTrackCount < 9){
                    document.querySelector("div.playlistSong.trackImage.\\3" + playlistTrackCount).style.backgroundImage = "url(\"" + musicLibrary[playlistTrackCount-1].track_coverUrl + "\")";
                    document.querySelector("p.playlistSong.trackTitle.\\3" + playlistTrackCount).textContent = musicLibrary[playlistTrackCount-1].track_title;
                    document.querySelector("p.playlistSong.trackArtist.\\3" + playlistTrackCount).textContent = musicLibrary[playlistTrackCount-1].artist;
                    document.querySelector("p.playlistSong.albumTitle.\\3" + playlistTrackCount).textContent = musicLibrary[playlistTrackCount-1].track_album;
                    document.querySelector("p.playlistSong.durationTime.\\3" + playlistTrackCount).textContent = musicLibrary[playlistTrackCount-1].duration;

                    createPlaylistData(musicLibrary[playlistTrackCount-1], downloadedFilesData);
                }
                else if(playlistTrackCount < musicLibrary.length + 1){
                    document.querySelector("div.playlistSong.trackImage.\\3" + spaceTens(playlistTrackCount)).style.backgroundImage = "url(\"" + musicLibrary[playlistTrackCount-1].track_coverUrl + "\")";
                    document.querySelector("p.playlistSong.trackTitle.\\3" + spaceTens(playlistTrackCount)).textContent = musicLibrary[playlistTrackCount-1].track_title;
                    document.querySelector("p.playlistSong.trackArtist.\\3" + spaceTens(playlistTrackCount)).textContent = musicLibrary[playlistTrackCount-1].artist;
                    document.querySelector("p.playlistSong.albumTitle.\\3" + spaceTens(playlistTrackCount)).textContent = musicLibrary[playlistTrackCount-1].track_album;
                    document.querySelector("p.playlistSong.durationTime.\\3" + spaceTens(playlistTrackCount)).textContent = musicLibrary[playlistTrackCount-1].duration;

                    createPlaylistData(musicLibrary[playlistTrackCount-1], downloadedFilesData);
                }
                else{
                    albumLibrary.forEach(album =>{
                        album.forEach(songs =>{
                            if(songs.id == (playlistTrackCount)){
                                document.querySelector("div.playlistSong.trackImage.\\3" + spaceTens(playlistTrackCount)).style.backgroundImage = "url(\"" + songs.track_coverUrl + "\")";
                                document.querySelector("p.playlistSong.trackTitle.\\3" + spaceTens(playlistTrackCount)).textContent = songs.track_title;
                                document.querySelector("p.playlistSong.trackArtist.\\3" + spaceTens(playlistTrackCount)).textContent = songs.artist;
                                document.querySelector("p.playlistSong.albumTitle.\\3" + spaceTens(playlistTrackCount)).textContent = songs.track_album;
                                document.querySelector("p.playlistSong.durationTime.\\3" + spaceTens(playlistTrackCount)).textContent = songs.duration;
                                
                                createPlaylistData(songs, downloadedFilesData);
                            }
                        })
                    })
                }

            };     
        }












        /*                              Reset Playlist Function                     */
        function refreshPlaylist(){
            const totalTracksPlaylist = document.querySelectorAll("button.newPlaylistSongs");
            totalTracksPlaylist.forEach(playlistSongs => playlistSongs.remove());
        }





        const totalPlaylists = [downloadedFilesData];









            /*  Grabs downloaded files playlist */
            document.body.addEventListener("click", function(event){
            const from = event.target;

            if(hasClass(from, "yourLibrary", "playlistBtnCont")){
                allTabs.forEach(tabs => tabs.style.display = "none");
                allTabs[4].style.display = "block";
                

                playlistTrackCount = 1;
                

                refreshPlaylist();
                createPlaylistTrack(1);
                createDownloadedPlaylist();
            }
        })





 

        

        /*New Playlist Creation */
        const createPlaylistTab = document.querySelector("button.librarySideBar.headerBtn.\\35");
        const playlistName = document.querySelector("h1.newPlaylistName.\\31");
        const playlistTotalSongs = document.querySelector("div.newPlaylistUserSongs.\\31");
        const playlistRuntime = document.querySelector("div.newPlaylistUserTime.\\31");
        
        
        createPlaylistTab.addEventListener("click", function(){
            refreshPlaylist();
            let newPlaylistName = prompt("Please enter a name for your Playlist");

            if (newPlaylistName == null || newPlaylistName == "") {
                console.log("not choosen");
            } 
            else {
                playlistName.textContent = newPlaylistName;
            }

        })




        function createPlaylistData(audioData, newPlaylistArr){
            var obj = {};
                obj["artist"] = audioData.artist;
                obj["feature"] = audioData.feature;

                obj["track_title"] = audioData.track_title;
                obj["track_subTitle"] = audioData.track_subTitle;
                obj["track_album"] = audioData.track_album;
                obj["track_subAlbum"] = audioData.track_subAlbum;

                obj["track_mp3Url"] = audioData.track_mp3Url;
                obj["track_coverUrl"] = audioData.track_coverUrl;
                obj["duration"] = audioData.duration;
                    
            newPlaylistArr.push(obj);
        }


        function makeNewPlaylist(){
            var playlist = new Array();

            document.body.addEventListener("click", function(event){
                const from = event.target;

                if(hasClass(from, "newPlaylistSongs")){
                    var clickedTrack = parseInt(from.className.slice(17));
                    playlist.push(downloadedFilesData[clickedTrack-1]);      
                }

                if(hasClass(from, "finishedPlaylistBtn")){
                    totalPlaylists.push(new Array(playlist));
                    refreshPlaylist();
                    playlistTrackCount = 1;

                    updatePlaylistAudio(totalPlaylists[totalPlaylists.length-1][0]);

                    for(let t=0; t<totalPlaylists[totalPlaylists.length-1][0].length; t++){
                        createPlaylistTrack(playlistTrackCount);

                        if(t < 9){
                            document.querySelector("div.playlistSong.trackImage.\\3" + (t+1)).style.backgroundImage = "url(\"" + totalPlaylists[totalPlaylists.length-1][0][t].track_coverUrl + "\")";
                            document.querySelector("p.playlistSong.trackTitle.\\3" + (t+1)).textContent = totalPlaylists[totalPlaylists.length-1][0][t].track_title;
                            document.querySelector("p.playlistSong.trackArtist.\\3" + (t+1)).textContent = totalPlaylists[totalPlaylists.length-1][0][t].artist;
                            document.querySelector("p.playlistSong.albumTitle.\\3" + (t+1)).textContent = totalPlaylists[totalPlaylists.length-1][0][t].track_album;
                            document.querySelector("p.playlistSong.durationTime.\\3" + (t+1)).textContent = totalPlaylists[totalPlaylists.length-1][0][t].duration;
                        }
                        else {
                            document.querySelector("div.playlistSong.trackImage.\\3" + spaceTens((t+1))).style.backgroundImage = "url(\"" + totalPlaylists[totalPlaylists.length-1][0][t].track_coverUrl + "\")";
                            document.querySelector("p.playlistSong.trackTitle.\\3" + spaceTens((t+1))).textContent = totalPlaylists[totalPlaylists.length-1][0][t].track_title;
                            document.querySelector("p.playlistSong.trackArtist.\\3" + spaceTens((t+1))).textContent = totalPlaylists[totalPlaylists.length-1][0][t].artist;
                            document.querySelector("p.playlistSong.albumTitle.\\3" + spaceTens((t+1))).textContent = totalPlaylists[totalPlaylists.length-1][0][t].track_album;
                            document.querySelector("p.playlistSong.durationTime.\\3" + spaceTens((t+1))).textContent = totalPlaylists[totalPlaylists.length-1][0][t].duration;
                        }
                }
                createPlaylistBox();
            }
        }
            )}


        const addNewSongsPlaylist = document.querySelector("button.addSongsPlaylistBtn");

            addNewSongsPlaylist.addEventListener("click", function(){
            playlistTrackCount = 1;
                

            refreshPlaylist();
            createPlaylistTrack(1);
            createDownloadedPlaylist();
            makeNewPlaylist()


        })




















        





        
     





        





        /*Random Ideas */
        
/*
        switch ("Oranges") {
            case 'Oranges':
                console.log('Oranges');
                updatePlaylistAudio(mp3UrlLibrary);
                
                break;
            case 'Mangoes':
            case 'Papayas':
                console.log('Mangoes and papayas');
                break;
        }*/


        /*const downloadedFilesData = [];
        var obj = {};
                obj["artist"] = musicLibrary[0].artist;
                obj["feature"] = musicLibrary[0].feature;
                obj["track_title"] = musicLibrary[0].track_title;
                obj["track_title"] = musicLibrary[0].track_subTitle;

                obj["track_album"] = musicLibrary[0].track_album;
                obj["track_album"] = musicLibrary[0].track_subAlbum
                obj["track_coverUrl"] = musicLibrary[0].track_coverUrl;
                obj["duration"] = musicLibrary[0].duration;
                    
            downloadedFilesData.push(obj);
        
        */
        



        

        

        


       
        



        /*music libary sources:
            https://genius.com/
            https://tunebat.com/
            https://songdata.io/search
        */
