/*
   Server listens to port 5000 (client to 3000). It allows us to call /api or /api with tags beacuse we  
   added our proxy server in package.json (client).
*/

const express = require('express');
const axios = require('axios')
const path = require('path')
const app = express()
app.use(express.static(path.join(__dirname + "/public")))

const axiosInstance = axios.create({
   baseURL: 'https://www.flickr.com/services/feeds/'
})

app.get("/api/:tags?", async (req, res) => {
   try {
      // Tries to fetch an api to get the images. There can also be optional parameter "tags".
      const response = await axiosInstance.get(`/photos_public.gne?format=json${"&tags="+req.params.tags}`);
      res.status(200).json(response.data.substring(15, response.data.length-1)); 
   } catch (err) {
      console.log(err);
      res.status(500).json({msg: `Internal Server Error.`});
   }
});


app.listen(5000, () => {console.log("server startedon port 5000")});