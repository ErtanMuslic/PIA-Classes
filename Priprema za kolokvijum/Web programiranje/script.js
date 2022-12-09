class Knjiga{
    constructor(naziv,ISBN,broj,god,autor,izdavac,opis,url){
        this.naziv = naziv;
        this.ISBN = ISBN;
        this.broj = broj;
        this.god = god;
        this.autor = autor;
        this.izdavac = izdavac;
        this.opis=opis;
        this.url = url;
        this.uncolapsed = "";
        this.colapsed = "";
    }

}

class Knjige{
    constructor(parentID){
        this.parentID= parentID;
        this.books = [];
    }

    addBooks(book){
        this.books.push(book);
    }

    render(){
        const parent = document.getElementById(this.parentID);
        parent.innerHTML="";
        this.books.map((book) =>{
        let card = document.createElement("div");
        card.classList.add("card");
        // parent.appendChild(button)
        book.colapsed = `
        <div>colapsed</div>
        ` ;
        book.uncolapsed +=`<div class="left">
        <h1>Naziv</h1>
        <img id="slika" src=${book.url} alt="nema" srcset="">
        <p>${book.ISBN}</p>
        <p>${book.god}</p>
        <p>${book.autor}</p>
        <p>${book.izdavac}</p>
    </div>
    <div class="right">
        <p>${book.opis}</p>
    </div>`
    card.innerHTML=book.uncolapsed; 
    parent.appendChild(card);
    card.addEventListener("click", e => {
       if(e.target.innerHTML == book.colapsed) {
        e.target.innerHTML = book.uncolapsed
       }
       else {
        e.target.innerHTML = book.colapsed
       }
    })
    
});
    }
}

const knjiga = new Knjiga("Naziv1","nes",31231,2013,"Prcko","Tvrtko","lepa knjiga","url1");
const knjiga2 = new Knjiga("Naziv2","nes2",31231,2017,"Prcko2","Tvrtko2","losa knjiga","url2");

const Books = new Knjige("content");
Books.addBooks(knjiga);
Books.addBooks(knjiga2);
Books.render();

document
.getElementById("znak")
.addEventListener("click",() =>{
    document.getElementById("znak").innerHTML == "-" ?
 
    document.getElementById("znak").innerHTML= "+"  
    :
     document.getElementById("znak").innerHTML= "-";
})