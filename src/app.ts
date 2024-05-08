import express from "express"
import { anagrams } from './services/anagrams'

export const app = express();

app.get(/\/(.+)/, async (req, res) => {
  const words = req.path.slice(1)
  const anagramsResponse = await anagrams(words)
  res.contentType('application/json')
  res.send(anagramsResponse);
});