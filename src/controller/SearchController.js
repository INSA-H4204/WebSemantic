var myApp = angular.module('myApp',[]);
myApp.config(['$httpProvider', function($httpProvider) {
        // $httpProvider.defaults.useXDomain = true;
        // delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }
]);




myApp.controller('SearchController', ['$scope','GoogleCustomSearch','AlchemyApi','DBPediaSpotlightApi','Relaxation','Similarity','$http', function($scope,GoogleCustomSearch,AlchemyApi,DBPediaSpotlightApi,Relaxation,Similarity,$http) {
  	
  	/*
  	*Called when click on submit button 
  	*/
	$scope.callRequest = function() {

		alert("yeah");
		// 1 : Call Google Custom Search Service
	 var urls = GoogleCustomSearch.call($scope.request);
   	 console.log(urls);
		//var urls = GoogleApiService($scope.request); //
		//console.log(urls);
		//To use for AlchemiApi test
		//var urls = ["http://www.allocine.fr/film/fichefilm_gen_cfilm=218759.html","http://www.allocine.fr/video/player_gen_cmedia=19547921&cfilm=218759.html","http://www.allocine.fr/video/player_gen_cmedia=19547922&cfilm=218759.html","http://www.allocine.fr/film/fichefilm-218759/casting/","http://www.allocine.fr/film/fichefilm-218759/critiques/spectateurs/","http://www.allocine.fr/film/fichefilm_gen_cfilm=215747.html","http://www.allocine.fr/video/player_gen_cmedia=19541021&cfilm=215747.html","http://www.allocine.fr/film/fichefilm-218759/soundtrack/","http://www.allocine.fr/film/fichefilm_gen_cfilm=125054.html","http://www.allocine.fr/video/player_gen_cmedia=19547109&cfilm=125054.html"]
		
	  //2 : Call AlchemyAPI service
		AlchemyApi.call(urls);

		//Variable d'exemple
		var texts = [
			
{				url : "url1",
				text :  "La Kabylie est une région historique et ethnolinguistique située dans le nord de l'Algérie, à l'est d'Alger."
			},
			{
				url : "url2",
				text :  "Terre de montagnes densément peuplées, elle est entourée de plaines littorales à l'ouest et à l'est, au nord par"
			}
		];

		//3 : Call to DBPedia SportLight API
		//$scope.dbpedia = DBPediaSpotlightApi.call(texts);
		//4 : Service D'enrichissement des graphes
		//Relaxation.call();
		//5 : Construction du graphe de similarité
		//Similarity.call();
	}	

	
}]);



//Exemple of what google api service returns : var urlList = ["http://www.allocine.fr/film/fichefilm_gen_cfilm=218759.html","http://www.allocine.fr/video/player_gen_cmedia=19547921&cfilm=218759.html","http://www.allocine.fr/video/player_gen_cmedia=19547922&cfilm=218759.html","http://www.allocine.fr/film/fichefilm-218759/casting/","http://www.allocine.fr/film/fichefilm-218759/critiques/spectateurs/","http://www.allocine.fr/film/fichefilm_gen_cfilm=215747.html","http://www.allocine.fr/video/player_gen_cmedia=19541021&cfilm=215747.html","http://www.allocine.fr/film/fichefilm-218759/soundtrack/","http://www.allocine.fr/film/fichefilm_gen_cfilm=125054.html","http://www.allocine.fr/video/player_gen_cmedia=19547109&cfilm=125054.html"]





//Exemple de réponse pour une requete sur le film Fury avec uniquement comme base de recherche allocine.fr

/*
{
 "kind": "customsearch#search",
 "url": {
  "type": "application/json",
  "template": "https://www.googleapis.com/customsearch/v1?q={searchTerms}&num={count?}&start={startIndex?}&lr={language?}&safe={safe?}&cx={cx?}&cref={cref?}&sort={sort?}&filter={filter?}&gl={gl?}&cr={cr?}&googlehost={googleHost?}&c2coff={disableCnTwTranslation?}&hq={hq?}&hl={hl?}&siteSearch={siteSearch?}&siteSearchFilter={siteSearchFilter?}&exactTerms={exactTerms?}&excludeTerms={excludeTerms?}&linkSite={linkSite?}&orTerms={orTerms?}&relatedSite={relatedSite?}&dateRestrict={dateRestrict?}&lowRange={lowRange?}&highRange={highRange?}&searchType={searchType}&fileType={fileType?}&rights={rights?}&imgSize={imgSize?}&imgType={imgType?}&imgColorType={imgColorType?}&imgDominantColor={imgDominantColor?}&alt=json"
 },
 "queries": {
  "nextPage": [
   {
    "title": "Google Custom Search - Fury",
    "totalResults": "111000",
    "searchTerms": "Fury",
    "count": 10,
    "startIndex": 11,
    "inputEncoding": "utf8",
    "outputEncoding": "utf8",
    "safe": "off",
    "cx": "015582470650529878978:r_urnyzvskc"
   }
  ],
  "request": [
   {
    "title": "Google Custom Search - Fury",
    "totalResults": "111000",
    "searchTerms": "Fury",
    "count": 10,
    "startIndex": 1,
    "inputEncoding": "utf8",
    "outputEncoding": "utf8",
    "safe": "off",
    "cx": "015582470650529878978:r_urnyzvskc"
   }
  ]
 },
 "context": {
  "title": "Custom Search Engine"
 },
 "searchInformation": {
  "searchTime": 0.387077,
  "formattedSearchTime": "0.39",
  "totalResults": "111000",
  "formattedTotalResults": "111,000"
 },
 "items": [
  {
   "kind": "customsearch#result",
   "title": "Fury - film 2014 - AlloCiné",
   "htmlTitle": "\u003cb\u003eFury\u003c/b\u003e - film 2014 - AlloCiné",
   "link": "http://www.allocine.fr/film/fichefilm_gen_cfilm=218759.html",
   "displayLink": "www.allocine.fr",
   "snippet": "Fury est un film de David Ayer avec Brad Pitt, Shia LaBeouf. Synopsis : Avril 1945\n. Les Alliés mènent leur ultime offensive en Europe. À bord d'un tank Sherman, ...",
   "htmlSnippet": "\u003cb\u003eFury\u003c/b\u003e est un film de David Ayer avec Brad Pitt, Shia LaBeouf. Synopsis : Avril 1945\u003cbr\u003e\n. Les Alliés mènent leur ultime offensive en Europe. À bord d&#39;un tank Sherman,&nbsp;...",
   "formattedUrl": "www.allocine.fr/film/fichefilm_gen_cfilm=218759.html",
   "htmlFormattedUrl": "www.allocine.fr/film/fichefilm_gen_cfilm=218759.html",
   "pagemap": {
    "cse_image": [
     {
      "src": "http://fr.web.img5.acsta.net/pictures/14/09/22/16/44/411457.jpg"
     }
    ],
    "person": [
     {
      "url": "David Ayer",
      "name": "David Ayer"
     },
     {
      "url": "Brad Pitt",
      "name": "Brad Pitt"
     },
     {
      "url": "Shia LaBeouf",
      "name": "Shia LaBeouf"
     },
     {
      "url": "Logan Lerman",
      "name": "Logan Lerman"
     }
    ],
    "cse_thumbnail": [
     {
      "width": "194",
      "height": "259",
      "src": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcShnsYbPsKHzYbqyTs-3teYzWTjZ0gU7BAe3urdZUJvRR9N8OW_FU3mvICS"
     }
    ],
    "aggregaterating": [
     {
      "ratingvalue": "4.2",
      "ratingcount": "2 939",
      "reviewcount": "519",
      "bestrating": "5"
     }
    ],
    "movie": [
     {
      "name": "Fury",
      "image": "http://fr.web.img3.acsta.net/r_160_240/b_1_d6d6d6/pictures/14/09/22/16/44/411457.jpg",
      "datepublished": "2014-10-22",
      "duration": "PT2H14M",
      "genre": "Guerre",
      "trailer": "Voir la bande-annonce",
      "description": "Avril 1945. Les Alliés mènent leur ultime offensive en Europe. À bord d’un tank Sherman, le sergent Wardaddy et ses quatre hommes s’engagent dans une mission à très haut risque bien...",
      "productioncompany": "Sony Pictures Releasing France"
     }
    ],
    "rating": [
     {
      "ratingvalue": "4.5",
      "bestrating": "5"
     }
    ],
    "metatags": [
     {
      "viewport": "width=device-width, initial-scale=1.0",
      "og:site_name": "AlloCiné",
      "og:title": "Fury",
      "og:description": "Fury est un film de David Ayer avec Brad Pitt, Shia LaBeouf. Synopsis : Avril 1945. Les Alliés mènent leur ultime offensive en Europe. À bord d’un tank Sherman, le sergent Wardaddy et ses quatre hommes s’engagent dans une",
      "og:image": "http://fr.web.img5.acsta.net/pictures/14/09/22/16/44/411457.jpg",
      "og:type": "video.movie",
      "fb:app_id": "99197768694",
      "twitter:card": "photo",
      "twitter:site": "@allocine",
      "twitter:title": "Fury - film 2014 - AlloCiné",
      "twitter:description": "Fury est un film de David Ayer avec Brad Pitt, Shia LaBeouf. Synopsis : Avril 1945. Les Alliés mènent leur ultime offensive en Europe. À bord d’un tank Sherman, le sergent Wardaddy et ses quatre ho...",
      "twitter:image:src": "http://fr.web.img5.acsta.net/pictures/14/09/22/16/44/411457.jpg",
      "twitter:app:name:iphone": "allocine",
      "twitter:app:name:ipad": "allocine",
      "twitter:app:name:googleplay": "allocine",
      "twitter:app:url:iphone": "allocine://open/movie?code=218759",
      "twitter:app:url:ipad": "allocine://open/movie?code=218759",
      "twitter:app:url:googleplay": "allocine://open/movie?code=218759",
      "twitter:app:id:iphone": "351184863",
      "twitter:app:id:ipad": "351184863",
      "twitter:app:id:googleplay": "com.allocine.androidapp",
      "msapplication-tooltip": "AlloCiné, le site de référence du cinéma et des séries tv !",
      "msapplication-task": "name=Accueil;action-uri=http://www.allocine.fr/;icon-uri=http://fr.web.img1.acsta.net/commons/ie9ico/favicon.ico",
      "distribution": "global",
      "author": "AlloCine",
      "country": "France",
      "geo.position": "48.87078;2.30447",
      "geo.country": "FR",
      "icbm": "48.87078;2.30447"
     }
    ],
    "moviereview": [
     {
      "ratingstars": "4.0",
      "best": "5",
      "originalrating": "4.2",
      "votes": "2 939",
      "ratingcount": "519",
      "image_href": "http://fr.web.img3.acsta.net/r_160_240/b_1_d6d6d6/pictures/14/09/22/16/44/411457.jpg",
      "name": "Fury",
      "release_date": "2014-10-22",
      "release_year": "2014",
      "runtime": "PT2H14M",
      "genre": "Guerre/Drame",
      "directed_by": "David Ayer",
      "starring": "Brad Pitt, Shia LaBeouf, Logan Lerman",
      "summary": "Avril 1945. Les Alliés mènent leur ultime offensive en Europe. À bord d’un tank Sherman, le sergent Wardaddy et ses quatre hommes s’engagent dans..."
     }
    ],
    "review": [
     {
      "datepublished": "2014-11-03",
      "description": "\"Fury\" produit un effet et même un choc impressionnant, autant le dire de suite et sans ambages... On est en effet d'emblée complètement immergés dans cette fin de guerre, du reste assez..."
     }
    ]
   }
  },
  {
   "kind": "customsearch#result",
   "title": "Bande-annonce Fury - Fury Bande-annonce VO - AlloCiné",
   "htmlTitle": "Bande-annonce \u003cb\u003eFury\u003c/b\u003e - \u003cb\u003eFury\u003c/b\u003e Bande-annonce VO - AlloCiné",
   "link": "http://www.allocine.fr/video/player_gen_cmedia=19547921&cfilm=218759.html",
   "displayLink": "www.allocine.fr",
   "snippet": "10 sept. 2014 ... Bande-annonce Fury - Fury, un film de David Ayer avec Brad Pitt, Shia LaBeouf.",
   "htmlSnippet": "10 sept. 2014 \u003cb\u003e...\u003c/b\u003e Bande-annonce \u003cb\u003eFury\u003c/b\u003e - \u003cb\u003eFury\u003c/b\u003e, un film de David Ayer avec Brad Pitt, Shia LaBeouf.",
   "formattedUrl": "www.allocine.fr/video/player_gen_cmedia=19547921&cfilm=218759.html",
   "htmlFormattedUrl": "www.allocine.fr/video/player_gen_cmedia=19547921&amp;cfilm=218759.html",
   "pagemap": {
    "cse_image": [
     {
      "src": "http://fr.web.img3.acsta.net/videothumbnails/14/09/10/12/27/437687.jpg"
     }
    ],
    "videoobject": [
     {
      "name": "Fury Bande-annonce VO",
      "duration": "PT2M1S",
      "thumbnail": "http://fr.web.img6.acsta.net/c_120_160/o_play.png_5_se/pictures/14/09/22/16/44/411457.jpg",
      "embedurl": "http://www.allocine.fr/blogvision/19547921",
      "width": "640",
      "height": "390",
      "playertype": "Flash",
      "uploaddate": "2014-09-10"
     }
    ],
    "cse_thumbnail": [
     {
      "width": "300",
      "height": "168",
      "src": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTM-0eCfWCSLF_EZHjIcp0uvetdoTLDxerPY-nFa-E4o4K03THFXfTNMPs"
     }
    ],
    "aggregaterating": [
     {
      "ratingvalue": "4.2",
      "ratingcount": "2939",
      "bestrating": "5"
     }
    ],
    "movie": [
     {
      "url": "http://www.allocine.fr/film/fichefilm_gen_cfilm=218759.html",
      "name": "Fury Bande-annonce VO"
     }
    ],
    "metatags": [
     {
      "viewport": "width=device-width, initial-scale=1.0",
      "og:site_name": "AlloCiné",
      "og:title": "Fury Bande-annonce VO",
      "og:description": "Bande-annonce Fury - Fury, un film de David Ayer avec Brad Pitt, Shia LaBeouf.",
      "og:image": "http://fr.web.img3.acsta.net/videothumbnails/14/09/10/12/27/437687.jpg",
      "og:type": "video.movie",
      "fb:app_id": "99197768694",
      "og:video": "http://www.allocine.fr/blogvision/19547921",
      "og:video:secure_url": "https://splayer.allocine.fr/sblogvision/19547921",
      "og:video:height": "260",
      "og:video:width": "398",
      "og:video:type": "application/x-shockwave-flash",
      "twitter:card": "player",
      "twitter:url": "http://www.allocine.fr/blogvision/19547921",
      "twitter:player": "https://splayer.allocine.fr/sblogvision/19547921",
      "twitter:player:width": "398",
      "twitter:player:height": "260",
      "twitter:site": "@allocine",
      "twitter:title": "Bande-annonce Fury - \u003cstrong\u003eFury\u003c/strong\u003e Bande-annonce VO - AlloCiné",
      "twitter:description": "Bande-annonce Fury - Fury, un film de David Ayer avec Brad Pitt, Shia LaBeouf.",
      "twitter:image:src": "http://fr.web.img1.acsta.net/c_398_260/videothumbnails/14/09/10/12/27/437687.jpg",
      "twitter:app:name:iphone": "allocine",
      "twitter:app:name:ipad": "allocine",
      "twitter:app:name:googleplay": "allocine",
      "twitter:app:url:iphone": "allocine://open/video?code=19547921",
      "twitter:app:url:ipad": "allocine://open/video?code=19547921",
      "twitter:app:url:googleplay": "allocine://open/video?code=19547921",
      "twitter:app:id:iphone": "351184863",
      "twitter:app:id:ipad": "351184863",
      "twitter:app:id:googleplay": "com.allocine.androidapp",
      "msapplication-tooltip": "AlloCiné, le site de référence du cinéma et des séries tv !",
      "msapplication-task": "name=Accueil;action-uri=http://www.allocine.fr/;icon-uri=http://fr.web.img1.acsta.net/commons/ie9ico/favicon.ico",
      "distribution": "global",
      "author": "AlloCine",
      "country": "France",
      "geo.position": "48.87078;2.30447",
      "geo.country": "FR",
      "icbm": "48.87078;2.30447",
      "item-title": "Fury Bande-annonce VO",
      "item-image": "http://fr.web.img6.acsta.net/cx_120_96/b_1_d6d6d6/o_overplay.png_5_se/videothumbnails/14/09/10/12/27/437687.jpg",
      "item-views": "509214",
      "item-publish-date": "Wed, 10 Sep 2014 12:25:00 GMT",
      "item-category": "Fury,Guerre,Drame,Historique,2014, MovieNowShowing"
     }
    ]
   }
  },
  {
   "kind": "customsearch#result",
   "title": "Bande-annonce Fury - Fury Bande-annonce VF - AlloCiné",
   "htmlTitle": "Bande-annonce \u003cb\u003eFury\u003c/b\u003e - \u003cb\u003eFury\u003c/b\u003e Bande-annonce VF - AlloCiné",
   "link": "http://www.allocine.fr/video/player_gen_cmedia=19547922&cfilm=218759.html",
   "displayLink": "www.allocine.fr",
   "snippet": "10 sept. 2014 ... Bande-annonce Fury - Fury, un film de David Ayer avec Brad Pitt, Shia LaBeouf.",
   "htmlSnippet": "10 sept. 2014 \u003cb\u003e...\u003c/b\u003e Bande-annonce \u003cb\u003eFury\u003c/b\u003e - \u003cb\u003eFury\u003c/b\u003e, un film de David Ayer avec Brad Pitt, Shia LaBeouf.",
   "formattedUrl": "www.allocine.fr/video/player_gen_cmedia=19547922&cfilm=218759.html",
   "htmlFormattedUrl": "www.allocine.fr/video/player_gen_cmedia=19547922&amp;cfilm=218759.html",
   "pagemap": {
    "cse_image": [
     {
      "src": "http://fr.web.img3.acsta.net/videothumbnails/14/09/10/12/28/124180.jpg"
     }
    ],
    "videoobject": [
     {
      "name": "Fury Bande-annonce VF",
      "duration": "PT2M1S",
      "thumbnail": "http://fr.web.img6.acsta.net/c_120_160/o_play.png_5_se/pictures/14/09/22/16/44/411457.jpg",
      "embedurl": "http://www.allocine.fr/blogvision/19547922",
      "width": "640",
      "height": "390",
      "playertype": "Flash",
      "uploaddate": "2014-09-10"
     }
    ],
    "cse_thumbnail": [
     {
      "width": "300",
      "height": "168",
      "src": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRHuPMqDsPk5PB2ifFrKkh79Jfxqh3ZC97dOelTyUwvg-i0x3kPBL0o2GM"
     }
    ],
    "aggregaterating": [
     {
      "ratingvalue": "4.2",
      "ratingcount": "2929",
      "bestrating": "5"
     }
    ],
    "movie": [
     {
      "url": "http://www.allocine.fr/film/fichefilm_gen_cfilm=218759.html",
      "name": "Fury Bande-annonce VF"
     }
    ],
    "metatags": [
     {
      "viewport": "width=device-width, initial-scale=1.0",
      "og:site_name": "AlloCiné",
      "og:title": "Fury Bande-annonce VF",
      "og:description": "Bande-annonce Fury - Fury, un film de David Ayer avec Brad Pitt, Shia LaBeouf.",
      "og:image": "http://fr.web.img3.acsta.net/videothumbnails/14/09/10/12/28/124180.jpg",
      "og:type": "video.movie",
      "fb:app_id": "99197768694",
      "og:video": "http://www.allocine.fr/blogvision/19547922",
      "og:video:secure_url": "https://splayer.allocine.fr/sblogvision/19547922",
      "og:video:height": "260",
      "og:video:width": "398",
      "og:video:type": "application/x-shockwave-flash",
      "twitter:card": "player",
      "twitter:url": "http://www.allocine.fr/blogvision/19547922",
      "twitter:player": "https://splayer.allocine.fr/sblogvision/19547922",
      "twitter:player:width": "398",
      "twitter:player:height": "260",
      "twitter:site": "@allocine",
      "twitter:title": "Bande-annonce Fury - \u003cstrong\u003eFury\u003c/strong\u003e Bande-annonce VF - AlloCiné",
      "twitter:description": "Bande-annonce Fury - Fury, un film de David Ayer avec Brad Pitt, Shia LaBeouf.",
      "twitter:image:src": "http://fr.web.img1.acsta.net/c_398_260/videothumbnails/14/09/10/12/28/124180.jpg",
      "twitter:app:name:iphone": "allocine",
      "twitter:app:name:ipad": "allocine",
      "twitter:app:name:googleplay": "allocine",
      "twitter:app:url:iphone": "allocine://open/video?code=19547922",
      "twitter:app:url:ipad": "allocine://open/video?code=19547922",
      "twitter:app:url:googleplay": "allocine://open/video?code=19547922",
      "twitter:app:id:iphone": "351184863",
      "twitter:app:id:ipad": "351184863",
      "twitter:app:id:googleplay": "com.allocine.androidapp",
      "msapplication-tooltip": "AlloCiné, le site de référence du cinéma et des séries tv !",
      "msapplication-task": "name=Accueil;action-uri=http://www.allocine.fr/;icon-uri=http://fr.web.img1.acsta.net/commons/ie9ico/favicon.ico",
      "distribution": "global",
      "author": "AlloCine",
      "country": "France",
      "geo.position": "48.87078;2.30447",
      "geo.country": "FR",
      "icbm": "48.87078;2.30447",
      "item-title": "Fury Bande-annonce VF",
      "item-image": "http://fr.web.img6.acsta.net/cx_120_96/b_1_d6d6d6/o_overplay.png_5_se/videothumbnails/14/09/10/12/28/124180.jpg",
      "item-views": "197027",
      "item-publish-date": "Wed, 10 Sep 2014 12:26:00 GMT",
      "item-category": "Fury,Guerre,Drame,Historique,2014, MovieNowShowing"
     }
    ]
   }
  },
  {
   "kind": "customsearch#result",
   "title": "Casting Fury : réalisateurs, acteurs - AlloCiné",
   "htmlTitle": "Casting \u003cb\u003eFury\u003c/b\u003e : réalisateurs, acteurs - AlloCiné",
   "link": "http://www.allocine.fr/film/fichefilm-218759/casting/",
   "displayLink": "www.allocine.fr",
   "snippet": "Casting complet du film Fury - Réalisateur : David Ayer. Casting : Brad Pitt, Shia \nLaBeouf. Production :",
   "htmlSnippet": "Casting complet du film \u003cb\u003eFury\u003c/b\u003e - Réalisateur : David Ayer. Casting : Brad Pitt, Shia \u003cbr\u003e\nLaBeouf. Production :",
   "formattedUrl": "www.allocine.fr/film/fichefilm-218759/casting/",
   "htmlFormattedUrl": "www.allocine.fr/film/fichefilm-218759/casting/",
   "pagemap": {
    "cse_image": [
     {
      "src": "http://fr.web.img5.acsta.net/pictures/14/09/22/16/44/411457.jpg"
     }
    ],
    "person": [
     {
      "url": "David Ayer",
      "name": "David Ayer"
     },
     {
      "url": "Xavier Samuel",
      "name": "Xavier Samuel"
     },
     {
      "url": "Anamaria Marinca",
      "name": "Anamaria Marinca"
     },
     {
      "url": "Alicia von Rittberg",
      "name": "Alicia von Rittberg"
     },
     {
      "url": "Scott Eastwood",
      "name": "Scott Eastwood"
     },
     {
      "url": "Daniel Betts",
      "name": "Daniel Betts"
     },
     {
      "url": "John MacMillan",
      "name": "John MacMillan"
     },
     {
      "url": "Jake Curran",
      "name": "Jake Curran"
     },
     {
      "url": "Jack Bannon",
      "name": "Jack Bannon"
     },
     {
      "url": "Branko Tomovic",
      "name": "Branko Tomovic"
     },
     {
      "url": "Christian Contreras",
      "name": "Christian Contreras"
     },
     {
      "url": "Christopher Maleki",
      "name": "Christopher Maleki"
     },
     {
      "url": "James Garson Chick",
      "name": "James Garson Chick"
     }
    ],
    "cse_thumbnail": [
     {
      "width": "194",
      "height": "259",
      "src": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcShnsYbPsKHzYbqyTs-3teYzWTjZ0gU7BAe3urdZUJvRR9N8OW_FU3mvICS"
     }
    ],
    "movie": [
     {
      "name": "Fury"
     }
    ],
    "metatags": [
     {
      "viewport": "width=device-width, initial-scale=1.0",
      "og:site_name": "AlloCiné",
      "og:title": "Casting Fury",
      "og:description": "Casting complet du film Fury - Réalisateur : David Ayer. Casting : Brad Pitt, Shia LaBeouf. Production :",
      "og:image": "http://fr.web.img5.acsta.net/pictures/14/09/22/16/44/411457.jpg",
      "og:type": "video.movie",
      "fb:app_id": "99197768694",
      "twitter:card": "photo",
      "twitter:site": "@allocine",
      "twitter:title": "Casting Fury : réalisateurs, acteurs - AlloCiné",
      "twitter:description": "Casting complet du film Fury - Réalisateur : David Ayer. Casting : Brad Pitt, Shia LaBeouf. Production :",
      "twitter:image:src": "http://fr.web.img5.acsta.net/pictures/14/09/22/16/44/411457.jpg",
      "twitter:app:name:iphone": "allocine",
      "twitter:app:name:ipad": "allocine",
      "twitter:app:name:googleplay": "allocine",
      "twitter:app:url:iphone": "allocine://open/movie?code=218759",
      "twitter:app:url:ipad": "allocine://open/movie?code=218759",
      "twitter:app:url:googleplay": "allocine://open/movie?code=218759",
      "twitter:app:id:iphone": "351184863",
      "twitter:app:id:ipad": "351184863",
      "twitter:app:id:googleplay": "com.allocine.androidapp",
      "msapplication-tooltip": "AlloCiné, le site de référence du cinéma et des séries tv !",
      "msapplication-task": "name=Accueil;action-uri=http://www.allocine.fr/;icon-uri=http://fr.web.img1.acsta.net/commons/ie9ico/favicon.ico",
      "distribution": "global",
      "author": "AlloCine",
      "country": "France",
      "geo.position": "48.87078;2.30447",
      "geo.country": "FR",
      "icbm": "48.87078;2.30447"
     }
    ],
    "moviereview": [
     {
      "name": "Fury",
      "directed_by": "David Ayer",
      "starring": "Xavier Samuel, Anamaria Marinca, Alicia von Rittberg"
     }
    ]
   }
  },
  {
   "kind": "customsearch#result",
   "title": "Critique du film Fury - AlloCiné",
   "htmlTitle": "Critique du film \u003cb\u003eFury\u003c/b\u003e - AlloCiné",
   "link": "http://www.allocine.fr/film/fichefilm-218759/critiques/spectateurs/",
   "displayLink": "www.allocine.fr",
   "snippet": "Retrouvez toutes les critiques pour le film Fury, réalisé par David Ayer avec Brad \nPitt, Shia LaBeouf.",
   "htmlSnippet": "Retrouvez toutes les critiques pour le film \u003cb\u003eFury\u003c/b\u003e, réalisé par David Ayer avec Brad \u003cbr\u003e\nPitt, Shia LaBeouf.",
   "formattedUrl": "www.allocine.fr/film/fichefilm-218759/critiques/spectateurs/",
   "htmlFormattedUrl": "www.allocine.fr/film/fichefilm-218759/critiques/spectateurs/",
   "pagemap": {
    "cse_image": [
     {
      "src": "http://fr.web.img5.acsta.net/pictures/14/09/22/16/44/411457.jpg"
     }
    ],
    "cse_thumbnail": [
     {
      "width": "194",
      "height": "259",
      "src": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcShnsYbPsKHzYbqyTs-3teYzWTjZ0gU7BAe3urdZUJvRR9N8OW_FU3mvICS"
     }
    ],
    "aggregaterating": [
     {
      "ratingvalue": "4.2",
      "ratingcount": "2 929",
      "reviewcount": "519",
      "bestrating": "5"
     }
    ],
    "movie": [
     {
      "name": "Fury"
     }
    ],
    "rating": [
     {
      "ratingvalue": "4.5",
      "bestrating": "5"
     },
     {
      "ratingvalue": "2",
      "bestrating": "5"
     },
     {
      "ratingvalue": "4.5",
      "bestrating": "5"
     },
     {
      "ratingvalue": "3",
      "bestrating": "5"
     },
     {
      "ratingvalue": "5",
      "bestrating": "5"
     },
     {
      "ratingvalue": "4",
      "bestrating": "5"
     },
     {
      "ratingvalue": "5",
      "bestrating": "5"
     },
     {
      "ratingvalue": "4",
      "bestrating": "5"
     },
     {
      "ratingvalue": "3.5",
      "bestrating": "5"
     },
     {
      "ratingvalue": "4.5",
      "bestrating": "5"
     }
    ],
    "metatags": [
     {
      "viewport": "width=device-width, initial-scale=1.0",
      "og:site_name": "AlloCiné",
      "og:title": "Critiques du film Fury",
      "og:description": "Retrouvez toutes les critiques pour le film Fury, réalisé par David Ayer avec Brad Pitt, Shia LaBeouf",
      "og:image": "http://fr.web.img5.acsta.net/pictures/14/09/22/16/44/411457.jpg",
      "og:type": "video.movie",
      "fb:app_id": "99197768694",
      "twitter:card": "photo",
      "twitter:site": "@allocine",
      "twitter:title": "Critique du film Fury - AlloCiné",
      "twitter:description": "Retrouvez toutes les critiques pour le film Fury, réalisé par David Ayer avec Brad Pitt, Shia LaBeouf",
      "twitter:image:src": "http://fr.web.img5.acsta.net/pictures/14/09/22/16/44/411457.jpg",
      "twitter:app:name:iphone": "allocine",
      "twitter:app:name:ipad": "allocine",
      "twitter:app:name:googleplay": "allocine",
      "twitter:app:url:iphone": "allocine://open/movie?code=218759",
      "twitter:app:url:ipad": "allocine://open/movie?code=218759",
      "twitter:app:url:googleplay": "allocine://open/movie?code=218759",
      "twitter:app:id:iphone": "351184863",
      "twitter:app:id:ipad": "351184863",
      "twitter:app:id:googleplay": "com.allocine.androidapp",
      "msapplication-tooltip": "AlloCiné, le site de référence du cinéma et des séries tv !",
      "msapplication-task": "name=Accueil;action-uri=http://www.allocine.fr/;icon-uri=http://fr.web.img1.acsta.net/commons/ie9ico/favicon.ico",
      "distribution": "global",
      "author": "AlloCine",
      "country": "France",
      "geo.position": "48.87078;2.30447",
      "geo.country": "FR",
      "icbm": "48.87078;2.30447"
     }
    ],
    "moviereview": [
     {
      "ratingstars": "4.0",
      "best": "5",
      "originalrating": "4.2",
      "votes": "2 929",
      "ratingcount": "519",
      "name": "Fury"
     }
    ],
    "review": [
     {
      "interactioncount": "UserInteraction:17",
      "author": "benoitG80",
      "description": "\"Fury\" produit un effet et même un choc impressionnant, autant le dire de suite et sans ambages... On est en effet d'emblée complètement immergés dans cette fin de guerre, du reste assez...",
      "datepublished": "2014-11-03"
     },
     {
      "interactioncount": "UserInteraction:3",
      "author": "Loskof",
      "description": "Mouais... Je sais pas trop quoi en penser, d'un côté j'ai aimé certaines parties, de l'autre il y a pleins de choses qui m'ont empêché de rentrer dans le film... Bon déjà l'idée de...",
      "datepublished": "2014-11-03"
     },
     {
      "interactioncount": "UserInteraction:31",
      "author": "Bi B.",
      "description": "Je suis sorti du cinéma il y a 1 heure à peu près, j'avais beaucoup attendu ce film notamment pour sa direction artistique ainsi que pour les acteurs qui la compose. Très honnêtement,...",
      "datepublished": "2014-10-22"
     },
     {
      "interactioncount": "UserInteraction:4",
      "author": "elbandito",
      "description": "Fin de la seconde guerre mondiale, l’Allemagne recule mais refuse d’abdiquer. Un sergent américain, à la tête d’une section décimée, mène plusieurs missions avec l’équipage de...",
      "datepublished": "2014-10-31"
     },
     {
      "interactioncount": "UserInteraction:7",
      "author": "Florian L.",
      "description": "premiere critique à ce jour, si je viens ici apporter ma contribution à la critique de ce film c' est d'une part grâce à la qualité de ce film et d'autre part au vue des critiques méprisantes...",
      "datepublished": "2014-10-23"
     },
     {
      "interactioncount": "UserInteraction:20",
      "author": "Raptor732",
      "description": "Fury restera t-il aussi longtemps dans les esprits, comme le modèle incontesté, à savoir Il Faut Sauver le Soldat Ryan ? Peut-être pas, faute d'avoir pu lui voler sa couronne. Mais il était...",
      "datepublished": "2014-10-22"
     },
     {
      "interactioncount": "UserInteraction:8",
      "author": "reymi586",
      "description": "Fury est assurément le meilleur film de tank de l'Histoire, étant donné que c'est le seul à ma connaissance ! Plus sérieusement, ce film est tourné sous un angle original et très intéressan...",
      "datepublished": "2014-10-24"
     },
     {
      "interactioncount": "UserInteraction:8",
      "author": "renaudot94",
      "description": "Après l'échec de sabotage , David Ayer revient en force avec Fury, armé d'un gros casting. Toujours dans le même registre du réalisateur ,mais cette fois ci dans le passé , on est plongé...",
      "datepublished": "2014-10-23"
     },
     {
      "interactioncount": "UserInteraction:2",
      "author": "chrischambers86",
      "description": "Un tank, la fin de la seconde guerre mondiale en Allemagne, cinq soldats amèricains plongès dans l'enfer du conflit, des scènes de combat èlectrisantes, le goût du sang dans la bouche,...",
      "datepublished": "2014-10-31"
     },
     {
      "interactioncount": "UserInteraction:7",
      "author": "tony-76",
      "description": "Fury est un grand film sur la guerre. Avril 1945, les nazis sont poussés dans leurs derniers retranchements et forcés d'enrôler femmes et enfants pour tenter de vaincre les Alliés. La guerre...",
      "datepublished": "2014-10-25"
     }
    ]
   }
  },
  {
   "kind": "customsearch#result",
   "title": "Salsa Fury - film 2013 - AlloCiné",
   "htmlTitle": "Salsa \u003cb\u003eFury\u003c/b\u003e - film 2013 - AlloCiné",
   "link": "http://www.allocine.fr/film/fichefilm_gen_cfilm=215747.html",
   "displayLink": "www.allocine.fr",
   "snippet": "Salsa Fury est un film de James Griffiths avec Nick Frost, Rashida Jones. \nSynopsis : Malgré un grand manque de confiance en lui et des kilos en trop, \nBruce ...",
   "htmlSnippet": "Salsa \u003cb\u003eFury\u003c/b\u003e est un film de James Griffiths avec Nick Frost, Rashida Jones. \u003cbr\u003e\nSynopsis : Malgré un grand manque de confiance en lui et des kilos en trop, \u003cbr\u003e\nBruce&nbsp;...",
   "formattedUrl": "www.allocine.fr/film/fichefilm_gen_cfilm=215747.html",
   "htmlFormattedUrl": "www.allocine.fr/film/fichefilm_gen_cfilm=215747.html",
   "pagemap": {
    "cse_image": [
     {
      "src": "http://fr.web.img2.acsta.net/pictures/210/580/21058018_20131114172357292.jpg"
     }
    ],
    "person": [
     {
      "url": "James Griffiths",
      "name": "James Griffiths"
     },
     {
      "url": "Nick Frost",
      "name": "Nick Frost"
     },
     {
      "url": "Rashida Jones",
      "name": "Rashida Jones"
     },
     {
      "url": "Chris O'Dowd",
      "name": "Chris O'Dowd"
     }
    ],
    "cse_thumbnail": [
     {
      "width": "184",
      "height": "273",
      "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSodD1V-pN-asGG6uf6M-8yTyc7jxR8BgZ5rEUxkNXmnukrLj99JhoJCNmy"
     }
    ],
    "aggregaterating": [
     {
      "ratingvalue": "3.4",
      "ratingcount": "58",
      "reviewcount": "7",
      "bestrating": "5"
     }
    ],
    "movie": [
     {
      "name": "Salsa Fury",
      "image": "http://fr.web.img6.acsta.net/r_160_240/b_1_d6d6d6/pictures/210/580/21058018_20131114172357292.jpg",
      "duration": "PT1H38M",
      "genre": "Comédie",
      "trailer": "Voir la bande-annonce"
     }
    ],
    "rating": [
     {
      "ratingvalue": "3.5",
      "bestrating": "5"
     }
    ],
    "metatags": [
     {
      "viewport": "width=device-width, initial-scale=1.0",
      "og:site_name": "AlloCiné",
      "og:title": "Salsa Fury",
      "og:description": "Salsa Fury est un film de James Griffiths avec Nick Frost, Rashida Jones. Synopsis : Malgré un grand manque de confiance en lui et des kilos en trop, Bruce Garrett a le coeur qui bat passionnément (mais secrétement) pour la salsa. V",
      "og:image": "http://fr.web.img2.acsta.net/pictures/210/580/21058018_20131114172357292.jpg",
      "og:type": "video.movie",
      "fb:app_id": "99197768694",
      "twitter:card": "photo",
      "twitter:site": "@allocine",
      "twitter:title": "Salsa Fury - film 2013 - AlloCiné",
      "twitter:description": "Salsa Fury est un film de James Griffiths avec Nick Frost, Rashida Jones. Synopsis : Malgré un grand manque de confiance en lui et des kilos en trop, Bruce Garrett a le coeur qui bat passionnément ...",
      "twitter:image:src": "http://fr.web.img2.acsta.net/pictures/210/580/21058018_20131114172357292.jpg",
      "twitter:app:name:iphone": "allocine",
      "twitter:app:name:ipad": "allocine",
      "twitter:app:name:googleplay": "allocine",
      "twitter:app:url:iphone": "allocine://open/movie?code=215747",
      "twitter:app:url:ipad": "allocine://open/movie?code=215747",
      "twitter:app:url:googleplay": "allocine://open/movie?code=215747",
      "twitter:app:id:iphone": "351184863",
      "twitter:app:id:ipad": "351184863",
      "twitter:app:id:googleplay": "com.allocine.androidapp",
      "msapplication-tooltip": "AlloCiné, le site de référence du cinéma et des séries tv !",
      "msapplication-task": "name=Accueil;action-uri=http://www.allocine.fr/;icon-uri=http://fr.web.img1.acsta.net/commons/ie9ico/favicon.ico",
      "distribution": "global",
      "author": "AlloCine",
      "country": "France",
      "geo.position": "48.87078;2.30447",
      "geo.country": "FR",
      "icbm": "48.87078;2.30447"
     }
    ],
    "moviereview": [
     {
      "ratingstars": "3.5",
      "best": "5",
      "originalrating": "3.4",
      "votes": "58",
      "ratingcount": "7",
      "image_href": "http://fr.web.img6.acsta.net/r_160_240/b_1_d6d6d6/pictures/210/580/21058018_20131114172357292.jpg",
      "name": "Salsa Fury",
      "runtime": "PT1H38M",
      "genre": "Comédie",
      "directed_by": "James Griffiths",
      "starring": "Nick Frost, Rashida Jones, Chris O'Dowd"
     }
    ],
    "review": [
     {
      "datepublished": "2014-09-05",
      "description": "sympa pour les fans de salsa la musique est très bien et l'acteur est excellent. on passe un bon moment."
     }
    ]
   }
  },
  {
   "kind": "customsearch#result",
   "title": "Salsa Fury Bande-annonce VO",
   "htmlTitle": "Salsa \u003cb\u003eFury\u003c/b\u003e Bande-annonce VO",
   "link": "http://www.allocine.fr/video/player_gen_cmedia=19541021&cfilm=215747.html",
   "displayLink": "www.allocine.fr",
   "snippet": "19 déc. 2013 ... Bande-annonce Salsa Fury - Salsa Fury, un film de James Griffiths avec Nick \nFrost, Rashida Jones.",
   "htmlSnippet": "19 déc. 2013 \u003cb\u003e...\u003c/b\u003e Bande-annonce Salsa \u003cb\u003eFury\u003c/b\u003e - Salsa \u003cb\u003eFury\u003c/b\u003e, un film de James Griffiths avec Nick \u003cbr\u003e\nFrost, Rashida Jones.",
   "formattedUrl": "www.allocine.fr/video/player_gen_cmedia=19541021&cfilm=215747.html",
   "htmlFormattedUrl": "www.allocine.fr/video/player_gen_cmedia=19541021&amp;cfilm=215747.html",
   "pagemap": {
    "cse_image": [
     {
      "src": "http://fr.web.img1.acsta.net/videothumbnails/13/12/19/14/47/464841.jpg"
     }
    ],
    "videoobject": [
     {
      "name": "Salsa Fury Bande-annonce VO",
      "duration": "PT2M38S",
      "thumbnail": "http://fr.web.img3.acsta.net/c_120_160/o_play.png_5_se/pictures/210/580/21058018_20131114172357292.jpg",
      "embedurl": "http://www.allocine.fr/blogvision/19541021",
      "width": "640",
      "height": "390",
      "playertype": "Flash",
      "uploaddate": "2013-12-19"
     }
    ],
    "cse_thumbnail": [
     {
      "width": "300",
      "height": "168",
      "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNz0_fGe6ouSSI8Dt3FNdXcNCqfLTogmEtaChAyhxYGTdYSQXsfaWTvZ0s"
     }
    ],
    "aggregaterating": [
     {
      "ratingvalue": "3.4",
      "ratingcount": "58",
      "bestrating": "5"
     }
    ],
    "movie": [
     {
      "url": "http://www.allocine.fr/film/fichefilm_gen_cfilm=215747.html",
      "name": "Salsa Fury Bande-annonce VO"
     }
    ],
    "metatags": [
     {
      "viewport": "width=device-width, initial-scale=1.0",
      "og:site_name": "AlloCiné",
      "og:title": "Salsa Fury Bande-annonce VO",
      "og:description": "Bande-annonce Salsa Fury - Salsa Fury, un film de James Griffiths avec Nick Frost, Rashida Jones.",
      "og:image": "http://fr.web.img1.acsta.net/videothumbnails/13/12/19/14/47/464841.jpg",
      "og:type": "video.movie",
      "fb:app_id": "99197768694",
      "og:video": "http://www.allocine.fr/blogvision/19541021",
      "og:video:secure_url": "https://splayer.allocine.fr/sblogvision/19541021",
      "og:video:height": "260",
      "og:video:width": "398",
      "og:video:type": "application/x-shockwave-flash",
      "twitter:card": "player",
      "twitter:url": "http://www.allocine.fr/blogvision/19541021",
      "twitter:player": "https://splayer.allocine.fr/sblogvision/19541021",
      "twitter:player:width": "398",
      "twitter:player:height": "260",
      "twitter:site": "@allocine",
      "twitter:title": "Bande-annonce Salsa Fury - \u003cstrong\u003eSalsa Fury\u003c/strong\u003e Bande-annonce VO - AlloCiné",
      "twitter:description": "Bande-annonce Salsa Fury - Salsa Fury, un film de James Griffiths avec Nick Frost, Rashida Jones.",
      "twitter:image:src": "http://fr.web.img5.acsta.net/c_398_260/videothumbnails/13/12/19/14/47/464841.jpg",
      "twitter:app:name:iphone": "allocine",
      "twitter:app:name:ipad": "allocine",
      "twitter:app:name:googleplay": "allocine",
      "twitter:app:url:iphone": "allocine://open/video?code=19541021",
      "twitter:app:url:ipad": "allocine://open/video?code=19541021",
      "twitter:app:url:googleplay": "allocine://open/video?code=19541021",
      "twitter:app:id:iphone": "351184863",
      "twitter:app:id:ipad": "351184863",
      "twitter:app:id:googleplay": "com.allocine.androidapp",
      "msapplication-tooltip": "AlloCiné, le site de référence du cinéma et des séries tv !",
      "msapplication-task": "name=Accueil;action-uri=http://www.allocine.fr/;icon-uri=http://fr.web.img1.acsta.net/commons/ie9ico/favicon.ico",
      "distribution": "global",
      "author": "AlloCine",
      "country": "France",
      "geo.position": "48.87078;2.30447",
      "geo.country": "FR",
      "icbm": "48.87078;2.30447",
      "item-title": "Salsa Fury Bande-annonce VO",
      "item-image": "http://fr.web.img4.acsta.net/cx_120_96/b_1_d6d6d6/o_overplay.png_5_se/videothumbnails/13/12/19/14/47/464841.jpg",
      "item-views": "21399",
      "item-publish-date": "Thu, 19 Dec 2013 14:47:00 GMT",
      "item-category": "Salsa Fury,Comédie,2013"
     }
    ]
   }
  },
  {
   "kind": "customsearch#result",
   "title": "Musique du film Fury - AlloCiné",
   "htmlTitle": "Musique du film \u003cb\u003eFury\u003c/b\u003e - AlloCiné",
   "link": "http://www.allocine.fr/film/fichefilm-218759/soundtrack/",
   "displayLink": "www.allocine.fr",
   "snippet": "Ecoutez la musique du film \"Fury\". Découvrez tous les titres de la B.O de Fury.",
   "htmlSnippet": "Ecoutez la musique du film &quot;\u003cb\u003eFury\u003c/b\u003e&quot;. Découvrez tous les titres de la B.O de \u003cb\u003eFury\u003c/b\u003e.",
   "formattedUrl": "www.allocine.fr/film/fichefilm-218759/soundtrack/",
   "htmlFormattedUrl": "www.allocine.fr/film/fichefilm-218759/soundtrack/",
   "pagemap": {
    "musicalbum": [
     {
      "datepublished": "2014-01-01"
     }
    ],
    "cse_image": [
     {
      "src": "http://fr.web.img5.acsta.net/pictures/14/09/22/16/44/411457.jpg"
     }
    ],
    "cse_thumbnail": [
     {
      "width": "194",
      "height": "259",
      "src": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcShnsYbPsKHzYbqyTs-3teYzWTjZ0gU7BAe3urdZUJvRR9N8OW_FU3mvICS"
     }
    ],
    "movie": [
     {
      "name": "Fury"
     }
    ],
    "musicrecording": [
     {
      "name": "April, 1945",
      "duration": "PT4M14S"
     },
     {
      "name": "The War Is Not Over",
      "duration": "PT1M47S"
     },
     {
      "name": "Fury Drives into Camp",
      "duration": "PT1M50S"
     },
     {
      "name": "Refugees",
      "duration": "PT2M42S"
     },
     {
      "name": "Ambush",
      "duration": "PT2M6S"
     },
     {
      "name": "The Beetfield",
      "duration": "PT7M59S"
     },
     {
      "name": "Airfight",
      "duration": "PT3M4S"
     },
     {
      "name": "The Town Square",
      "duration": "PT2M17S"
     },
     {
      "name": "The Apartment",
      "duration": "PT58S"
     },
     {
      "name": "Emma",
      "duration": "PT2M35S"
     },
     {
      "name": "Tiger Battle",
      "duration": "PT6M17S"
     },
     {
      "name": "On the Lookout",
      "duration": "PT3M4S"
     },
     {
      "name": "This Is My Home",
      "duration": "PT3M43S"
     },
     {
      "name": "Machine",
      "duration": "PT3M21S"
     },
     {
      "name": "Crossroads",
      "duration": "PT8M6S"
     },
     {
      "name": "Still in This Fight",
      "duration": "PT3M39S"
     },
     {
      "name": "I'M Scared Too",
      "duration": "PT3M45S"
     },
     {
      "name": "Wardaddy",
      "duration": "PT2M39S"
     },
     {
      "name": "Norman",
      "duration": "PT2M50S"
     }
    ],
    "musicgroup": [
     {
      "name": "Steven Price"
     }
    ],
    "metatags": [
     {
      "viewport": "width=device-width, initial-scale=1.0",
      "og:site_name": "AlloCiné",
      "og:title": "Musique du film Fury",
      "og:description": "Ecoutez la musique du film \"Fury\". Découvrez tous les titres de la B.O de Fury",
      "og:image": "http://fr.web.img5.acsta.net/pictures/14/09/22/16/44/411457.jpg",
      "og:type": "video.movie",
      "fb:app_id": "99197768694",
      "twitter:card": "photo",
      "twitter:site": "@allocine",
      "twitter:title": "Musique du film Fury - AlloCiné",
      "twitter:description": "Ecoutez la musique du film \"Fury\". Découvrez tous les titres de la B.O de Fury",
      "twitter:image:src": "http://fr.web.img5.acsta.net/pictures/14/09/22/16/44/411457.jpg",
      "twitter:app:name:iphone": "allocine",
      "twitter:app:name:ipad": "allocine",
      "twitter:app:name:googleplay": "allocine",
      "twitter:app:url:iphone": "allocine://open/movie?code=218759",
      "twitter:app:url:ipad": "allocine://open/movie?code=218759",
      "twitter:app:url:googleplay": "allocine://open/movie?code=218759",
      "twitter:app:id:iphone": "351184863",
      "twitter:app:id:ipad": "351184863",
      "twitter:app:id:googleplay": "com.allocine.androidapp",
      "msapplication-tooltip": "AlloCiné, le site de référence du cinéma et des séries tv !",
      "msapplication-task": "name=Accueil;action-uri=http://www.allocine.fr/;icon-uri=http://fr.web.img1.acsta.net/commons/ie9ico/favicon.ico",
      "distribution": "global",
      "author": "AlloCine",
      "country": "France",
      "geo.position": "48.87078;2.30447",
      "geo.country": "FR",
      "icbm": "48.87078;2.30447"
     }
    ],
    "moviereview": [
     {
      "name": "Fury"
     }
    ]
   }
  },
  {
   "kind": "customsearch#result",
   "title": "Mad Max: Fury Road - film 2014 - AlloCiné",
   "htmlTitle": "Mad Max: \u003cb\u003eFury\u003c/b\u003e Road - film 2014 - AlloCiné",
   "link": "http://www.allocine.fr/film/fichefilm_gen_cfilm=125054.html",
   "displayLink": "www.allocine.fr",
   "snippet": "Mad Max: Fury Road est un film de George Miller avec Tom Hardy, Charlize \nTheron. Synopsis : Une nouvelle version des aventures du héros ...",
   "htmlSnippet": "Mad Max: \u003cb\u003eFury\u003c/b\u003e Road est un film de George Miller avec Tom Hardy, Charlize \u003cbr\u003e\nTheron. Synopsis : Une nouvelle version des aventures du héros&nbsp;...",
   "formattedUrl": "www.allocine.fr/film/fichefilm_gen_cfilm=125054.html",
   "htmlFormattedUrl": "www.allocine.fr/film/fichefilm_gen_cfilm=125054.html",
   "pagemap": {
    "cse_image": [
     {
      "src": "http://fr.web.img4.acsta.net/pictures/14/07/24/06/39/496452.jpg"
     }
    ],
    "person": [
     {
      "url": "George Miller",
      "name": "George Miller"
     },
     {
      "url": "Tom Hardy",
      "name": "Tom Hardy"
     },
     {
      "url": "Charlize Theron",
      "name": "Charlize Theron"
     },
     {
      "url": "Nicholas Hoult",
      "name": "Nicholas Hoult"
     }
    ],
    "cse_thumbnail": [
     {
      "width": "194",
      "height": "259",
      "src": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTIXiGaOjYvDiycTBWt37ToymLG3-5SECXKZnxejJXsnHoxDVvfOxw1InLP"
     }
    ],
    "movie": [
     {
      "name": "Mad Max: Fury Road",
      "image": "http://fr.web.img2.acsta.net/r_160_240/b_1_d6d6d6/pictures/14/07/24/06/39/496452.jpg",
      "datepublished": "2015-05-13",
      "genre": "Aventure",
      "trailer": "Voir la bande-annonce",
      "productioncompany": "Warner Bros. France"
     }
    ],
    "metatags": [
     {
      "viewport": "width=device-width, initial-scale=1.0",
      "og:site_name": "AlloCiné",
      "og:title": "Mad Max: Fury Road",
      "og:description": "Mad Max: Fury Road est un film de George Miller avec Tom Hardy, Charlize Theron. Synopsis : Une nouvelle version des aventures du héros post-apocalyptique.",
      "og:image": "http://fr.web.img4.acsta.net/pictures/14/07/24/06/39/496452.jpg",
      "og:type": "video.movie",
      "fb:app_id": "99197768694",
      "twitter:card": "photo",
      "twitter:site": "@allocine",
      "twitter:title": "Mad Max: Fury Road - film 2014 - AlloCiné",
      "twitter:description": "Mad Max: Fury Road est un film de George Miller avec Tom Hardy, Charlize Theron. Synopsis : Une nouvelle version des aventures du héros post-apocalyptique.",
      "twitter:image:src": "http://fr.web.img4.acsta.net/pictures/14/07/24/06/39/496452.jpg",
      "twitter:app:name:iphone": "allocine",
      "twitter:app:name:ipad": "allocine",
      "twitter:app:name:googleplay": "allocine",
      "twitter:app:url:iphone": "allocine://open/movie?code=125054",
      "twitter:app:url:ipad": "allocine://open/movie?code=125054",
      "twitter:app:url:googleplay": "allocine://open/movie?code=125054",
      "twitter:app:id:iphone": "351184863",
      "twitter:app:id:ipad": "351184863",
      "twitter:app:id:googleplay": "com.allocine.androidapp",
      "msapplication-tooltip": "AlloCiné, le site de référence du cinéma et des séries tv !",
      "msapplication-task": "name=Accueil;action-uri=http://www.allocine.fr/;icon-uri=http://fr.web.img1.acsta.net/commons/ie9ico/favicon.ico",
      "distribution": "global",
      "author": "AlloCine",
      "country": "France",
      "geo.position": "48.87078;2.30447",
      "geo.country": "FR",
      "icbm": "48.87078;2.30447"
     }
    ],
    "moviereview": [
     {
      "image_href": "http://fr.web.img2.acsta.net/r_160_240/b_1_d6d6d6/pictures/14/07/24/06/39/496452.jpg",
      "name": "Mad Max: Fury Road",
      "release_date": "2015-05-13",
      "release_year": "2015",
      "genre": "Aventure/Action",
      "directed_by": "George Miller",
      "starring": "Tom Hardy, Charlize Theron, Nicholas Hoult"
     }
    ]
   }
  },
  {
   "kind": "customsearch#result",
   "title": "Mad Max: Fury Road Bande-annonce VO",
   "htmlTitle": "Mad Max: \u003cb\u003eFury\u003c/b\u003e Road Bande-annonce VO",
   "link": "http://www.allocine.fr/video/player_gen_cmedia=19547109&cfilm=125054.html",
   "displayLink": "www.allocine.fr",
   "snippet": "27 juil. 2014 ... Bande-annonce Mad Max: Fury Road - Mad Max: Fury Road, un film de George \nMiller avec Tom Hardy, Charlize Theron.",
   "htmlSnippet": "27 juil. 2014 \u003cb\u003e...\u003c/b\u003e Bande-annonce Mad Max: \u003cb\u003eFury\u003c/b\u003e Road - Mad Max: \u003cb\u003eFury\u003c/b\u003e Road, un film de George \u003cbr\u003e\nMiller avec Tom Hardy, Charlize Theron.",
   "formattedUrl": "www.allocine.fr/video/player_gen_cmedia=19547109&cfilm=125054.html",
   "htmlFormattedUrl": "www.allocine.fr/video/player_gen_cmedia=19547109&amp;cfilm=125054.html",
   "pagemap": {
    "cse_image": [
     {
      "src": "http://fr.web.img5.acsta.net/videothumbnails/14/07/27/20/27/538385.jpg"
     }
    ],
    "videoobject": [
     {
      "name": "Mad Max: Fury Road Bande-annonce VO",
      "duration": "PT2M30S",
      "thumbnail": "http://fr.web.img5.acsta.net/c_120_160/o_play.png_5_se/pictures/14/07/24/06/39/496452.jpg",
      "embedurl": "http://www.allocine.fr/blogvision/19547109",
      "width": "640",
      "height": "390",
      "playertype": "Flash",
      "uploaddate": "2014-07-27"
     }
    ],
    "cse_thumbnail": [
     {
      "width": "300",
      "height": "168",
      "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpe_z_GfJ8sPytlNEPNNpIAxDcvEIxx1hjYy1w4eE_6dEV5elx5JhrA4o"
     }
    ],
    "movie": [
     {
      "url": "http://www.allocine.fr/film/fichefilm_gen_cfilm=125054.html",
      "name": "Mad Max: Fury Road Bande-annonce VO"
     }
    ],
    "metatags": [
     {
      "viewport": "width=device-width, initial-scale=1.0",
      "og:site_name": "AlloCiné",
      "og:title": "Mad Max: Fury Road Bande-annonce VO",
      "og:description": "Bande-annonce Mad Max: Fury Road - Mad Max: Fury Road, un film de George Miller avec Tom Hardy, Charlize Theron.",
      "og:image": "http://fr.web.img5.acsta.net/videothumbnails/14/07/27/20/27/538385.jpg",
      "og:type": "video.movie",
      "fb:app_id": "99197768694",
      "og:video": "http://www.allocine.fr/blogvision/19547109",
      "og:video:secure_url": "https://splayer.allocine.fr/sblogvision/19547109",
      "og:video:height": "260",
      "og:video:width": "398",
      "og:video:type": "application/x-shockwave-flash",
      "twitter:card": "player",
      "twitter:url": "http://www.allocine.fr/blogvision/19547109",
      "twitter:player": "https://splayer.allocine.fr/sblogvision/19547109",
      "twitter:player:width": "398",
      "twitter:player:height": "260",
      "twitter:site": "@allocine",
      "twitter:title": "Bande-annonce Mad Max: Fury Road - \u003cstrong\u003eMad Max: Fury Road\u003c/strong\u003e Bande-annonce VO - AlloCiné",
      "twitter:description": "Bande-annonce Mad Max: Fury Road - Mad Max: Fury Road, un film de George Miller avec Tom Hardy, Charlize Theron.",
      "twitter:image:src": "http://fr.web.img3.acsta.net/c_398_260/videothumbnails/14/07/27/20/27/538385.jpg",
      "twitter:app:name:iphone": "allocine",
      "twitter:app:name:ipad": "allocine",
      "twitter:app:name:googleplay": "allocine",
      "twitter:app:url:iphone": "allocine://open/video?code=19547109",
      "twitter:app:url:ipad": "allocine://open/video?code=19547109",
      "twitter:app:url:googleplay": "allocine://open/video?code=19547109",
      "twitter:app:id:iphone": "351184863",
      "twitter:app:id:ipad": "351184863",
      "twitter:app:id:googleplay": "com.allocine.androidapp",
      "msapplication-tooltip": "AlloCiné, le site de référence du cinéma et des séries tv !",
      "msapplication-task": "name=Accueil;action-uri=http://www.allocine.fr/;icon-uri=http://fr.web.img1.acsta.net/commons/ie9ico/favicon.ico",
      "distribution": "global",
      "author": "AlloCine",
      "country": "France",
      "geo.position": "48.87078;2.30447",
      "geo.country": "FR",
      "icbm": "48.87078;2.30447",
      "item-title": "Mad Max: Fury Road Bande-annonce VO",
      "item-image": "http://fr.web.img2.acsta.net/cx_120_96/b_1_d6d6d6/o_overplay.png_5_se/videothumbnails/14/07/27/20/27/538385.jpg",
      "item-views": "230424",
      "item-publish-date": "Sun, 27 Jul 2014 19:58:00 GMT",
      "item-category": "Mad Max: Fury Road,Aventure,Action,2015, MovieComingSoon"
     }
    ]
   }
  }
 ]
}


*/