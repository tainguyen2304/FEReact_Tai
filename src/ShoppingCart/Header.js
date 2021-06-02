import React from 'react'

export default function Header(props) {
    const {countCartitems} =props;
    return (
       <header className="row block center">
           <div>
               <a href ='#/'>
                   <h1>Small shopping cart</h1>
               </a>
           </div>
            <div>
                <a href="#/cart">
                    Cart {' '}
                    {countCartitems ? (
                        <button className='badge'>{countCartitems}</button>
                    ) : ('')}
                </a>{' '}
                <a href="#/signin">SignIn</a>
            </div>
       </header>
    )
}
