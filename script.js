const listOfTeamMembers = [
    {
        name: 'Wayne Barnett',
        role: 'founder & CEO',
        photo: 'img/wayne-barnett-founder-ceo.jpg'
    },
    
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        photo: 'angela-caroll-chief-editor.jpg'
    },
    
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        photo: 'img/walter-gordon-office-manager.jpg'
    },
    
    {
        name: 'Angela Lopez',
        role: 'Social Media',
        photo: 'img/angela-lopez-social-media-manager.jpg'
    },
    
    {
        name: 'Scott Estrada',
        role: 'Developer',
        photo: 'img/scott-estrada-developer.jpg'
    },
    
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        photo: 'img/barbara-ramos-graphic-designer.jpg'
    }
]

for(let key in listOfTeamMembers){

    console.log(listOfTeamMembers[key].name,listOfTeamMembers[key].role,listOfTeamMembers[key].photo)
}

const ulElement = document.getElementById('listOfMembers')

for(let i = 0; i < listOfTeamMembers.length; i++){

    let liElement = document.createElement('li')

    liElement.append('name: ', listOfTeamMembers[i].name,' Role: ', listOfTeamMembers[i].role,' photo:  ', listOfTeamMembers[i].photo)

    ulElement.append(liElement)
}






