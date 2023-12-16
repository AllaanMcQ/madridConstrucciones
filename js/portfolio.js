var jsonPath = "/config/portfolio-config.json";
var jsonPath2 = "config/portfolio-config.json";
var imgPath = "img/portfolio/";

function readJsonArray(file)
{
	var request = new XMLHttpRequest();
	request.open('GET', file, false);
	request.send(null);
	if (request.status == 200)
	{
		var result = JSON.parse(request.response);
		return result;
	}
	else
	{
		return false;
	}
}

function addPortfolioPicturesToHTML(data)
{
	for (let picture of data.pictures)
	{
		generateHTMLTag(picture);
	}
}

function generateHTMLTag(picture)
{
	// Before </figure>
	// uncomment to enable details icon <a href="#" class="link-details" title="More Details"><i class="ion ion-android-open"></i></a>
	var completeTag = '<div class="col-lg-4 col-md-6 portfolio-item ' + picture.filter + ' wow fadeInUp"><div class="portfolio-wrap"><figure><img src="' + imgPath + picture.img + '" class="img-fluid"><a href="' + imgPath + picture.img + '" class="link-preview" data-lightbox-def="picture" data-lightbox="' + picture.data + '" data-title="' + picture.title + '" title="Preview"><i class="ion ion-eye"></i></a></figure><div class="portfolio-info"><h4><a href="#">' + picture.title + '</a></h4><p>' + picture.category + '</p></div></div></div>';
	document.getElementById("portfolio-container").innerHTML += completeTag;
}

var data = readJsonArray(jsonPath);
if (!data)
{
	var data = readJsonArray(jsonPath2);
}
addPortfolioPicturesToHTML(data);
