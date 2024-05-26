let butaoAdd = document.getElementById('butao')
let Input =document.getElementById('input-tarefa')
let Tarefas = document.getElementById('tarefas')
let marcado =false;
butaoAdd.addEventListener('click',function(){
    if(Input.value !=''){
        var tarefa = document.createElement('p');
        Tarefas.appendChild(tarefa);
        tarefa.innerHTML ='- '+ Input.value;
        Input.value ='';
        tarefa.addEventListener('click',function(){
            if( marcado ==false){
                tarefa.style.textDecoration ='line-through';
                marcado = true;
            }
            else{   
                tarefa.style.textDecoration ='';
                marcado = false;
            }  
        
        })
        tarefa.addEventListener('dblclick',function(){
            tarefas.removeChild(terefa);
         })
}
})
   
    
    

 