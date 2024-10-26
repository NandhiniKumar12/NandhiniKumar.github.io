document.getElementById("downloadResume").addEventListener("click", function()
 {
    const link = document.createElement("a");
    link.href = "assets/resume.pdf"; // Update this path to your resume's location
    link.download = "resume.pdf"; // Name of the downloaded file
    link.click();
});