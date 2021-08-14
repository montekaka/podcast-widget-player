import {atom} from "jotai"

export const rssFeedAtom = atom('');

export const configsAtom = atom({
  primaryBackgroundColor: "#0c1824",
  primaryButtonColor: "#f7f8f9",
  primaryTextColor: "#f7f8f9",
  progressBarFilledColor: "#f7f8f9",
  progressBarBackgroundColor: "#8A8175",
  playlistBackgroundColor: "#30343c",
  playlistTextColor: "#f7f8f9",
  chapterBackgroundColor: "#30343c",
  chapterTextColor:  "#f7f8f9"
})

export const playerSkinOptions = atom([
  {label: "Background color", id: 'primaryBackgroundColor'},
  {label: "Button color", id: 'primaryButtonColor'},
  {label: "Text color", id: 'primaryTextColor'},
  {label: "Time slider filled color", id: 'progressBarFilledColor'},
  {label: "Time slider color", id: 'progressBarBackgroundColor'},
  {label: "Playlist background color", id: 'playlistBackgroundColor'},
  {label: "Playlist text color", id: 'playlistTextColor'},
  {label: "Chapter background color", id: 'chapterBackgroundColor'},
  {label: "Chapter text color", id: 'chapterTextColor'},  
])

export const updateColorAtom = atom((get) => get(configsAtom), (_get, set, value) => {
  const colors = _get(configsAtom);
  set(configsAtom, {...colors, ...value})
})