export default class Song {
    constructor(song) {
        this.title = song.trackName
        //Change 250x250 if you want a larger image
        this.albumArt = song.artworkUrl60.replace(/60x60/g, "250x250")
        this.artist = song.artistName
        this.collection = song.collectionName
        this.price = song.trackPrice
        this.preview = song.previewUrl
        this.kind = song.kind

    }
    getSong() {
        return
    }
    getTemplate() {
        return `
        <div class="card offset-1 col-md-3 col-sm-6 col-xs-12">
                <img onclick="" class="song-img"src="${this.albumArt}"><br>
                <h4 class="song-title">${this.title}</h4>
                <p class="song-artist">${this.artist}</p>
                <p class="song-collection">${this.collection}</p>
                <h6 class="song-price">$${this.price}</h6>
              <audio controls class="audio">
                <source src="${this.preview}" type="audio/ogg">
                <source src="${this.preview}" type="audio/mpeg">
                Your browser does not support the audio tag.
              </audio>
            </div>
        `
    }
}