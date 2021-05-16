export class Quote {
  quotename: string;
  author: string;
  votes: number;
  name: string;


  constructor(quotename: string, author:string, name:string, votes?: number){
    this.quotename = quotename;
    this.author= author;
    this.name = name;
    this.votes = votes || 0;
  }

  voteUp(): void {
    this.votes += 1;
  }
  
  voteDown(): void{
    this.votes -=1;
  }
}

