console.log('Hi,Noemi')

let names=['Levi', 'Noni', 'Norbi', 'Anya', 'Apa', 'Baba'];

/*$('body').append(
  names.forEach
)*/
names.forEach(unicorn => {
  console.log(unicorn);
})

$('ul').append([names])

let additionalBlock = {
  title: "Added with javascript",
  text: "This block was added using JavaScript's jQuery library. How awesome!",
};

$('body').append(additionalBlock.title)
$('body').append(additionalBlock.text)

/*$('body').append('<h1>Added with javascript</h1>')

$('body').append("<p>This block was added using JavaScript's jQuery library. How awesome!</p>")*/