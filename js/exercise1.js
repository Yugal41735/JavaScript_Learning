let a = document.links;

Array.from(a).forEach(function(element){
    let b = element.href;
    if(b.includes('harry')){
        console.log(b);
    }
})