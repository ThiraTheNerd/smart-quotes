export class Quote {
  quotename: string;
  author: string;
  name: string;
  votes: number;
  date: Date;


  constructor(quotename: string, author:string, name:string, votes?: number){
    this.quotename = quotename;
    this.author= author;
    this.name = name;
    this.votes = votes || 0;
    this.date = new Date;
  }

  voteUp(): void {
    this.votes += 1;
  }
  
  voteDown(): void{
    this.votes -=1;
  }
}

