import { Track } from './track';

export interface Album {
  name: string;
  relaseDate: string;
  coverImage: string;
  tracks: Track[];

}
