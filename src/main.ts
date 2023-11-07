import './style.css';
import { Artwork } from './artwork.ts';
import { Statue } from './statue.ts';

document.addEventListener("DOMContentLoaded",()=>{
  const artworks:Artwork[]=[];
  const nev=document.getElementById("nev") as HTMLInputElement;
  const ev=document.getElementById("ev") as HTMLInputElement;
  const ar=document.getElementById("ar") as HTMLInputElement;
  const magassag=document.getElementById("magassag") as HTMLInputElement;
  const gomb=document.getElementById("gomb") as HTMLButtonElement;
  const db=document.getElementById("db") as HTMLParagraphElement;
  const pez=document.getElementById("pez") as HTMLParagraphElement;
  var a=0;
  var b=0;
  gomb?.addEventListener("click",()=>{
    const nevcheck=/^[a-zA-Z\s,]+$/;
    var nevigaze=false;
    const nevecske=nev.value;
    if(nev.value!=""&&nevcheck.test(nev.value)){
      nevigaze=true;
    }else{
      alert("A szobor neve nem maradhat üresen és csak betűt, szóközt és vesszőt tartalmazhat!");
    };
    const evecske:number=parseInt(ev.value);
    var evigaze=false;
    if(evecske<2024){
      evigaze=true;
    }
    else{
      alert("A készítés maximum az aktuális évszám lehet!");
    }
    const aracska:number=parseInt(ar.value);
    var arigaze=false;
    if(aracska>=1){
      arigaze=true;
    }
    else{
      alert("A kikiáltási árnak minimum 1 forintnak kell lennie!");
    }
    const magassagocska:number=parseInt(magassag.value);
    var magassagigaze=false;
    if(magassagocska>9){
      magassagigaze=true;
    }
    else{
      alert("A magasságnak minimum 10 cm-nek kell lennie!");
    }
    if(nevigaze&&evigaze&&arigaze&&magassagigaze){
      artworks.push(new Statue(nevecske,evecske,aracska,magassagocska))
      console.log(artworks);
      nev.value="";
      ev.value="";
      ar.value="";
      magassag.value="";
      a=0;
      artworks.forEach((element)=>a+=1);
      b+=aracska;
      db.innerHTML="Művek darabszáma: "+a+" db";
      pez.innerHTML="Művek összesített ára: "+b+" Ft";
    }

  })
})