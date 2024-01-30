function toggleExpandState(){
   const expandContainer = document.querySelector('.Bottom_Design')
   const expandContainerUp = document.querySelector('.bi-chevron-up')
   const expandContainerDown = document.querySelector('.bi-chevron-down')

   expandContainerUp.addEventListener('click', ()=> {
      expandContainer.classList.toggle('Activate')
      if(expandContainer.classList.contains('Activate')){
         expandContainerDown.style.display = 'flex'
         expandContainerUp.style.display = 'none'
      }
      else{
         expandContainerDown.style.display = 'none'
         expandContainerUp.style.display = 'flex'
      }
   })

   expandContainerDown.addEventListener('click', () => {
      expandContainer.classList.remove('Activate')
      expandContainerDown.style.display = 'none'
      expandContainerUp.style.display = 'flex'
   })
}

toggleExpandState()


const map = document.querySelector('#Content')
const nextIndicator = document.querySelector('.Satelite')
const returnIndicator = document.querySelector('.Default')

returnIndicator.addEventListener('click', ()=>{
   returnIndicator.style.display = 'none'
   nextIndicator.style.display = 'flex'
   map.style.background = 'url("https://i.stack.imgur.com/Bxlnz.jpg")';
   map.style.backgroundSize = 'cover'
   map.style.backgroundPosition = 'center'

   nextIndicator.addEventListener('click', ()=>{
      nextIndicator.style.display = 'none'
      returnIndicator.style.display = 'flex'
      map.style.background = 'url("https://img.freepik.com/free-vector/colored-city-map-with-streets-park_23-2148318250.jpg?w=740&t=st=1705770581~exp=1705771181~hmac=e48ccdfe3900cf0aa3eab70052d91754fd971755c8c49a8925b8038277ccd541")';
      map.style.backgroundSize = 'cover'
      map.style.backgroundPosition = 'center'
   })
})


