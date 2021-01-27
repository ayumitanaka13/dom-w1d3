function isTouching(a, b) {
	const aRect = a.getBoundingClientRect();
	const bRect = b.getBoundingClientRect();
	return !(
		aRect.top + aRect.height < bRect.top ||
		aRect.top > bRect.top + bRect.height ||
		aRect.left + aRect.width < bRect.left ||
		aRect.left > bRect.left + bRect.width
	);
}

const init = () => {
    //get the avatar
    const avatar = document.querySelector("#avater");
    //get the coin
    const coin = document.querySelector("#coin");

    moveCoin();
    window.addEventListener('keyup', function(e){
        if(e.key === 'ArrowDown' || e.key === 'Down'){
            moveVertical(avatar, 50);
        }

        if(isTouching(avatar,coin)) moveCoin();
    });
    window.addEventListener('keyup', function(e){
        if(e.key === 'ArrowUp' || e.key === 'Up'){
            moveVertical(avatar, -50);
        }

        if(isTouching(avatar,coin)) moveCoin();
    });
    window.addEventListener('keyup', function(e){
        if(e.key === 'ArrowLeft' || e.key === 'Left'){
            moveHorizontal(avatar, -50);
            avatar.style.transform = 'scale(-1, 1)'; 
        }

        if(isTouching(avatar,coin)) moveCoin();
    });
    window.addEventListener('keyup', function(e){
        if(e.key === 'ArrowRight' || e.key === 'Right'){
            moveHorizontal(avatar, 50);
            avatar.style.transform = 'scale(1, 1)'; 
        }

        if(isTouching(avatar,coin)) moveCoin();
    });
}

const moveVertical = (element, amount) => {
    const currTop = extractPos(element.style.top);
    element.style.top = `${currTop + amount}px`;
}

const moveHorizontal = (element, amount) => {
    const currLeft = extractPos(element.style.left);
    element.style.left = `${currLeft + amount}px`;
}

const extractPos = (position) => {
    if(!position) return 100;
    return parseInt(position.slice(0, -2))
}

const moveCoin = () => {
    const y = Math.floor(Math.random() * window.innerHeight);
    const x = Math.floor(Math.random() * window.innerWidth);
    coin.style.top = `${y}px`;
    coin.style.left = `${x}px`;
}

init();