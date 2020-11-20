let a = 'let_test_text';

do
{a = a.replace('_',' ')
}
while ( a.indexOf("_") >0)
a = a.split (' ')

for (let i=1;i<a.length;i++)
{a[i][0] == a[i][0].toUpperCase()}

alert(a)
