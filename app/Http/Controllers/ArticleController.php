<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Article;
use App\Models\Folder;
use Symfony\Component\DomCrawler\Crawler;


class ArticleController extends Controller
{
    public function store(Request $request, Article $article,)
    {
        // dd($request);
        $url = $request->url;
        $client = new \GuzzleHttp\Client();
        $response = $client->request('GET', $url);
        $crawler = new Crawler($response->getBody()->getContents());

        $ogpTitle = $crawler->filter('meta[property="og:title"]')->attr('content');
        // $ogpImage = $crawler->filter('meta[property="og:image"]')->attr('content')->count() > 0
        //     ? $crawler->filter('meta[property="og:image"]')->attr("content") : '';
        $ogpImage = $crawler->filter('meta[property="og:image"]')->attr('content');
        $ogpDescription = $crawler->filter('meta[property="og:description"]')->attr('content');
        $ogpAuthor = $crawler->filter('meta[property="og:site_name"]')->attr('content');



        $article->title = $ogpTitle;
        $article->image = $ogpImage;
        $article->description = $ogpDescription;
        $article->site_name = $ogpAuthor;
        $article->url = $url;
        $article->user_id = \Auth::id();
        $article->save();

        // dd($article->id);
        $folders = $request->folder;
        // dd($folders);
        foreach ($folders as $folder) {
            // dd($folder);
            $article->folders()->attach([
                'folder_key' => $folder,
            ]);
        }
    }

    public function getArticles()
    {
        $user = \Auth::user();
        $articles = $user->articles()->get();
        return response()->json([
            'articles' => $articles,
        ]);
    }
}
