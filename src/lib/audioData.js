// import * as id3 from 'id3js';


// id3.fromPath('./src/lib/tracks/recursion room.mp3').then((tags) => {
//     // console.log(tags?.artist);
// });

// export const filePaths = [
//     "./src/lib/tracks/recursion room.mp3",
//     "./src/lib/tracks/Gloaming 207_059 + cybermonk.mp3",
//     "./src/lib/tracks/FINITE AUTOMATA feat. sixteen veins.mp3"
// ]

// for (let i = 0; i < filePaths.length; i++) {
//     // read covers

//     // id3.fromPath(filePaths[i]).then((tags) => {
//     //     // audioData[i].url = filePaths[i];
        
//     //     if (tags != null) {
//     //         if (tags.title != null) {
//     //             audioData[i].title = tags.title;
//     //         }
//     //         if (tags.artist != null) {
//     //             audioData[i].artist = tags.artist;
//     //         }
//     //     }
//     // });
// }

export const audioData = [
    {
		title: 'recursion room',
        artist: 'cybermonk',
		url: '/tracks/recursion room.mp3',
        cover: '/tracks/recursion room.jpg'
	},
    
    {
        title: 'Gloaming 207_059',
        artist: 'sixteen veins, cybermonk',
        url: '/tracks/Gloaming 207_059 + cybermonk.mp3',
        cover: '/tracks/gloaming.jpg'
    },
    {
        title: 'FINITE AUTOMATA',
        artist: 'cybermonk, sixteen veins',
        url: "/tracks/FINITE AUTOMATA feat. sixteen veins.mp3",
        cover: '/tracks/finite-automata.jpg'
    },
    {
        title: '71',
        artist: 'sienna sleep',
        url: "/tracks/5. sienna sleep 71.mp3",
        cover: '/tracks/71.jpg'
    },
    {
        title: 'Gloaming 182_075',
        artist: 'sixteen veins',
        url: '/tracks/Gloaming 182_075.mp3',
        cover: '/tracks/gloaming.jpg'
    },
];




/*
export const audioData = [
    {
		title: 'recursion room',
        artist: 'cybermonk',
		url: './src/lib/tracks/recursion room.mp3',
        cover: './src/lib/tracks/recursion room.jpg'
	},
    
    {
        title: 'Gloaming 207_059',
        artist: 'sixteen veins, cybermonk',
        url: './src/lib/tracks/Gloaming 207_059 + cybermonk.mp3',
        cover: './src/lib/tracks/gloaming.jpg'
    },
    {
        title: 'FINITE AUTOMATA',
        artist: 'cybermonk, sixteen veins',
        url: "./src/lib/tracks/FINITE AUTOMATA feat. sixteen veins.mp3",
        cover: './src/lib/tracks/finite-automata.jpg'
    },
    {
        title: '71',
        artist: 'sienna sleep',
        url: "./src/lib/tracks/5. sienna sleep 71.mp3",
        cover: './src/lib/tracks/71.jpg'
    },
    {
        title: 'Gloaming 182_075',
        artist: 'sixteen veins',
        url: './src/lib/tracks/Gloaming 182_075.mp3',
        cover: './src/lib/tracks/gloaming.jpg'
    },
];

*/