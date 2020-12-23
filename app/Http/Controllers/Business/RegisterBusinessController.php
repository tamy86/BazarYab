<?php

namespace App\Http\Controllers\Business;

use App\Http\Controllers\Controller;
use App\Models\Business\Businessuser;
use http\Env\Response;
use Illuminate\Http\Request;
use Carbon\Carbon;


class RegisterBusinessController extends Controller
{
    public function getVerify(Request $request){

        $phoneNo=$request->input('phone');
        $businessType=$request->input('businessCategoryId');
        $verifyCode=rand(10000,99999);
        $ipBusiness=$request->ip();

        /**check phone exists and roleid is new or exits if new insert else update**/
        $phoneexist = Businessuser::where('phone', $phoneNo)->exists();

        if($phoneexist===false){
            //insert to DB
            $userBusinessRegister = new Businessuser();
            $userBusinessRegister->bussinesscategoryId=$businessType;
            $userBusinessRegister->verify = $verifyCode;
            $userBusinessRegister->signin = 0;
            $userBusinessRegister->ipaddress =  $ipBusiness;
            $userBusinessRegister->created_at = new \DateTime();
            $userBusinessRegister->updated_at = new \DateTime();
            $userBusinessRegister->phone = $phoneNo;
            $userBusinessRegister->save();

            return response()->json([
                'Success' => 1,
                'message' => 'کد اعتبار سنجی به شماره همراه شما ارسال شد',
                'Status Code' =>http_response_code(),
            ]);

        }else
            if($phoneexist===true){
//            $updatedate = Businessuser::select('updated_at')->where('phone', $phoneNo)->first()->updated_at;
            $businessData=Businessuser::select('bussinesscategoryId','updated_at')->where('phone', $phoneNo)->get();

                foreach ($businessData as $data)
                {

                    $businesstypeUser=$data->bussinesscategoryId;
                    $updatedate=$data->updated_at;

                }

            $now = Carbon::now();

            $differentMin = $updatedate->diffInMinutes($now);

            if($businesstypeUser != $businessType){
                return response()->json([
                    'Success' => 0,
                    'message' => 'شما کسب کار خود را به درستی انتخاب نکرده اید یا در صورت تغییر کسب و کار با شماره همراه جدید ثبت نام نمایید',
                    'Status Code' =>http_response_code(),
                ]);
            }
            else

            if ($differentMin > 3) {

                Businessuser::where('phone', $phoneNo)->update(['verify' => $verifyCode]);

                return response()->json([
                    'Success' => 1,
                    'message' => 'کد اعتبار سنجی مجددا به شماره همراه شما ارسال شد',
                    'Status Code' =>http_response_code(),

                ]);

            }
            else{
                return response()->json([
                    'Success' => 0,
                    'message' => 'به دلیل درخواست متعدد پس از 3 دقیقه مجدد تلاش نمایید',
                    'Status Code' =>http_response_code(),
                ]);
            }
        }else{

                return response()->json([
                    'Success' => 2,
                    'message' => 'خطا در ارتباط با دیتا بیس لطفا با پشتیبانی تماس بگیرید',
                    'Status Code' =>http_response_code(),
                ]);

            }

    }
}
