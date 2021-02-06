
const e = React.createElement;

const headerStyle = { width:"100%", height:"100px", position:"fixed", top:"0", backgroundColor:"red" }
class headerContainer extends React.Component{

    render()
    {
        return e(
            <div style={headerStyle}>
                AAAA
            </div>
        )
    }
}


const domContainer = document.querySelector('#header-container');
console.log(domContainer)
ReactDOM.render(e(headerContainer), domContainer);