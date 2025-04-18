import React from 'react'

const Cart = () => {
    return (
        <div className='mt-15'>
            {/* Your Art Cart */}
            <div className="title flex flex-col items-center mt-5">
                <b className='font2 font-bold sm:text-[30px] text-[22px]'>Your Art Cart</b>
                <span className='title-line'>-</span>

                <p className='text-center text-gray-600 text-[18px] my-5 '>Review your selected artwork(s) before you proceed to checkout. Each piece is one-of-a-kind — make it yours!</p>
            </div>
        </div>
    )
}

export default Cart;