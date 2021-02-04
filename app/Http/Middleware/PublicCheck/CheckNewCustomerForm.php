<?php

namespace App\Http\Middleware\PublicCheck;

use Closure;
use Illuminate\Http\Request;

class CheckNewCustomerForm
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
       $phone = "/^(09)(12|19|35|36|37|38|39|32|21|22|31|34|13|14|18|17|16|15|11|10|20|90|91|92|93|94|01|02|03|04|05|30|33|)\d{7}$/";
    $charFarsi="/^[ آابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهیئ\s]+$/";
    $numbers="/^[0-9]+$/";

    $customerPhone=$request->input('customerphone');
    $customerName=$request->input('customername');
    $customerFamily=$request->input('customerfamily');
    $presentedId=$request->input('presentedid');
    $presentedPhone=$request->input('presentedphone');

        if ((!(preg_match($phone,$customerPhone)))or(!(preg_match($phone,$presentedPhone)))){

            return response()->json([
                'message'=>' ! فرمت شماره همراه وارد شده صحیح نمی باشد',
                'Success'=>0,
                'message type' =>'warning',
            ],400);
        }
        else
            if((!(preg_match($charFarsi,$customerName)))or(!(preg_match($charFarsi,$customerFamily)))) {

                return response()->json([
                    'message'=>'نام یا نام خانوادگی با فرمت صحیح وارد نشده است (حروف فارسی)',
                    'Success'=>0,
                    'message type' =>'warning',
                ],400);

            }else
                if(!(preg_match($numbers,$presentedId))){

                    return response()->json([
                        'message'=>'اطلاعات مربوط به معرف صحیح نمیباشد',
                        'Success'=>0,
                        'message type' =>'warning',
                    ],400);
                }
                else{

            return $next($request);
        }

    }
}
