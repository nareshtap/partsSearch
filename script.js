var tit="ProductName,productImage,color,size,weight,Manufacturer,Price";
function autocom(data){
    var dataa=data;
    if(dataa.length>2)
    {
        var http=new XMLHttpRequest();
        http.open("GET","a.txt",true);
        http.onreadystatechange =function (){
            var res=this.responseText;
            var table="<table border='1'>";
            var lines = res.split('\n');
            var json1="{";
            var right=document.getElementById("search");
            table=table+"<th>Product Name</th><th>Product Image</th><th>Color</th><th>Size</th><th>Weight</th><th>Manufacturer</th><th>Price</th>";
            for(var i=0;i<lines.length;i++) {
                table=table+"<tr>";
                var a = lines[i];
                var n = a.search(dataa);
                if (n > -1)
                {
                    var n = lines[i].split(',');
                    var str=tit.split(',');
                    for (var j = 0; j < n.length; j++) {
                            json1=json1+'"'+str[j]+'":"'+n[j]+'",';
                        table=table+"<td>"+n[j]+"</td>";
                    }

                }
                table=table+"</tr>";
            }
            json1=json1+'}';
         //  document.write(JSON.stringify(json1));
            document.getElementById('grid').innerHTML=table;
            console.log("json"+json1);
            console.log("json"+json1);
    };

    http.send();
    }
}