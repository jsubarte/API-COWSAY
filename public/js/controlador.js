const figuras = 
                [
                    "ACKBAR","APERTURE-BLANK","APERTURE","ARMADILLO","ATAT","ATOM","AWESOME-FACE","BANANA","BEARFACE","BEES","BILL-THE-CAT","BIOHAZARD",
                    "BISHOP","BLACK-MESA","BOX","BROKEN-HEART","C3PO","CAKE","CAKE-WITH-CANDLES","CAT2","CAT","CATFENCE","CHARIZARDVICE","CHARLIE",
                    "CHESSMEN","CHITO","CLAW-ARM","CLIPPY","COMPANION-CUBE","COWER","COWFEE","CTHULHU-MINI","CUBE","DALEK","DALEK-SHOOTING","DOCKER-WHALE","DOLPHIN",
                    "EBI-FURAI","ELEPHANT2","ELEPHANT","EXPLOSION","FAT-BANANA","FAT-COW","FENCE","FIRE","FOX","GHOST","GLADOS","GOAT2",
                    "GOLDEN-EAGLE","HAND","HAPPY-WHALE","HIPPIE","HIYA","HIYOKO","HOMER","HYPNO","IBM","IWASHI","JELLYFISH","KARL-MARX",
                    "KILROY","KING","KITTEN","KNIGHT","LAMB2","LAMB","LIGHTBULB","LOBSTER","LOLLERSKATES","MAILCHIMP","MAZE-RUNNER","MINOTAUR",
                    "MONA-LISA","MOOGHIDJIRAH","MOOJIRA","MULE","NYAN","OCTOPUS","OKAZU","OWL","PAWN","PERIODIC-TABLE","PERSONALITY-SPHERE","PINBALL-MACHINE",
                    "PSYCHIATRICHELP2","PSYCHIATRICHELP","PTERODACTYL","QUEEN","R2-D2","RADIO","RENGE","ROBOT","ROBOTFINDSKITTEN","ROFLCOPTER","ROOK","SACHIKO",
                    "SEAHORSE-BIG","SEAHORSE","SHIKATO","SHRUG","SMILING-OCTOPUS","SNOOPY","SNOOPYHOUSE","SNOOPYSLEEP","SPIDERCOW","SQUID","SUDOWOODO","TABLEFLIP",
                    "TAXI","TEMPLATE","THREADER","THREECUBES","TOASTER","TORTOISE","TUX-BIG","TWEETY-BIRD","USA","VADER","WEEPING-ANGEL","WIZARD",
                    "WOOD","WORLD","YASUNA-01","YASUNA-02","YASUNA-03A","YASUNA-03","YASUNA-04","YASUNA-05","YASUNA-06","YASUNA-07","YASUNA-08","YASUNA-09",
                    "YASUNA-10","YASUNA-11","YASUNA-12","YASUNA-13","YASUNA-14","YASUNA-16","YASUNA-17","YASUNA-18","YASUNA-19","YASUNA-20","YMD-UDON","ZEN-NOH-MILK"
                ];

cmbFiguras = document.getElementById("Figura");
for( i = 0; i < figuras.length; i++ ){
    opcion = document.createElement("option");
    opcion.value = figuras[i].toLowerCase();
    opcion.text = figuras[i];
    cmbFiguras.appendChild(opcion);
}