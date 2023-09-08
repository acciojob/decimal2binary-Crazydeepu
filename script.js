function decimalToBinary(num) {
  // Write your code here
	let binary[];
	let i=0;

	while(num>0) {
		int r = num%2;
		binary[i++] = r;
		num = num /2;
	}
	for(let j=i-1;j>=0;j--){
		console.log(binary[j]+"");
	}
}

window.decimalToBinary = decimalToBinary;