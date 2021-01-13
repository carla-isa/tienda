import React, { useState } from 'react'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import Loader from '../Loader/Loader'
import NotExists from '../NotExists/NotExists'

const ItemDetail = ({item}) => {


    const [ bigImg, setBigImg ] = useState('');
    const [ add, setAdd ] = useState();


    if(item.length > 0 && item !== "not exist"){

        return (
            <div className="item-detail">
                <div className="left-container">
                    <div className="img-counter-container">
                        <div className="small-images-big-image-container">
                            <div className="small-images">
                                <div className="sm-img" 
                                    style={{ 
                                        backgroundImage: `url(${item[0].pictureUrl[0]})` 
                                    }}
                                    onClick={ () => setBigImg({backgroundImage: `url(${item[0].pictureUrl[0] })`})}
                                >
                                </div>
                                <div className="sm-img" 
                                    style={{
                                        backgroundImage: `url(${ item[0].pictureUrl[1] !== undefined ? item[0].pictureUrl[1] : item[0].pictureUrl[0] })` 
                                    }}
                                    onClick={ () => setBigImg({backgroundImage: `url(${item[0].pictureUrl[1] !== undefined ? item[0].pictureUrl[1] : item[0].pictureUrl[0] })`})}
                                >
                                </div>
                                <div className="sm-img" 
                                    style={{
                                        backgroundImage: `url(${item[0].pictureUrl[2] !== undefined ? item[0].pictureUrl[2] : item[0].pictureUrl[0] })`,
                                    }}
                                    onClick={ () =>{
                                        setBigImg({backgroundImage: `url(${item[0].pictureUrl[2] !== undefined ? item[0].pictureUrl[2] : item[0].pictureUrl[0] })`});
                                    }}
                                >
                                </div>
                            </div>
                            <div className="big-image" 
                                style={bigImg !== '' ? bigImg : { backgroundImage: `url(${item[0]?.pictureUrl[0] })`} }
                                >        
                            </div>
                        </div>
                        <ItemCount add={add} setAdd={setAdd} initial={1} stock={item[0].stock}/>
                    </div>
                </div>
                <div className="right-container">
                    <div className="title-price">
                        <h4>{item[0].title}</h4>
                        <h4>${item[0].price}</h4>
                        <small>COD: {item[0].id}</small>
                    </div>

                    
                    <div className="details-container">
                        <ul>
                            <li>Ambiente: <span className="span">{ item[0].details.ambiente }</span></li>
                            <li>Temperatura: <span className="span">{ item[0].details.temperatura }</span></li>
                            <li>Luz: <span className="span">{ item[0].details.luz}</span></li>
                            <li>Flores: <span className="span">{ item[0].details.flores }</span></li>
                            <li>Riego: <span className="span">{ item[0].details.riego }</span></li>
                            <li>Pulverizar: <span className="span">{ item[0].details.pulverizar }</span> </li>
                            <li>Plagas: <span className="span">{ item[0].details.plagas }</span></li>
                            <li>Ventilación: <span className="span">{ item[0].details.ventilacion }</span></li>
                        </ul>
                    </div>
                    
                    
                </div>
            </div>
        ) 
        
    }else if(item === "not exist"){
        return(
            <NotExists/>
        )
    }else{
        return(
            <Loader/>
        )
    }

}

export default ItemDetail