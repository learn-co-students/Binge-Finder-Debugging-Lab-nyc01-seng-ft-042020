export default class Adapter {
  static getShows() {
    return fetch("http://api.tvmaze.com/shows")
      .then(res => res.json())
      // .then(console.log)
  }

  static getShowEpisodes(showID){
    return fetch(`http://api.tvmaze.com/shows/${showID}/episodes`)
      .then(res => res.json())
  }
}

