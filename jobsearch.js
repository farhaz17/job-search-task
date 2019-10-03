function jobSearch(){
    const http = new XMLHttpRequest();
    url = 'https://cors-anywhere.herokuapp.com/http://dev-fe-assesment.pantheonsite.io/jobs?_format=json';
    http.open("GET", url,true);
    http.send();
    http.onreadystatechange = function() {
        let element = "";
        if (this.readyState == 4 && this.status == 200){
            let result = JSON.parse(http.responseText);                     
            console.log(result)  
          for(i in result){
            element += "<div id='"+ i +"' class='card custom-card p-2'>";
            element += "<div class='title'>"+ result[i].title +"</div>";
            element += "<div><span class='company'>"+result[i].company+"</span>"
            element += "<span class='location'>&nbsp"+result[i].location+"</span></div>";
            element += result[i].tags;
            element += "<button type='button' class='close--btn' onclick='closeBtn("+i+")'>x</button>"
            element += "</div>"
            element +="<div class='card undo'>"
            element+="<p>Okay, you won't see this job anymore &nbsp<a href='#' onclick='undo("+i+")'>undo</a></p>"
            element+="</div>"
          }
          document.getElementById("job-card").innerHTML = element;
                
        }
    };  
}

function closeBtn(id){
  document.getElementById(id).style.display="none";
  document.getElementsByClassName('undo')[id].style.display="block";
}

function undo(id){
  event.preventDefault();
  document.getElementById(id).style.display="block"; 
  document.getElementsByClassName('undo')[id].style.display="none";
}