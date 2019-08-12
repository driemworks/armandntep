import { Component, OnInit } from '@angular/core';

export interface ITrack {
  num: string;
  name: string;
  length: string;
}

export class Track implements ITrack {
  num: string;
  name: string;
  length: string;

  constructor(num: string, name: string, length: string) {
    this.num = num;
    this.name = name;
    this.length = length;
  }

}

@Component({
  selector: 'app-latest-album',
  templateUrl: './latest-album.component.html',
  styleUrls: ['./latest-album.component.css']
})
export class LatestAlbumComponent implements OnInit {

  bantuphonicTrackList = [];

  constructor() { }

  ngOnInit() {

    this.bantuphonicTrackList.push(new Track('01', 'Shelo (Down & Out)', '4:43'));
    this.bantuphonicTrackList.push(new Track('02.', 'Sag Lihongo (Dance Lihongo)', '4:48'));
    this.bantuphonicTrackList.push(new Track('03.', 'Liwanda (Friendship)', '4:58'));
    this.bantuphonicTrackList.push(new Track('04.', 'Te Owa (Stop Hating)', '5: 21'));
    this.bantuphonicTrackList.push(new Track('05.', 'Senegal', '4: 05'));
    this.bantuphonicTrackList.push(new Track('06.', 'Me Waa Ndutu (I\'ve Had Enough)', '5:07'));
    this.bantuphonicTrackList.push(new Track('07.', 'Mut Binam (Each of us is the same)', '6:33'));
    this.bantuphonicTrackList.push(new Track('08.', 'Ning (Difficult Life)', '5:13'));
    this.bantuphonicTrackList.push(new Track('09.', 'Pemsam (Life is a Race)', '4: 53'));
    this.bantuphonicTrackList.push(new Track('10.', 'Love Me Better', '4:04'));
    this.bantuphonicTrackList.push(new Track('11.', 'Haba Ndam (Protect Yourself v.HIV)', '4:31'));

  }

}
