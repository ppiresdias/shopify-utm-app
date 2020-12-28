import React from "react"
import {TitleBar, useRoutePropagation} from '@shopify/app-bridge-react';
import { useLocation } from "react-router-dom";

export default function ShowAllLinks(){
    let location = useLocation()
    console.log(location)
    useRoutePropagation(location)

    return(
        <>
        <TitleBar title="View All Links" />
            Show All Links Page
        </>
    )
}