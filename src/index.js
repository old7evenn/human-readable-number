module.exports = toReadable = (num) => {
  const units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];  
  if (num === 0) 
    return 'zero';
  else if (num < 10) 
    return units[num];
  else if (num < 20) 
    return teens[num - 10];
  else if (num < 100) 
    return tens[Math.floor(num / 10)] + (num % 10 !== 0 ? ' ' + units[num % 10] : '');
  else if (num < 1000) 
    return units[Math.floor(num / 100)] + ' hundred' + (num % 100 !== 0 ? ' ' + toReadable(num % 100) : '');
  
};