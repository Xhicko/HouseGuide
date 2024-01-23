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


const nextMapOption = document.querySelector('.bi-plus-lg')
const retunMapOption = document.querySelector('.bi-dash-lg')
const map = document.querySelector('#Content')
const nextIndicator = document.querySelector('.Satelite')
const returnIndicator = document.querySelector('.Default')

nextMapOption.addEventListener('click', ()=>{
   map.style.background = 'url("https://i.stack.imgur.com/Bxlnz.jpg")';
   map.style.backgroundSize = 'cover'
   map.style.backgroundPosition = 'center'
   nextIndicator.style.display = 'flex'
   nextIndicator.style.borderRadius = '10px'
   returnIndicator.style.display = 'none'
})

retunMapOption.addEventListener('click', ()=>{
   map.style.background = 'url("https://img.freepik.com/free-vector/colored-city-map-with-streets-park_23-2148318250.jpg?w=740&t=st=1705770581~exp=1705771181~hmac=e48ccdfe3900cf0aa3eab70052d91754fd971755c8c49a8925b8038277ccd541")';
   map.style.backgroundSize = 'cover'
   map.style.backgroundPosition = 'center'
   returnIndicator.style.display = 'flex'
   returnIndicator.style.borderRadius = '10px'
   nextIndicator.style.display = 'none'
})