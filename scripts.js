console.log('Hi,Noemi')

let names=['Levi', '<strong>Noni</strong>', 'Norbi', 'Anya', 'Apa', 'Baba',];

names.forEach(name => {
  $('#namelist').append(`<li> ${name} </li>`)
});

let additionalBlock = {
  title: "Added with javascript",
  text: "This block was added using JavaScript's jQuery library. How awesome!",
};

$('main').append(`<h1>  ${additionalBlock.title}  </h1>`)
$('main').append(`<p>  ${additionalBlock.text}  </p>`)
