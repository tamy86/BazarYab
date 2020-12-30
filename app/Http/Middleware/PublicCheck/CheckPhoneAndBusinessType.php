<?php

namespace App\Http\Middleware\PublicCheck;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Auth\Middleware\Authenticate as Middleware;

class CheckPhoneAndBusinessType extends Middleware
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
        $phonevalidaty="/(0|\+98)?([ ]|,|-|[()]){0,2}9[1|2|3|4]([ ]|,|-|[()]){0,2}(?:[0-9]([ ]|,|-|[()]){0,2}){8}/";
        $phone=$request->input('phone');
        $busineeType=$request->input('businessCategoryId');

        if (!(preg_match($phonevalidaty,$phone))){

           return response()->json([
               'message'=>' ! فرمت شماره همراه وارد شده صحیح نمی باشد',
               'Success'=>0,
               'message type' =>'warning',
           ],400);
        }else
            if($busineeType==null) {

            return response()->json([
                'message'=>'لطفا نوع کسب و کار را مشخص نمایید',
                'Success'=>0,
                'message type' =>'warning',
            ],400);
        }else{

            return $next($request);
        }
    }
}
