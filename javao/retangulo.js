class Retangulo{
    constructor(largura, altura){
    this.LA=largura
    this.AL=altura}


area(){
   this.area=(this.AL*this.LA);
    console.log('area e esta',this.area)
}
largura(){
   this.largura=(this.LA*2+this.AL*2);
    console.log('perimetro e esse' ,this.largura)
}
}
const retangulo=new Retangulo(1,2)
retangulo.area();
retangulo.largura();
