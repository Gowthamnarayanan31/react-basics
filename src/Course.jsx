


function Course(props){
    
    
    return(
        <div className="card">
            <img src={props.image} alt="" />
            <h3>{props.name}</h3>
            <p>{props.price}</p>
            <span>{props.rating}</span>
            
        </div>
    
    )

Course.propTypes = {
    name: propTypes.string,
    rating: propTypes.number,
    show : propTypes.bool

}
}
export default Course