let a = ''; //первое число
let b = ''; // второе число
let sign = '';// знак операции
let finish = false;

const many = ['0','1','2','3','4','5','6','7','8','9','.']
const action = ['-','+','X','/']

//экран
const out = document.querySelector('.calc-screen p')

function ClearAll (){
	a = ''; //первое число
	b = ''; // второе число
	sign = '';// знак операции
	finish = false;
	out.textContent = 0;
}

document.querySelector('.ac').onclick = ClearAll;
document.querySelector('.buttons').onclick = (event) => {
	//нажата не кнопка
	if (!event.target.classList.contains('btn')) return;
	//нажата кнопка очистки
	if (event.target.classList.contains('ac')) return;

	out.textContent = '';
	//получаю нажатую кнопку 
	const key = event.target.textContent;

	//если нажата кнопка от 0 до 9 или .
	if (many.includes(key)){
		if (b === '' && sign === ''){
			a+= key;
			console.log(a, b, sign);
			out.textContent = a;
		}
		else if ( a !== '' && b !== '' && finish){
			b=key;
			finish = false;
			out.textContent = b;
		}
		else{
			b+= key;
			out.textContent = b;
		}
		console.log(a, b, sign);
		return;
	}  

	//если нажата кнопка от + - / X
	if (action.includes(key)){
		sign= key;
		out.textContent = sign;
		console.log(a, b, sign);
		return
	}  


	//нажато =
	if(key === '='){
		if( b === '') b = a;
		switch(sign){
			case '+':
				a = (+a) +(+b);
				break;
			case '-':
				a = (+a) - (+b);
				break;
			case 'X':
				a = (+a) * (+b);
				break;
				case '/':
					if (b === '0'){
						out.textContent = 'Ошибка';
						a = '';
						b = '';
						sign = '';
						return
					}
					a = (+a) / (+b);
					break;
		}
		finish = true;
		out.textContent = a;
		console.log(a, b, sign);
	}
}


