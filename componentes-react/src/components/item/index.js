//Construção de todos os componentes
export default props => {
    return (
        <a href="/" className={`list-group-item list-group-item-action list-group-item-${props.color}`}>{props.content}</a>
    )
}