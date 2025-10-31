export function Book({book}){
function handlealert(){
  alert('my message')
}
  return (
    <div className="card">
      <img src={book.image} alt="" width="400" height="400" />
      <h3>Title: {book.title}</h3>
      <h4>Price: ₹{book.price}/-</h4>
      <button onClick={handlealert}>Add To Cart</button>
    </div>
  ); 
}