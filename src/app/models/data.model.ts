
export const FAVORITES = 'favorites';
export interface iResponse{
  type:string;
  value:iJokes[];
}

export interface iJokes {
  id:number;
  joke:string;
  categories:string[];
  favorite?:boolean;
}
