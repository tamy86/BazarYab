<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class GetAllInfoUserProfileController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:customerusers', ['except' => ['checkVerify', 'getVerify']]);
        Auth::shouldUse('customerusers');
    }

    public function getToken()
    {

//        $tokenValue=$request->input('token');
//
//         $userPhoneNo=Businessuser::select('phone','token')->where('token', $tokenValue)->get();
//
//         foreach ($userPhoneNo as $datauser)
//         {
//
//             $businessUserPhoneNo=$datauser->phone;
//             $businessToken=$datauser->token;
//
//         }


        try {
            $userToken = auth()->user()->token;

            return response()->json([
                'token' => $userToken

            ]);
        } catch (\Exception $exception) {
            if($exception) {
                return response()->json([
                    'message' => '5101 خطا در ارتباط با سرور یا داده وروودی لطفا با پشتیبانی تماس بگیرید ',
                    'message type' => 'error',
                ], 500);
            }
        }
    }

    public function getPhone()
    {

        try {

            $userPhone = auth()->user()->phone;
            return response()->json([
                'phone' => $userPhone,

            ]);

        } catch (\Exception $exception) {
            if($exception) {
                return response()->json([
                    'message' => '5102 خطا در ارتباط با سرور یا داده وروودی لطفا با پشتیبانی تماس بگیرید ',
                    'message type' => 'error',
                ], 500);
            }
        }


    }

    public function getNameFamily()
    {

        try {

            $userName = auth()->user()->name;
            $userFamily = auth()->user()->family;

            return response()->json([
                'name' => $userName,
                'family' => $userFamily,
            ]);
        }
        catch (\Exception $exception) {
            if($exception) {
                return response()->json([
                    'message' => '5103 خطا در ارتباط با سرور یا داده وروودی لطفا با پشتیبانی تماس بگیرید ',
                    'message type' => 'error',
                ], 500);
            }
        }
    }
}