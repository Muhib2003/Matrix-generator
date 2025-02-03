document.getElementById("tableform").addEventListener("submit",function(event){
    event.preventDefault();
    let n=parseInt(document.getElementById("number").value);
    let tablecontainer=document.getElementById("tablecontainer");
    tablecontainer.innerHTML="";
if(n>0){
    let table=document.createElement("table");
    for(let i=0;i<n;i++){
        let row=document.createElement("tr");
        for(let j=0;j<n;j++){
            let cell=document.getElementById("td");
            row.appendChild(cell);
        }
        table.appendChild(row);

    }
    tablecontainer.appendChild(table);
}
})