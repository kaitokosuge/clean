<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Article;
use App\Models\Folder;
use Symfony\Component\DomCrawler\Crawler;


class ArticleController extends Controller
{
    public function store(Request $request, Article $article)
    {
        // $article->url = $request->url;
        // $article->folder_id = $request->key;
        // $article->title = $request->title;
        // $article->image = $request->image;
        // $article->description = $request->description;
        // // dd($url);
        // $client = new Client();
        // $crawler = $client->request('GET', $url);
        // $ogpTitle = $crawler->filter('meta[property="og:title"]')->count() > 0
        //     ? $crawler->filter('meta[property="og:title"]')->attr('content') : $crawler->filter('title')->text();
        // $ogpImage = $crawler->filter('meta[property="og:image"]')->count() > 0
        //     ? $crawler->filter('meta[property="og:image"]')->attr("content") : '';

        // $ogpDescription = $crawler->filter('meta[property="og:description"]')->count() > 0
        //     ? $crawler->filter('meta[property="og:description"]')->attr("content") : 'no desc';

        $url = $request->url;
        $client = new \GuzzleHttp\Client();
        $response = $client->request('GET', $url);
        $crawler = new Crawler($response->getBody()->getContents());
        $ogpTitle = $crawler->filter('meta[property="og:title"]')->attr('content');
        $article->title = $ogpTitle;
        // $article->image = $ogpImage;
        // $article->description = $ogpDescription;
        $article->url = $url;
        $article->user_id = \Auth::id();
        $article->save();
    }
}
