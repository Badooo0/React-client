
function Header(){
    return(
        <header>
            <h2>My Header</h2>
            <nav>
                <a href="./">HOME</a>
            </nav>
        </header>
    )
}



function App(){

    return(
        <div>
            <Header></Header>
            <h2>React</h2>
            <p>This is a p tag</p>

        </div>

    );

}



ReactDom.createRoot(document.querySelector("#root")).render(App())