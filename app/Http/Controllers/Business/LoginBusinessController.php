<?php

namespace App\Http\Controllers\Business;

use App\Http\Controllers\Controller;
use App\Models\Business\Businesscategory;


class LoginBusinessController extends Controller
{
    public function listBusinessCategory()
    {
        try {
            $businessCtegory = Businesscategory::all('category_name', 'id');
            return response()->json($businessCtegory);
        }catch (\Exception $exception)
        {
            if($exception) {
                return response()->json([
                    'message' => '1401 خطا در ارتباط با سرور یا داده وروودی لطفا با پشتیبانی تماس بگیرید ',
                    'message type' => 'error',
                ], 500);
            }
        }

    }
}
