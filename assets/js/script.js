//Variables Globales//
const ingresarTareas = document.querySelector("#tareas")
const btnAgregar = document.querySelector("#agregarTareas")
const listaTareas = document.querySelector("#tablaTareas")
const finalizar = document.querySelector("#tareasFinalizadas")

const tablaTareas = []

btnAgregar.addEventListener("click", () => {
    if(ingresarTareas.value == ""){
        Swal.fire({
            icon: 'error',
            title: '¡Espera!',
            text: 'Agrega una tarea para continuar'
        })
    }else{
    const tareas = {id: Date.now(), nombre: ingresarTareas.value}
        tablaTareas.push(tareas)
        ingresarTareas.value = ""
    render()
    }
})


function render(){
    
    let html = ""
    for (let invitado of tablaTareas) {
    html += `
            <tr>
                <th scope="row">${invitado.id}</th>
                <td >${invitado.nombre}</td>
                <td>
                    <input class="form-check-input" type="checkbox" onclick="clickCheck(${invitado.id})" ${invitado.estado ? "checked" : ""} id="inputCheck">
                </td>
                <td>
                    <button type="button" onclick="borrar(${invitado.id})" class="btn-close btn-danger" aria-label="Close"></button>
                </td> 
            </tr>  
            `;
    }
    listaTareas.innerHTML = html;

    const totalTareas = document.getElementById("tareasCreadas");
    totalTareas.innerHTML = tablaTareas.length;
}

function clickCheck(id){
    tablaTareas.map((e) => {
        if(e.id == id) {
            e.estado = ! e.estado
        }
    })
    const printcheck = document.getElementById("tareasFinalizadas");
    const total = tablaTareas.filter((invitado) => invitado.estado == true);
    printcheck.innerHTML = total.length
    render()
}

function borrar(id){
    const index = tablaTareas.findIndex((ele) => ele.id == id)
    tablaTareas.splice(index, 1)
    render()
    clickCheck()
}



