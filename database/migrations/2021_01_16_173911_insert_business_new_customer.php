<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class InsertBusinessNewCustomer extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('businessnewcustomers', function (Blueprint $table) {
            $table->id()->autoIncrement()->index();
            $table->integer('businessUserId')->unsigned()->index();
            $table->foreign('businessUserId')->references('id')->on('businessusers');
            $table->integer('presentedId')->index();
            $table->string('phone')->index();
            $table->string('name')->index();
            $table->string('family')->index();
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
        Schema::dropIfExists('businessnewcustomers');
    }
}
