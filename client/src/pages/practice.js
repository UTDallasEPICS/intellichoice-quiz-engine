import React from 'react'
import Banner from '../components/Banner'
import '../components/Banner/style.css'
import Subject from '../components/Subjects'

const Practice = () => {
    return (
        <>
            <Banner text="Practice" color='#4CAF50'></Banner>
            <div style={{margin:'0 20%'}}>
                <a href='./addition'><Subject text="Addition" symbol="+" color='#C83131'></Subject></a>
                <a href='./subtraction'><Subject text="Subtraction" symbol="—" color='#EABC00'></Subject></a>
                <a href='./multiplication'><Subject text="Multiplication" symbol="×" color='#F39317'></Subject></a>
                <a href='./division'><Subject text="Division" symbol="÷" color='#00B971'></Subject></a>
                <Subject text="Fraction" symbol="/" color='#00A1DE'></Subject>
                <Subject text="Decimal" symbol="●" color='#8D33AA'></Subject>
                
            </div>
            {/* <div style={{clear: 'both', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh'}}>
                <h1>Practice</h1>
            </div> */}
        </>
    )
}

export default Practice