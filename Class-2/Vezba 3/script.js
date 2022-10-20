class Artikal{
    constructor(sifra,naziv,urlSlike,cena,stanje){
        this.sifrta = sifra;
        this.naziv = naziv;
        this.urlSlike=urlSlike;
        this.cena=cena;
        this.stanje=stanje;
        console.log(this);
    }

    validate(){
        if(this.sifra === null || this.naziv === '' || this.cena === null){
            return 0;
        }
        else return 1;
    }
}

class ListaArtikala{
    constructor(ime){
        this.ime = ime;
        this.artikli = [];
    }
    dodaj(art){
        this.artikli.push(art);
    }
    prikazi(){
        var el = document.createElement("div");
        el.style.width = "100%";
        t+="";
        t+="<table border = 1 style='width:20%'; 'height:100%;'>";

        for(let i = 0;i<this.artikli.length;i++)
        {
        t += "<tr style='vertical-align:top;'>";
        t +="<td style='width:200px;'>";
        t +="<Ime:" + this.artikli[i].naziv + "<br />";
        t +="Cena:" + this.artikli[i].cena + "<br />";
        t +="<img src='" + this.artikli[i].urlSlike + "'width=200px; height=300px;'/>";
        t +="</td>";
        t +="</tr>";
        }
        t +="</table>";
        el.innerHTML = t;
        parent.appendChild(el);
    }
}

novi = new Artikal(12,'Art1',"slika1","slika.jpg",550,120);
novi2 = new Artikal(12,'Art1',"slika1","slika.jpg",550,120);
novi3 = new Artikal(12,'Art1',"slika1","slika.jpg",550,120);
novi.validate();
novi2.validate();
novi3.validate();

v = new ListaArtikala('tabela');
v.dodaj(novi);
v.dodaj(novi2);
v.dodaj(novi3);
v.prikazi();
console.log(v);