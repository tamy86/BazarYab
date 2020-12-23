<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class InsertUstomerUser extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('customerUsers', function (Blueprint $table) {
            $table->id();
            $table->string('ipaddress')->index();
            $table->string('phone')->index();
            $table->string('verify')->index();
            $table->string('name')->index();
            $table->string('family')->index();
            $table->string('nationlacode')->index();
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
        Schema::dropIfExists('customerUsers');
    }
}
