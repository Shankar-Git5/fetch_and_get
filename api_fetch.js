function getData(){
    time = document.getElementById("timing").value
    task = document.getElementById("tasks").value
    putData(time, task)

}

function putData(time, task){
    fetch("https://humble-full-jar.glitch.me/students",{
        "method": "POST",
        "headers": {
            "Content-Type": "application/json"
        },
        "body": JSON.stringify({
            "time": time,
            "task": task

        })
    }).then(res =>{
        if(res.ok){
            console.log("Data added")
            displayData()
        }
    })
}
    function displayData(){
        var container = document.getElementById("container")
        
        fetch("https://humble-full-jar.glitch.me/students")
        .then( res => res.json())
        .then( data => {
         for(var obj of data){
            var item = document.createElement("div")
            item.className = "item border border-danger"
            var timepara = document.createElement("p")
            timepara.className = "text-end"
            var taskspara = document.createElement("p")
            var {time, task} = obj
           
            timepara.innerText = time
            taskspara.innerText = task
            item.appendChild(taskspara)
            item.appendChild(timepara)
            container.appendChild(item)
         }
      })
}


 
