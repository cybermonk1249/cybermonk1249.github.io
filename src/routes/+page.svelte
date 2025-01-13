<script>
    import '$lib/gruvbox-dark.css'
    // @ts-ignore
    import {Howl, Howler} from 'howler';
    import { audioData } from '$lib/audioData'
    import { browser } from '$app/environment'
    // let audioFile = new Audio(audioData[trackIndex].url);
    

    
    let trackIndex = $state(0);
    
    let isPlaying = $state(false);
    
    const playPauseAudio = () => {
        updateTags();
        // @ts-ignore
        if (tracks[trackIndex].playing()) {
            // @ts-ignore
            tracks[trackIndex].pause();
            isPlaying = false;
        } else {
            // @ts-ignore
            tracks[trackIndex].play();
            isPlaying = true;
        }
    }
    
    let trackCover = $state(audioData[0].cover);
    let trackTitle = $state(audioData[0].title);
    let trackArtist = $state(audioData[0].artist);
    const updateTags = () => {
        // console.log(audioData[trackIndex].title);
        trackTitle = audioData[trackIndex].title;
        trackCover = audioData[trackIndex].cover;
        trackArtist = audioData[trackIndex].artist;
        // console.log(trackTitle);
    }
    updateTags();


    const nextTrack = () => {
        updateTags();
        // @ts-ignore
        tracks[trackIndex].stop();
        trackIndex += 1;
        if (trackIndex == audioData.length) {
            trackIndex = 0;
        }
        playPauseAudio();
        // tracks[trackIndex].play(trackIndex);
    }

    const prevTrack = () => {
        // @ts-ignore
        tracks[trackIndex].stop();
        trackIndex -= 1;
        if (trackIndex <= 0) {
            trackIndex = audioData.length - 1;
        }
        updateTags();
        
        playPauseAudio();
        // tracks[trackIndex].play(trackIndex);
    }

    const skipStart = () => {
        // @ts-ignore
        tracks[trackIndex].stop();
        tracks[trackIndex].seek(0);
        isPlaying = false;
    }

    function createPlaylist() {
        let tracks = [];
        for (let i = 0; i < audioData.length; i++) {
            tracks[i] = new Howl({
                src: audioData[i].url,
                onend: nextTrack
            })
        }
        return tracks;
    }
    let tracks = createPlaylist();

    
</script>
{#if browser}
<script src="/bganim.js"></script>
{/if}

<main>
    <canvas id="canvas1"></canvas>
    <section id="mainbox">
        <section id="player-cont">
            <div id="track-title">
                <h3>{trackTitle}</h3>
            </div>
            <div id="track-artist">
                <h4>{trackArtist}</h4>
            </div>
            <div id="welcome">
                <h3> cybermonks page </h3>
            </div>
            <div id="intro">
                <p> Working on a little website showing some music and coding stuff mostly.
                    rn u're listening to some cool ambient / liminal techno tracks.
                    Stuff to add: navbar, blog?, music promo, SHADERS, finish implementing music player
                    with a playlist, wanna share cool music projects too.
                </p>
                <section id="btn-cont">
                    <button onclick={skipStart} ondblclick={prevTrack}>
                        <img src='/controls/skip-to-start.png' alt="skip">
                    </button>
                    <button>
                        <img src='/controls/rewind.png' alt="rewind">
                    </button>
                    <button onclick={playPauseAudio}>
                        <img src={
                            isPlaying ? '/controls/pause.png' : '/controls/play.png'}  
                            alt="play" />
                    </button>
                    <button>
                        <img src='/controls/fast-forward.png' alt="forward">
                    </button>
                    <button onclick={nextTrack}>
                        <img src='/controls/end.png' alt="skip">
                    </button>
                </section>
            </div>
        </section>
        <section id="track-info">
            <div id="coverimg">
                <img src={trackCover} alt="cover">
            </div>
        </section>
        
    </section>
</main>

<style src="../gruvbox-dark.css">
    @font-face {
        font-family: "spacemonobold";
        src: url("$fonts/space-mono/SpaceMono-Bold.ttf");
    }
    @font-face {
        font-family: "spacemono";
        src: url("$fonts/space-mono/SpaceMono-Regular.ttf");
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    #mainbox {
        display: flex;
	    flex-flow: row wrap;
	    justify-content: center;
        width: 750px;
	    gap: 1em;
	    margin: auto;
        padding: 0;
        /* left: 50%;
        transform: translateX(50%); */
    }

    #player-cont, #coverimg {
        margin: 0;
        height: 200px;
        width: 60%;
        background-color: var(--bg);
        justify-content: center;
        border: 4px solid var(--bg2);
        filter: grayscale(1);
        transition: 0.4s;
        /* display: flex; */
    }

    #intro {
        font-family: spacemono;
        color: #ff76b8;
        font-size: .7em;
        padding: 0 1em;
        
    }

    #player-cont:hover, #coverimg:hover, #btn-cont:hover {
        filter: grayscale(0);
    }

    #btn-cont {
        /* width: 200px; */
        /* height: 33px; */
        /* position: relative; */
        float: right;
        background-color: var(--bg);
        /* bottom: 0; */
        display: flex;
        align-items: center;
        justify-content: space-between;
        border: solid;
        color: #8E44AD;
        filter: grayscale(1);
        transition: 0.4s;
        /* object-fit: contain; */
        width: 200px;
        margin: auto;

        
    }

    button {
        color: var(--blue);
        border: 4px solid #15141c;
        background-color: #8A2BE2;
        height: 26px;
        width: 26px;
        padding: 1px;
    }
    #btn-cont img {
        object-fit: contain;
        width: 100%;
        height: auto;
    }

    #track-title {
        font-family: spacemonobold;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 2em;
        justify-content: center;
        color: #FFD600;
        text-align: center;
        font-size: .7em;
        /* border-radius: 2px; */
        /* border-top: solid; */
        border: solid;
    }

    #track-artist {
        font-family: spacemonobold;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 2em;
        /* justify-content: center; */
        color: #00BFAE;
        text-align: center;
        font-size: .7em;
        /* border-radius: 2px; */
        /* border-top: solid; */
        border: solid;
    }

    #welcome {
        font-family: spacemonobold;
        display: flex;
        height: 2em;
        margin: 0 0;
        border-bottom: dotted;
        color: #ff76b8;
        font-size: .7em;
        justify-content: center;
        align-items: center;
    }

    #coverimg {
        width: 200px;
        height: 200px;
        border: 4px solid #ff0051;
    }
    #coverimg img {
        object-fit: contain;
        width: 100%;
        height: auto;
        filter: grayscale(1);
	    /* width: 100%; */
	    /* border: 1px solid #070707; */
        transition: 0.4s;
    }


    #coverimg img:hover {
        filter:grayscale(0.3);
    }

    #canvas1 {
    background-color: var(--bg);
    position: fixed;
    /* z-index: 0; */
    top: 0;
    left: 0;
}
</style>