document.getElementById("downloadResume").addEventListener("click", function()
 {
    const link = document.createElement("a");
    link.href = "assets/Nandhinikumarresume.docx"; // Update this path to your resume's location
    link.download = "Nandhinikumarresume.pdf"; // Name of the downloaded file
    link.click();
});
