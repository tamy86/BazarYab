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
        try {

            $businessNoCustomer = Businessnocustomer::all('no_customer', 'id');

            return response()->json($businessNoCustomer);

        }catch (\Exception $exception) {
            if ($exception) {
                return response()->json([
                    'message' => '1301 خطا در ارتباط با سرور یا داده وروودی لطفا با پشتیبانی تماس بگیرید',
                    'message_type' => 'error',
                ], 500);
            }
        }
    }


    public function listMonths()
    {
        try {

            $businessMonths = Businessnomonth::all('month', 'id');

            return response()->json($businessMonths);

        }
        catch (\Exception $exception){
            if($exception){
                return response()->json([
                    'message' => '1302 خطا در ارتباط با سرور یا داده وروودی لطفا با پشتیبانی تماس بگیرید',
                    'message_type' => 'error',
                ], 500);

            }
        }

    }

    public function listPercents()
    {
        try {


            $businessPercents = Businesspercent::all('percent', 'id');

            return response()->json($businessPercents);

        }
        catch (\Exception $exception) {
            if ($exception) {

                return response()->json([
                    'message' => '1303 خطا در ارتباط با سرور یا داده وروودی لطفا با پشتیبانی تماس بگیرید',
                    'message_type' => 'error',
                ], 500);

            }
        }
    }
}
