/**
* 
* https://projecteuler.net
*
*/




/**
* 
* PROBLEMA 1 
*
* Soma de múltiplos de 3 e 5 menores que 1000
*
*/
function sum_of_multiples_3_and_5_below(limit){
	var sum = 0;
	for(var a=0; a<limit; a++){
		if( a%3==0 || a%5==0 ){
			sum+=a;
		}
	}
	return sum;
}
//var result = sum_of_multiples_3_and_5_below(1000);
//console.log(result);




/**
* 
* PROBLEMA 2 
*
* Soma dos fibonaccis pares menores que 4 milhões
*
*/
function sum_of_even_fibonaccis_smaller_than(limit){
	var penultimate = 0;
	var ultimate = 1;
	var item = 0;
	var sum = 0;
	while(item<limit){
		if(item%2==0) sum+=item;
		item = ultimate + penultimate;
		penultimate = ultimate;
		ultimate = item;
	}
	return sum;
}
//var result = sum_of_even_fibonaccis_smaller_than(4000000);
//console.log(result);




/**
* 
* PROBLEMA 3 
*
* Maior fator primo de 600851475143
*
*/
function prime_factors(num){
	var factors = [];
	var n=num;
	for(var p=2; p<=num; p++){
		if(n%p==0){
			factors.push(p);
			n=(n/p);
			p=2;
		}
		if(n<=2) return factors;

	}
}
//var result = prime_factors(600851475143);
//console.log( result[result.length-1] );






/**
* 
* PROBLEMA 4 
*
* Maior palíndromo produto de dois números de três dígitos cada
*
*/
function biggest_palindrome_product_of_two_numbers_with(n_digits){

	var max_factor = Math.pow(10,n_digits)-1; //998001

	var max = max_factor*max_factor;

	return max;

}



console.log( prime_factors(biggest_palindrome_product_of_two_numbers_with(2)) );




























