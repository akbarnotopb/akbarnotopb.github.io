                  
const headerStyle = { width:"100%", height:"100px", backgroundColor:"red" }
class HeaderContainer extends React.Component{

    render()
    {
        return (
            <div style={headerStyle}>
                AAAA
            </div>
        )
    }
}
const domContainer = document.querySelector('#header-container');
ReactDOM.render(<HeaderContainer/>, domContainer);