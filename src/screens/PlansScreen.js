
import React, { useEffect } from 'react';
import { useState } from 'react';
import db from '../firebase';
import { collection, query, where, getDocs } from "firebase/firestore";

function PlansScreen() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
            const q = query(collection(db, "products"), where("active", "==", true));
            const querySnapshot = getDocs(q);
            querySnapshot.then((docs) => {
                docs.forEach((doc) => {
                    console.log(doc.id, " => ", doc.data());
                    products[doc.id] =  {
                        priceId: doc.id,
                        priceData: doc.data()
                    }
            });
            setProducts(products);
        });
    }, [])
    console.log(products);
    return (
        <div className='plansScreen'>
            <h1>Plans</h1>
        </div>
    );
}

export default PlansScreen;