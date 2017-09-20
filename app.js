"use strict";
var express = require("express");
var app = express();
var port = 3030;

var holyblanks = [
    "Holy Agility",
    "Holy Almost",
    "Holy Alphabet",
    "Holy Alps",
    "Holy Alter Ego",
    "Holy Anagram",
    "Holy Apparition",
    "Holy Armadillo",
    "Holy Armour Plate",
    "Holy Ashtray",
    "Holy Asp",
    "Holy Astronomy",
    "Holy Astringent Plum-like Fruit",
    "Holy Audubon",
    "Holy Backfire",
    "Holy Ball And Chain",
    "Holy Bank Balance",
    "Holy Bankruptcy",
    "Holy Banks",
    "Holy Bargain Basements",
    "Holy Barracuda",
    "Holy Bat Logic",
    "Holy Bat Trap",
    "Holy Batman",
    "Holy Benedict Arnold",
    "Holy Bijou",
    "Holy Bikini",
    "Holy Bill Of Rights",
    "Holy Birthday Cake",
    "Holy Black Beard",
    "Holy Blackout",
    "Holy Blank Cartridge",
    "Holy Blizzard",
    "Holy Blonde Mackerel Ash",
    "Holy Bluebeard",
    "Holy Bouncing Boiler Plate",
    "Holy Bowler",
    "Holy Bullseye",
    "Holy Bunions",
    "Holy Caffeine",
    "Holy Camouflage",
    "Holy Captain Nemo",
    "Holy Caruso",
    "Holy Catastrophe",
    "Holy Cat(s)",
    "Holy Chicken Coop",
    "Holy Chilblains",
    "Holy Chocolate Eclair",
    "Holy Cinderella",
    "Holy Cinemascope",
    "Holy Cliche",
    "Holy Cliffhangers",
    "Holy Clockwork",
    "Holy Clockworks",
    "Holy Cofax You Mean",
    "Holy Coffin Nails",
    "Holy Cold Creeps",
    "Holy Complications",
    "Holy Conflagration",
    "Holy Contributing to the Delinquency of Minors",
    "Holy Corpuscles",
    "Holy Cosmos",
    "Holy Costume Party",
    "Holy Crack Up",
    "Holy Crickets",
    "Holy Crossfire",
    "Holy Crucial Moment",
    "Holy Cryptology",
    "Holy D'artagnan",
    "Holy Davy Jones",
    "Holy Detonator",
    "Holy Disappearing Act",
    "Holy Distortion",
    "Holy Diversionary Tactics",
    "Holy Dr. Jekyll and Mr. Hyde",
    "Holy Egg Shells",
    "Holy Encore",
    "Holy Endangered Species",
    "Holy Epigrams",
    "Holy Escape-hatch",
    "Holy Explosion",
    "Holy Fate-worse-than-death",
    "Holy Felony",
    "Holy Finishing-touches",
    "Holy Fireworks",
    "Holy Firing Squad",
    "Holy Fishbowl",
    "Holy Flight Plan",
    "Holy Flip-flop",
    "Holy Flood Gate",
    "Holy Floor Covering",
    "Holy Flypaper",
    "Holy Fly Trap",
    "Holy Fog",
    "Holy Forecast",
    "Holy Fork In The Road",
    "Holy Fourth Amendment",
    "Holy Fourth Of July",
    "Holy Frankenstein",
    "Holy Frankenstein It's Alive",
    "Holy Fratricide",
    "Holy Frogman",
    "Holy Fruit Salad",
    "Holy Frying Towels",
    "Holy Funny Bone",
    "Holy Gall",
    "Holy Gambles",
    "Holy Gemini",
    "Holy Geography",
    "Holy Ghost Writer",
    "Holy Giveaways",
    "Holy Glow Pot",
    "Holy Golden Gate",
    "Holy Graf Zeppelin",
    "Holy Grammar",
    "Holy Graveyards",
    "Holy Greed",
    "Holy Green Card",
    "Holy Greetings-cards",
    "Holy Guacamole",
    "Holy Guadalcanal",
    "Holy Gullibility",
    "Holy Gunpowder",
    "Holy Haberdashery",
    "Holy Hailstorm",
    "Holy Hairdo",
    "Holy Hallelujah",
    "Holy Halloween",
    "Holy Hallucination",
    "Holy Hamburger",
    "Holy Hamlet",
    "Holy Hamstrings",
    "Holy Happenstance",
    "Holy Hardest Metal In The World",
    "Holy Harem",
    "Holy Harshin",
    "Holy Haziness",
    "Holy Headache",
    "Holy Headline",
    "Holy Heart Failure",
    "Holy Heartbreak",
    "Holy Heidelberg",
    "Holy Helmets",
    "Holy Helplessness",
    "Holy Here We Go Again",
    "Holy Hi-fi",
    "Holy Hieroglyphic",
    "Holy High-wire",
    "Holy Hijack",
    "Holy Hijackers",
    "Holy History",
    "Holy Hoaxes",
    "Holy Hole In A Donut",
    "Holy Hollywood",
    "Holy Holocaust",
    "Holy Homecoming",
    "Holy Homework",
    "Holy Homicide",
    "Holy Hoodwink",
    "Holy Hoof Beats",
    "Holy Hors D'Oeuvre",
    "Holy Horseshoes",
    "Holy Hostage",
    "Holy Hot Foot",
    "Holy Houdini",
    "Holy Human Collectors Item",
    "Holy Human Pearls",
    "Holy Human Pressure Cookers",
    "Holy Human Surfboards",
    "Holy Hunting Horn",
    "Holy Hurricane",
    "Holy Hutzpa",
    "Holy Hydraulics",
    "Holy Hypnotism",
    "Holy Hypodermics",
    "Holy Ice Picks",
    "Holy Ice Skates",
    "Holy Iceberg",
    "Holy Impossibility",
    "Holy Impregnability",
    "Holy Incantation",
    "Holy Inquisition",
    "Holy Interplanetary Yardstick",
    "Holy Interruptions",
    "Holy Iodine",
    "Holy IT and T",
    "Holy Jack In The Box",
    "Holy Jackpot",
    "Holy Jail Break",
    "Holy Jaw Breaker",
    "Holy Jelly Molds",
    "Holy Jet Set",
    "Holy Jigsaw Puzzles",
    "Holy Jitter Bugs",
    "Holy Joe",
    "Holy Journey To The Center Of The Earth",
    "Holy Jumble",
    "Holy Jumpin' Jiminy",
    "Holy Karats",
    "Holy Key Hole",
    "Holy Key Ring",
    "Holy Kilowatts",
    "Holy Kindergarten",
    "Holy Knit One Purl Two",
    "Holy Knock Out Drops",
    "Holy Known Unknown Flying Objects",
    "Holy Kofax",
    "Holy Las Vegas",
    "Holy Leopard",
    "Holy Levitation",
    "Holy Liftoff",
    "Holy Living End",
    "Holy Lodestone",
    "Holy Long John Silver",
    "Holy Looking Glass",
    "Holy Love Birds",
    "Holy Luther Burbank",
    "Holy Madness",
    "Holy Magic Lantern",
    "Holy Magician",
    "Holy Main Springs",
    "Holy Marathon",
    "Holy Mashed Potatoes",
    "Holy Masquerade",
    "Holy Matador",
    "Holy Mechanical Armies",
    "Holy Memory Bank",
    "Holy Merlin Magician",
    "Holy Mermaid",
    "Holy Merry Go Around",
    "Holy Mesmerism",
    "Holy Metronome",
    "Holy Miracles",
    "Holy Miscast",
    "Holy Missing Relatives",
    "Holy Molars",
    "Holy Mole Hill",
    "Holy Moly",
    "Holy Mucilage",
    "Holy Multitudes",
    "Holy Murder",
    "Holy Mush",
    "Holy Naive",
    "Holy New Year's Eve",
    "Holy Nick Of Time",
    "Holy Nightmare",
    "Holy Non Sequiturs",
    "Holy Oleo",
    "Holy Olfactory",
    "Holy One Track Bat Computer Mind",
    "Holy Oversight",
    "Holy Oxygen",
    "Holy Paderewski",
    "Holy Paraffin",
    "Holy Perfect Pitch",
    "Holy Pianola",
    "Holy Pin Cushions",
    "Holy Polar Front",
    "Holy Polar Ice Sheet",
    "Holy Polaris",
    "Holy Popcorn",
    "Holy Potluck",
    "Holy Pressure Cooker",
    "Holy Priceless Collection of Etruscan Snoods",
    "Holy Pseudonym",
    "Holy Purple Cannibals",
    "Holy Puzzlers",
    "Holy Rainbow",
    "Holy Rats In A Trap",
    "Holy Ravioli",
    "Holy Razors Edge",
    "Holy Recompense",
    "Holy Red Herring",
    "Holy Red Snapper",
    "Holy Reincarnation",
    "Holy Relief",
    "Holy Remote Control Robot",
    "Holy Reshevsky",
    "Holy Return From Oblivion",
    "Holy Reverse Polarity",
    "Holy Rheostat",
    "Holy Ricochet",
    "Holy Rip Van Winkle",
    "Holy Rising Hemlines",
    "Holy Roadblocks",
    "Holy Robert Louis Stevenson",
    "Holy Rock Garden",
    "Holy Rocking Chair",
    "Holy Romeo And Juliet",
    "Holy Rudder",
    "Holy Safari",
    "Holy Sarcophagus",
    "Holy Sardine",
    "Holy Scalding",
    "Holy Schizophrenia",
    "Holy Sedatives",
    "Holy Self Service",
    "Holy Semantics",
    "Holy Serpentine",
    "Holy Sewer Pipe",
    "Holy Shamrocks",
    "Holy Sherlock Holmes",
    "Holy Show-Ups",
    "Holy Showcase",
    "Holy Shrinkage",
    "Holy Shucks",
    "Holy Skull Tap",
    "Holy Sky Rocket",
    "Holy Slipped Disc",
    "Holy Smoke",
    "Holy Smokes",
    "Holy Smokestack",
    "Holy Snowball",
    "Holy Sonic Booms",
    "Holy Special Delivery",
    "Holy Spider Webs",
    "Holy Split Seconds",
    "Holy Squirrel Cage",
    "Holy Stalactites",
    "Holy Stampede",
    "Holy Standstills",
    "Holy Steam Valve",
    "Holy Stew Pot",
    "Holy Stomach Aches",
    "Holy Stratosphere",
    "Holy Stuffing",
    "Holy Subliminal",
    "Holy Sudden Incapacitation",
    "Holy Sundials",
    "Holy Surprise Party",
    "Holy Switch A Roo",
    "Holy Taj Mahal",
    "Holy Tartars",
    "Holy Taxation",
    "Holy Taxidermy",
    "Holy Tee Shot",
    "Holy Ten Toes",
    "Holy Terminology",
    "Holy Time Bomb",
    "Holy Tintinnabulation",
    "Holy Tipoffs",
    "Holy Titanic",
    "Holy Tome",
    "Holy Toreador",
    "Holy Trampoline",
    "Holy Transistors",
    "Holy Travel Agent",
    "Holy Trickery",
    "Holy Triple Feature",
    "Holy Trolls And Goblins",
    "Holy Tuxedo",
    "Holy Uncanny Photographic Mental Processes",
    "Holy Understatements",
    "Holy Underwritten Metropolis",
    "Holy Unlikelihood",
    "Holy Unrefillable Prescriptions",
    "Holy Vat",
    "Holy Venezuela",
    "Holy Vertebrae",
    "Holy Voltage",
    "Holy Waste Of Energy",
    "Holy Wayne Manor",
    "Holy Weaponry",
    "Holy Wedding Cake",
    "Holy Wernher von Braun",
    "Holy Whiskers",
    "Holy Wigs",
    "Holy Zorro"
];

app.post("/holyblank",function(req,res){
    res.json(holyblanks[chooseBlank()] + ", Batman!");
});

app.post("/holyblank/:name",function(req,res){
    res.json(holyblanks[chooseBlank()] + ", " + req.params.name + "!");
});

var chooseBlank = function(){
    return Math.floor(Math.random() * holyblanks.length) + 1;
}

app.listen(process.env.PORT || port);