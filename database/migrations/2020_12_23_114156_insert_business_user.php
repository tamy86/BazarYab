<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class InsertBusinessUser extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('businessUsers', function (Blueprint $table) {
            $table->id();
            $table->integer('bussinesscategoryId')->unsigned()->index();
            $table->foreign('bussinesscategoryId')->references('id')->on('businesscategories');
            $table->string('ipaddress')->index();
            $table->string('phone')->index();
            $table->string('verify')->index();
            $table->string('name')->index();
            $table->string('family')->index();
            $table->string('address')->index();
            $table->string('cartno')->index();
            $table->boolean('signin')->index();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('businessUsers');
    }
}
