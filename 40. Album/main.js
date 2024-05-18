//  Creating a function
function make_album(artist_name, album_title, tracks) {
    var music_album = {
        artist: artist_name,
        title: album_title,
    };
    if (tracks !== undefined) {
        music_album.tracks = tracks;
    }
    return music_album;
}
// Calling three functions and creating 3 variables with different values
var album1 = make_album("Artist No. 1", "Album No 1");
var album2 = make_album("Artist No. 2", "Album No 2");
var album3 = make_album("Artist No. 3", "Album No 3", 5);
// printing values
console.log(album1);
console.log(album2);
console.log(album3);
