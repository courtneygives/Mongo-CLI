//
db.bios.find({"awards" : {$exists : true}}).pretty();

db.bios.find({"awards" : {$exists : false}}).pretty();

db.bios.find({"contribs" : {$in: ["OOP", "UNIX"]} }).pretty();

db.bios.find({"awards.award" : "Turing Award" }).pretty();

//less than 8 and greater than 2 //
