import { GetData } from "../helper/getData.js"

export const showCharacters = (data, container) => {
    container.innerHTML = ''
    data.forEach(async(char)=> {
        const { id, image, name, status, species, location, episode } = char;
        const epinfo = await GetData(episode[0])
        
        const div = document.createElement("div")
        div.classList.add("tarjeta")
        if (status == 'Alive') {
            div.innerHTML = `
        <div class="personaje">
            <img class= "cover" id="${id}" src="${image}">
        </div>
        <div class="description">
            <b>${name}</b><br>
            <img id="estado" src="./images/Punto_verde.png"> <a>${status} - ${species}</a><br><br>
            Last known location:<br>
            <a>${location.name}</a><br><br>
            First seen in:<br>
            <a>${epinfo.name}</a>           
        </div>
        ` 
        } else{
            div.innerHTML = `
            <div class="personaje">
                <img class= "cover" id="${id}" src="${image}">
            </div>
            <div class="description">
                <b>${name}</b><br>
                <img id="estado" src="./images/png-clipart-dot-dot.png"> <a>${status} - ${species}</a><br><br>
                Last known location:<br>
                <a>${location.name}</a><br><br>
                First seen in:<br>
                <a>${epinfo.name}</a>           
            </div>
            `  
        }
        
       

        container.appendChild(div)
    })
}