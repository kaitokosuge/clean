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
        $url = $request->url;
        $client = new \GuzzleHttp\Client();
        $response = $client->request('GET', $url);
        $crawler = new Crawler($response->getBody()->getContents());
        $ogpTitleEl = $crawler->filter('meta[property="og:title"]');
        if ($ogpTitleEl->count() > 0) {
            $ogpTitle = $crawler->filter('meta[property="og:title"]')->attr('content');
        } else {
            $ogpTitle = $crawler->filter('title')->text();
        }

        $ogpImageEl = $crawler->filter('meta[property="og:image"]');
        if ($ogpImageEl->count() > 0) {
            $ogpImage = $crawler->filter('meta[property="og:image"]')->attr('content');
        } else {
            $ogpImage = null;
        }

        $ogpDescriptionEl = $crawler->filter('meta[property="og:description"]');
        if ($ogpDescriptionEl->count() > 0) {
            $ogpDescription = $crawler->filter('meta[property="og:description"]')->attr('content');
        } else {
            $ogpDescription = null;
        }

        $ogpAuthorEl = $crawler->filter('meta[property="og:site_name"]');
        if ($ogpAuthorEl->count() > 0) {
            $ogpAuthor = $crawler->filter('meta[property="og:site_name"]')->attr('content');
        } else {
            $ogpAuthor = null;
        }
        $article->title = $ogpTitle;
        $article->image = $ogpImage;
        $article->description = $ogpDescription;
        $article->site_name = $ogpAuthor;
        $article->url = $url;
        $article->user_id = \Auth::id();
        $article->save();

        $folders = $request->folder;
        foreach ($folders as $folder) {
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
