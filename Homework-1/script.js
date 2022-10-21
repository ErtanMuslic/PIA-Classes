// U Javascript-u napraviti klasu MenuItem koja predstavlja stavku menija. Od atributa treba da sadrži naziv, adresu na koju ukazuje, i dve URL adrese slika (jedna koja će biti prikazana inicijalno, a druga samo kad se pređe mišem preko stavke). Od funkcija sadrži:
// •	Funkciju koja postavlja atribute
// •	Funkciju za prikaz stavke (umesto naziva je slika koja je uokviru hiperlinka)

// Zatim napraviti klasu DynamicMenu koja od atributa sadrži vektor elemenata tipa MenuItem, i naziv HTML elementa u koji se meni iscrtava (kontejner). Od funkcija sadrži:
// •	Funkciju koja kao parametar ima ID HTML elementa i njega postavlja kao kontejner
// •	Funkciju koja dodaje novu stavku menija
// •	Funkciju koja crta dinamički meni u kontejner
// •	Funkciju koja vrši promenu slike u trenutku prelaska miša preko stavke (onmouseover) – postavlja se druga slika
// •	Funkciju koja vrši promenu slike u trenutku izlaska kursora miša iz zone gde se nalazi stavka menija (onmouseout) – postavlja se prva slika
// Obe klase smestiti u eksternu  Javascript datoteku, koju potom treba učitati u HTML iz prethodne vežbe. Zatim pomoću Javascripta dodati stavke menija koje su takođe date u prethodnoj vežbi. Pretpostaviti da uokviru Web strane postoji samo jedan objekat klase DynamicMenu, pod nazivom dMenu.



class MenuItem{
    constructor(naziv,url,urlSlike,UrlSlike2){
        this.naziv = naziv;
        this.url=url;
        this.urlSlike=urlSlike;
        this.UrlSlike2=UrlSlike2;
    }
    // ShowItems(){
    //     var el = document.createElement("div");
    //     el.style.width = "100%";
    //     var t = "";
    //     t+="<table border = 1 style='width:20%'; 'height:100%;'>"; 
    //     t += "<tr style='vertical-align:top;'>";
    //     t +="<td style='width:200px;'>";
    //     // t +="Ime:" + this.naziv + "<br />";
    //     t +="Url:" + this.url + "<br />";
    //     t +="<img src='" + this.urlSlike + "'width=200px; height=300px;'/>";
    //     t +="</td>";
    //     t +="</tr>";
    //     t +="</table>";
    //     el.innerHTML = t;
    //     document.body.appendChild(el);
    // }
 }

class DynamicMenu{
    constructor(id){
        this.id=id;
        this.MenuItems = [];
    }
    Add(Item){
        this.MenuItems.push(Item);
    }
    ChangeOn(){
        document.getElementById("PicID").src="Slika.jpg";
    }

    ChangeOff(){
        document.getElementById("PicID").src="Slika.jpg";
    }
    Show(){
        var el = document.createElement("div");
        el.style.width = "100%";
        var t = "";
        t+="<table border = 1 style='width:20%'; 'height:100%;'>"; 
        for(let i = 0;i<this.MenuItems.length;i++){
        t += "<tr style='vertical-align:top;'>";
        t +="<td style='width:200px;'>";
        t +="Ime:" + this.MenuItems[i].naziv + "<br />";
        t +="Url:" + this.MenuItems[i].url + "<br />";
        t +="<img id='PicID' onmouseover=ChangeOn() src='" + this.MenuItems[i].urlSlike + "'width=200px; height=300px;/>";
        t +="</td>";
        t +="</tr>";
        }
        t +="</table>";
        el.innerHTML = t;
        document.body.appendChild(el);
    }
}


new1 = new MenuItem("asdsa","dasdas","download.jpg","Slika.jpg");
new2 = new MenuItem("asdsa","dasdas","download.jpg","Slika.jpg");
// new1.ShowItems();
// new2.ShowItems();
v = new DynamicMenu('Table');
v.Add(new1);
v.Add(new2);
v.Show();
console.log(v);