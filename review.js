const reveiws =[
    {
        img : 'imgs/alexander-hipp-iEEBWgY_6lA-unsplash.jpg',
        name : 'alexander rush',
        job : 'front-end devloper',
        info : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius assumenda quisquam consequuntur dolores facilis praesentium dolorum animi, accusantium sed aspernatur cupiditate necessitatibus iste! Laudantium facilis quaerat delectus repellendus maiores. Numquam.',
    },
    {
        img : 'imgs/jake-nackos-IF9TK5Uy-KI-unsplash.jpg',
        name : 'jake ferran',
        job : 'software engineer',
        info : 'Necessitatibus ullam adipisci quidem hic facilis tenetur excepturi dignissimos, obcaecati accusamus omnis voluptatum autem dicta sunt, vero quo veritatis possimus minima est Tempora saepe sit, mollitia corporis commodi quos suscipit quis iusto temporibus.',
    },
    {
        img : 'imgs//leilani-angel-K84vnnzxmTQ-unsplash (3).jpg',
        name : 'leilani akachi',
        job : 'the boss',
        info :'omnis iure incidunt dolore, ducimus voluptate? Provident assumenda dolor obcaecati tenetur Consequatur corrupti exercitationem totam iste tenetur ipsam maxime consequuntur rerum dolores facilis praesentium dolorum animi, accusantium sed aspernatur cupiditate necessitatibus iste! Laudantium facilis quaerat delectus repellendus maiores.'
        
    },
    {
        img : 'imgs/christian-buehner-DItYlc26zVI-unsplash.jpg',
        name : 'christian messka',
        job : 'full stack devloper',
        info : 'Tempora saepe sit, mollitia corporis commodi quos suscipit quis iusto temporibus. Ipsa, nihil cumque. Exercitationem ut, libero quo eius officiis deserunt eum laudantium impedit, magni perferendis nisi debitis accusamus.',
    },
    {
        img : 'imgs/michael-dam-mEZ3PoFGs_k-unsplash.jpg',
        name : 'michael zibar',
        job : 'web designer',
        info : 'dolor sit amet, consectetur adipisicing elit. Eius assumenda quisquam consequuntur dolores facilis praesentium dolorum animi, accusantium sed aspernatur cupiditate necessitatibus iste! Laudantium facilis quaerat delectus repellendus maiores. Numquam.',
    }
];
const next= document.querySelector("#next");
const prev= document.querySelector("#previos");
const imgg = document.querySelector("#img");
const author =document.querySelector("#name");
const job = document.querySelector("#job");
const info = document.querySelector("#description");

let currentPerson = 0;
window.addEventListener("DOMContentLoaded", function(){
    const item = reveiws[currentPerson];
    imgg.src = item.img;
    author.innerHTML = item.name;
    job.innerHTML = item.job;
    info.innerHTML = item.info;
})
function persons(person){
    const item = reveiws[person];
    imgg.src = item.img;
    author.innerHTML = item.name;
    job.innerHTML = item.job;
    info.innerHTML = item.info;
}

next.addEventListener("click", function(){
    currentPerson++;
    if (currentPerson > reveiws.length - 1 ) {
        currentPerson = 0;
    }
    persons(currentPerson);
})

prev.addEventListener("click", function(){
    currentPerson--;
    
    if (currentPerson < 0 ) {
        currentPerson = reveiws.length - 1;
    }
    persons(currentPerson);
    
})