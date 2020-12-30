import React, {useState} from "react"
import {TitleBar, useRoutePropagation, ResourcePicker} from '@shopify/app-bridge-react';
import { useLocation } from "react-router-dom";
import axios from 'axios';

export default function CreateNewProductLink(){
    let location = useLocation()
    console.log(location)
    useRoutePropagation(location)

    const [resourcePickerOpen, setResourcePickerOpen] = useState(true);
    const [productData, setProductData] = useState(false);

    function handleResourcePicker(resource) {
        setProductData(resource.selection[0])
        console.log(resource)

        axios.get('/app/graphql')
            .then(function (response) {
                // handle success
                console.log('response from server:');
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });

    }
    return(
        <>
         <TitleBar title="Create New Link" />
         <ResourcePicker resourceType="Product" open={resourcePickerOpen} onSelection={handleResourcePicker}/>
            <div className={productData == false ? "app-page-title .d-none" : "app-page-title"}>
                <div className="page-title-wrapper">
                    <div className="page-title-heading">
                        <div className="page-title-icon">
                        <i className="pe-7s-display1 icon-gradient bg-premium-dark">
                        </i>
                        </div>
                        <div>Create A New Link
                        <div className="page-title-subheading">
                            Choose a product and create a link to promote product
                        </div>
                        </div>
                    </div>
                    <div className="page-title-actions">
                        <div className="d-inline-block dropdown">
                        <button type="button" className="btn-shadow btn btn-info">
                            <span className="btn-icon-wrapper pr-2 opacity-7">
                            <i className="fa fa-business-time fa-w-20" />
                            </span>
                            Save
                        </button>
                        </div>
                    </div>    
                </div>
            </div>
            <div className={productData == false ? "row .d-none .d-none" : "row .d-none"}>
                <div className="col-md-6">
                    <div className="main-card mb-3 card">
                        <div className="card-body"><h5 className="card-title">Controls Types</h5>
                            <form>
                                <div className="position-relative form-group"><label htmlFor="productUrl">Product URL</label><input name="campaignSource" id="productUrl" placeholder="Product URL" type="text" className="form-control" /></div>
                                <div className="position-relative form-group"><label htmlFor="campaignSource">Campaign Source</label><input name="campaignSource" id="campaignSource" placeholder="Google, Youtube, Instagram, etc." type="text" className="form-control" /></div>
                                <div className="position-relative form-group"><label htmlFor="campaignMedium">Campaign Medium</label><input name="campaignMedium" id="campaignMedium" placeholder="CPC, Banner, Instagram Profile Link" type="text" className="form-control" /></div>
                                <div className="position-relative form-group"><label htmlFor="campaignName">CamapignName</label><input name="text" id="campaignName" placeholder="50JULY42020, LABOR DAY 2020, COUPON123" type="text" className="form-control" /></div>
                                <div className="position-relative form-group"><label htmlFor="campaignTerm">CampaignTerm (Optional)</label><input name="text" id="campaignTerm" placeholder="Add Paid Keywords" type="text" className="form-control" /></div>
                                <div className="position-relative form-group"><label htmlFor="campaignContent">Campaign Content</label><input name="campaignContent" id="campaignContent" placeholder="Girl with Laptop Image Ad, Image3, Banner5" type="text" className="form-control" /></div>

                                <button className="mt-1 btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="main-card mb-3 card">
                        <div className="card-body"><h5 className="card-title">Link Preview</h5>
                        <div className="row mb-3">
                            <div className="col-md-4">
                                <img src="https://fossil.scene7.com/is/image/FossilPartners/ZB7314745_main?$sfcc_fos_large$" className="img-fluid"/>
                            </div>
                            <div className="col-md-4 d-flex align-items-center">
                                <h6>Converse Sneakers</h6>
                            </div>
                        </div>
                        <div className="position-relative form-group"><label htmlFor="campaignContent">Campaign Content</label><textarea name="linkPreview" id="linkPreview" placeholder="" disabled type="text" className="form-control"></textarea></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}