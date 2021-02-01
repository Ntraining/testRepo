
function getData(){
    const username=document.getElementById('username').value;
    $.ajax({
        url:`https://api.github.com/users/${username}/repos`,success:function(data){
            let tname='';
            let tfull_name='';
            let turl='';
        
            for(let i=0;i<data.length;i++){
                tname=tname + `${data[i].name}`;
                tfull_name=tfull_name+`${data[i].full_name}`;
                turl=turl+`${data[i].url}`;
            }
               document.getElementById('name').innerText=tname;
               document.getElementById('fullname').innerText=tfull_name;
             document.getElementById('url').innerText=turl;
        
            
             
            console.log(tname,tfull_name,turl);
        
 },
        error: function(e){
            console.log(e, "no repos found");
        }
    });
}