a=2;
b=1;

document.write("a ="+a+"<br> b ="+b);

result= --a - --b + ++b + b--;

document.write("<br>Result is ="+result);

document.write("<br><br>Explanation of --a - --b + ++b + b-- is here: ");

// For Explanation


document.write("<br><br>--a = 1" );
document.write("<br> --a - --b = 1-0 = 1");
document.write("<br> --a - --b + ++b = 1-0+1 = 2");
document.write("<br> --a - --b + ++b + b--= 1-0+1+1 = 3");
document.write("<br>b-- is postfix so its value is added first and then its decremented ");
