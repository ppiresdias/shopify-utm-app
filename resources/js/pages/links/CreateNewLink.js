import React from "react"
import {TitleBar, useRoutePropagation, ResourcePicker} from '@shopify/app-bridge-react';
import { useLocation } from "react-router-dom";

export default function CreateNewLink(){
    let location = useLocation()
    console.log(location)
    useRoutePropagation(location)

    return(
        <>
         <TitleBar title="Create New Link" />
         <ResourcePicker resourceType="Product" open={true} onSelection={(product) => {
             console.log(product)
         }}/>
            <div className="app-page-title">
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
                        <button type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="btn-shadow btn btn-info">
                            <span className="btn-icon-wrapper pr-2 opacity-7">
                            <i className="fa fa-business-time fa-w-20" />
                            </span>
                            Save
                        </button>
                        </div>
                    </div>    
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="main-card mb-3 card">
                        <div className="card-body"><h5 className="card-title">Controls Types</h5>
                            <form className>
                                <div className="position-relative form-group"><label htmlFor="exampleEmail" className>Email</label><input name="email" id="exampleEmail" placeholder="with a placeholder" type="email" className="form-control" /></div>
                                <div className="position-relative form-group"><label htmlFor="examplePassword" className>Password</label><input name="password" id="examplePassword" placeholder="password placeholder" type="password" className="form-control" /></div>
                                <div className="position-relative form-group"><label htmlFor="exampleSelect" className>Select</label><select name="select" id="exampleSelect" className="form-control">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select></div>
                                <div className="position-relative form-group"><label htmlFor="exampleSelectMulti" className>Select Multiple</label><select multiple name="selectMulti" id="exampleSelectMulti" className="form-control">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select></div>
                                <div className="position-relative form-group"><label htmlFor="exampleText" className>Text Area</label><textarea name="text" id="exampleText" className="form-control" defaultValue={""} /></div>
                                <div className="position-relative form-group"><label htmlFor="exampleFile" className>File</label><input name="file" id="exampleFile" type="file" className="form-control-file" />
                                <small className="form-text text-muted">This is some placeholder block-level help text for the above input. It's a bit lighter and easily wraps to a new line.</small>
                                </div>
                                <button className="mt-1 btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}