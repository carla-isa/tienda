//Hooks
import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'

//Components
import ItemList from '../ItemList/ItemList'
import Loader from '../Loader/Loader';

//Particular CSS
import './ItemListContainer.css'


const ItemListContainer = () => {


    const {categoryId} = useParams();

    const [list, setList] = useState([]);

    useEffect(() => {
        
        const promesa = new Promise((resolve,reject)=>{

            let flag = true;
    
            setTimeout(()=> {
    
                let productsList = [
                    {
                        id: 1,
                        title: "Scarlet Begonia",
                        category: "interior",
                        price: 1439,
                        stock: 2,
                        pictureUrl: "https://i.pinimg.com/originals/0d/22/1a/0d221a88f3221743a41dfc26dea1ff57.png"
                    },
                    {
                        id: 2,
                        title: "Monstera Deliciosa",
                        category: "interior",
                        price: 1650,
                        stock: 7,
                        pictureUrl: "https://cb2.scene7.com/is/image/CB2/PottedMonsteraPlantSHS19/?$web_zoom$&190410160828&wid=450&hei=450"
                    },
                    {
                        id: 3,
                        title: "Tradescantia Spathacea",
                        category: "interior",
                        price: 1650,
                        stock: 7,
                        pictureUrl: "https://cdn.shopify.com/s/files/1/0284/2450/products/Tradescantia_spathacea_1024x.jpg?v=1569037522"
                    },
                    {
                        id: 4,
                        title: "Tradescantia Zebrina",
                        category: "interior",
                        price: 250,
                        stock: 15,
                        pictureUrl: 'https://cdn.shopify.com/s/files/1/1706/1307/products/Tradescantia-zebrina-Wandering-Jew-Houseplant.jpg?v=1550238259'
                    },
                    {
                        id:5,
                        title: "Hipoestes (Paleta de Pintor)",
                        category: "interior",
                        price: 120,
                        stock: 10,
                        pictureUrl:'https://http2.mlstatic.com/D_NQ_NP_891089-MLA30215509625_052019-O.jpg'
                    },
                    {
                        id:6,
                        title: "Rosario",
                        category: "exterior",
                        price: 250,
                        stock: 12,
                        pictureUrl:'https://www.elblogdeldecorador.cl/wp-content/uploads/2017/11/cuidados-de-la-planta-rosario-portada.jpg'
                    },
                    {
                        id:7,
                        title: "Lazo de amor",
                        category: "exterior",
                        price: 550,
                        stock: 7,
                        pictureUrl:'https://d26lpennugtm8s.cloudfront.net/stores/874/529/products/img_2196-02-0111-5203e2a3653d181efa15896402819583-1024-1024.jpeg'
                    },
                    {
                        id:8,
                        title: "Helecho",
                        category: "exterior",
                        price: 850,
                        stock: 15,
                        pictureUrl:'https://d26lpennugtm8s.cloudfront.net/stores/875/158/products/img_41881-e6be5d5391970ac61b15966712915450-1024-1024.jpg'
                    },
                    {
                        id:9,
                        title: "Hiedra",
                        category: "exterior",
                        price: 350,
                        stock: 12,
                        pictureUrl:'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/hiedra-1-1-1528881984.jpg?crop=1.00xw:0.751xh;0,0.249xh&resize=640:*'
                    },
                    {
                        id:10,
                        title: "Aspidistra",
                        category: "exterior",
                        price: 24000,
                        stock: 20,
                        pictureUrl:'https://cdn.shopify.com/s/files/1/2602/3376/products/Aspidistra_elatior_Okame_813_2_1024x1024@2x.JPG?v=1520882200'
                    },
            
                ];
    
                flag ? resolve(productsList) : reject("fallo promesa");
    
            }, 500);
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

                <div className="item-list-container">  
                {
                    <ItemList list={ list.filter(product => product.category === `${categoryId}`) } />
                }  
                
                </div>
            ) 
        }else{
            return(
                <div className="item-list-container">    
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