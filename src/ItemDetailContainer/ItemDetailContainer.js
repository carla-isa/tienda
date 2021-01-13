import React, { useEffect, useState} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import {useParams} from 'react-router-dom'

const ItemDetailContainer = () => {

    const [item, setItem ] = useState([]);

    const {id} = useParams();

    useEffect(() => {

        let isMounted = true;

        const itemPromise = new Promise((resolve,reject)=>{

            let flag = true;
    
            setTimeout(()=> {
    
                let products = [
                    {
                        id: 1,
                        title: "Scarlet Begonia",
                        details: {
                            ambiente: "Húmedo",
                            temperatura: "Entre 17° y 23°",
                            luz: "Sin sol directo",
                            flores: "Anualmente",
                            riego: 'Abundante, sin encharcamiento"',
                            pulverizar: "Sí",               
                            plagas: "Hongos, trips, pulgones y ácaros",
                            Ventilación: "Buena",
                        },
                        price: 1439,
                        stock: 2,
                        pictureUrl: ["https://i.pinimg.com/originals/0d/22/1a/0d221a88f3221743a41dfc26dea1ff57.png",
                                    "https://cdn.shopify.com/s/files/1/1537/5553/products/02117_grande.jpg?v=1486441951",
                                    "https://s3.amazonaws.com/cdn.jungseed.com/images/popup/60919.jpg",
                                    ]
                    },
                    {
                        id: 2,
                        title: "Monstera Deliciosa",
                        details: {
                            ambiente: "Húmedo",
                            temperatura: "Entre 17° y 23°",
                            luz: "Sin sol directo",
                            flores: "Anualmente",
                            riego: 'Abundante, sin encharcamiento"',
                            pulverizar: "Sí",               
                            plagas: "Hongos, trips, pulgones y ácaros",
                            Ventilación: "Buena",
                        },
                        price: 1650,
                        stock: 7,
                        pictureUrl: ["https://cb2.scene7.com/is/image/CB2/PottedMonsteraPlantSHS19/?$web_zoom$&190410160828&wid=450&hei=450",
                                    "https://cdn.shopify.com/s/files/1/0013/3529/6118/products/LBE-14-STAND-LBE-CYL-14-WHT-STAND_Monstera-Deliciosa-14.jpg?v=1605964440",
                                    "https://www.exotenherz.de/media/image/product/1757/md/monstera-deliciosa-window-leaf-12cm-pot-about-30-35cm-high.jpg",
                                    ] 
                    },
                    {
                        id: 3,
                        title: "Tradescantia Spathacea",
                        details: {
                            ambiente: "Húmedo",
                            temperatura: "Entre 17° y 23°",
                            luz: "Sin sol directo",
                            flores: "Anualmente",
                            riego: 'Abundante, sin encharcamiento"',
                            pulverizar: "Sí",               
                            plagas: "Hongos, trips, pulgones y ácaros",
                            Ventilación: "Buena",
                        },
                        price: 1650,
                        stock: 7,
                        pictureUrl: ["https://cdn.shopify.com/s/files/1/0284/2450/products/Tradescantia_spathacea_1024x.jpg?v=1569037522",
                                    "https://img.crocdn.co.uk/images/products2/pl/20/00/03/20/pl2000032038_card3_lg.jpg",
                                    "https://d26lpennugtm8s.cloudfront.net/stores/001/178/597/products/tradescantia-spathacea11-8f26bd2715ccdef93c15905057650403-640-0.jpeg"
                                ] 
                    },
                    {
                        id: 4,
                        title: "Tradescantia Zebrina",
                        details: {
                            ambiente: "Húmedo",
                            temperatura: "Entre 17° y 23°",
                            luz: "Sin sol directo",
                            flores: "Anualmente",
                            riego: 'Abundante, sin encharcamiento"',
                            pulverizar: "Sí",               
                            plagas: "Hongos, trips, pulgones y ácaros",
                            Ventilación: "Buena"
                        },
                        price: 250,
                        stock: 15,
                        pictureUrl: [
                            'https://cdn.shopify.com/s/files/1/1706/1307/products/Tradescantia-zebrina-Wandering-Jew-Houseplant.jpg?v=1550238259',
                            'https://cdn.shopify.com/s/files/1/0284/2450/products/tradescantia_zebrina_1024x.jpg?v=1569043145',
                            'https://images-na.ssl-images-amazon.com/images/I/710KP2WSq1L._AC_SL1000_.jpg',
                        ] 
                    },
                    {
                        id: 5,
                        title: "Hipoestes (Paleta de Pintor)",
                        details: {
                            ambiente: "Húmedo",
                            temperatura: "Entre 17° y 23°",
                            luz: "Sin sol directo",
                            flores: "Anualmente",
                            riego: 'Abundante, sin encharcamiento"',
                            pulverizar: "Sí",               
                            plagas: "Hongos, trips, pulgones y ácaros",
                            Ventilación: "Buena"
                        },
                        price: 120,
                        stock: 10,
                        pictureUrl: [
                            'https://http2.mlstatic.com/D_NQ_NP_891089-MLA30215509625_052019-O.jpg',
                            'https://www.jardineriaon.com/wp-content/uploads/2018/03/Hypoestes_Phyllostachya.jpg',
                            'https://www.tiendafacil.com.ar/tienda/uploads/600x600/1588966223_6d7089de.jpg',
                        ] 
                    },
                    {
                        id: 6,
                        title: "Rosario",
                        details: {
                            ambiente: "Húmedo",
                            temperatura: "Entre 17° y 23°",
                            luz: "Semisombra",
                            flores: "Anualmente",
                            riego: 'Escasos',
                            pulverizar: "Sí",               
                            plagas: "Hongos, trips, pulgones y ácaros",
                            Ventilación: "Buena"
                        },
                        price: 250,
                        stock: 12,
                        pictureUrl: [
                            'https://www.elblogdeldecorador.cl/wp-content/uploads/2017/11/cuidados-de-la-planta-rosario-portada.jpg',
                            'https://www.jardineriaon.com/wp-content/uploads/2018/11/planta-llamada-Senecio-rowleyanus.jpg',
                            'https://t2.ev.ltmcdn.com/es/posts/7/3/4/planta_rosario_cuidados_2437_orig.jpg',
                        ]
                    },
                    {
                        id:7,
                        title: "Lazo de amor",
                        details: {
                            ambiente: "Húmedo",
                            temperatura: "Entre 17° y 23°",
                            luz: "Semisombra",
                            flores: "Anualmente",
                            riego: 'Escasos',
                            pulverizar: "Sí",               
                            plagas: "Hongos, trips, pulgones y ácaros",
                            Ventilación: "Buena"
                        },
                        price: 550,
                        stock: 7,
                        pictureUrl: [
                            'https://d26lpennugtm8s.cloudfront.net/stores/874/529/products/img_2196-02-0111-5203e2a3653d181efa15896402819583-1024-1024.jpeg',
                            'https://d26lpennugtm8s.cloudfront.net/stores/913/526/products/lazo-de-amor1-8a8d80bf0aded85fec16046921106688-1024-1024.jpg',
                            'https://d26lpennugtm8s.cloudfront.net/stores/819/500/products/71-e37cf402dcc4210d7815938044333239-1024-1024.jpeg',
                        ] 
                    },
                    {
                        id:8,
                        title: "Helecho",
                        details: {
                            ambiente: "Húmedo",
                            temperatura: "Entre 17° y 23°",
                            luz: "Semisombra",
                            flores: "Anualmente",
                            riego: 'Escasos',
                            pulverizar: "Sí",               
                            plagas: "Hongos, trips, pulgones y ácaros",
                            ventilación: "Buena"
                        },
                        price: 850,
                        stock: 15,
                        pictureUrl: [
                            'https://d26lpennugtm8s.cloudfront.net/stores/875/158/products/img_41881-e6be5d5391970ac61b15966712915450-1024-1024.jpg',
                            'https://htthttps://t1.ev.ltmcdn.com/es/posts/6/2/3/cultivo_y_cuidados_de_los_helechos_1326_600_square.jpgp2.mlstatic.com/D_NQ_NP_735394-MLA44170549482_112020-O.webp',
                            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1M1ZSAhyD5r-4YtO_yF1YjHtmswAmMPnx1Q&usqp=CAU'
                        ] 
                    },
                    {
                        id:9,
                        title: "Hiedra",
                        details: {
                            ambiente: "Húmedo",
                            temperatura: "Entre 17° y 23°",
                            luz: "Semisombra",
                            flores: "Anualmente",
                            riego: 'Escasos',
                            pulverizar: "Sí",               
                            plagas: "Hongos, trips, pulgones y ácaros",
                            Ventilación: "Buena"
                        },
                        price: 350,
                        stock: 12,
                        pictureUrl: [
                            'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/hiedra-1-1-1528881984.jpg?crop=1.00xw:0.751xh;0,0.249xh&resize=640:*',
                            'https://www.jardineriaon.com/wp-content/uploads/2016/02/Hedera_helix-830x551.jpg',
                            'https://t2.uc.ltmcdn.com/images/4/9/3/como_cuidar_una_planta_hiedra_49394_600_square.jpg'
                        ] 
                    },
                    {
                        id:10,
                        title: "Aspidistra",
                        details: {
                            ambiente: "Húmedo",
                            temperatura: "Entre 17° y 23°",
                            luz: "Semisombra",
                            flores: "Anualmente",
                            riego: 'Escasos',
                            pulverizar: "Sí",               
                            plagas: "Hongos, trips, pulgones y ácaros",
                            Ventilación: "Buena"
                        },
                        price: 24000,
                        stock: 20,
                        pictureUrl:[
                            'https://cdn.shopify.com/s/files/1/2602/3376/products/Aspidistra_elatior_Okame_813_2_1024x1024@2x.JPG?v=1520882200',
                            'https://lh3.googleusercontent.com/proxy/66GtN6xUBJ_K6_7gqWpRxME2Qg7pdI6C67MzqjX9JiDwFxevmShKdYz0OkkBxnyLmOvw6vRpTXbQ4LYLYXT8U-15FgVcUR7p4S-s1VEK5BFVR7WpPZ1fF2UD2b0oMg-sFxs',
                            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrRuYgsoqFh3YGSefObHEqa-cTzz0QRWpM2Q&usqp=CAU',
                        ] 
                    },
                ];
    
                flag ? resolve(products) : reject("fallo promesa");
    
            }, 1500);
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