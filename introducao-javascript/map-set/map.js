//Map
function getAdmins(map){
    let admins = []

    for([key, value] of map){
        if(value === "Admin") admins.push(key)
    }

    return admins
}

//Criação do map
const usuarios = new Map();

usuarios.set("Luiz", "Admin")
usuarios.set("Lucas", "Moderador")
usuarios.set("Natália", "User")

console.log(getAdmins(usuarios))