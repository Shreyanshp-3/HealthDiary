const express = require('express');
const cors = require('cors');
require('dotenv').config();

const {OpenAIApi,Configuration }= require('openai');
const configuration = new Configuration({
  apiKey: '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',
});
const openai = new OpenAIApi(configuration);

const app = express();
app.use(cors())
app.use(express.json())
app.post('/', async (req, res) => {
  try {
const {weight,height,age,gender} = req.body;
   const response = await openai.createCompletion({
     model: "text-davinci-003",
     prompt: `hii i a ${gender} my height is ${height} my age is ${age} and weight is ${weight}  suggest me a full day diet plan with table from of html with css`,
     max_tokens: 3000,
     temperature: 0.5,
   });
   res.status(200).send({
      message: response.data.choices[0].text
    });
  } catch (error) {
    
    res.status(500).send(error || 'New Error');
  }
})
app.listen(1000, () => console.log('AI server started '));