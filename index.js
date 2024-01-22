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