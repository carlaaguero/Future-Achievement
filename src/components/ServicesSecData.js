import "./ServicesSec.css"

function ServiceSecData(props) {
    return(
        <div className="s-card">
            <div className="s-image">
                <img src={props.image} alt="img" />
            </div>
            <h4>{props.heading}</h4>
        </div>
    );
}


export default ServiceSecData