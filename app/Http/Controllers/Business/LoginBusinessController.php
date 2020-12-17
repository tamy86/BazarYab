<?php

namespace App\Http\Controllers\Business;

use App\Http\Controllers\Controller;
use App\Models\Business\Businesscategory;


class LoginBusinessController extends Controller
{
    public function listBusinessCategory()
    {
            $businessCtegory = Businesscategory::all('category_name','id');

            return response()->json($businessCtegory);

    }
}
