export default function Titulo(props){
    return (
        props.p ? (
            <p>{props.Titulo}</p>
        ) : (
            <h1>{props.Titulo}</h1>
        )
    )
}