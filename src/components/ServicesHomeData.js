import "./ServicesHome.css"

function ServiceHomeData(props) {
    return(
        <div className="h-card">
            <div className="h-image">
                <img src={props.image} alt="img" loading="lazy" />
            </div>
            <h4>{props.heading}</h4>
        </div>
    );
}


export default ServiceHomeData