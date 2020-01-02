import { TweenMax, TimelineMax}  from 'gsap/all';

const starWars = document.querySelector('.header-desc');
const robot = document.querySelector('.robot');
const planet = document.querySelector('.planet');
const ships = document.querySelectorAll('.ship');
const input = document.querySelector('.input');
const label = document.querySelector('.label');
const select = document.querySelector('.select-div');
const btn = document.getElementById('sub-btn');
const body = document.body;


const tl = new TimelineMax();
// const tl1 = new TimelineMax();

function animation(){
  tl.set(body,{visibility:'visible'})
  .from(starWars,1.5,{delay:1,y:'50%',opacity:0,scale:3})
  .from(robot,1,{scaleY:0,ease: "elastic.out(1, 0.3)"})
  .from(planet,0.5,{scale:0})
  .staggerFrom(ships,0.2,{scale:0},0.2)
  .staggerTo(ships,1,{y:-30,repeat:-1,yoyo:true},0.5)
  .staggerTo(ships,0.5,{y:20,yoyo:true},0.3)
  .from(input,0.5,{width:0})
  .from(label,0.2,{y:-20,opacity:0})
  .set(btn,{opacity:1})
  .from(select,0.5,{delay:1,scaleY:0})
}

// export const hideErr = () => {
//   tl1.to(robot,0.3,{scaleY:0})
// }

// export const showErr = () => {
//   tl1.to(robot,1.5,{scaleY:1,ease: "elastic.out(1, 0.3)"})
// }

export default animation;