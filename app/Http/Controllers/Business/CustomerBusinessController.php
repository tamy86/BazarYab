<?php

namespace App\Http\Controllers\Business;

use App\Http\Controllers\Controller;
use http\Env\Response;
use Illuminate\Http\Request;
use App\Models\Business\Businessnewcustomer;

class CustomerBusinessController extends Controller
{

    public function getBusinessUserId(){
        try{

            $businessUserId=auth()->user()->id;

            return response()->json([
                 'bussiness_user_id'=>$businessUserId,
            ]);

        }catch (\Exception $exception){

            return response()->json([
                'message'=>'مشکل در اتصال به دیتا بیس با پشتیبانی تماس بگیرید ',
                'message type'=>'error',
            ],500);

        }
    }


    public function searchPresented(Request $request){
        $presentedPhone=$request->input('presentedphone');
        $businessUserId=$request->input('businessuserid');




            $presentedExist = Businessnewcustomer::where('phone', $presentedPhone)->where('businessUserId', $businessUserId)->exists();

            if ($presentedExist) {
                $presentedId = Businessnewcustomer::select('id')->where('phone', $presentedPhone)->where('businessUserId', $businessUserId);

                return response()->json([
                    'presented_id' => $presentedId,
                    'business_user_id' => $businessUserId,
                    'message' => 'شماره همراه وارد شده جزو مشتریان این کسب و کار میباشد',
                    'message_type' => 'success',
                    'Success' => 1,
                ], 200);


            } else
                if($presentedExist==false){
                return response()->json([
                    'presented_id' => null,
                    'business_user_id' => $businessUserId,
                    'message' => 'شماره همراه وارد شده جزو مشتریان این کسب و کار نمیباشد',
                    'message_type' => 'warning',
                    'Success' => 2,
                ], 200);
            }
            else{
                return response()->json([
                    'message' => '1001 خطا در ارتباط با سرور دیتا بیس لطفا با پشتیبانی تماس بگیرید',
                    'message_type' => 'error',
                ], 500);
            }




    }


    public function newCustomer(Request $request){


    }



    public function searchCustomer(Request $request){

       $customerPhone= $request->input('customerphone');

    }
}
