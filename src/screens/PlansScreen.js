
import React, { useEffect } from 'react';
import { useState } from 'react';
import db from '../firebase';
import { collection, query, where, getDocs } from "firebase/firestore";

function PlansScreen() {
    const [products, setProducts] = useState([]);
        
    useEffect(() => {
        const fetchData = () => {
            const q = query(collection(db, "products"), where("active", "==", true));
            const querySnapshot = getDocs(q);
            querySnapshot.then((docs) => {
                docs.forEach((doc) => {
                    console.log(doc.id, " => ", doc.data());
            });
        });
    };
    fetchData().catch(console.error);
    }, [])
    //     db.collection("products").where("active", "==", true)
    //     .get()
    //     .then((querySnapshot) => {
    //         const products = {};
    //         querySnapshot.forEach(async productDoc => {
    //             products[productDoc.id] = productDoc.data();
    //             const priceSnap = await productDoc.ref.collection("prices").get();
    //             priceSnap.docs.forEach(price => {
    //                 products[productDoc.id].prices = {
    //                     priceId: price.id,
    //                     priceData: price.data()
    //                 }
    //             })
    //         });
    //         setProducts(products);
    //     });
    // }, []);
    // console.log(products);
    return (
        <div className='plansScreen'>
            <h1>Plans</h1>
        </div>
    );
}

export default PlansScreen;