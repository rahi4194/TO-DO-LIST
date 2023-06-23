const title=document.getElementById("title");
const description=document.getElementById("description");

const form=document.querySelector("form");
const container=document.querySelector(".container");

const tasks=localStorage.getItem("tasks")?JSON.parse(localStorage.getItem("tasks")):[];

showAllTask(); 
function removeTask(){
    tasks.forEach((value)=>{
        const div=document.querySelector(".task");

        div.remove();
    })
}

function showAllTask(){
    tasks.forEach((value,index)=>{
        const div=document.createElement("div");
        const div2=document.createElement("div");
        const para=document.createElement("p");
        div.setAttribute("class","task");
        div.append(div2);
        para.innerText=(value.title);
        const span=document.createElement("span");
        span.innerText=(value.description);
        div2.append(para);
        div2.append(span);
        const btn=document.createElement("button");
        btn.setAttribute("class","myBtn");
        btn.innerText="-";
        btn.addEventListener("click",()=>{
            removeTask()
            tasks.splice(index,1);
            localStorage.setItem("tasks",JSON.stringify(tasks));

            showAllTask();
        })
        div.append(btn);

        container.append(div);


    })
}
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    removeTask()
    tasks.push({
        title:title.value,
        description:description.value,
    });
    localStorage.setItem("tasks",JSON.stringify(tasks));
    showAllTask();
})