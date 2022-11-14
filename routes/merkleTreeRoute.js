const express = require('express');
const router = express.Router();
const { getMerkleRoot, getHexProof } = require('../controllers/merkleTreeController');

router.get('/getMerkleRoot', getMerkleRoot);
router.get('/getHexProof/:address', getHexProof)

module.exports = router;