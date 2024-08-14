const headVid = document.getElementById("page_video")
const words = ["Doctor","Nurturer","Healer","Physician","Surgeon","Paramedic","Care giver"]
const dynamicText = document.querySelector(".info span")
const toggleButton = document.querySelector(".toggle-button")
const dropDown = document.querySelector(".drop-down-parent")
let wordIndex = 0
let charIndex = 1
let isDeleting = false

// Bmi stats
let age = document.querySelector("#age")
let height = document.querySelector("#height")
let weight = document.querySelector("#weight")
let male = document.querySelector("#m")
let female = document.querySelector("#f")
let form = document.querySelector("#Bmi-form")
let comment = document.querySelector("#BmiComment")
let BmiResult = document.querySelector("#Bmi-result")


nature = document.getElementById("nature")
defaulttheme = document.getElementById("default")
vintage = document.getElementById("vintage")
minimalist = document.getElementById("minimalist")
spring= document.getElementById("spring")
food = document.getElementById("food")
kids = document.getElementById("kids")
let savedTheme = localStorage.getItem("themeData")


toggleButton.addEventListener("click",function()
{
  dropDown.classList.toggle("open-list")
}
)

const typeEffect= () =>
{
currentWord = words[wordIndex]
currentChar = currentWord.substring(0,charIndex)
dynamicText.textContent = currentChar;
dynamicText.classList.add("stop-blinking")
if(!isDeleting && charIndex < currentWord.length)
  {
    charIndex++
    setTimeout(typeEffect, 200)
  }
else if(isDeleting && charIndex > 0)
  {
    charIndex--
    setTimeout(typeEffect, 100)
  }
else
  {
    isDeleting = !isDeleting
    dynamicText.classList.remove("stop-blinking")
    wordIndex = !isDeleting ? (wordIndex+1)%words.length:wordIndex
    setTimeout(typeEffect,1200)
  }


}

typeEffect()



headVid.addEventListener("mouseenter",function()
{headVid.play()
console.log("Mouseover event enter");}
)
headVid.addEventListener("click",function()
{headVid.play()
console.log("Mouseover event enter");}
)

headVid.addEventListener("mouseleave",function()
{
  headVid.pause()
  headVid.currentTime = 0;
  console.log("Mouseover event enter");
}
)
headVid.addEventListener("touchstart", function() {
  headVid.play()
});

headVid.addEventListener("touchend", function() {
  headVid.pause();
  headVid.currentTime = 0;
});

const observer = new IntersectionObserver ((entries) =>
{
  entries.forEach((entry) => 
  {
    console.log(entry)
    if(entry.isIntersecting)
    {
      entry.target.classList.add("show");
    }
    else
      {entry.target.classList.remove("show");}
    
  });

});


form.addEventListener('submit', (e) => 
  {
  e.preventDefault()
  calculateBMI()
  })


function calculateBMI()
  {
    if (age.value == "" || height.value == ""|| weight.value == "" || (male.checked == false && female.checked == false))
      {
      return
      }
    else
      {
        let p = [age.value,height.value,weight.value];
        if (male.checked)
        {
          p.push("male")
        }
        else if (female.checked)
        {
          p.push("female")
        }
    
        bmiCalc = (parseFloat(p[2])/(parseFloat(p[1])*parseFloat(p[1]))).toFixed(2)
        let result = ""
        BmiResult.innerText = bmiCalc

        if (bmiCalc < 18.5)
          {result ="You are underweight ☹️" }

        if (bmiCalc > 18.5 && bmiCalc < 25)
          {result ="You are healthy 🥳" }

        if (bmiCalc > 25 && bmiCalc < 30)
          {result ="You are overweight 😲" }

        if (bmiCalc > 30 && bmiCalc < 40)
          {result ="You are obese 😱" }

        if (bmiCalc > 40)
          {result ="You are morbidly obese 👻" }

        comment.innerText = result
      }
    
      
  }

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));




if (savedTheme)
    {document.body.className = (savedTheme)}






defaulttheme.addEventListener("click", function()
{
    setTheme('root')
}) 

nature.addEventListener("click", function()
{
    setTheme('nature')
}) 
vintage.addEventListener("click", function()
{
    setTheme('vintage')
}) 

minimalist.addEventListener("click", function()
{
    setTheme('minimalist')
}) 
spring.addEventListener("click", function()
{
    setTheme('spring')
}) 
food.addEventListener("click", function()
{
    setTheme('food')
}) 

kids.addEventListener("click", function()
{
    setTheme('kids')
}) 


function setTheme(themeName)
    {
        document.body.className = (themeName)
        localStorage.setItem("themeData",themeName)
    }
themeButton = document.getElementById("theme-but")
themebar1 = document.getElementsByClassName("theme-bar")[0]
themeButton.addEventListener("click",function()
{
    themebar1.classList.toggle("close-bar")

})
