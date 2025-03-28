document.getElementById("downloadResume").addEventListener("click", function()
 {
    const link = document.createElement("a");
    link.href = "assets/Nandhinikumarlatest.docx"; // Update this path to your resume's location
    link.download = "Nandhinikumarlatest.docx"; // Name of the downloaded file
    link.click();
});
