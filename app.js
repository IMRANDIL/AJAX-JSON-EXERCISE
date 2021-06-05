const btn = document.querySelector('.btn');
const url = './API/people.json'



btn.addEventListener('click', () =>{
showJson(url);
})








function showJson(url){
const xhr = new XMLHttpRequest();
xhr.open('GET', url);

xhr.onreadystatechange = function(){
if(xhr.readyState !==4)return;
if(xhr.status === 200){
    const data = JSON.parse(xhr.responseText);
    const displayData = data.map((item) =>{
        return `<p>${item.name}</p>`
    }).join('');
   const element = document.createElement('div');
   element.innerHTML = displayData;
   document.body.appendChild(element);
   
}
else{
    console.log({
        status: xhr.status,
        txt: xhr.statusText,
    });
}
}

xhr.send();
}