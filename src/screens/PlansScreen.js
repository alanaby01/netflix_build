
import React, { useEffect } from 'react';
import { useState } from 'react';
import db from '../firebase';
import { collection, query, where, getDocs } from "firebase/firestore";

function PlansScreen() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const q = query(collection(db, "products"), where("active", "==", true));
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                    products[doc.id] = {
                        priceData: doc.data()
                    }
                });
                setProducts(products);
        }   
        fetchData();
        
    }, [])
    return ( 
        <div className='plansScreen'>
            {Object.entries(products).map(([productId, productData]) => {
                console.log(productData.priceData.name);
                return (
                    <div className='PlanScreen__plan'>
                        <div className='PlanScreen__info'>
                            <h5>{productData.priceData.name}</h5>
                            <h6>{productData.priceData.description}</h6>
                        </div>
                        <button>Subscribe</button>
                    </div>
                )
            })}
        </div>
    );
}

export default PlansScreen;