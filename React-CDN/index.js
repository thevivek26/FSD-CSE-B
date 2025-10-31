function Book(props){
const image = React.createElement("img", {
    src: "../assets/book.jpeg",
    width: "150",
    height: "150",
    alt: "Book Image"
}, null);

const h4 = React.createElement("h4", null, "Price:"+props.price);
const child = React.createElement("div", { className: "card" }, image, h4);
return (child);
}
const books=[
    {image:"../assets/book.jpeg",price:"249"},
    {image:"../assets/book.jpeg",price:"249"},
    {image:"../assets/book.jpeg",price:"249"}
]
const booklist=books.map(p=>(
    React.createElement(Book,{image: p.image,price:p.price})
))
const bookele=React.createElement("div",{className:"book-list"},booklist)
const parent = document.getElementById("root");
const root = ReactDOM.createRoot(parent);
root.render(bookele);