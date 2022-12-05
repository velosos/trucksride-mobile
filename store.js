import { configureStore } from "@reduxjs/toolkit";
import navReducer from './slices/navSlice';

export const store = configureStore({
    reducer: {
        nav: navReducer
    }
})

export const optionsData = [
    {
        id: "450",
        title: "Simulate freight",
        image: "http://atlas-content-cdn.pixelsquid.com/stock-images/delivery-truck-box-Av8vKM7-600.jpg",
        screen: "RouteMapScreen",
    },
];

export const favData = [
    {
        id: "123",
        icon: "trending-up-outline",
        location: "Home",
        destination: "Code Street, London, IK",
    },
    {
        id: "456",
        icon: "trending-up-outline",
        location: "Work",
        destination: "London Eye, London, UK"
    },
];


