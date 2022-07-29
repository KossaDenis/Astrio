import React, { useState } from 'react'
import { IProduct } from '../../../types/types'
import './Catalog.css'
import CatalogList from './CatalogList/CatalogList'

const Catalog = () => {

    enum clothing {
        Hoodie = 'Hoodie',
        Pullover = 'Pullover',
        Polo_shirt = 'Polo shirt',
        Jeans = 'Jeans',
        Pants = 'Pants',
        Sneakers = 'Sneakers',
    }

    const [products, setProducts] = useState<IProduct[]>([
        {
            id: 1,
            title: 'Letters School 1993 Printing Hoodie 2021 Spring Winter Warm Fleece High Quality Sweatshirt Fashion Fitness Hip Hop Streetwear',
            clothing: clothing.Hoodie,
            price: 10.04,
            url: 'https://ae04.alicdn.com/kf/H7c6a5702d62a42548bb3933659952314p/Letters-School-1993-Printing-Hoodie-2021-Spring-Winter-Warm-Fleece-High-Quality-Sweatshirt-Fashion-Fitness-Hip.jpg_640x640.jpg',
            sex: 'Men'
        },
        {
            id: 2,
            title: 'Striped Pullover Women Vintage Sweater Oversize Long Sleeve Couples Loose Tops Hip Hop Streetwear Pullover Casual Female',
            clothing: clothing.Pullover,
            price: 13.53,
            url: 'https://ae04.alicdn.com/kf/H221db2666633497e9be4e6ab540a64b5r/Striped-Pullover-Women-Vintage-Sweater-Oversize-Long-Sleeve-Couples-Loose-Tops-Hip-Hop-Streetwear-Pullover-Casual.jpg_640x640.jpg',
            sex: 'Women'
        },
        {
            id: 3,
            title: 'Aemape clothing Mens Polo Shirts summer new casual print deer polos shirt short sleeve mens trend cotton T shirt casual Polo shirt',
            clothing: clothing.Polo_shirt,
            price: 17.01,
            url: 'https://ae04.alicdn.com/kf/Ha75e8906718e46288bbc2c8ef3d45ae5y/Aemape-clothing-Men-s-Polo-Shirts-summer-new-casual-print-deer-polos-shirt-short-sleeve-mens.jpg',
            sex: 'Men'
        },
        {
            id: 4,
            title: 'Harajuku Patchwork Letter Stars Embroidery Ripped Mens Denim Trousers Straight Retro Washed Oversized Streetwear Baggy Jeans',
            clothing: clothing.Jeans,
            price: 30.01,
            url: 'https://ae04.alicdn.com/kf/Se6e82a22664041469b33d8cfdd16a479O/Harajuku-Patchwork-Letter-Stars-Embroidery-Ripped-Mens-Denim-Trousers-Straight-Retro-Washed-Oversized-Streetwear-Baggy-Jeans.jpg',
            sex: 'Men'
        },
        {
            id: 5,
            title: 'Women pants Spring Harajuku Cargo Cartoon Pants Women Camouflage Streetwear Casual Trousers Hip Pop High Waist Sweatpants',
            clothing: clothing.Pants,
            price: 12.50,
            url: 'https://ae04.alicdn.com/kf/H26955199a5b24e469b1286ff49e7601ba/Women-pants-Spring-Harajuku-Cargo-Cartoon-Pants-Women-Camouflage-Streetwear-Casual-Trousers-Hip-Pop-High-Waist.jpg',
            sex: 'Women'
        },
        {
            id: 6,
            title: '2022 MMY Mihara Yasuhiro Jack Purcell Shoes MMY Shell Head Dissolving Shoes MIHARA Board Shoes Men\'s and Women\'s Sports Shoes',
            clothing: clothing.Sneakers,
            price: 87.36,
            url: 'https://ae04.alicdn.com/kf/Sba68f095b3be4fb8a64907a1b31574c9a/2022-MMY-Mihara-Yasuhiro-Jack-Purcell-Shoes-MMY-Shell-Head-Dissolving-Shoes-MIHARA-Board-Shoes-Men.jpg',
            sex: 'Unisex'
        }

    ])

    return (
        <div className='catalog_box'>
            <h2 className='catalog_title'>Catalog</h2>
            <CatalogList products={products}/>
        </div>
    )
}

export default Catalog