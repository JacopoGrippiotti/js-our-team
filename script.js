const listOfTeamMembers = [
    {
        name: 'Wayne Barnett ',
        role: 'founder & CEO',
        photo: imgCreator('img/wayne-barnett-founder-ceo.jpg')
    },
    
    {
        name: 'Angela Caroll ',
        role: 'Chief Editor',
        photo: imgCreator('img/angela-caroll-chief-editor.jpg')
    },
    
    {
        name: 'Walter Gordon ',
        role: 'Office Manager',
        photo: imgCreator('img/walter-gordon-office-manager.jpg')
    },
    
    {
        name: 'Angela Lopez ',
        role: 'Social Media',
        photo: imgCreator('img/angela-lopez-social-media-manager.jpg')
    },
    
    {
        name: 'Scott Estrada ',
        role: 'Developer',
        photo: imgCreator('img/scott-estrada-developer.jpg')
    },
    
    {
        name: 'Barbara Ramos ',
        role: 'Graphic Designer',
        photo: imgCreator('img/barbara-ramos-graphic-designer.jpg')
    }
]

for(let key in listOfTeamMembers){

    console.log(listOfTeamMembers[key].name,listOfTeamMembers[key].role,listOfTeamMembers[key].photo)
}

const divContainer = document.getElementById('listOfMembers')

for(let i = 0; i < listOfTeamMembers.length; i++){

    let divElement = document.createElement('div')

    divElement.append(listOfTeamMembers[i].photo,'name: ', listOfTeamMembers[i].name,'role: ', listOfTeamMembers[i].role)

    divContainer.append(divElement)
}

function imgCreator(src){

    let imgElement = document.createElement('img')

    imgElement.src = `${src}`

    return imgElement
}






