// Your code here
const animalCharacter = document.getElementById('character-bar')
const animalInfo = document.getElementById('detailed-info')
const animalName = document.getElementById('name')
const animalImage = document.getElementById('image')
const animalVotes = document.getElementById('vote-count')
const form = document.getElementById('votes-form')
const url = 'http://localhost:3000/characters'
function pickCharacters(){
fetch(`http://localhost:3000/characters`)
.then(res=>res.json())
.then(res=>
{res.forEach(animal=>{
//console.log(animal.name)
let span = document.createElement('span')
span.innerText=animal.name 
animalCharacter.appendChild(span)
span.addEventListener('click', (e)=>{
    e.preventDefault()
    animalName.innerText=animal.name
    animalImage.src=animal.image
    animalVotes.innerText=animal.votes
   // console.log(target.parentElement.data.id)
   
   form.addEventListener('submit', (e)=>{
e.preventDefault()
const formData = new FormData(form)
const data = Object.fromEntries(formData.entries())
const ID = animal.id
animalVotes.innerText=animal.votes+parseInt(e.target.votes.value)
console.log(e.target.votes.value)
//const data = parseInt(data1)
//console.log(data)
//console.log(animal.id)
//addVotes(url/ID, data)
// .then(response =>response.json())
// .catch(error => console.error(error));
   } )
} )
})
        })

}
pickCharacters();
// function addVotes(url, data={}){
//     return fetch(url/ID,{
//        method:'PATCH',
//        headers: {
//            'Content-Type': 'application/json'
//        },
//        body: JSON.stringify(data)
//     })
//     .then(resp => resp.json())
//    }
//headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify(data) // body data type must match "Content-Type" header
// })
// .then(response => response.json())