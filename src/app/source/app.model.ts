export class Article{
    public title:string;
    public content:string;
    constructor(title:string,content:string){
        this.title=title;
        this.content=content;
    }
}


export class MODULE{
    public TITLE:string;
    public articles:Article [];
    constructor(TITLE:string,articles:Article []){
        this.TITLE = TITLE;
        this.articles = articles;
    }
}