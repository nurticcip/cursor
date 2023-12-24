const container = document.querySelector('.container')
const active = document.querySelector('.active')
const clear = document.querySelector('.clear')
// const circle = document.addEventListener('.circle')

n = 600
for (let i = 1; i <= n; i++){
    const square = document.createElement('div')
    square.setAttribute('class', 'square')
    container.append(square)
    square.addEventListener('mouseover', () => {
        square.style.background = randomColor()
        
        square.style.boxShadow = `0 0 10px ${randomColor}`
    })
    square.addEventListener('mouseleave', () => {
        square.style.background = ''
        square.style.boxShadow = ''
    })
    active.addEventListener('click', ()=> {
        square.style.background = randomColor()
    })
    clear.addEventListener('click', () => {
        square.style.background = ''
    })
}

const randomColor = () => {
    let color = '#'
    for (let i = 1; i <= 6; i++){
        console.log(color += Math.floor(Math.random() * 10));
    }
    return color
}
randomColor()

      
const circle = document.querySelector('.circle');

cursor();

function cursor() {
	window.addEventListener('mousemove', (e) => {
		const target = e.target;
		if (!target) return;
		circle.style.left = e.pageX + 'px';
		circle.style.top = e.pageY + 'px';
	});
}