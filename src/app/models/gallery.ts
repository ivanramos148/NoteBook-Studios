export class Gallery {
  $key: string;
  name:string;
  url:string;
  progress:number;
  createdAt: Date = new Date();

  constructor(public title: string, public file: any, public description: string){}
}
