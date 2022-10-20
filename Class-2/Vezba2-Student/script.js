function Student(index,ime,prezime,godina,smer,slika){
    this.index= index;
    this.ime= ime;
    this.prezime=prezime;
    this.godina= godina;
    this.smer= smer;
    this.slika=slika;

    this.render = function(id){
        var parent = document.getElementById(id);
        if(parent == null) throw new Exception("Roditeljski element (ID = " + id + " ne postoji)");
        var el = document.createElement("div");
        el.style.width= "100%";
        var t = "";
        t += "<div>" + this.ime +"</div>";
        t +="<table style = 'width:100%; height:100%;'>";
        t +="<tr style='vertical-align:top;'>";
        t +="<td style='width:200px;'>";
        t +="<img src ='" + this.slika + "'alt = 'nema'><br />";
        t +="<Broj indeka:" + this.index + "<br />";
        t +="Godina:" + this.godina + "<br />";
        t +="Smer:" + this.smer + "<br />";
        t +="</td>";
        t +="</tr></table>";
        el.innerHTML = t;
        parent.appendChild(el);
    }
}