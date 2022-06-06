let sum = 0;
for (let i = 0; i < 1000; i++) {
if (i % 3 == 0 || i % 5 == 0) sum += i;
}
alert("1000'e kadar olan 5 veya 3 katlarinin toplami :" + sum)