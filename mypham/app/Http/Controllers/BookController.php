<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Book;
class BookController extends Controller
{
    public function index(){
        $book = Book::all();
        return view('Book', compact('books'));
    }
}