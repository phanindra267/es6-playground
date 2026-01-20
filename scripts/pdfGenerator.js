document.getElementById('downloadPdf').addEventListener('click', () => {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  let y = 10;

  examples.forEach((ex, idx) => {
    doc.setFontSize(12);
    doc.text(`${idx+1}. [${ex.category}] ${ex.title}`, 10, y);
    y += 6;
    const lines = doc.splitTextToSize(ex.code, 180);
    doc.setFontSize(10);
    doc.text(lines, 10, y);
    y += lines.length * 6 + 5;

    if (y > 280) { doc.addPage(); y = 10; }
  });

  doc.save('ES6_Examples.pdf');
});
