const cors = require('cors')({ origin: true });

const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

// Create and Deploy Your First Cloud Functions
// https:firebase.google.com/docs/functions/write-firebase-functions

exports.listPets = functions.https.onRequest((request, response) => {
    cors(request, response, async () => {
        functions.logger.info("Hello logs!", {structuredData: true});
        try {
            const pets = await admin.database().ref('pets').once('value');
            response.json(pets);
        } catch(e) {
            response.status(500).send(e);
        }
    })
});

exports.showPet = functions.https.onRequest((request, response) => {
    cors(request, response, async () => {
        const id = request.query["id"]
        functions.logger.info(`Requesting pet ${id}`)

        try {
            const pet = await admin.database().ref(`pets/${id}`).once('value')
            if (!pet.val()) {
                response.status(404).send("nonexistent pet")
                return
            }
            response.json(pet)
        } catch(e) {
            response.status(500).send(e)
        }
    })
})

exports.likePet = functions.https.onRequest((request, response) => {
    cors(request, response, async () => {
        const id = request.query["id"]
        functions.logger.info(`Liking pet ${id}`)

        try {
            const pet = await admin.database().ref(`pets/${id}`).once('value')
            if (!pet.val()) {
                response.status(404).send("nonexistent pet")
                return
            }

            const liked = !pet.val().liked
            await admin.database().ref(`pets/${id}`).update({ liked })

            response.send(liked)
        } catch(e) {
            response.status(500).send(e)
        }
    })
})