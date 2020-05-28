const planetData = [
    {
        category: 'inhabited',
        content: 'Foxes',
        asteroid: true,
    },
    {
        category: 'inhabited',
        content: 'Whales and Rabbits',
        asteroid: true,
    },
    {
        category: 'uninhabited',
        content: 'Baobabs and Roses',
        asteroid: true,
    },
    {
        category: 'inhabited',
        content: 'Giant monsters',
        asteroid: false,
    },
    {
        category: 'inhabited',
        content: 'Sheep',
        asteroid: true,
    },
];


let list = document.querySelector('ul');

planetData.forEach(planet => {
    if (planet.asteroid === true){
       var li = document.createElement('li');
       li.textContent = planet.content;
       li.className = planet.category;

       list.append(li);
    }
});