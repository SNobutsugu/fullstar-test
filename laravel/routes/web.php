<?php

use Illuminate\Support\Facades\Route;

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
    return view('welcome');
});
Route::get('/react', function () {
    return view('react');
});
Route::get('/vue', function () {
    return view('vue');
});
Route::get('/vue/{any}', function () {
    // さっき作成した「app.blade.php」から拡張子を除いた「app」をviewに記載
    return view('vue');
})->where('any', '.*');
