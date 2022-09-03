export default function lacoFor(){
    
    const lista = [
        '01',
        '02',
        '66',

    ]

    return(
        lista.map((num, i) => <li key={i}> {num} </li>)

    )
}