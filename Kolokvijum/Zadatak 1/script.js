class MobilniTelefon{
    constructor(img,naziv,cena,sifra,brend,ekran,zadnja,prednja,ram,processor){
        this.img = img;
        this.naziv = naziv;
        this.cena = cena;
        this.sifra = sifra;
        this.brend = brend;
        this.ekran = ekran;
        this.zadnja = zadnja;
        this.prednja = prednja;
        this.zadnja = zadnja;
        this.ram = ram;
        this.processor = processor;
    }
}

class ListaTelefona{
    constructor(parentID){
        this.parentID = parentID;
        this.List= [];
    }

    Add(telefon){
        this.List.push(telefon);
    }

    render(){
            const parent = document.getElementById(this.parentID);
            parent.innerHTML="";
            this.List.map((list) =>{
            let card = document.createElement("div");
            card.classList.add("card");
            card.innerHTML = `
            <div class="slika">
            <img id='slika' src='${list.img}' alt="nema" srcset="">
        </div>
            <div class="text">
            <h2>Mobilni telefon</h2>
            <h1>${list.naziv}</h1>
            <p id="cena">${list.cena}</p>
            <h3>Sifra:${list.sifra}</h3>
            <h3>Brend${list.brend}:</h3>
            <h3>Ekran:${list.ekran}</h3>
            <h3>Zadnja kamera:${list.zadnja}</h3>
            <h3>Prednja kamera:${list.prednja}</h3>
            <h3>Ram:${list.ram}</h3>
            <h3>Processor:${list.processor}</h3>
        </div>`;
        parent.appendChild(card);
    }
            )
}
}

const telefon1 = new MobilniTelefon('telefon1.png','Samsung A71',10000,123,'Samsung',"6,5","64 + 12+5+5","32mpix",6,"Octa core 2,4GHz")
const telefon2 = new MobilniTelefon('telefon2.jpg','Iphone 14 Pro Max',23560,121234,'Iphone',"5,5","64 + 12+5+5","32mpix",6,"Octa core 2,4GHz")
const telefon3 = new MobilniTelefon('telefon1.png','Samsung A71',10000,123,'Samsung',"6,5","64 + 12+5+5","32mpix",6,"Octa core 2,4GHz")
const telefon4 = new MobilniTelefon('telefon2.jpg','Iphone 14 Pro Max',23560,121234,'Iphone',"5,5","64 + 12+5+5","32mpix",6,"Octa core 2,4GHz")
const telefon5 = new MobilniTelefon('telefon1.png','Samsung A71',10000,123,'Samsung',"6,5","64 + 12+5+5","32mpix",6,"Octa core 2,4GHz")

List = new ListaTelefona('container');
List.Add(telefon1);
List.Add(telefon2);
List.Add(telefon3);
List.Add(telefon4);
List.Add(telefon5);
List.render();