const firstNamesArray = ['Violet', 'Charlie', 'Veruca', 'Mike', 'Augustus'];
const lastNamesArray = ['Beauregarde', 'Bucket', 'Salt', 'Teavee', 'Gloop'];

const fullNamesArray = []

firstNamesArray.reverse();
lastNamesArray.reverse();

for (let i = 0; i < firstNamesArray.length; i++) 
{
  for (let j=0; j < lastNamesArray; j++)
{
  fullNamesArray.push(firstNamesArray[i] + lastNamesArray[j]); 
  {
  console.log (fullNamesArray[i]);
}
}
}
