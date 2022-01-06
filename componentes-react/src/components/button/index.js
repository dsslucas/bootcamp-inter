export default props => {
    return (
        <button 
            className={`btn btn-${props.color}`}
            onClick={props.onClick}>
                {props.content}
        </button>
    )
}