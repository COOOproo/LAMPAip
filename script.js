async function loadServers(){

document.getElementById("status").innerText="Поиск серверов..."

const res = await fetch("servers.json?cache="+Date.now())
const data = await res.json()

const list = document.getElementById("list")
list.innerHTML=""

data.forEach(ip=>{

const li=document.createElement("li")
li.innerText=ip
list.appendChild(li)

})

document.getElementById("status").innerText="Найдено серверов: "+data.length

}