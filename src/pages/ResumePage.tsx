import { Button } from "../components/Button";


function ResumePage() {
    const handleDownload = () => {
        // Handle potential errors during download link creation
        try {
            const pdfUrl = new URL('../assets/CV.pdf', window.location.origin); // Construct a proper URL
            window.location.href = pdfUrl.toString();
            console.log("clicked");
        } catch (error) {
            console.error('Error creating download link:', error);
            // Optionally display an error message to the user
        }
    };
    return (

        <div >Contact
            <Button onClick={handleDownload} buttonText="Download resume" className="bg-indigo cursor-pointer z-40" ></Button>
        </div>
    );
}

export default ResumePage;
