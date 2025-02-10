document.getElementById("tableform").addEventListener("submit",function(event){
    event.preventDefault();
    let n=parseInt(document.getElementById("number").value);
    let tableContainer=document.getElementById("tableContainer");
    tableContainer.innerHTML="";
    if(n>0){
        let table=document.createElement("table");
        for(let i=0;i<n;i++){
            setTimeout(()=>{
    
           
            let row=document.createElement("tr");
        
        for(let j=1;j<=n;j++){
            let cell=document.createElement("td");
            cell.innerHTML=String(i*n+j);
            row.appendChild(cell);
        }
        table.appendChild(row); },i*500);
    }
    tableContainer.appendChild(table);
                }});