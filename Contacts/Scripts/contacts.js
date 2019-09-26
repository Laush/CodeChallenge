
document.querySelector('#button').addEventListener('click',noFavorites(),favorites());


  function favorites(){
	
	const xhttp= new XMLHttpRequest();
	xhttp.open('GET','https://s3.amazonaws.com/technical-challenge/v3/contacts.json',true);
	xhttp.send();
	xhttp.onreadystatechange=function(){
		
		if(this.readyState == 4 && this.status ==200){
			
				console.log(this.responseText);
				let datos= JSON.parse(this.responseText);
                orderAsc(datos, 'name');				
					 let fav = datos.filter(d => d.isFavorite == true);				
					 
				let res =document.querySelector('#res')	;				
				res.innerHTML='';
				
					for(let item of fav){
						console.log(item);
					
						res.innerHTML +=`
						
			<li class="list-group-item">
                       
	                <div class="row">   
	
						<div class="col-xs-12 col-sm-3">
						<img class="img-fluid" src="${item.smallImageURL}" alt="" />
						</div>
	
							<div class="col-sm-8 align-self-start">	
						
							<a class="btn-detail" id="btn-detail" href="Detail/${item.id}/"><h4>  <label class="star">&#9733;</label> ${item.name} </h4></a>
							<h6> ${item.companyName} </h6>

							</div>

					</div>
		</li>
						`
						
						
						
					}
		}
		
	}
	
}

 function noFavorites(){
	
	const xhttp= new XMLHttpRequest();
	xhttp.open('GET','https://s3.amazonaws.com/technical-challenge/v3/contacts.json',true);
	xhttp.send();
	xhttp.onreadystatechange=function(){
		
		if(this.readyState == 4 && this.status ==200){
			
				console.log(this.responseText);
				let datos= JSON.parse(this.responseText);
                orderAsc(datos, 'name');					
				
			    let nofav = datos.filter(d => d.isFavorite == false);
					 
				let resno =document.querySelector('#resno')	;				
				resno.innerHTML='';
				
					for(let item of nofav){
						console.log(item);
					
						resno.innerHTML +=`
						
			<li class="list-group-item">
                       
	                <div class="row">   
	
						<div class="col-xs-12 col-sm-3">
						<img class="img-fluid" src="${item.smallImageURL}" alt="" />
						</div>
	
							<div class="col-sm-8 align-self-start">	
							<a class="btn-detail" id="btn-detail" href="detail.html"><h4> ${item.name} </h4></a>
							<h6> ${item.companyName} </h6>

							</div>

					</div>
		</li>
						`
						
						
						
					}
		}
		
	}
	
}
function orderAsc(p_array_json, p_key) {
    p_array_json.sort(function (a, b) {
        return a[p_key] > b[p_key];
    });
}

