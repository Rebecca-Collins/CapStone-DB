// const knex = require("knex")(require("../knexfile"));



// exports.index = async (req, res) => {
//   try {
//     const commentData = await knex("comments");
//     res.status(200).send(commentData);
//   } catch (err) {
//     res.status(400).send(`Error: ${err}`);
//   }
// };

// exports.addComment = async (req, res) => {
//     try {
//       if (req.method === 'POST') {
//         if (!req.body.first_name) {
//           res.status(400).send("Please write your name");
//         }
  
//         const commentData = await knex("comments").insert(req.body.first_name);
//         const newCommentURL = `comment/${commentData[0]}`;
//         res.status(201).location(newCommentURL).send(newCommentURL);
//       } else if (req.method === 'GET') {
//         const comments = await knex("comments").select();
//         res.status(200).send(comments);
//       } else {
//         res.status(405).send('Method not allowed');
//       }
//     } catch (error) {
//       res.status(400).send(`Error creating Inventory Item: ${error}`);
//     }
//   };




//   exports.addComment = async (req, res) => {
//     try {
//       if (req.method === 'POST') {
//         if (!req.body.comment) {
//           res.status(400).send("Please write your name");
//         }
  
//         const commentData = await knex("comments").insert(req.body.comment);
//         const newCommentURL = `comment/${commentData[0]}`;
//         res.status(201).location(newCommentURL).send(newCommentURL);
//       } else if (req.method === 'GET') {
//         const comments = await knex("comments").select();
//         res.status(200).send(comments);
//       } else {
//         res.status(405).send('Method not allowed');
//       }
//     } catch (error) {
//       res.status(400).send(`Error creating Inventory Item: ${error}`);
//     }
//   };
  
  
 
  