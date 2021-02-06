
const e = React.createElement;

const headerContainer = (pros) =>{
    return (
        <div style={{ width:"100%", height:"100px", position:"fixed", top:"0", backgroundColor:"red" }}>
            AAAA
        </div>
    )
}


const domContainer = document.querySelector('#header-container');
ReactDOM.render(e(headerContainer), domContainer);