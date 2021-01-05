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
            return response()->json([
                'message'=>'مشکل در اتصال به دیتا بیس با پشتیبانی تماس بگیرید ',
                'message type'=>'error',
            ],500);
        }

    }
}
