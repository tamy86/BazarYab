<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Business\RegisterBusinessController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('Home.welcome');
});

Route::get('/user/login', function () {
    return view('User.UserLogin');
});

Route::get('/user/home', function () {
    return view('User.UserHome');
});

Route::get('/user/businessreport', function () {
    return view('User.UserBusinessReport');
});

Route::get('/user/discountsreport', function () {
    return view('User.UserDiscountsReport');
});

Route::get('/user/editprofile', function () {
    return view('User.UserEditProfile');
});



Route::get('/business/login', function () {
    return view('Business.BusinessLogin');
})->name('businesslogin');

Route::get('/business/home', function () {
    return view('Business.BusinessHome');
});

Route::get('/business/newcustomer', function () {
    return view('Business.BusinessNewCustomer');
});

Route::get('/business/settingdiscount', function () {
    return view('Business.BusinessSettingDiscount');
});

Route::get('/business/customerreport', function () {
    return view('Business.BusinessCustomerReport');
});

Route::get('/business/customersearch', function () {
    return view('Business.BusinessCustomerSearch');
});

Route::get('/business/editprofile', function () {
    return view('Business.BusinessEditProfile');
});


