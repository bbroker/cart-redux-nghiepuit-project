import * as types from '../constants/ActionTypes';

var initialState = [
    {
        id: 1,
        name: 'Iphone 7 plus',
        image: 'https://didongviet.vn/pub/media/catalog/product/i/p/iphone-7-plus-128gb_5.jpg',
        description: 'Sản phẩm do Apple phân phối độc quyền',
        price: 500,
        inventory: 10,
        rating: 4
    },
    {
        id: 2,
        name: 'Iphone 8',
        image: 'https://dienthoaihay.vn/images/products/2020/08/27/original/iphone-8-plus-do_1598492332.jpg',
        description: 'Sản phẩm do Apple phân phối độc quyền',
        price: 600,
        inventory: 8,
        rating: 5
    },
    {
        id: 3,
        name: 'Iphone XS MAX',
        image: 'https://cdn.tgdd.vn/Products/Images/42/190321/iphone-xs-max-gold-600x600.jpg',
        description: 'Sản phẩm do Apple phân phối độc quyền',
        price: 1000,
        inventory: 13,
        rating: 3
    }
];

const products = (state = initialState, action) => {
    switch(action.type) {
        default: return [...state];
    }
};

export default products;