

function App(){

    return(
        <div>
            <h2>React</h2>
            <p>This is a p tag</p>
        </div>
    );
}



ReactDom.createRoot(document.querySelector("#root")).render(App())