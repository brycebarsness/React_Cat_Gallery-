REATE TABLE "images" (
	"id" SERIAL PRIMARY KEY,
	"url" VARCHAR(128),
	"description" VARCHAR(256),
	"likes" INTEGER DEFAULT '0',
	);
	
	SELECT * FROM "images";
	
	INSERT INTO "images" ("url", "description", "likes")
VALUES 
('images/hudson01.jpg','Photo of Hudson, a big, sorta-orange, but very cool, cat.', 0),
('images/romeo01.jpg', 'Photo of Romeo, a cat that loves the outdoors .', 0),
('images/romeo02.jpg', 'Photo of Romeo, a cat that puts in long hours at the office.', 0 ),
('images/juliet01.jpg',  'Photo of Juliet, working on her tan.', 0 ),
('images/juliet02.jpg',  'Photo of Juliet, enjoying Yoga in the sun.', 0 ),
('images/hudson02.jpg',  'Photo of Hudson, watching Juliet enjoying yoga in the sun.', 0 )
