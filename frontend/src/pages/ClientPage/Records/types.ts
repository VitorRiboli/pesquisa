export type RecordsResonse = {
  content: RecordItem[];
  totalPages: number;
}

export type RecordItem = {
  id : number;
  moment : string;
  name : string;
  age : string;
  gameTitle : string;
  platform : Platform;
  genreName : string;
}

export type Platform = 'XBOX' | 'PC' | 'PLAYSTATION';