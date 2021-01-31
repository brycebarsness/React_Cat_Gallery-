const express = require('express');
const router = express.Router();
const galleryItems = require('../modules/gallery.data');
const pool = require('../modules/pool');



// DO NOT MODIFY THIS FILE FOR BASE MODE

router.get('/', (req, res) => {
    pool.query(`
    SELECT * FROM "images" ORDER BY "id";
    `).then(
        result => {
            res.send(result.rows);
        }
    ).catch(
        error => {
            console.log('error with get route', error);
        }
    )
});


// GET Route
//router.get('/', (req, res) => {
    //res.send(galleryItems);
//}); // END GET Route*/

// PUT Route
router.put('/like/:id', (req, res) => {
    const galleryId = req.params.id;
    pool.query(`
    UPDATE "images" SET "likes"= "likes" + 1 WHERE "id"=$1
    `, [galleryId]).then(
        () => {
            res.sendStatus(200);
        }
    ).catch(
        error => {
            console.log('error with put route', error);
        }
    )
    
}); // END PUT Route



//POST Route
router.post('/', (req, res) => {
    const newItem = req.body;
    pool.query(`
    INSERT INTO "images" ("url", "description", "likes")
    VALUES ($1, $2, 0);
    `, [newItem.url, newItem.description])
    .then(
        () => {
            res.sendStatus(200);
        }
    ).catch(
        error => {
            console.log('error with axios post route', error);
        }
    )
    //below is the old code without database
    // galleryItems.push(newItem);
})

//DELETE Route
router.delete('/delete/:id', (req, res) => {
    const idToDelete = req.params.id;
    pool.query(`
    DELETE FROM "images" WHERE "id"=$1
    `, [idToDelete]).then(
        () => {
            res.sendStatus(200);
        }
    ).catch(
        error => {
            console.log('error with delete route', error);
        }
    )
    //below is the old code without database
    // //initialize the index value
    // let index = 0;
    // //loop through to get the index of the photo to be deleted
    // galleryItems.forEach(photo => {
    //     if(photo.id ==  idToDelete) { //idToDelete is string, photo.id is number
    //         index = galleryItems.indexOf(photo);
    //     }
    // })
    // //delete the photo from the array
    // galleryItems.splice(index, 1);
})



module.exports = router;