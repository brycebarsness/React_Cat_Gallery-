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
            console.log('get route error', error);
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
            console.log('put route error', error);
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
            console.log('post route error', error);
        }
    )

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
  
})



module.exports = router;