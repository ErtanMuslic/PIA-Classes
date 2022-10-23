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
    constructor(naziv,url1,url2,urlSlike,UrlSlike2){
        this.naziv = naziv;
        this.url1=url1;
        this.url2=url2;
        this.urlSlike=urlSlike;
        this.UrlSlike2=UrlSlike2;
    }
 }

class DynamicMenu{
    constructor(id){
        this.id=id;
        this.MenuItems = [];
    }
    Add(Item){
        this.MenuItems.push(Item);
    }
    Show(){
        var el = document.createElement("div");
        el.style.width = "100%";
        var t = "";
        t += "<div style='display:flex; flex-direction:row'>";
        for(let i = 0;i<this.MenuItems.length;i++){
        t += "<div style='border: 2px solid black; display:flex; flex-direction:column; padding:10px' >";
        t +="<p style='text-align:center; font-size:20px'>" + this.MenuItems[i].naziv + "</p>";
        t +="<a href='"+ this.MenuItems[i].url1+"' style='text-decoration: none; text-align:center; margin-bottom:10px'>Link 1</a>";
        t +="<a href='"+ this.MenuItems[i].url2+"' style='text-decoration: none; text-align:center; margin-bottom:10px'>Link 2</a>";
        t +="<img onmouseover=ChangeOn("+ i +") onmouseout=ChangeOff(" + i + ") src='" + this.MenuItems[i].urlSlike + "' alt ='nema' width=200px; height=300px;/>";
        t +="</div>";
            }
        t +="</div>";
        el.innerHTML = t;
        document.body.appendChild(el);
    }
   
}

function ChangeOn(i){
    document.getElementsByTagName("img")[i].src="Slika1.jpg";
 }

 function ChangeOff(i){
    document.getElementsByTagName("img")[i].src="Slika2.jpg";
}

new1 = new MenuItem("Slika1","https://i.pinimg.com/originals/b6/a7/c3/b6a7c33e3bbea90d58b052806b42794b.jpg","https://i.pinimg.com/originals/6d/54/67/6d5467581b334d969365702425a0b06a.jpg","Slika2.jpg","Slika1.jpg");
new2 = new MenuItem("Slika2","https://i.pinimg.com/originals/b6/a7/c3/b6a7c33e3bbea90d58b052806b42794b.jpg","https://i.pinimg.com/originals/6d/54/67/6d5467581b334d969365702425a0b06a.jpg","Slika2.jpg","Slika1.jpg");
v = new DynamicMenu('Table');
v.Add(new1);
v.Add(new2);
v.Show();
console.log(v);
