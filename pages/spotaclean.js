    
    /***!          General Functions              !***/
        function hasClass(elem, className) {            /*allows to access created button elements*/
            return elem.classList.contains(className);
        }
 
        function htmlSlice(element, number){
            return element.innerHTML.slice(number);
        }

        function wordTest(str) { 
            return str.split(" ");
        }
 
        function spaceTens(num){
            return num.toString().replace(/\B(?<!\.\d*)(?=(\d{1})+(?!\d))/g, " ")
        }

        function retrieveProdImage(image){
            const prodImgRetrieve = window.getComputedStyle(image).backgroundImage; 
            const prodImgUrl = "url(" + prodImgRetrieve + ")";
            return prodImgUrl
        }



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



            /*const albumLibrary = [myDearMelancholy_EP, seven_EP, currentsBSide_EP, whereDoesTheDevilHide_EP];*/
