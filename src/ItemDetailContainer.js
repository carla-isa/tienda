import React, { useEffect, useState} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import {useParams} from 'react-router-dom'

const ItemDetailContainer = () => {

    const [item, setItem ] = useState([]);

    const {id} = useParams();

    useEffect(() => {

        const itemPromise = new Promise((resolve,reject)=>{

            let flag = true;
    
            setTimeout(()=> {
    
                let products = [
                    {
                        id: 1,
                        title: "Falafel",
                        details: "12 unidades de falafel de garbanzos",
                        price: 250,
                        stock: 9,
                        pictureUrl: ['./img/falafel.jpg']
    
                    },
                    {
                        id: 2,
                        title: "Milanesas de soja",
                        details: "6 milanesas de soja XXL",
                        price: 350,
                        stock: 5,
                        pictureUrl: ['./img/milanesa.jpg']
                    },
                    {
                        id: 3,
                        title: "Albóndigas de lentejas",
                        details: "12 albóndigas tamaño XXL",
                        price: 300,
                        stock: 7,
                        pictureUrl: ['./img/albondigas.jpg']
                    },
                ];
    
                flag ? resolve(products) : reject("fallo promesa");
    
            }, 2000);
        });

        itemPromise
        .then(items =>{

            if (isMounted){

                let filterItem = items.filter(i => i.id === parseInt(id));

                filterItem.length === 0 ? setItem("not exist") : setItem(filterItem);
            }
        })
        .catch(e => console.log(e))

        return ()=> {
            isMounted = false;
        }

    }, [id]);


    return (
        <>
            <ItemDetail item={item} /> 
        </>
    )
}
export default ItemDetailContainer