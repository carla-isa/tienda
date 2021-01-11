import React, {useEffect , useState} from 'react'
import {useParams} from 'react-router-dom'
import ItemList from "./ItemList"

const ItemListContainer = () => {

    const [list, setList] = useState([]);

    const {categoryId} = useParams();
  
    useEffect(() => {
        
        const promesa = new Promise((resolve,reject)=>{

            let flag = true;
    
            setTimeout(()=> {
    
                let productsList = [
                    {
                        id: 1,
                        title: "Falafel ",
                        price: 250,
                        stock: 9,
                    },
                    {
                        id:2,
                        title: "Milanesas de soja",
                        price: 350,
                        stock: 5,
                    },
                    {
                        id:3,
                        title: "Albóndigas de lentejas",
                        price: 300,
                        stock: 7,
                    },            
                ];
    
                flag ? resolve(productsList) : reject("fallo promesa");
    
            }, 2000);
        });

        promesa
        .then(items =>{ 
            setList(items);
        })
        .catch(e => console.log(e))

    },[]);

    if (list.length > 0){

        if(categoryId !== undefined){
            return(

                <div>  
                {
                    <ItemList list={ list.filter(product => product.category === `${categoryId}`) } />
                }  
                
                </div>
            ) 
        }else{
            return(
                <div>    
                    <ItemList list={list} />
                </div>
            )
        }

    }else{
        return(
            <Loader/>
        )
    }
    
}

export default ItemListContainer


/*export default function ItemListContainer(){
    const [contador, setContador] = useState(0);

    const sumar = () =>{ setContador(contador + 1)}
    const restar = () => { setContador(contador -1)}
    const limpiar = () => { setContador(0)}

    return( 
        <>
        <div>Hola, bienvenidx a la tienda!</div>
        <div>
        <p>Contador : </p>
        <ItemCount contador={contador} sumar={sumar} restar={restar} limpiar={limpiar} />
        <button onClick={ () => { setContador(contador - 1) } }>-</button>
        <button onClick={ () => { setContador(contador + 1) } }>+</button>
        <button onClick={ () => { setContador(0) } }>Limpiar</button>
        </div>
        </>
    );
}*/