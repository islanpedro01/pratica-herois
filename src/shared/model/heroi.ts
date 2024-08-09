export class Heroi{
    nome: string;
    poder: string;
    identidadeSecreta: string;
    constructor(nome: string, poder: string, identidadeSecreta: string){
        
        this.nome = nome;
        this.poder = poder;
        this.identidadeSecreta = identidadeSecreta;
    }


    get Nome(){
        return this.nome;
    }

    get Poder(){
        return this.poder;
    }

    get IdentidadeSecreta(){
        return this.identidadeSecreta;
    }


    set Nome(nome: string){
        this.nome = nome;
    }   
    set Poder(poder: string){
    this.poder = poder;

    }
    set IdentidadeSecreta(identidadeSecreta: string){
        this.identidadeSecreta = identidadeSecreta;
    }


}