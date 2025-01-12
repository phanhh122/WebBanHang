<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Http\Services\Menu\MenuService;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        $menuService = new MenuService();
        // Lấy danh sách menu bằng MenuService
        $menus = $menuService->getAll();

        // Chia sẻ biến $menus cho tất cả các view
        view()->share('menus', $menus);
    }
}

