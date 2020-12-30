<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class DashboardController extends Controller
{
    //
    public function index(){
        return view('home');
    }

    public function graphql(){
        $shop = Auth::user();

        $request = $shop->api()->graph(
            '{
            product(id: "gid://shopify/Product/6130341347523") {
                title
                description
                onlineStoreUrl
            }
          }'
        );
        //dd($request['body']);
        return json_encode($request['body']['data']['product']);
    }
}
