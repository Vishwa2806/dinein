const search = () =>{
    const searchbox = document.getElementById("search-item").value.touppercase();
    const storeitems = document.getElementById("product-list")
    const product = document.querySelectorAll("listspan")
    const pname = document.getElementsByTagName("p")

    for(var i=0; i < pname.length; i++){
        let match = product[i].getElementsByTagName('p')[0];

        if(match){
           let textvalue = match.textcontent   || match.innerHTML

           if(textvalue.touppercase().indexof(searchbox) > -1){
            product[i].getElementsByClassName.display = "";

           }else{
            product[i].getElementsByClassName.display = "none";
          
        }        
    
    }
  
}
}