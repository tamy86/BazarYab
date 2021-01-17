<?php

namespace App\Http\Controllers\Business;

use App\Http\Controllers\Controller;
use App\Models\Business\Businessnocustomer;
use App\Models\Business\Businessnomonth;
use App\Models\Business\Businesspercent;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class GetAllInfoBusinessSettingsController extends Controller
{
    public function __construct() {
        /*middleware am mitoone comment she kar mikone*/
        $this->middleware('auth:businessusers', ['except' => ['checkVerify', 'getVerify']]);
        Auth::shouldUse('businessusers');
    }




    public function listNoCustomer()
    {
        $businessNoCustomer = Businessnocustomer::all('no_customer','id');

        return response()->json($businessNoCustomer);

    }


    public function listMonths()
    {
        $businessMonths = Businessnomonth::all('month','id');

        return response()->json($businessMonths);

    }

    public function listPercents()
    {
        $businessPercents = Businesspercent::all('percent','id');

        return response()->json($businessPercents);

    }
}
