import ReactDOM from 'react-dom/client'
import './App.css'

function Book(){
    return(
        <div>
            <img src="https://img.freepik.com/premium-photo/book-library-with-old-open-textbook-stack-piles-literature-text-archive-reading-desk_779468-5822.jpg?w=2000" width="400" height="400" alt="book image" />
            <h3>Title: Physics</h3>
            <h4>Price:₹381</h4>
            <button> Add To Cart</button>
        </div>

    )
}
const parent= document.getElementById("root");
const root=ReactDOM.createRoot(parent);
root.render(<Book/>);