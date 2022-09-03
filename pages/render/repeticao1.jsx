export default function repeticao1(){
    const nomes = ['João ', 'Maria ','Carlos ']

    function render(){
        const lista = []

        for(var i=0; i<nomes.length; i++){
            lista.push(<li>{nomes[i]}</li>)
        }
        return lista
    }

    return(
        <>
           <ul>
               {render()}
           </ul>
        
        </>
    )
                 
        
    }

    
