import {dailyTips} from "./utils.js"

const date = new Date()
const dd = String(date.getDate()).padStart(2, '0')
const mm = String(date.getMonth() + 1).padStart(2, '0')
const yyyy = date.getFullYear()

const today = mm + '/' + dd + '/' + yyyy;

document.getElementById('date-today').innerHTML = today

document.getElementById('tip').innerHTML = dailyTips[parseInt(dd) - 1]