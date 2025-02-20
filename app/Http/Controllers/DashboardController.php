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

    public function graphql(Request $request){
        $shop = Auth::user();

        $request = $shop->api()->graph(
            $request->input('query')
        );
        //dd($request['body']);
        return json_encode($request['body']['data']['product']);
    }
}
