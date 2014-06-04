var asset = require("../helpers/utils.js").asset

//THIS IS OVERWRITTEN FROM GOOGLE
exports.contributors = {
    maxdemarzi: {
        url: "http://www.maxdemarzi.com",
        name: "Max De Marzi",
        logo: asset("img/contributors/maxdemarzi.jpg"),
        text: 'Max is a wizard in graph <a href="http://www.maxdemarzi.com">vizualisations</a>. He works on the popular <a href="https://github.com/maxdemarzi/neography">Neography Ruby Gem</a> for the Neo4j Server'
    },
    mhluongo: {
        url: "http://scholr.ly/",
        name: "Matt Luongo",
        logo: asset("img/contributors/mhluongo.jpg"),
        text: 'Matt is building awesome technology at <a href="http://scholr.ly/">Scholr.ly</a> in Boston. He is the author of the <a href="https://github.com/scholrly/neo4django/">Neo4django</a> Django bindings for Neo4j'
    },
    ronge: {
        url: "https://github.com/andreasronge/neo4j",
        logo: asset("img/contributors/ronge.jpeg"),
        name: "Andreas Ronge",
        text: 'Andreas is a long time Neo4j contributor and author of the Neo4j <a href="https://github.com/andreasronge/neo4j">JRuby and Rails bindings</a>'
    },
    craigtaverner: {
        name: "Craig Taverner",
        url: "http://www.amanzi.org/",
        logo: asset("img/contributors/craigtaverner.jpg"),
        text: 'Craig is a GIS expert and author of the Neo4j <a href="https://github.com/neo4j/spatial">Spatial Plugin</a>'
    },
    technige: {
        url: "http://nigelsmall.com/",
        name: "Nigel Small",
        logo: asset("img/contributors/nigelsmall.jpg"),
        text: 'Nigel created <a href="http://nigelsmall.com/geoff">Geoff</a> and is the author of the Neo4j <a href="http://py2neo.org/">Py2neo</a> library'
    },
    tathamoddie: {
        url: "http://blog.tatham.oddie.com.au/",
        logo: asset("img/contributors/tathamoddie.jpg"),
        name: "Tatham Oddie",
        text: 'Tatham built the <a href="http://hg.readify.net/neo4jclient/overview">.Net Neo4jClient</a> and deploys <a href="http://blog.tatham.oddie.com.au/2012/06/18/new-talks-neo4j-in-a-net-world-and-youre-in-production-now-what/">Neo4j on Azure</a>'
    },
    pablopareja: {
        name: "Pablo Pareja Tobes",
        url: "http://about.me/pablopareja",
        logo: asset("img/contributors/pabloparejatobes.jpg"),
        text: 'Pablo is a bioinformatics expert and created <a href="http://bio4j.com/">Bio4j</a>'
    },
    espeed: {
        name: "James Thornton",
        logo: asset("img/contributors/jamesthornton.jpg"),
        url: "http://jamesthornton.com/",
        text: 'James is a Python guru who wrote <a href="http://bulbflow.com/">Bulbs</a>, a persistence framework for graph databases'
    },
    rhetonik: {
        name: "Nikhil Lanjewar",
        url: "https://twitter.com/rhetonik",
        logo: asset("img/contributors/nikhillanjewar.jpg"),
        text: 'Nikhil runs the  <a href="http://www.meetup.com/Neo4j-India/">Neo4j India Meet-up Group</a> and built the  <a href="https://github.com/yournextleap/activerecord-neo4j-adapter">Active Record Neo4j Adapter</a>'
    },
    josh_adell: {
        name: "Josh Adell",
        url: "https://twitter.com/josh_adell",
        logo: asset("img/contributors/josh_adell.jpg"),
        text: 'Josh is the creator of Neo4j PHP bindings and an active contributor to the Neo4j discussions.'
    }
}

exports.ext_content = {
    rik_belgian_beers1: {
        type: "video",
        author: "@rvanbruggen",
        title: "Fun with beer and graphs",
        thumbnail: "http://www.travelandbeer.com/wp-content/uploads/2011/05/belgian-beers.jpg",
        src: "http://player.vimeo.com/video/57182040",
        introText: "A brief introduction to Neo4j, Belgian beers and import and recommendations."
    },
    popchartlabs_beer: {
        author: "@popchartlab",
        type: "link",
        title: "The Beer Pop Chart",
        thumbnail: "http://cdn.shopify.com/s/files/1/0068/6272/products/VVMVOBeerPrint_Main_thumb_a_1024x1024.jpg?358",
        path: "http://popchartlab.com/collections/prints/products/the-very-very-many-varieties-of-beer",
        introText: "Chart of the world's most comprehensive beer taxonomy, with 89 varieties of beer with over 200 representative quaffs,"
    },
    trycypher_beer: {
        author: "@neo4j",
        type: "link",
        title: "A live sample beer graph",
        thumbnail: asset("img/apps/beer-console.png"),
        path: "http://console.neo4j.org/?id=beer",
        introText: "A small live dataset of Belgian beers in the cypher console"
    },
    beer_rik_screencast: {
        type:"video",
        author: "@rvanbruggen",
        title: "Screencast of Neo4j, Gephi and Beer",
        thumbnail: asset("img/apps/rik-screencast-beer.png"),
        src: "http://player.vimeo.com/video/57182040",
        introText: "Rik shows how easy it is to import data about beers, their attributes and breweries into Neo4j and walks through different ways of exploring, visualizing and querying this very tasty data."
    }
}
