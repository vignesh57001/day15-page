


              var req=new XMLHttpRequest();
              req.open("GET","https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json");
              req.send();
              req.onload=function bar(){
                var res=JSON.parse(req.response);
                console.log(res);

                  for (var i=0;i<res.length;i++){
                    console.log(res[i]);
                    var table=document.getElementById("tr");
                     table.innerHTML +=` <tr>
                      <td>${res[i].id}</td>
                     <td>${res[i].name}</td>
                     <td>${res[i].email}</td>
                     </tr> `
               document.body.append(table);
                  }
              };

    
