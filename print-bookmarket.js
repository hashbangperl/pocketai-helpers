javascript:(function(){
  const style = document.createElement('style');
  style.innerHTML = `
    @media print {
      html, body, #root, [class*="overflow-hidden"], [class*="h-dvh"] { 
        height: auto !important; overflow: visible !important; display: block !important; 
      }
      main, [class*="overflow-y-auto"], [class*="flex-1"] { 
        height: auto !important; overflow: visible !important; display: block !important; flex: none !important; 
      }
    }`;
  document.head.appendChild(style);
  window.print();
})();
