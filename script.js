const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const names = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500)

function getData() {
  header.innerHTML = `<img
  src="https://media.istockphoto.com/id/645542956/photo/french-pastry.jpg?b=1&s=170667a&w=0&k=20&c=QS35d3vk2CJO1Z_-lQpNHZvc7-Sbhm-Ucf1hvOTSobc="
  alt=""/>`
  title.innerHTML = `Lorem ipsum dolor sit amet.`
  excerpt.innerHTML = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis
  quisquam consequatur velit perspiciatis.`
  profile_img.innerHTML = ` <img
  src="https://randomuser.me/api/portraits/women/45.jpg"
  alt="" />`
  names.innerHTML = `Jane Doe`
  date.innerHTML = `Feb 11, 2023`

  animated_bgs.forEach((bg) => bg.classList.remove('animated-bg-text'))
}
