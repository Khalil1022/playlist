/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songs = [];
$("#add").click(function() {
    



var name =$("#song").val();
var artist= $("#artist").val();
var songLength =$("#length").val();
var imageUrl =$("#image").val();
var linkAddress =$("#link").val();

songs.push({"name": name,
            "artist": artist,
            "length": songLength,
            "image": imageUrl,
            "address": linkAddress
})
console.log(songs);
})


function displaySongInfo(){
    // BELOW Use forEach Loop to display the data from each of your arrays in the correct div
songs.forEach(function(song)
    {
    $("#songs").append("<li>" + song.name + "</li>");

function emptySongInfo(){
    $("#songs").empty();
    // Use jQuery to empty all of the remaining divs


}


function addSongInfo(){
    // BELOW write the code to add new items to each of the arrays.


}

$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});

displaySongInfo();
